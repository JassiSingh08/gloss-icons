// The heart from icons/heart.js, shared so the coloured hearts and the decorated ones are all the
// same shape under the same light. Only the palette changes from one to the next.
//
//   const h = require('../src/parts/heart');
//   module.exports = { ...h.solid('green'), id, name, … }          a plain heart in another colour
//   h.place({ s: 0.8, x: 46, y: 54 })                              the heart path scaled and moved
//   h.paint(c, 'a', 'green')                                       its gradient, from a palette or ramp

const HEART = 'M48 80 C22 62 12 47 15 33 C18 20 35 15 48 28 C61 15 78 20 81 33 C84 47 74 62 48 80 Z';
const SHINE = [29, 31, -40];
const n = (v) => +v.toFixed(2);

// Ramps that the shared palettes lack. Same four-stop shape: [light, mid, deep, shadow].
const RAMPS = {
  // The red heart already uses 'pink', so the pink heart is a softer rose (as on the brain).
  rose: ['#FFD3E0', '#FF8DB0', '#E0457A', '#7A1640'],
  // 'orange' starts at lemon; a heart wants orange through and through.
  tangerine: ['#FFC77A', '#FF8A1A', '#D94A00', '#5E1A00'],
};

// Scale by s and turn by rot degrees about (ox, oy), then put that point at (x, y).
function at([px, py], { s = 1, rot = 0, x = 48, y = 49, ox = 48, oy = 49 } = {}) {
  const a = (rot * Math.PI) / 180;
  const dx = (px - ox) * s;
  const dy = (py - oy) * s;
  return [n(x + dx * Math.cos(a) - dy * Math.sin(a)), n(y + dx * Math.sin(a) + dy * Math.cos(a))];
}

// Any path written as absolute "x y" pairs (M, L, C, Q, Z only) moved the same way.
function xform(d, opts) {
  return d.replace(/(-?[\d.]+)[ ,](-?[\d.]+)/g, (_, px, py) => at([+px, +py], opts).join(' '));
}

function place(opts) {
  return xform(HEART, opts);
}

// The shine for a placed heart, sized down with it.
function shine(opts = {}) {
  const [x, y] = at(SHINE, opts);
  return [x, y, SHINE[2] + (opts.rot ?? 0)];
}

// Same radial as c.radial, but takes a palette name or a raw ramp. Heart light sits at 0.32, 0.22.
function paint(c, name, ramp = 'pink', cx = 0.32, cy = 0.22) {
  if (typeof ramp === 'string' && !RAMPS[ramp]) return c.radial(name, ramp, cx, cy);
  const [a, b, d, e] = typeof ramp === 'string' ? RAMPS[ramp] : ramp;
  c.def(`<radialGradient id="${c.id(name)}" cx="${cx}" cy="${cy}" r="0.95"><stop offset="0" stop-color="${a}"/><stop offset="0.35" stop-color="${b}"/><stop offset="0.75" stop-color="${d}"/><stop offset="1" stop-color="${e}"/></radialGradient>`);
  return `url(#${c.id(name)})`;
}

const ramp = (c, r) => (typeof r === 'string' && RAMPS[r] ? RAMPS[r] : c.ramp(r));

// A heart drawn off the body: its own fill, edge and shine, as the back heart in two-hearts.
function extra(c, name, opts, r = 'pink') {
  const d = place(opts);
  const [x, y, rot] = shine(opts);
  const s = opts.s ?? 1;
  return `<path d="${d}" fill="${paint(c, name, r)}"/>
    <path d="${d}" fill="none" stroke="${ramp(c, r)[3]}" stroke-opacity=".55" stroke-width="1.2"/>
    <ellipse cx="${x}" cy="${y}" rx="${n(7 * s)}" ry="${n(3.4 * s)}" fill="#fff" opacity=".8" transform="rotate(${rot} ${x} ${y})"/>`;
}

// A plain heart in another colour: tone sets the outline and inner glow, r the fill.
function solid(tone, r = tone) {
  return {
    tone,
    body: HEART,
    shine: SHINE,
    draw: (c) => `<path d="${HEART}" fill="${paint(c, 'a', r)}"/>`,
  };
}

module.exports = { HEART, SHINE, RAMPS, at, xform, place, shine, paint, ramp, extra, solid };
