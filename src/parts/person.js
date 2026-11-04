// People kit: a bust (smiley head on shoulders), hair, hands and sleeves, so every person in the
// set is built from the same parts as the faces and the hands in peek.
//
//   const p = require('../src/parts/person');
//   const P = p.pose({ hair: 'short' });          // head centre/radius, shoulders, hair; P.body is
//                                                 // hair + head + shoulders as ONE path (use it as body)
//   draw: (c) => p.bust(c, P, { garment: 'blue', neck: 'v', hair: 'short', color: 'brown',
//                               face: p.face.calm() })   // p.Y: brow/eye/mouth rows on a bust
//
//   P.at(markup)            draws face.js markup (head space: centre 48,52 r 30) on this head,
//                           so f.eyes / f.mouth / f.brows and hair all use the familiar numbers
//   p.torso / p.head / p.hair[style] ({ back, front }) / p.beard / p.glasses: the pieces of bust
//   p.hand(c, x, y, { rot, s, pose })   yellow hand, fingers up at rot 0, wrist at y+8*s.
//                           pose: open | flat (fingers together) | fist | point | ok
//   p.sleeve(c, P, pts, w)  an arm in the garment colour along a polyline; end it on a hand
//   p.cloth(c, palette)     the garment gradient (shared by torso and sleeves)
//   p.royal.crown / .art    a crown: outline for pose({ crown }) and its markup (head space)
//   p.baby(c, x, y, { rot }) a swaddled baby to hold, head at (x, y)
//   p.belly(P)              a head-to-hips figure with a rounded belly (pregnancy)
//
// Layer order inside bust: back hair, torso, chin shadow, `under` (props on the chest), head,
// face, front hair, `over`. Hats go after bust. Ink and skin come from face.js / skin.js.
const f = require('./face');
const s = require('./skin');

const n = (v) => +v.toFixed(2);
// On a bust the features sit lower than on a round smiley, leaving a forehead for the hair.
const Y = { brow: 40, eye: 49, mouth: 68 };
const face = {
  // The everyday face: level brows, oval eyes, a sly closed smile.
  calm: ({ smile = {}, mouth = true } = {}) => f.brows.flat({ y: Y.brow }) + f.eyes.oval({ y: Y.eye }) + (mouth ? f.mouth.smile({ y: Y.mouth, ...smile }) : ''),
};

// Hair colours, [light, mid, deep, edge]: darker than the palette ramps because hair sits on a
// bright yellow head and must not melt into it.
const HAIR = {
  brown: ['#B0703A', '#7A4019', '#4A220A', '#2A1003'],
  dark: ['#7A5A4A', '#40281C', '#22130C', '#120804'],
  black: ['#5E5E74', '#2A2A38', '#14141E', '#05050A'],
  blond: ['#FFF6C8', '#F2CF6B', '#C9952E', '#6B4A0A'],
  auburn: ['#E88A55', '#B5481C', '#6E2208', '#361002'],
  grey: ['#FFFFFF', '#DADDE6', '#9AA0B4', '#4A4E62'],
};

// hair: a HAIRS style whose outer edge joins the silhouette, so the outline runs round the hair
// instead of cutting across it. crown: the same thing by hand, 'Mx y C… C…' in head space from
// the left side of the head over the top to the right side (a hat, a helmet).
function pose({ cx = 48, cy = 37, r = 23, sw = 34, sy = 61, base = 84, neck = 0.86, hair: style, crown } = {}) {
  const k = r / 30;
  const jx = r * Math.sin(neck);
  const jy = cy + r * Math.cos(neck);
  const L = [n(cx - jx), n(jy)];
  const R = [n(cx + jx), n(jy)];
  const side = (dir) => {
    const x = (v) => n(cx + dir * v);
    return { j: dir < 0 ? L : R, c1: [x(jx + 6), n(jy + 5)], c2: [x(sw - 1), n(sy - 1.5)], sh: [x(sw), n(sy + 7)], low: [x(sw), base - 5], q: [x(sw - 5), base] };
  };
  const a = side(1);
  const b = side(-1);
  const down = `C${a.c1} ${a.c2} ${a.sh} L${a.low} Q${a.sh[0]} ${base} ${a.q} L${b.q} Q${b.sh[0]} ${base} ${b.low} L${b.sh} C${b.c2} ${b.c1} ${L}`;
  const pt = (x, y) => [n(cx + (x - 48) * k), n(cy + (y - 52) * k)];
  const top = crown ?? (style && crownOf(style));
  let over = `A${r} ${r} 0 1 1 ${R}`;
  // Moves an absolute M/L/C/Q path from head space onto this head.
  const map = (d) => d.replace(/([MLCQ])([^MLCQZ]*)/g, (_, cmd, args) => {
    const v = args.match(/-?[\d.]+/g).map(Number);
    const out = [];
    for (let i = 0; i < v.length; i += 2) out.push(pt(v[i], v[i + 1]).join(' '));
    return `${cmd}${out.join(' ')} `;
  }).trim();
  if (top) over = `A${r} ${r} 0 0 1 ${map(top).slice(1).replace(/\s+$/, '').replace(/^([^A-Z]*)/, (m) => `${m.trim()} `)} A${r} ${r} 0 0 1 ${R}`;
  const body = `M${L} ${over} ${down} Z`;
  const torso = `M${L} L${R} ${down} Z`;
  const at = (markup) => `<g transform="translate(${cx} ${cy}) scale(${n(k)}) translate(-48 -52)">${markup}</g>`;
  // over: the top edge from L round the head to R, for building a body with another torso.
  return { cx, cy, r, k, sw, sy, base, body, torso, L, R, at, pt, map, over };
}

function cloth(c, palette, name = 'cloth') {
  const id = c.id(name);
  if (!c.defs.some((d) => d.includes(`id="${id}"`))) {
    const [a, b, d, e] = c.ramp(palette);
    c.def(`<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="30" cy="50" r="62"><stop offset="0" stop-color="${a}"/><stop offset="0.35" stop-color="${b}"/><stop offset="0.8" stop-color="${d}"/><stop offset="1" stop-color="${e}"/></radialGradient>`);
  }
  return `url(#${id})`;
}

function hairPaint(c, color, name = 'hair') {
  const id = c.id(name);
  const h = HAIR[color] ?? c.ramp(color);
  if (!c.defs.some((d) => d.includes(`id="${id}"`))) {
    c.def(`<radialGradient id="${id}" cx="0.3" cy="0.2" r="0.95"><stop offset="0" stop-color="${h[0]}"/><stop offset="0.4" stop-color="${h[1]}"/><stop offset="1" stop-color="${h[2]}"/></radialGradient>`);
  }
  return { fill: `url(#${id})`, edge: h[3], deep: h[2] };
}

// Necklines: crew (a band), v (skin V), shirt (white collar), jacket (lapels + shirt + tie),
// none. tie: a palette for the tie on shirt/jacket.
function torso(c, P, { palette = 'blue', neck = 'crew', tie, shirt = 'white' } = {}) {
  const paint = cloth(c, palette);
  const r = c.ramp(palette);
  const { cx, cy, r: hr } = P;
  const chin = cy + hr;
  let detail = '';
  if (neck === 'crew') {
    detail = `<path d="M${cx - 13} ${chin - 6} Q${cx} ${chin + 6} ${cx + 13} ${chin - 6}" stroke="${r[3]}" stroke-opacity=".45" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  } else if (neck === 'v') {
    detail = `<path d="M${cx - 11} ${chin - 6} L${cx} ${chin + 9} L${cx + 11} ${chin - 6} Z" fill="${c.radial('neck', 'yellow', 0.5, 0)}" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.4" stroke-linejoin="round"/>`;
  } else if (neck === 'shirt' || neck === 'jacket') {
    const w = c.linear('shirt', shirt, [0, 0, 0, 1], 0, 2);
    const se = c.ramp(shirt)[3];
    const tieArt = tie
      ? `<path d="M${cx - 3} ${chin + 1} L${cx + 3} ${chin + 1} L${cx + 4.5} ${chin + 16} L${cx} ${chin + 21} L${cx - 4.5} ${chin + 16} Z" fill="${c.linear('tie', tie, [0, 0, 1, 1], 0, 2)}" stroke="${c.ramp(tie)[3]}" stroke-opacity=".6" stroke-width="1"/>
        <path d="M${cx - 3.2} ${chin - 3} L${cx + 3.2} ${chin - 3} L${cx + 2.4} ${chin + 2} L${cx - 2.4} ${chin + 2} Z" fill="${c.ramp(tie)[1]}" stroke="${c.ramp(tie)[3]}" stroke-opacity=".6" stroke-width="1"/>`
      : '';
    if (neck === 'jacket') {
      detail = `<path d="M${cx - 14} ${chin - 5} L${cx} ${chin + 22} L${cx + 14} ${chin - 5} Z" fill="${w}"/>
        ${tieArt}
        <path d="M${cx - 14} ${chin - 6} L${cx - 2} ${chin + 23} L${cx - 9} ${chin + 10} L${cx - 17} ${chin + 6} Z" fill="${r[2]}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M${cx + 14} ${chin - 6} L${cx + 2} ${chin + 23} L${cx + 9} ${chin + 10} L${cx + 17} ${chin + 6} Z" fill="${r[2]}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>`;
    } else {
      detail = `${tieArt}<path d="M${cx - 12} ${chin - 6} L${cx - 1} ${chin + 3} L${cx - 6} ${chin + 9} Z" fill="${w}" stroke="${se}" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>
        <path d="M${cx + 12} ${chin - 6} L${cx + 1} ${chin + 3} L${cx + 6} ${chin + 9} Z" fill="${w}" stroke="${se}" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>`;
    }
  }
  return `<path d="${P.torso}" fill="${paint}"/>${detail}`;
}

function head(c, P, palette = 'yellow') {
  const edge = c.ramp(palette)[3];
  return `<ellipse cx="${P.cx}" cy="${n(P.cy + P.r - 1.5)}" rx="${n(P.r * 0.6)}" ry="3.5" fill="#000" opacity=".16"/>
    ${P.at(`${f.head(c, palette)}<path d="M18 52 A30 30 0 0 0 78 52" fill="none" stroke="${edge}" stroke-opacity=".45" stroke-width="${n(1.3 / P.k)}"/>`)}`;
}

// Pulled back with a centre parting: under a bun, pigtails or a ponytail.
const PARTED = 'M18.5 58 C14 30 30 14 48 14 C66 14 82 30 77.5 58 C75 46 70 39 62 35 C55 37 50 37 48 31 C46 37 41 37 34 35 C26 39 21 46 18.5 58 Z';

// Hair shapes are drawn in head space (head centre 48,52, radius 30, crown at y 22).
const HAIRS = {
  short: {
    front: 'M18.5 60 C13 31 29 12 49 12.5 C69 13 84 31 77.5 60 C76 49 73 42 68 37.5 C59 41 45 40 36 33 C30 39 23 47 18.5 60 Z',
  },
  crop: {
    front: 'M18.5 56 C15 31 30 15 48 15 C66 15 81 31 77.5 56 C75 45 71 39 65 36 C55 38 41 38 31 36 C25 40 21 47 18.5 56 Z',
  },
  long: {
    back: 'M17 52 C14 26 30 12 48 12 C66 12 82 26 79 52 C78 72 82 90 88 104 C76 110 62 108 48 106 C34 108 20 110 8 104 C14 90 18 72 17 52 Z',
    front: 'M16.5 70 C10 32 28 13 48 13 C68 13 86 32 79.5 70 C77 54 73 43 65 36.5 C57 40 49 39 45 33 C38 39 30 45 25 55 C22 59 20 64 16.5 70 Z',
  },
  bob: {
    back: 'M16 52 C13 26 30 12 48 12 C66 12 83 26 80 52 C80 64 82 74 84 82 C78 86 72 84 68 80 L28 80 C24 84 18 86 12 82 C14 74 16 64 16 52 Z',
    front: 'M16 74 C10 34 28 13 48 13 C68 13 86 34 80 74 C77 56 74 44 66 38 C56 41 42 41 31 37 C25 44 21 56 16 74 Z',
  },
  bun: {
    back: 'M48 4 A9.5 9.5 0 1 1 47.99 4 Z',
    front: PARTED,
  },
  curly: {
    crown: 'M18 56 C11 52 12 42 17 38 C13 31 18 22 26 22 C27 14 37 10 43 14 C48 8 58 10 61 16 C68 13 77 18 76 26 C83 29 85 39 80 43 C84 48 82 56 78 57',
    front: 'M18 56 C11 52 12 42 17 38 C13 31 18 22 26 22 C27 14 37 10 43 14 C48 8 58 10 61 16 C68 13 77 18 76 26 C83 29 85 39 80 43 C84 48 82 56 78 57 C76 49 72 43 67 39 C63 42 57 41 54 37 C50 41 43 41 40 37 C36 41 30 41 28 38 C24 43 20 49 18 56 Z',
  },
  spiky: {
    crown: 'M18.5 58 C13 36 22 20 34 14 C38 10 44 8 46 11 C51 7 59 8 61 12 C66 11 72 15 72 19 C80 25 84 40 77.5 58',
    front: 'M18.5 58 C13 36 22 20 34 14 C38 10 44 8 46 11 C51 7 59 8 61 12 C66 11 72 15 72 19 C80 25 84 40 77.5 58 C76 48 72 41 67 37.5 L62 40 L59 34 C53 38 47 38 42 34 L37 38 L35 32.5 C29 38 23 46 18.5 58 Z',
  },
  side: {
    crown: false,
    // Older man: bald crown, hair only around the sides.
    front: 'M18 58 C15 49 17 41 21 36 C24 40 25 46 25 54 Z M78 58 C81 49 79 41 75 36 C72 40 71 46 71 54 Z',
  },
  tuft: {
    crown: false,
    // Baby: one curl on the crown.
    front: 'M38 26 C38 17 47 12 54 14 C61 16 62 24 57 27 C53 29.5 49 26.5 51 23 C52.5 20.5 56 22 55 24 C57 20 54 17.5 50 18 C45 19 42 23 42 28 Z',
  },
  pigtails: {
    back: 'M14 40 C2 42 -2 58 6 68 C9 60 12 56 18 54 Z M82 40 C94 42 98 58 90 68 C87 60 84 56 78 54 Z',
    front: PARTED,
  },
  ponytail: {
    back: 'M70 22 C86 20 92 36 88 54 C86 64 80 70 74 72 C78 62 80 50 76 40 C74 34 72 28 70 22 Z',
    front: PARTED,
  },
};

// The outer edge of a hairstyle: its own crown, or the front's first two curves.
function crownOf(style) {
  const h = HAIRS[style];
  if (!h || h.crown === false) return null;
  return h.crown ?? h.front.match(/^M[^C]+C[^C]+C[^C]+/)[0].trim();
}

// Returns { back, front } for a style in a colour; either may be ''.
function hair(c, P, style, color = 'brown', name = 'hair') {
  const h = HAIRS[style];
  if (!h) return { back: '', front: '' };
  const { fill, edge } = hairPaint(c, color, name);
  const w = n(1.3 / P.k);
  const paint = (d) => (d ? P.at(`<path d="${d}" fill="${fill}" stroke="${edge}" stroke-opacity=".55" stroke-width="${w}" stroke-linejoin="round"/>`) : '');
  return { back: paint(h.back), front: paint(h.front) };
}

// A full beard round the jaw with a moustache; the mouth shows through as a gap. Head space.
function beard(c, P, color = 'brown', { mouth = true } = {}) {
  const { fill, edge } = hairPaint(c, color, 'beard');
  const w = n(1.3 / P.k);
  const d = 'M19 54 C21 62 25 64 31 64 C36 59 43 58 48 61 C53 58 60 59 65 64 C71 64 75 62 77 54 C80 70 72 86 48 88 C24 86 16 70 19 54 Z';
  return P.at(`<path d="${d}" fill="${fill}" stroke="${edge}" stroke-opacity=".55" stroke-width="${w}" stroke-linejoin="round"/>
    ${mouth ? `<path d="M40 68.5 Q48 73.5 56 68.5 Q48 70 40 68.5 Z" fill="${f.MOUTH}" stroke="${f.MOUTH}" stroke-width="2.4" stroke-linejoin="round"/>` : ''}`);
}

function glasses(P, { ink = f.INK, y = Y.eye } = {}) {
  return P.at(`<g fill="#fff" fill-opacity=".25" stroke="${ink}" stroke-width="2.6">
    <circle cx="${48 - f.DX}" cy="${y}" r="8"/><circle cx="${48 + f.DX}" cy="${y}" r="8"/></g>
    <path d="M44.5 ${y - 1} Q48 ${y - 3} 51.5 ${y - 1} M29 ${y - 2} L19 ${y - 5} M67 ${y - 2} L77 ${y - 5}" stroke="${ink}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`);
}

// Hand shapes in hand space: fingers up, palm centred on (0,0), about 13 wide, wrist at (0,8).
// Each is a list of polygons merged into one outline, plus creases (finger gaps, thumb line).
const HANDS = {
  open: {
    parts: () => [
      s.ellipse(0, 1.5, 6.3, 6.6),
      s.capsule([-4.3, -1], [-5.9, -10.6], 3.3, 2.9),
      s.capsule([-1.5, -2], [-1.8, -12.8], 3.4, 3),
      s.capsule([1.5, -2], [2.3, -12.2], 3.4, 3),
      s.capsule([4.3, -1], [6, -9.6], 3.2, 2.7),
      s.capsule([-4.6, 3.5], [-10.2, -2.4], 3.9, 3.3),
    ],
    creases: 'M-3.1 -2.2 L-4.1 -8.4 M0 -2.6 L0.1 -9.8 M3 -2.2 L4 -8.4 M-5.6 5 Q-3.6 3 -3 -0.6',
  },
  flat: {
    parts: () => [
      s.ellipse(0, 1.5, 6, 6.6),
      s.capsule([-3.6, -1], [-3.9, -10.6], 3.1, 2.8),
      s.capsule([-1.2, -2], [-1.2, -12.2], 3.1, 2.8),
      s.capsule([1.2, -2], [1.4, -11.8], 3.1, 2.8),
      s.capsule([3.6, -1], [4, -10], 3, 2.6),
      s.capsule([-4.6, 3.5], [-8.6, -3.6], 3.8, 3.2),
    ],
    creases: 'M-2.4 -2 L-2.6 -8.6 M0 -2.6 L0.1 -9.6 M2.4 -2 L2.7 -8.4 M-5.4 4.6 Q-3.6 2.6 -3.2 -0.8',
  },
  fist: {
    parts: () => [s.ellipse(0, 0.5, 6.8, 7.4), s.capsule([-6.4, 2.6], [0.6, 0.2], 3.8, 3.4)],
    creases: 'M-3.6 -6 L-3.6 -2.4 M-0.6 -6.6 L-0.6 -2.2 M2.6 -6.2 L2.6 -2.4 M-6.6 4.6 Q-2.6 3.6 1.8 1.4',
  },
  point: {
    parts: () => [s.ellipse(0, 0.5, 6.8, 7.4), s.capsule([-3.4, -3], [-3.6, -15.4], 3.5, 3.1), s.capsule([-6.4, 2.6], [0.6, 0.2], 3.8, 3.4)],
    creases: 'M-1 -6.4 L-1 -2.4 M2.4 -6 L2.4 -2.4 M-6.6 4.6 Q-2.6 3.6 1.8 1.4',
  },
  ok: {
    parts: () => [
      s.ellipse(0, 1.5, 6.3, 6.6),
      s.capsule([-1.2, -2], [-1, -12.6], 3.4, 3),
      s.capsule([1.8, -2], [2.6, -12], 3.4, 3),
      s.capsule([4.6, -1], [6.2, -9.4], 3.2, 2.7),
      s.capsule([-3.8, -1.6], [-7.2, -6.4], 3.3, 3),
      s.capsule([-4.8, 3.5], [-8.6, -4.2], 3.8, 3.2),
    ],
    creases: 'M0.4 -2.4 L0.6 -9.8 M3.4 -2 L4.4 -8.4 M-5.6 5 Q-4 3 -3.8 0',
    ring: [-7.2, -5.4, 1.5],
  },
};

// A yellow hand with a clear thumb, one smooth outline, lit from its own top-left.
function hand(c, x, y, { rot = 0, s: sc = 1, pose: hp = 'open', flip = false } = {}) {
  const h = HANDS[hp] ?? HANDS.open;
  const a = (rot * Math.PI) / 180;
  const fx = flip ? -sc : sc;
  const tf = ([px, py]) => {
    const u = px * fx;
    const v = py * sc;
    return [x + u * Math.cos(a) - v * Math.sin(a), y + u * Math.sin(a) + v * Math.cos(a)];
  };
  const d = s.union(h.parts().map((poly) => poly.map(tf)));
  const paint = s.fill(c, `hand${Math.round(x)}_${Math.round(y)}`, [n(x - 5 * sc), n(y - 9 * sc)], n(20 * sc));
  const g = `translate(${x} ${y}) rotate(${rot}) scale(${fx} ${sc})`;
  const ring = h.ring ? `<circle cx="${h.ring[0]}" cy="${h.ring[1]}" r="${h.ring[2]}" fill="${s.RAMP[3]}" opacity=".7"/>` : '';
  return `<path d="${d}" fill="${paint}" stroke="${s.EDGE}" stroke-opacity=".55" stroke-width="1" stroke-linejoin="round"/>
    <g transform="${g}">${ring}<path d="${h.creases}" stroke="${s.EDGE}" stroke-opacity=".4" stroke-width="${n(1 / sc)}" fill="none" stroke-linecap="round"/></g>`;
}

// An arm in the garment colour along a polyline from the shoulder to the wrist: it tapers, rounds
// at the elbow, and is one soft-edged shape lit like the garment, with a soft shadow beneath it
// where it lies over the body. End it on a hand.
function sleeve(c, P, pts, w = 9, palette) {
  const pal = palette ?? P.garment ?? 'blue';
  const r = c.ramp(pal);
  // Lit from the arm's own top-left, so it stands out from the torso it lies across.
  const xs = pts.map((q) => q[0]);
  const ys = pts.map((q) => q[1]);
  const gid = c.id(`sl${Math.round(xs[0])}_${Math.round(ys[0])}_${Math.round(xs[xs.length - 1])}`);
  const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)) + w;
  c.def(`<radialGradient id="${gid}" gradientUnits="userSpaceOnUse" cx="${n(Math.min(...xs))}" cy="${n(Math.min(...ys) - w / 2)}" r="${n(span * 1.15)}"><stop offset="0" stop-color="${r[0]}"/><stop offset="0.4" stop-color="${r[1]}"/><stop offset="1" stop-color="${r[2]}"/></radialGradient>`);
  const paint = `url(#${gid})`;
  const len = pts.slice(1).reduce((t, q, i) => t + Math.hypot(q[0] - pts[i][0], q[1] - pts[i][1]), 0);
  let run = 0;
  const width = [w];
  for (let i = 1; i < pts.length; i++) {
    run += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    width.push(w * (1 - 0.22 * (run / len)));
  }
  const polys = [];
  for (let i = 1; i < pts.length; i++) polys.push(s.capsule(pts[i - 1], pts[i], width[i - 1], width[i], 12));
  for (let i = 1; i < pts.length - 1; i++) polys.push(s.ellipse(pts[i][0], pts[i][1], width[i] * 0.56, width[i] * 0.56, 0, 20));
  const d = s.union(polys);
  const end = pts[pts.length - 1];
  const prev = pts[pts.length - 2];
  const ang = Math.atan2(end[1] - prev[1], end[0] - prev[0]);
  const cw = width[width.length - 1] / 2;
  const cuff = [Math.cos(ang + Math.PI / 2) * cw, Math.sin(ang + Math.PI / 2) * cw];
  const back = [end[0] - Math.cos(ang) * 2.2, end[1] - Math.sin(ang) * 2.2];
  // Cut off at the ground line, so an arm can rise from below the bust without a round end.
  const id = c.id('above');
  if (!c.defs.some((x) => x.includes(`id="${id}"`))) c.def(`<clipPath id="${id}"><rect width="96" height="${P.base}"/></clipPath>`);
  return `<g clip-path="url(#${id})">
    <path d="${d}" fill="${r[3]}" opacity=".35" transform="translate(1.1 1.8)"/>
    <path d="${d}" fill="${paint}" stroke="${r[3]}" stroke-opacity=".42" stroke-width="1"/>
    <path d="M${n(back[0] + cuff[0])} ${n(back[1] + cuff[1])} L${n(back[0] - cuff[0])} ${n(back[1] - cuff[1])}" stroke="${r[3]}" stroke-opacity=".3" stroke-width="1.2" stroke-linecap="round"/>
  </g>`;
}

// A standing figure from the head to the hips, the belly a round bump on its right. Same P fields
// as a bust (P.body, P.torso, P.at …) plus P.bump [cx, cy, r]; pass the pose of the head.
// Optional widths, measured from the head centre: chest (right edge above the bump), back (left
// edge), dx (bump centre), shoulder (how far below the neck the shoulder turns down).
function belly(P, { r: br = 16, chest = 18, back = 21, dx = 22, shoulder = 9 } = {}) {
  const { L, R, cx, base } = P;
  const bx = cx + dx;
  const by = base - br - 1;
  const jx = cx + chest;
  const top = n(by - Math.sqrt(Math.max(br * br - (bx - jx) ** 2, 0)));
  const down = `C${n(R[0] + 3)} ${n(R[1] + 3)} ${jx - 1} ${n(R[1] + 3)} ${jx} ${n(R[1] + shoulder)} L${jx} ${top} A${br} ${br} 0 1 1 ${bx} ${base - 1} L${cx - back + 4} ${base} Q${cx - back} ${base} ${cx - back} ${base - 4} L${cx - back} ${n(R[1] + 12)} C${cx - back} ${n(L[1] + 5)} ${n(L[0] - 4)} ${n(L[1] + 3)} ${L}`;
  return { ...P, body: `M${L} ${P.over} ${down} Z`, torso: `M${L} L${R} ${down} Z`, bump: [bx, by, br] };
}

// A royal crown in head space: three points with jewels on a band. crown() gives the outline
// for pose({ crown }), art() the markup. scale shrinks it towards the band (a prince's crown).
const royal = {
  crown: 'M19 44 L22 32 L18 8 L33 19 L48 2 L63 19 L78 8 L74 32 L77 44',
  art(c, { palette = 'gold', jewel = 'red', name = 'crown' } = {}) {
    const g = c.ramp(palette);
    const metal = c.linear(name, palette, [0, 0, 1, 1], 0, 2);
    const gem = c.radial(`${name}-gem`, jewel, 0.35, 0.3);
    const gem2 = c.radial(`${name}-gem2`, 'blue', 0.35, 0.3);
    return `<path d="M22 32 L18 8 L33 19 L48 2 L63 19 L78 8 L74 32 Q48 37 22 32 Z" fill="${metal}" stroke="${g[3]}" stroke-opacity=".7" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M22 26 Q48 31 74 26 L74 32 Q48 37 22 32 Z" fill="${g[2]}" opacity=".7"/>
      <circle cx="18" cy="8" r="3.6" fill="${g[0]}" stroke="${g[3]}" stroke-opacity=".7" stroke-width="1.4"/>
      <circle cx="48" cy="2" r="3.6" fill="${g[0]}" stroke="${g[3]}" stroke-opacity=".7" stroke-width="1.4"/>
      <circle cx="78" cy="8" r="3.6" fill="${g[0]}" stroke="${g[3]}" stroke-opacity=".7" stroke-width="1.4"/>
      <ellipse cx="48" cy="22" rx="4.5" ry="5.5" fill="${gem}" stroke="${g[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <circle cx="33" cy="25.5" r="3" fill="${gem2}"/><circle cx="63" cy="25.5" r="3" fill="${gem2}"/>`;
  },
};

// A swaddled baby, head at (x, y), the bundle trailing off along rot degrees (0 = to the right).
function baby(c, x, y, { rot = 0, s: sc = 1, wrap = 'sky', name = 'baby' } = {}) {
  const w = c.ramp(wrap);
  const cloth = c.radial(`${name}-wrap`, wrap, 0.35, 0.2);
  const skin = c.radial(`${name}-head`, 'yellow', 0.32, 0.25);
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${sc})">
    <path d="M-4 -9 C10 -12 24 -9 26 -1 C28 7 16 11 2 10 C-6 9.5 -9 4 -9 0 Z" fill="${cloth}" stroke="${w[3]}" stroke-opacity=".6" stroke-width="1.2"/>
    <path d="M4 -8 C8 -2 8 4 4 9 M13 -9 C15 -3 15 4 12 9.5" stroke="${w[3]}" stroke-opacity=".3" stroke-width="1.2" fill="none"/>
    <g transform="rotate(${-rot})"><circle r="8.5" fill="${skin}" stroke="#6B4A00" stroke-opacity=".5" stroke-width="1"/>
    <path d="M-5 -1 Q-3.4 0.6 -1.8 -1 M1.8 -1 Q3.4 0.6 5 -1" stroke="${f.INK}" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M-1.6 3.6 Q0 4.6 1.6 3.6" stroke="${f.INK}" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <ellipse cx="-3" cy="-5" rx="2.4" ry="1.2" fill="#fff" opacity=".7" transform="rotate(-30 -3 -5)"/></g>
  </g>`;
}

// The whole bust in the right order. face: face.js markup; under / over: extra markup.
function bust(c, P, { garment = 'blue', neck = 'crew', tie, shirt, hair: style, color = 'brown', face = '', beard: hasBeard, under = '', over = '', skin = 'yellow' } = {}) {
  P.garment = garment;
  const h = hair(c, P, style, color);
  return `${h.back}${torso(c, P, { palette: garment, neck, tie, shirt })}${under}${head(c, P, skin)}${hasBeard ? beard(c, P, hasBeard === true ? color : hasBeard) : ''}${P.at(face)}${h.front}${over}`;
}

// Spec fields for a bust; tone is the garment palette (it gets the bottom glow). The shine sits
// on the upper-left of the head.
function spec(P, tone) {
  const sh = P.pt(32.5, 31.5);
  return { tone, body: P.body, shine: [sh[0], sh[1], -45], shineSize: [n(6 * P.k), n(2.6 * P.k)] };
}

module.exports = { Y, face, HAIR, HAIRS, crownOf, pose, cloth, hairPaint, torso, head, hair, beard, glasses, hand, sleeve, bust, spec, royal, baby, belly };
