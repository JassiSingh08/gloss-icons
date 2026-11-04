// Shared parts for the round smileys, so 150-odd faces share one head, one ink and one set of
// eyes and mouths. Every helper returns SVG markup; positions default to the standard head
// (centre 48,52, radius 30) and take an options object to nudge them.
//
//   const f = require('../src/parts/face');
//   module.exports = { ...f.spec(), id, name, emoji, group, subgroup, tags,
//     draw: (c) => f.head(c) + f.brows.flat() + f.eyes.oval() + f.mouth.smile() };
//
// Faces are a little sly and grown-up, not baby-cute: smallish eyes set level, mouths that
// lean to one side, a dimple tick at the corner of a smile.

const BODY = 'M48 22 A30 30 0 1 1 47.99 22 Z';
const CX = 48;
const CY = 52;
const R = 30;
// Same deep brown as the earlier yellow faces (laugh, peek, dizzy). Faces in another palette
// should pass their own deep ink, e.g. '#12002E' on purple.
const INK = '#3D1A00';
const MOUTH = '#4A0E14';
const TONGUE = '#F0506A';
const TEETH = '#FFF8EC';
// Eye rows: brows sit at BROW, eyes at EYE, mouths centre on MOUTH_Y.
const EYE = 45;
const BROW = 36;
const MOUTH_Y = 65;
const DX = 11; // half the gap between the eyes

const n = (v) => +v.toFixed(2);
const stroke = (d, w = 3.6, ink = INK, extra = '') =>
  `<path d="${d}" stroke="${ink}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;
const both = (fn, dx = DX) => fn(CX - dx, -1) + fn(CX + dx, 1);

// Spec fields every round face shares; spread it, then override what differs.
const spec = (tone = 'yellow') => ({ tone, body: BODY, shine: [32.5, 31.5, -45], shineSize: [5.5, 2.4] });

function head(c, palette = 'yellow', name = 'a') {
  return `<path d="${BODY}" fill="${c.radial(name, palette, 0.32, 0.25)}"/>`;
}

// A drop with its round end at (0,0) and the tip pointing up; place it with a transform.
const DROP = 'M0 -10 C2.5 -5.5 5.5 -2.5 5.5 1 A5.5 5.5 0 0 1 -5.5 1 C-5.5 -2.5 -2.5 -5.5 0 -10 Z';
// A small heart centred on (0,0), about 12 wide.
const HEART = 'M0 6 C-4.2 3 -6.2 0.4 -5.9 -2 C-5.6 -4.6 -2.4 -5.7 0 -3.2 C2.4 -5.7 5.6 -4.6 5.9 -2 C6.2 0.4 4.2 3 0 6 Z';

// The window light caught in a glossy eye: a small white spot, upper left like every highlight.
const glint = (x, y, r = 1.05) => `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${n(r)}" ry="${n(r * 1.3)}" fill="#fff" opacity=".85" transform="rotate(-25 ${n(x)} ${n(y)})"/>`;

const eyes = {
  // Solid upright ovals: the default open eye.
  oval: ({ y = EYE, dx = DX, rx = 3.6, ry = 5, ink = INK } = {}) =>
    both((x) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${ink}"/>${glint(x - rx * 0.32, y - ry * 0.38)}`, dx),
  // Ovals with a flat upper lid: knowing, half-interested.
  lidded: ({ y = EYE, dx = DX, ink = INK, tilt = 4 } = {}) =>
    both((x, s) => {
      const top = y - 1.2;
      return `<path d="M${x - 4.2} ${top + s * -tilt * 0.12} L${x + 4.2} ${top + s * tilt * 0.12} Q${x + 3.6} ${y + 4.8} ${x} ${y + 4.8} Q${x - 3.6} ${y + 4.8} ${x - 4.2} ${top + s * -tilt * 0.12} Z" fill="${ink}"/>
        ${stroke(`M${x - 5} ${top - 0.6 - s * tilt * 0.2} L${x + 5} ${top - 0.6 + s * tilt * 0.2}`, 2.4, ink)}${glint(x - 1.4, y + 1.2, 0.8)}`;
    }, dx),
  // Big whites with a pupil, for surprise and fear. look: [dx, dy] shifts both pupils.
  wide: ({ y = EYE, dx = DX, r = 6, pupil = 3, look = [0, 0], ink = INK } = {}) =>
    both((x) => `<ellipse cx="${x}" cy="${y}" rx="${r * 0.85}" ry="${r}" fill="#fff" stroke="${ink}" stroke-opacity=".35" stroke-width="1"/>
      <circle cx="${x + look[0]}" cy="${y + look[1]}" r="${pupil}" fill="${ink}"/>${glint(x + look[0] - pupil * 0.35, y + look[1] - pupil * 0.4, pupil * 0.3)}`, dx),
  // Happy closed eyes, arching up: ^ ^
  smile: ({ y = EYE, dx = DX, w = 5.5, h = 4.5, ink = INK, sw = 3.6 } = {}) =>
    both((x) => stroke(`M${x - w} ${y + h / 2} Q${x} ${y - h * 1.3} ${x + w} ${y + h / 2}`, sw, ink), dx),
  // Calm closed eyes, curving down like lids at rest.
  closed: ({ y = EYE, dx = DX, w = 5.5, h = 3.5, ink = INK, sw = 3.4 } = {}) =>
    both((x) => stroke(`M${x - w} ${y - h / 2} Q${x} ${y + h * 1.3} ${x + w} ${y - h / 2}`, sw, ink), dx),
  // Squeezed shut: > <
  squint: ({ y = EYE, dx = DX, ink = INK } = {}) =>
    both((x, s) => stroke(`M${x - s * 5} ${y - 4} L${x + s * 3.5} ${y} L${x - s * 5} ${y + 4}`, 3.6, ink), dx),
  // One eye open, the other a closed arc. side: which eye winks, -1 left, 1 right.
  wink: ({ side = 1, y = EYE, dx = DX, ink = INK } = {}) => {
    const open = `<ellipse cx="${CX - side * dx}" cy="${y}" rx="3.6" ry="5" fill="${ink}"/>${glint(CX - side * dx - 1.15, y - 1.9)}`;
    const x = CX + side * dx;
    return open + stroke(`M${x - 5.5} ${y + 1.5} Q${x} ${y - 4.5} ${x + 5.5} ${y + 1.5}`, 3.6, ink);
  },
  // Crossed out: x x
  cross: ({ y = EYE, dx = DX, s = 4.2, ink = INK } = {}) =>
    both((x) => stroke(`M${x - s} ${y - s} L${x + s} ${y + s} M${x + s} ${y - s} L${x - s} ${y + s}`, 3.4, ink), dx),
  // Small dots: blank, unimpressed.
  dot: ({ y = EYE, dx = DX, r = 3.2, ink = INK } = {}) => both((x) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}"/>${glint(x - r * 0.35, y - r * 0.4, r * 0.3)}`, dx),
  // Hearts in place of eyes. Needs the context for the gradient.
  heart: (c, { y = EYE, dx = 12, scale = 1.25, palette = 'red' } = {}) => {
    const fill = c.radial('eyeheart', palette, 0.35, 0.3);
    return both((x, s) => `<path d="${HEART}" fill="${fill}" transform="translate(${x} ${y}) rotate(${s * 8}) scale(${scale})"/>`, dx);
  },
  // Five-point stars in place of eyes.
  star: (c, { y = EYE, dx = 12, r = 7.5, palette = 'gold' } = {}) => {
    const fill = c.radial('eyestar', palette, 0.4, 0.3);
    const pts = (x) => Array.from({ length: 10 }, (_, i) => {
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      const rr = i % 2 ? r * 0.45 : r;
      return `${n(x + rr * Math.cos(a))} ${n(y + rr * Math.sin(a))}`;
    }).join(' L');
    return both((x) => `<path d="M${pts(x)} Z" fill="${fill}" stroke="${c.ramp(palette)[3]}" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>`, dx);
  },
};

const brows = {
  // Level and relaxed.
  flat: ({ y = BROW, dx = DX, ink = INK, sw = 3.2 } = {}) => both((x) => stroke(`M${x - 5} ${y} Q${x} ${y - 1.5} ${x + 5} ${y}`, sw, ink), dx),
  // Lifted arches: surprise, delight.
  raised: ({ y = BROW - 3, dx = DX, ink = INK, sw = 3.2 } = {}) => both((x) => stroke(`M${x - 5.5} ${y + 1.5} Q${x} ${y - 3} ${x + 5.5} ${y + 1.5}`, sw, ink), dx),
  // Inner ends down: anger, scheming.
  angry: ({ y = BROW + 1, dx = DX, ink = INK, sw = 3.8, slant = 4 } = {}) =>
    both((x, s) => stroke(`M${x + s * 6} ${y - slant / 2} L${x - s * 5} ${y + slant / 2}`, sw, ink), dx),
  // Inner ends up: worry, sadness, pleading.
  worried: ({ y = BROW, dx = DX, ink = INK, sw = 3.2, slant = 4 } = {}) =>
    both((x, s) => stroke(`M${x - s * 5.5} ${y - slant / 2} Q${x} ${y - slant * 0.2} ${x + s * 5.5} ${y + slant / 2}`, sw, ink), dx),
  // One brow up, one level: skeptical. side: which brow lifts.
  one: ({ side = 1, y = BROW, dx = DX, ink = INK, sw = 3.2 } = {}) => {
    const up = CX + side * dx;
    const lv = CX - side * dx;
    return stroke(`M${lv - 5} ${y + 1} L${lv + 5} ${y + 1}`, sw, ink) + stroke(`M${up - 5.5} ${y - 1} Q${up} ${y - 6.5} ${up + 5.5} ${y - 2}`, sw, ink);
  },
};

const mouth = {
  // Closed smile leaning right, with a dimple tick at the high corner. w: half width.
  smile: ({ y = MOUTH_Y, w = 11, lift = 4, ink = INK, tick = true, sw = 3.6 } = {}) => {
    const l = CX - w, r = CX + w;
    const d = `M${l} ${y - 1} Q${CX + 1} ${y + 6} ${r} ${y - lift}`;
    return stroke(d, sw, ink) + (tick ? stroke(`M${r - 1.5} ${y - lift - 1.4} L${r + 2} ${y - lift + 0.4}`, sw * 0.85, ink) : '');
  },
  // Lopsided, one corner up: the devil's smirk.
  smirk: ({ y = MOUTH_Y, ink = INK } = {}) =>
    stroke(`M${CX - 10} ${y + 1} Q${CX + 1} ${y + 6.5} ${CX + 13} ${y - 4.5}`, 3.6, ink) + stroke(`M${CX + 11.5} ${y - 5.5} L${CX + 15} ${y - 7}`, 3, ink),
  // Downturned.
  frown: ({ y = MOUTH_Y + 3, w = 10, ink = INK, sw = 3.6 } = {}) => stroke(`M${CX - w} ${y + 2.5} Q${CX} ${y - 5} ${CX + w} ${y + 2.5}`, sw, ink),
  // Straight line. tilt lowers the right end.
  flat: ({ y = MOUTH_Y + 1, w = 9, tilt = 0, ink = INK, sw = 3.6 } = {}) => stroke(`M${CX - w} ${y - tilt / 2} L${CX + w} ${y + tilt / 2}`, sw, ink),
  // Squiggle: queasy, unsure.
  wavy: ({ y = MOUTH_Y + 1, w = 10, ink = INK, sw = 3.4 } = {}) =>
    stroke(`M${CX - w} ${y} Q${CX - w / 2} ${y - 3.5} ${CX} ${y} Q${CX + w / 2} ${y + 3.5} ${CX + w} ${y}`, sw, ink),
  // Small round open mouth: surprise. r: radius.
  o: ({ y = MOUTH_Y + 2, rx = 5, ry = 6.2, ink = INK } = {}) =>
    `<ellipse cx="${CX}" cy="${y}" rx="${rx}" ry="${ry}" fill="${ink}"/><ellipse cx="${CX}" cy="${y + ry * 0.45}" rx="${rx * 0.6}" ry="${ry * 0.35}" fill="${TONGUE}" opacity=".7"/>`,
  // Open grin: flat top lip, round bottom, top teeth and a tongue. Needs the context for a clip.
  // w: half width, depth: how far it drops, teeth/tongue: false to leave out.
  grin: (c, { y = MOUTH_Y - 7, w = 18, depth = 19, teeth = true, tongue = true, name = 'mouth' } = {}) => {
    const d = `M${CX - w} ${y} Q${CX} ${y + 4} ${CX + w} ${y} Q${CX + w - 2} ${y + depth} ${CX} ${y + depth + 1} Q${CX - w + 2} ${y + depth} ${CX - w} ${y} Z`;
    c.def(`<clipPath id="${c.id(name)}"><path d="${d}"/></clipPath>`);
    return `<path d="${d}" fill="${MOUTH}"/>
      <g clip-path="url(#${c.id(name)})">
        ${teeth ? `<path d="M${CX - w - 2} ${y - 2} Q${CX} ${y + 3} ${CX + w + 2} ${y - 2} L${CX + w + 2} ${y + 6} Q${CX} ${y + 9} ${CX - w - 2} ${y + 6} Z" fill="${TEETH}"/>` : ''}
        ${tongue ? `<ellipse cx="${CX + 2}" cy="${y + depth + 2}" rx="${w * 0.75}" ry="${depth * 0.45}" fill="${TONGUE}"/>` : ''}
      </g>`;
  },
  // Clenched teeth showing: grimace.
  teeth: ({ y = MOUTH_Y, w = 15, h = 9, ink = INK } = {}) => {
    const cols = [-w / 2, 0, w / 2].map((dx) => `M${CX + dx} ${y - h / 2} L${CX + dx} ${y + h / 2}`).join(' ');
    return `<rect x="${CX - w}" y="${y - h / 2}" width="${w * 2}" height="${h}" rx="${h / 2}" fill="${TEETH}" stroke="${ink}" stroke-width="3"/>
      <path d="M${CX - w + 1} ${y} L${CX + w - 1} ${y} ${cols}" stroke="${ink}" stroke-width="1.6" opacity=".55"/>`;
  },
};

const extras = {
  // Warm flush on both cheeks.
  blush: (c, { y = 58, dx = 19, rx = 6, ry = 3.6, opacity = 0.5 } = {}) => {
    const fill = c.radial('blush', 'pink', 0.5, 0.5);
    return both((x) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" opacity="${opacity}"/>`, dx);
  },
  // A drop of water: tears, sweat. (x, y) is the round end; rot tilts the tip.
  drop: (c, x, y, { scale = 1, rot = 0 } = {}) => {
    const fill = c.radial('drop', 'sky', 0.35, 0.3);
    return `<path d="${DROP}" fill="${fill}" transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})"/>
      <ellipse cx="${n(x - 1.6 * scale)}" cy="${n(y)}" rx="${n(1.2 * scale)}" ry="${n(2.1 * scale)}" fill="#fff" opacity=".8" transform="rotate(${rot} ${n(x - 1.6 * scale)} ${n(y)})"/>`;
  },
  // Tongue poking out below a mouth line at (x, y).
  tongue: (c, x = CX, y = MOUTH_Y + 2, { rot = 0, scale = 1 } = {}) => {
    const fill = c.radial('tongue', 'pink', 0.4, 0.2);
    return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})"><path d="M-6 -1 L6 -1 L6 6 A6 6 0 0 1 -6 6 Z" fill="${fill}" stroke="#7A0026" stroke-opacity=".5" stroke-width="1"/><path d="M0 0 L0 6" stroke="#9E0030" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/></g>`;
  },
};

module.exports = { glint, BODY, CX, CY, R, INK, MOUTH, TONGUE, TEETH, EYE, BROW, MOUTH_Y, DX, DROP, HEART, spec, head, stroke, eyes, brows, mouth, extras };
