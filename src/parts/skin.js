// Shared skin for hands, arms and people. Skin is the same yellow as the smiley heads, so a hand
// next to a face reads as the same person.
//
//   const s = require('../src/parts/skin');
//   s.fill(c)                                 the skin gradient (lit top left, whole icon)
//   s.fill(c, 'hand2', [60, 40])              a second gradient lit from another point, for a hand
//                                             low in the frame that would otherwise go dark
//   s.union([s.capsule([30, 70], [34, 40], 8), s.ellipse(40, 60, 12, 14)])
//                                             one smooth outline around overlapping parts: build a
//                                             hand from a palm and finger capsules, use it as the
//                                             icon's body and paint it once
//   s.limb(c, pts, w)                         a round-capped stroke, edge then fill (thin parts)
//   s.shape(c, d)                             a filled skin shape with the thin edge
//   s.crease(d)                               a soft line on skin: between fingers, knuckles
const polygonClipping = require('polygon-clipping');

const RAMP = ['#FFF7A8', '#FFD82E', '#E9AE0C', '#8A5A00'];
const EDGE = '#7A4E00';

function fill(c, name = 'skin', [cx, cy] = [34, 28], r = 62) {
  if (!c.defs.some((d) => d.includes(`id="${c.id(name)}"`))) {
    c.def(`<radialGradient id="${c.id(name)}" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r}"><stop offset="0" stop-color="${RAMP[0]}"/><stop offset="0.35" stop-color="${RAMP[1]}"/><stop offset="0.8" stop-color="${RAMP[2]}"/><stop offset="1" stop-color="${RAMP[3]}"/></radialGradient>`);
  }
  return `url(#${c.id(name)})`;
}

// Polygons for union(): arrays of [x, y].
// A segment with round ends, from a to b; w0/w1 taper it (a finger is wider at the knuckle).
function capsule([x0, y0], [x1, y1], w0, w1 = w0, n = 10) {
  const a = Math.atan2(y1 - y0, x1 - x0);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = a + Math.PI / 2 - (i * Math.PI) / n;
    pts.push([x1 + (Math.cos(t) * w1) / 2, y1 + (Math.sin(t) * w1) / 2]);
  }
  for (let i = 0; i <= n; i++) {
    const t = a - Math.PI / 2 - (i * Math.PI) / n;
    pts.push([x0 + (Math.cos(t) * w0) / 2, y0 + (Math.sin(t) * w0) / 2]);
  }
  return pts;
}

function ellipse(cx, cy, rx, ry, rot = 0, n = 28) {
  const r = (rot * Math.PI) / 180;
  return Array.from({ length: n }, (_, i) => {
    const t = (i / n) * Math.PI * 2;
    const x = Math.cos(t) * rx, y = Math.sin(t) * ry;
    return [cx + x * Math.cos(r) - y * Math.sin(r), cy + x * Math.sin(r) + y * Math.cos(r)];
  });
}

// One outline around all the parts. Corners are eased with quadratic curves through the edge
// midpoints, so joins between fingers stay as soft creases rather than sharp notches.
function union(polys) {
  const result = polygonClipping.union(...polys.map((p) => [p]));
  const f = (v) => +v.toFixed(2);
  return result
    .flatMap((poly) => poly)
    .map((ring) => {
      const pts = ring.slice(0, -1);
      const mid = (p, q) => [f((p[0] + q[0]) / 2), f((p[1] + q[1]) / 2)];
      const m0 = mid(pts[pts.length - 1], pts[0]);
      let d = `M${m0[0]} ${m0[1]}`;
      for (let i = 0; i < pts.length; i++) {
        const m = mid(pts[i], pts[(i + 1) % pts.length]);
        d += ` Q${f(pts[i][0])} ${f(pts[i][1])} ${m[0]} ${m[1]}`;
      }
      return `${d} Z`;
    })
    .join(' ');
}

// Thin parts drawn as strokes, edge then fill, so overlaps keep a crease. Draw back-to-front.
function limb(c, pts, w = 6, { paint, edge = EDGE } = {}) {
  const d = `M${pts.map((p) => p.join(' ')).join(' L')}`;
  const p = paint ?? fill(c);
  return `<path d="${d}" stroke="${edge}" stroke-width="${w + 1.8}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${p}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function shape(c, d, { paint } = {}) {
  return `<path d="${d}" fill="${paint ?? fill(c)}" stroke="${EDGE}" stroke-opacity=".6" stroke-width="1.1" stroke-linejoin="round"/>`;
}

function crease(d, w = 1.3) {
  return `<path d="${d}" stroke="${EDGE}" stroke-opacity=".45" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
}

module.exports = { RAMP, EDGE, fill, capsule, ellipse, union, limb, shape, crease };
