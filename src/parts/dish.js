// Shared parts for the prepared and Asian food icons: bowls, plates, steam, chopsticks, rice,
// and two path tools (turning a path drawn level, and the outline of a cluster of balls).
//
//   const d = require('../src/parts/dish');
//
// Path helpers return path data; everything else returns SVG markup.

const n = (v) => +v.toFixed(2);
const K = 0.5523;

// Turns and moves a path drawn level around (0,0). Every number pair is treated as a point, so
// only use it on M/L/C/Q/Z paths (arc flags would be mangled).
function place(d, angle, [ax, ay], scale = 1) {
  const a = (angle * Math.PI) / 180;
  const cos = Math.cos(a) * scale;
  const sin = Math.sin(a) * scale;
  return d.replace(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g, (_, x, y) => `${n(ax + x * cos - y * sin)} ${n(ay + x * sin + y * cos)}`);
}
const placePt = (x, y, angle, at, scale = 1) => place(`${x} ${y}`, angle, at, scale).split(' ').map(Number);

// A closed ellipse in cubics (safe to place()). ccw reverses it, to cut a hole out of a body.
function ellipse(cx, cy, rx, ry, ccw = false) {
  const kx = rx * K;
  const ky = ry * K;
  if (!ccw) {
    return `M${n(cx - rx)} ${n(cy)} C${n(cx - rx)} ${n(cy - ky)} ${n(cx - kx)} ${n(cy - ry)} ${n(cx)} ${n(cy - ry)} C${n(cx + kx)} ${n(cy - ry)} ${n(cx + rx)} ${n(cy - ky)} ${n(cx + rx)} ${n(cy)} C${n(cx + rx)} ${n(cy + ky)} ${n(cx + kx)} ${n(cy + ry)} ${n(cx)} ${n(cy + ry)} C${n(cx - kx)} ${n(cy + ry)} ${n(cx - rx)} ${n(cy + ky)} ${n(cx - rx)} ${n(cy)} Z`;
  }
  return `M${n(cx - rx)} ${n(cy)} C${n(cx - rx)} ${n(cy + ky)} ${n(cx - kx)} ${n(cy + ry)} ${n(cx)} ${n(cy + ry)} C${n(cx + kx)} ${n(cy + ry)} ${n(cx + rx)} ${n(cy + ky)} ${n(cx + rx)} ${n(cy)} C${n(cx + rx)} ${n(cy - ky)} ${n(cx + kx)} ${n(cy - ry)} ${n(cx)} ${n(cy - ry)} C${n(cx - kx)} ${n(cy - ry)} ${n(cx - rx)} ${n(cy - ky)} ${n(cx - rx)} ${n(cy)} Z`;
}
// The far (top) half of an ellipse, left to right, as a path fragment without the M.
const topHalf = (cx, cy, rx, ry) =>
  `C${n(cx - rx)} ${n(cy - ry * K)} ${n(cx - rx * K)} ${n(cy - ry)} ${n(cx)} ${n(cy - ry)} C${n(cx + rx * K)} ${n(cy - ry)} ${n(cx + rx)} ${n(cy - ry * K)} ${n(cx + rx)} ${n(cy)}`;
// The near (bottom) half, left to right, as a path (with M) for strokes.
const nearHalf = (cx, cy, rx, ry) =>
  `M${n(cx - rx)} ${n(cy)} C${n(cx - rx)} ${n(cy + ry * K)} ${n(cx - rx * K)} ${n(cy + ry)} ${n(cx)} ${n(cy + ry)} C${n(cx + rx * K)} ${n(cy + ry)} ${n(cx + rx)} ${n(cy + ry * K)} ${n(cx + rx)} ${n(cy)}`;

// Outline of a cluster of overlapping circles [[cx, cy, r], …] listed clockwise round the
// outside, each overlapping the next: arcs between the outer crossing points, one closed path.
function balls(list) {
  const gx = list.reduce((s, b) => s + b[0], 0) / list.length;
  const gy = list.reduce((s, b) => s + b[1], 0) / list.length;
  const cross = (a, b) => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const d = Math.hypot(dx, dy);
    const l = (a[2] * a[2] - b[2] * b[2] + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, a[2] * a[2] - l * l));
    const mx = a[0] + (dx * l) / d;
    const my = a[1] + (dy * l) / d;
    const p = [mx + (dy * h) / d, my - (dx * h) / d];
    const q = [mx - (dy * h) / d, my + (dx * h) / d];
    return Math.hypot(p[0] - gx, p[1] - gy) > Math.hypot(q[0] - gx, q[1] - gy) ? p : q;
  };
  const pts = list.map((b, i) => cross(b, list[(i + 1) % list.length]));
  let d = `M${n(pts[list.length - 1][0])} ${n(pts[list.length - 1][1])}`;
  list.forEach((b, i) => {
    const from = pts[(i + list.length - 1) % list.length];
    const to = pts[i];
    let a0 = Math.atan2(from[1] - b[1], from[0] - b[0]);
    let a1 = Math.atan2(to[1] - b[1], to[0] - b[0]);
    while (a1 < a0) a1 += Math.PI * 2;
    d += ` A${b[2]} ${b[2]} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${n(to[0])} ${n(to[1])}`;
  });
  return `${d} Z`;
}

// Convex hull of a point list as a closed polygon path: the silhouette of a block and the same
// block shifted down (a slab with thickness), or any other convex outline.
function hull(points) {
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const x = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [];
  const hi = [];
  for (const p of pts) {
    while (lo.length > 1 && x(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
    lo.push(p);
  }
  for (const p of [...pts].reverse()) {
    while (hi.length > 1 && x(hi[hi.length - 2], hi[hi.length - 1], p) <= 0) hi.pop();
    hi.push(p);
  }
  const all = lo.slice(0, -1).concat(hi.slice(0, -1));
  return `M${all.map(([a, b]) => `${n(a)} ${n(b)}`).join(' L')} Z`;
}
// Points round a rounded rectangle centred on (0,0), for hull() and place().
function roundRectPts(w, h, r, steps = 4) {
  const out = [];
  const corners = [[w / 2 - r, -h / 2 + r, -90], [w / 2 - r, h / 2 - r, 0], [-w / 2 + r, h / 2 - r, 90], [-w / 2 + r, -h / 2 + r, 180]];
  for (const [cx, cy, a0] of corners) {
    for (let i = 0; i <= steps; i++) {
      const a = ((a0 + (90 * i) / steps) * Math.PI) / 180;
      out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  }
  return out;
}
const turnPts = (pts, angle, [ax, ay]) => {
  const a = (angle * Math.PI) / 180;
  return pts.map(([x, y]) => [ax + x * Math.cos(a) - y * Math.sin(a), ay + x * Math.sin(a) + y * Math.cos(a)]);
};
const poly = (pts) => `M${pts.map(([a, b]) => `${n(a)} ${n(b)}`).join(' L')} Z`;

// A bowl seen a little from above. Rim centred on (cx, y); `top` replaces the far rim (a path
// fragment from the left rim point to the right one, e.g. a heap of food); `foot` is the ring
// it stands on. The bottom of the foot lands on y + depth + foot.
function bowl({ cx = 48, y = 46, rx = 34, ry = 8, depth = 30, foot = 4, footW = 0.36, top }) {
  const fx = rx * footW;
  const by = y + depth;
  return `M${n(cx - rx)} ${y} ${top ?? topHalf(cx, y, rx, ry)} C${n(cx + rx)} ${n(y + depth * 0.72)} ${n(cx + fx + 7)} ${n(by)} ${n(cx + fx)} ${n(by)} L${n(cx + fx + 1)} ${n(by + foot)} L${n(cx - fx - 1)} ${n(by + foot)} L${n(cx - fx)} ${n(by)} C${n(cx - fx - 7)} ${n(by)} ${n(cx - rx)} ${n(y + depth * 0.72)} ${n(cx - rx)} ${y} Z`;
}

// Wisps of steam, like the coffee mug's.
const steam = (wisps, opacity = 0.75, w = 3) =>
  `<g fill="none" stroke="#fff" stroke-opacity="${opacity}" stroke-width="${w}" stroke-linecap="round">${wisps
    .map(([x, y, h = 14]) => `<path d="M${x} ${y} C${x - 4} ${y - h * 0.35} ${x + 4} ${y - h * 0.65} ${x} ${y - h}"/>`)
    .join('')}</g>`;

// A pair of lacquered chopsticks from (x1,y1) to (x2,y2), the second one offset by (dx,dy).
function chopsticks(c, [x1, y1, x2, y2], [dx, dy] = [5, 2], palette = 'ember', w = 3.4) {
  const g = c.linear('chop', palette, [0, 0, 1, 1], 0, 2);
  const ink = c.ramp(palette)[3];
  const one = (ox, oy) => `<path d="M${x1 + ox} ${y1 + oy} L${x2 + ox} ${y2 + oy}" stroke="${ink}" stroke-opacity=".55" stroke-width="${w + 2}" stroke-linecap="round"/>
    <path d="M${x1 + ox} ${y1 + oy} L${x2 + ox} ${y2 + oy}" stroke="${g}" stroke-width="${w}" stroke-linecap="round"/>`;
  return one(0, 0) + one(dx, dy);
}

// Rice grains: small pale lozenges scattered over a heap (list of [x, y, angle]).
const grains = (list, fill = '#E4DDF2', len = 2.6, w = 1.5) =>
  `<g stroke="${fill}" stroke-width="${w}" stroke-linecap="round">${list
    .map(([x, y, a]) => {
      const r = (a * Math.PI) / 180;
      const dx = n(Math.cos(r) * len * 0.5);
      const dy = n(Math.sin(r) * len * 0.5);
      return `<path d="M${n(x - dx)} ${n(y - dy)} L${n(x + dx)} ${n(y + dy)}"/>`;
    })
    .join('')}</g>`;

// The edge secondary parts get by hand (the engine only outlines `body`).
const edge = (ink, w = 1.2, o = 0.55) => `stroke="${ink}" stroke-opacity="${o}" stroke-width="${w}" stroke-linejoin="round"`;

module.exports = { n, place, placePt, hull, roundRectPts, turnPts, poly, ellipse, topHalf, nearHalf, balls, bowl, steam, chopsticks, grains, edge };
