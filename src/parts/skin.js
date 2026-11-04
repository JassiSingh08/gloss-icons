// Shared skin for hands, arms and people, so every hand matches the ones in peek.
//
//   const s = require('../src/parts/skin');
//   s.limb(c, [[30, 70], [34, 40]], 7)   a finger or arm: a fat round-capped stroke, edge then fill
//   s.fill(c)                             the skin gradient, for palms and other filled shapes
//
// Skin uses the 'amber' palette. Heads of people use the smiley head from face.js.

const EDGE = '#6B3A00';
const CREASE = 'stroke-opacity=".35"';

// One gradient per icon, lit from the top left like everything else.
function fill(c, name = 'skin') {
  if (!c.defs.some((d) => d.includes(`id="${c.id(name)}"`))) {
    c.def(`<radialGradient id="${c.id(name)}" gradientUnits="userSpaceOnUse" cx="34" cy="28" r="58"><stop offset="0" stop-color="#FFE9A0"/><stop offset="0.4" stop-color="#FFB627"/><stop offset="1" stop-color="#B85F00"/></radialGradient>`);
  }
  return `url(#${c.id(name)})`;
}

// A finger, arm or leg along a polyline of points. Drawn twice, a darker stroke under a lighter
// one, so overlapping limbs keep a crease between them. Draw back-to-front.
function limb(c, pts, w = 6, { paint, edge = EDGE } = {}) {
  const d = `M${pts.map((p) => p.join(' ')).join(' L')}`;
  const p = paint ?? fill(c);
  return `<path d="${d}" stroke="${edge}" stroke-width="${w + 1.8}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${p}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// A filled skin shape (palm, foot, ear) with the same thin edge.
function shape(c, d, { paint } = {}) {
  return `<path d="${d}" fill="${paint ?? fill(c)}" stroke="${EDGE}" stroke-width="1.1" stroke-linejoin="round"/>`;
}

// A soft crease line on skin: knuckles, the line between a thumb and palm.
function crease(d, w = 1.2) {
  return `<path d="${d}" stroke="${EDGE}" ${CREASE} stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
}

module.exports = { EDGE, fill, limb, shape, crease };
