// The set's glossy button: a rounded-square tile (or a disc, or a keyboard keycap) with a
// gently domed face, for every symbol that sits on a button: 🆗 🅰️ ℹ️ ✅ 🈁, keycaps, and
// shapes or arrows in squares.
//
//   const b = require('../src/parts/button');
//   module.exports = {
//     ...b.spec('blue'),                       // tone, body, shine; b.spec('red', 'circle')
//     id, name, emoji, group, subgroup, tags,
//     draw: (c) => b.face(c, 'blue') + b.label(c, 'OK', { size: 26 }),
//   };
//
// Shapes: 'square' (default), 'circle', 'key' (a raised keycap with a skirt; dark ink labels).
// b.FACE[shape] = { cx, cy, w, h } is the usable face, for placing your own artwork on it.
// Labels come from glyph.js: white with a drop shadow in the palette's shadow colour.
const g = require('./glyph');

const n = (v) => +v.toFixed(2);
const rrect = (x, y, w, h, r) =>
  `M${x + r} ${y} L${x + w - r} ${y} A${r} ${r} 0 0 1 ${x + w} ${y + r} L${x + w} ${y + h - r} A${r} ${r} 0 0 1 ${x + w - r} ${y + h} L${x + r} ${y + h} A${r} ${r} 0 0 1 ${x} ${y + h - r} L${x} ${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} Z`;
const circle = (cx, cy, r) => `M${cx} ${cy - r} A${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`;

const TILE = [12, 11, 72, 72, 16];
const DISC = [48, 47, 36];
const KEY = [12, 12, 72, 72, 15]; // skirt
const KEYTOP = [18.5, 14, 59, 57, 11]; // top face, set high so the skirt shows below

const BODY = {
  square: rrect(...TILE),
  circle: circle(...DISC),
  key: rrect(...KEY),
};
const SHINE = {
  square: { shine: [21, 20, -45], shineSize: [6.5, 2.8] },
  circle: { shine: [29, 27, -42], shineSize: [7, 3] },
  key: { shine: [26, 21, -40], shineSize: [6, 2.4] },
};
const FACE = {
  square: { cx: 48, cy: 47, w: 72, h: 72 },
  circle: { cx: 48, cy: 47, w: 60, h: 60 },
  key: { cx: 48, cy: 42.5, w: 59, h: 57 },
};

const spec = (palette = 'blue', shape = 'square') => ({ tone: palette, body: BODY[shape], ...SHINE[shape] });

// A soft bevel just inside the edge: light on the top-left rim, shade on the bottom-right.
function bevel(c, d, palette, name, width = 2.4, light = 0.55, dark = 0.4) {
  const r = c.ramp(palette);
  const id = c.id(`${name}-bev`);
  c.def(`<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="${light}"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset=".6" stop-color="${r[3]}" stop-opacity="0"/><stop offset="1" stop-color="${r[3]}" stop-opacity="${dark}"/></linearGradient>`);
  return `<path d="${d}" fill="none" stroke="url(#${id})" stroke-width="${width}"/>`;
}

function face(c, palette = 'blue', shape = 'square', name = 'btn') {
  if (shape === 'key') {
    const r = c.ramp(palette);
    const skirt = c.linear(`${name}-skirt`, palette, [0, 0, 0.6, 1], 1, 3);
    const top = c.radial(`${name}-top`, palette, 0.3, 0.2);
    const [x, y, w, h, rr] = KEYTOP;
    const k = KEY;
    // Bevel lines from the skirt's corners to the top face's corners.
    const ribs = `M${k[0] + 4} ${k[1] + k[3] - 4} L${x + 3} ${y + h - 3} M${k[0] + k[2] - 4} ${k[1] + k[3] - 4} L${x + w - 3} ${y + h - 3}`;
    return `<path d="${BODY.key}" fill="${skirt}"/>
      <path d="${ribs}" stroke="${r[3]}" stroke-opacity=".25" stroke-width="1.2" fill="none"/>
      <path d="${rrect(x, y + 1.4, w, h, rr)}" fill="${r[3]}" opacity=".35"/>
      <path d="${rrect(x, y, w, h, rr)}" fill="${top}"/>
      ${bevel(c, rrect(x + 1.1, y + 1.1, w - 2.2, h - 2.2, rr - 1), palette, name, 2, 0.8, 0.25)}`;
  }
  const d = BODY[shape];
  const inner = shape === 'circle' ? circle(DISC[0], DISC[1], DISC[2] - 1.6) : rrect(TILE[0] + 1.6, TILE[1] + 1.6, TILE[2] - 3.2, TILE[3] - 3.2, TILE[4] - 1.6);
  return `<path d="${d}" fill="${c.radial(name, palette, 0.32, 0.22)}"/>
    ${bevel(c, inner, palette, name)}`;
}

// Lettering on the face: white with a shadow (or dark ink on a keycap). Options are glyph.path's
// (size, weight, track, maxWidth, x, y) plus color, shadow.
function label(c, text, opts = {}) {
  const { palette = 'blue', shape = 'square', name = 'lbl' } = opts;
  const f = FACE[shape];
  const o = { x: f.cx, y: f.cy, maxWidth: f.w - 16, size: 30, ...opts };
  const p = g.path(text, o);
  const top = n(o.y - p.size / 2);
  const bot = n(o.y + p.size / 2);
  const id = c.id(`${name}-ink`);
  const key = shape === 'key';
  const [c0, c1] = key ? ['#3A4170', '#141833'] : ['#FFFFFF', '#E6E1F0'];
  c.def(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="${top}" x2="0" y2="${bot}"><stop offset="0" stop-color="${c0}"/><stop offset="1" stop-color="${c1}"/></linearGradient>`);
  const color = opts.color ?? `url(#${id})`;
  const STROKE = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const w = p.weight;
  if (key) {
    // Engraved: a light lip below-right, the ink above it.
    return `<path d="${p.d}" stroke="#fff" stroke-opacity=".7" stroke-width="${w}" ${STROKE} transform="translate(${n(w * 0.1)} ${n(w * 0.2)})"/>
      <path d="${p.d}" stroke="${color}" stroke-width="${w}" ${STROKE}/>`;
  }
  const shadow = opts.shadow ?? c.ramp(palette)[3];
  return `<path d="${p.d}" stroke="${shadow}" stroke-opacity=".45" stroke-width="${w}" ${STROKE} transform="translate(${n(w * 0.14)} ${n(w * 0.24)})"/>
    <path d="${p.d}" stroke="${color}" stroke-width="${w}" ${STROKE}/>`;
}

module.exports = { spec, face, label, bevel, rrect, circle, BODY, FACE, TILE, DISC, KEY, KEYTOP };
