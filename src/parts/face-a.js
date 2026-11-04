// Extra parts for the smiling, affectionate, tongue, hand, skeptical and sleepy faces, built on
// face.js (same head, ink and eye rows) and skin.js (same hands as peek).
const f = require('./face');
const s = require('./skin');

const { CX, CY, INK, TEETH, MOUTH, EYE, MOUTH_Y, DX, stroke } = f;
const n = (v) => +v.toFixed(2);

// The engine only outlines `body`; parts that stick out of it get the same thin edge from here.
const edge = (d, color, w = 1.3, opacity = 0.5) =>
  `<path d="${d}" fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="${w}" stroke-linejoin="round"/>`;

// A small glossy heart: floating hearts, kisses.
function heart(c, x, y, { scale = 1, rot = 0, palette = 'red', name = 'heart' } = {}) {
  const fill = c.radial(name, palette, 0.35, 0.3);
  const t = `translate(${x} ${y}) rotate(${rot}) scale(${scale})`;
  return `<path d="${f.HEART}" fill="${fill}" stroke="${c.ramp(palette)[3]}" stroke-opacity=".55" stroke-width="${n(1.1 / scale)}" transform="${t}"/>
    <ellipse cx="-2.6" cy="-2.2" rx="1.6" ry="0.9" fill="#fff" opacity=".75" transform="${t} rotate(-35 -2.6 -2.2)"/>`;
}

const eyes = {
  // Taller open ovals: wide awake, delighted.
  big: ({ y = EYE - 1.5, dx = DX, rx = 4, ry = 6.4, ink = INK } = {}) =>
    [CX - dx, CX + dx].map((x) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${ink}"/>${f.glint(x - rx * 0.32, y - ry * 0.4, 1.2)}`).join(''),
  // Half-shut: a heavy flat lid over the lower half of an eye. look shifts the pupil sideways.
  half: ({ y = EYE + 1, dx = DX, look = 0, ink = INK, droop = 0 } = {}) =>
    [-1, 1].map((side) => {
      const x = CX + side * dx;
      const t = y - 0.5 + side * droop;
      return `<path d="M${x - 4.6} ${t} L${x + 4.6} ${t - side * droop * 0.0} Q${x + 4.2 + look} ${y + 5} ${x + look} ${y + 5} Q${x - 4.2 + look} ${y + 5} ${x - 4.6} ${t} Z" fill="${ink}"/>`
        + stroke(`M${x - 5.6} ${t - 0.3} L${x + 5.6} ${t - 0.3}`, 2.6, ink) + f.glint(x + look - 1.6, t + 2.2, 0.8);
    }).join(''),
  // Flat closed lines: deadpan.
  line: ({ y = EYE, dx = DX, w = 5, ink = INK, sw = 3.6 } = {}) =>
    [CX - dx, CX + dx].map((x) => stroke(`M${x - w} ${y} L${x + w} ${y}`, sw, ink)).join(''),
};

// face.js brows.worried slants the same way as brows.angry (outer ends high), so worry, pleading
// and sadness use this one: inner ends lifted, outer ends dropping.
const brows = {
  sad: ({ y = f.BROW, dx = DX, ink = INK, sw = 3.2, slant = 4 } = {}) =>
    [-1, 1].map((side) => {
      const x = CX + side * dx;
      return stroke(`M${x - side * 5.5} ${y - slant / 2} Q${x} ${y - slant * 0.35} ${x + side * 5.5} ${y + slant / 2}`, sw, ink);
    }).join(''),
};

const mouth = {
  // A pursed kiss, like a sideways 3. x shifts it.
  pucker: ({ x = CX + 1, y = MOUTH_Y + 1, s = 1, ink = INK, sw = 3.4 } = {}) =>
    stroke(`M${x - 3.5 * s} ${y - 5 * s} Q${x + 4.5 * s} ${y - 4.5 * s} ${x + 0.2 * s} ${y} Q${x + 4.5 * s} ${y + 4.5 * s} ${x - 3.5 * s} ${y + 5 * s}`, sw, ink),
  // A wide toothy beam: both rows of teeth, no tongue.
  beam: (c, { y = MOUTH_Y - 5, w = 19, depth = 15, name = 'beam', ink = INK } = {}) => {
    const d = `M${CX - w} ${y} Q${CX} ${y + 5} ${CX + w} ${y} Q${CX + w - 3} ${y + depth} ${CX} ${y + depth + 0.5} Q${CX - w + 3} ${y + depth} ${CX - w} ${y} Z`;
    c.def(`<clipPath id="${c.id(name)}"><path d="${d}"/></clipPath>`);
    const mid = y + depth * 0.5;
    const cols = [-11, -5.5, 0, 5.5, 11].map((dx) => `M${CX + dx} ${y} L${CX + dx} ${y + depth + 2}`).join(' ');
    return `<path d="${d}" fill="${TEETH}"/>
      <g clip-path="url(#${c.id(name)})">
        <path d="M${CX - w} ${mid - 0.5} Q${CX} ${mid + 4} ${CX + w} ${mid - 0.5}" stroke="${MOUTH}" stroke-width="2.6" fill="none"/>
        <path d="${cols}" stroke="${ink}" stroke-width="1.3" opacity=".35"/>
        <path d="M${CX - w} ${y + depth} Q${CX} ${y + depth - 3} ${CX + w} ${y + depth}" stroke="#E0C9A8" stroke-width="3" fill="none" opacity=".7"/>
      </g>
      <path d="${d}" fill="none" stroke="${ink}" stroke-width="3" stroke-linejoin="round"/>`;
  },
};

const extras = {
  // A gold ring floating over the head.
  halo: (c, { y = 14.5, rx = 19, ry = 5 } = {}) => {
    const g = c.linear('halo', 'gold', [0, 0, 1, 0.4], 0, 2);
    return `<ellipse cx="${CX}" cy="${y}" rx="${rx}" ry="${ry}" fill="none" stroke="#5E3A00" stroke-opacity=".55" stroke-width="5.6"/>
      <ellipse cx="${CX}" cy="${y}" rx="${rx}" ry="${ry}" fill="none" stroke="${g}" stroke-width="3.8"/>
      <path d="M${CX - rx + 4} ${y - 2.4} Q${CX - rx / 2} ${y - ry + 0.2} ${CX - 2} ${y - ry + 0.2}" stroke="#fff" stroke-opacity=".85" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
  },
  // Motion lines hugging the head on both sides (or top and bottom when vertical).
  shake: ({ vertical = false, ink = INK, gap = 5, count = 2, spread = 34, opacity = 0.6, sw = 2.6 } = {}) => {
    const out = [];
    for (let i = 0; i < count; i++) {
      const r = f.R + gap + i * 4.5;
      const a = ((spread - i * 8) * Math.PI) / 180;
      for (const side of [-1, 1]) {
        const base = vertical ? (side < 0 ? -Math.PI / 2 : Math.PI / 2) : (side < 0 ? Math.PI : 0);
        const p = (t) => [n(CX + r * Math.cos(base + t)), n(CY + r * Math.sin(base + t))];
        const [x1, y1] = p(-a);
        const [x2, y2] = p(a);
        out.push(`<path d="M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}" stroke="${ink}" stroke-opacity="${opacity - i * 0.2}" stroke-width="${sw}" fill="none" stroke-linecap="round"/>`);
      }
    }
    return out.join('');
  },
  // Sleep letters: a big Z with smaller ones rising after it.
  zzz: (c, { x = 66, y = 26, palette = 'navy' } = {}) => {
    const g = c.linear('zzz', palette, [0, 0, 1, 1], 0, 2);
    const z = (zx, zy, h) => {
      const d = `M${n(zx - h / 2)} ${n(zy - h / 2)} L${n(zx + h / 2)} ${n(zy - h / 2)} L${n(zx - h / 2)} ${n(zy + h / 2)} L${n(zx + h / 2)} ${n(zy + h / 2)}`;
      const w = n(h * 0.3);
      return `<path d="${d}" stroke="${c.ramp(palette)[3]}" stroke-width="${n(w + 1.6)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${g}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    };
    return z(x, y, 11) + z(x + 11, y - 9, 8) + z(x + 18, y - 16, 5.5);
  },
};

// Hands. Local coordinates (unrotated, origin at the wrist end of the palm) are mapped to the
// icon with place(), so the skin gradient stays in icon space and matches peek.
function placer({ x = 0, y = 0, rot = 0, flip = false, scale = 1 } = {}) {
  const a = (rot * Math.PI) / 180;
  const cos = Math.cos(a), sin = Math.sin(a);
  return ([px, py]) => {
    const lx = (flip ? -px : px) * scale;
    const ly = py * scale;
    return [n(x + lx * cos - ly * sin), n(y + lx * sin + ly * cos)];
  };
}
// Path from commands like ['M', [x,y]], ['C', [..], [..], [..]], ['Z'].
const pathOf = (cmds, P) => cmds.map(([k, ...pts]) => k + pts.map((p) => P(p).join(' ')).join(' ')).join(' ');


// Hands are one smooth silhouette (palm, fingers and thumb merged with skin.union) in the same
// yellow as the head, with thin creases between the fingers. Each is built in local coordinates
// and mapped into the icon with placer(), and lit from its own top left so a hand low on the face
// doesn't fall into the dark end of the gradient. A soft offset shadow lifts it off the face.
let handCount = 0;
function handArt(c, at, polys, creases, light) {
  const P = placer(at);
  const k = at.scale ?? 1;
  const d = s.union(polys.map((poly) => poly.map(P)));
  const [lx, ly] = P(light);
  const paint = s.fill(c, `hand${handCount++}`, [lx, ly], n(34 * k));
  return `<path d="${d}" fill="${s.RAMP[3]}" opacity=".35" transform="translate(1.4 2.2)"/>
    <path d="${d}" fill="${paint}"/>
    ${creases.map(([cmds, w]) => s.crease(pathOf(cmds, P), w ?? 1.2)).join('')}
    <path d="${d}" fill="none" stroke="${s.EDGE}" stroke-opacity=".8" stroke-width="1.4" stroke-linejoin="round"/>`;
}

// Back of a flat hand, fingers together and pointing along +x from the knuckles; the wrist sits
// at the local origin. thumb: tuck a thumb along the +y edge.
function flatHand(c, at, { lengths = [18, 20.5, 19.5, 16], w = 4.8, wrist = 5, thumb = false } = {}) {
  const ys = [-6.3, -2.1, 2.1, 6.3];
  const tips = ys.map((y, i) => [10 + lengths[i], y + (i - 1.5) * 0.4]);
  const polys = [
    s.ellipse(6.5, 0, 8, 9.4, 0, 24),
    ...ys.map((y, i) => s.capsule([8, y], tips[i], w, w * 0.86)),
  ];
  if (wrist) polys.push(s.capsule([-wrist, 0.8], [3, 0], 12.5, 14.5));
  if (thumb) polys.push(s.capsule([3, 7], [13, 10.5], 5.2, 4.6));
  const creases = ys.slice(1).map((y, i) => [[['M', [13, y - 2.1]], ['L', [8 + Math.min(lengths[i], lengths[i + 1]) - 1, y - 2.1 + (i - 1) * 0.4]]]]);
  creases.push([[['M', [11.5, -7.5]], ['Q', [13.5, 0], [11.5, 7.5]]], 1]);
  if (thumb) creases.push([[['M', [5, 6]], ['Q', [9, 7.5], [12.5, 8.4]]]]);
  return handArt(c, at, polys, creases, at.flip ? [24, -12] : [2, -12]);
}

// An open palm facing out, fingers spread and pointing along -y, thumb out along -x; the palm
// centre is the origin. Proportions follow the reference hand in skin.js's notes.
function openHand(c, at) {
  const q = 0.42;
  const L = ([x, y]) => [(x - 48) * q, (y - 64) * q];
  const fingers = [
    [[36.5, 46], [32.5, 21], 9.6, 8.4],
    [[45, 44], [44, 14], 10, 8.8],
    [[53.5, 45], [55, 17], 9.8, 8.6],
    [[61.5, 48], [65.5, 28], 9, 7.8],
  ];
  const palm = [[30, 46], [66, 46], [66.5, 62], [62, 76], [52, 83], [40, 83], [32, 77], [29, 64]].map(L);
  const polys = [
    palm,
    ...fingers.map(([a, b, w0, w1]) => s.capsule(L(a), L(b), w0 * q, w1 * q)),
    s.capsule(L([33, 64]), L([20, 47]), 11 * q, 9.4 * q),
    s.ellipse(0, 1, 18 * q, 17 * q),
  ];
  const creases = [
    [[['M', L([41, 44])], ['L', L([40.5, 30])]]],
    [[['M', L([49.5, 43])], ['L', L([49.8, 30])]]],
    [[['M', L([57.6, 45])], ['L', L([59.6, 33])]]],
    [[['M', L([33, 66])], ['Q', L([38, 62]), L([41, 55])]]],
    [[['M', L([38, 72])], ['Q', L([47, 76]), L([58, 70])]], 1],
  ];
  return handArt(c, at, polys, creases, at.flip ? [8, -16] : [-8, -16]);
}

// A loose fist with the index finger raised along -y; the fist centre is the origin.
// thumb: 'tucked' across the curled fingers, or 'out' sticking along +x.
function pointHand(c, at, { index = 19, thumb = 'tucked' } = {}) {
  const polys = [
    s.capsule([-3.5, -2], [-3.5, -2 - index], 5.6, 5),
    s.capsule([-4.5, 1.5], [4.5, 1.5], 15.5, 15.5),
  ];
  const creases = [
    [[['M', [-6.2, -1.8]], ['Q', [-3.5, 0], [-0.8, -1.8]]], 1],
    [[['M', [-0.5, -1.2]], ['Q', [3, -0.2], [7, -1.4]]]],
  ];
  if (thumb === 'out') {
    polys.push(s.capsule([-5, 4.5], [13, 1.5], 5.6, 5));
    creases.push([[['M', [-2, 2.2]], ['L', [7, 0.8]]]]);
  } else {
    creases.push([[['M', [-7, 4]], ['Q', [-2, 2.4], [4.5, 4]]]]);
  }
  return handArt(c, at, polys, creases, at.flip ? [8, -12] : [-8, -12]);
}

module.exports = { edge, heart, eyes, brows, mouth, extras, placer, pathOf, flatHand, openHand, pointHand, n, s };
