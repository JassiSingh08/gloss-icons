// Shared parts for the sweets, drinks, dishware and landscape icons: clear glass that matches
// cheers, liquid, frosting drips, scoops, globes and a few path tools.
//
//   const g = require('../src/parts/glass');
//
// Path helpers return path data; everything else returns SVG markup.

const n = (v) => +v.toFixed(2);
const K = 0.5523;

// Turns, scales and moves a path drawn level around (0,0). Every number pair is treated as a
// point, so only use it on M/L/C/Q/Z paths (arc flags would be mangled).
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
  const p = (x, y) => `${n(x)} ${n(y)}`;
  if (!ccw) {
    return `M${p(cx - rx, cy)} C${p(cx - rx, cy - ky)} ${p(cx - kx, cy - ry)} ${p(cx, cy - ry)} C${p(cx + kx, cy - ry)} ${p(cx + rx, cy - ky)} ${p(cx + rx, cy)} C${p(cx + rx, cy + ky)} ${p(cx + kx, cy + ry)} ${p(cx, cy + ry)} C${p(cx - kx, cy + ry)} ${p(cx - rx, cy + ky)} ${p(cx - rx, cy)} Z`;
  }
  return `M${p(cx - rx, cy)} C${p(cx - rx, cy + ky)} ${p(cx - kx, cy + ry)} ${p(cx, cy + ry)} C${p(cx + kx, cy + ry)} ${p(cx + rx, cy + ky)} ${p(cx + rx, cy)} C${p(cx + rx, cy - ky)} ${p(cx + kx, cy - ry)} ${p(cx, cy - ry)} C${p(cx - kx, cy - ry)} ${p(cx - rx, cy - ky)} ${p(cx - rx, cy)} Z`;
}
// Far (top) half of an ellipse, left to right, as a fragment without the M.
const topHalf = (cx, cy, rx, ry) =>
  `C${n(cx - rx)} ${n(cy - ry * K)} ${n(cx - rx * K)} ${n(cy - ry)} ${n(cx)} ${n(cy - ry)} C${n(cx + rx * K)} ${n(cy - ry)} ${n(cx + rx)} ${n(cy - ry * K)} ${n(cx + rx)} ${n(cy)}`;
// Near (bottom) half, right to left, as a fragment without the M (continues a path at the right).
const nearBack = (cx, cy, rx, ry) =>
  `C${n(cx + rx)} ${n(cy + ry * K)} ${n(cx + rx * K)} ${n(cy + ry)} ${n(cx)} ${n(cy + ry)} C${n(cx - rx * K)} ${n(cy + ry)} ${n(cx - rx)} ${n(cy + ry * K)} ${n(cx - rx)} ${n(cy)}`;
// Near half left to right with its own M, for strokes along a rim.
const nearHalf = (cx, cy, rx, ry) =>
  `M${n(cx - rx)} ${n(cy)} C${n(cx - rx)} ${n(cy + ry * K)} ${n(cx - rx * K)} ${n(cy + ry)} ${n(cx)} ${n(cy + ry)} C${n(cx + rx * K)} ${n(cy + ry)} ${n(cx + rx)} ${n(cy + ry * K)} ${n(cx + rx)} ${n(cy)}`;
// A cylinder seen from a little above: top ellipse at y0, bottom ellipse at y1.
const cylinder = (cx, y0, y1, rx, ry) => `M${n(cx - rx)} ${y0} ${topHalf(cx, y0, rx, ry)} L${n(cx + rx)} ${y1} ${nearBack(cx, y1, rx, ry)} Z`;

// The top edge of a row of overlapping scoops [[cx, cy, r], …] listed left to right, from the left
// scoop's crossing with the line y to the right one's, as a path starting with M. Close it with
// whatever sits underneath (a cup, a cone).
function crown(list, y) {
  const side = ([cx, cy, r], s) => [cx + s * Math.sqrt(Math.max(0, r * r - (y - cy) ** 2)), y];
  const upper = (a, b) => {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const d = Math.hypot(dx, dy);
    const l = (a[2] * a[2] - b[2] * b[2] + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, a[2] * a[2] - l * l));
    const mx = a[0] + (dx * l) / d;
    const my = a[1] + (dy * l) / d;
    const p = [mx + (dy * h) / d, my - (dx * h) / d];
    const q = [mx - (dy * h) / d, my + (dx * h) / d];
    return p[1] < q[1] ? p : q;
  };
  let from = side(list[0], -1);
  let d = `M${n(from[0])} ${n(from[1])}`;
  list.forEach((b, i) => {
    const to = i < list.length - 1 ? upper(b, list[i + 1]) : side(b, 1);
    const a0 = Math.atan2(from[1] - b[1], from[0] - b[0]);
    let a1 = Math.atan2(to[1] - b[1], to[0] - b[0]);
    while (a1 < a0) a1 += Math.PI * 2;
    d += ` A${b[2]} ${b[2]} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${n(to[0])} ${n(to[1])}`;
    from = to;
  });
  return d;
}

// Icing or caramel over the top of a cylinder: the top ellipse, then the near rim walked right to
// left with a rounded drip of each length in lens (0 for none).
function drips(cx, cy, rx, ry, lens, w = 2.6) {
  const P = (t) => [cx + rx * Math.cos(t), cy + ry * Math.sin(t)];
  const N = lens.length;
  let d = `M${n(cx - rx)} ${n(cy)} ${topHalf(cx, cy, rx, ry)}`;
  for (let i = 0; i < N; i++) {
    const [x, y] = P(((i + 0.5) / N) * Math.PI);
    const L = lens[i];
    if (L > 0) {
      d += ` L${n(x + w)} ${n(y)} L${n(x + w)} ${n(y + L)} C${n(x + w)} ${n(y + L + w * 1.35)} ${n(x - w)} ${n(y + L + w * 1.35)} ${n(x - w)} ${n(y + L)} L${n(x - w)} ${n(y)}`;
    }
    const [bx, by] = P(((i + 1) / N) * Math.PI);
    d += ` L${n(bx)} ${n(by)}`;
  }
  return `${d} Z`;
}

// Clear glass, the same as cheers: a pale sky fall at low opacity, so the tile shows through.
const glassFill = (c) => c.linear('glass', 'sky', [0, 0, 1, 1], 0, 2);
const pane = (c, d, o = 0.42) => `<path d="${d}" fill="${glassFill(c)}" fill-opacity="${o}"/>`;
// Solid clear parts (a stem, a thick base) read a little whiter than the bowl.
const solid = (d, o = 0.7) => `<path d="${d}" fill="#E6F6FF" fill-opacity="${o}"/>`;
// White reflections on glass: a list of path strings.
const gleam = (paths, w = 1.6, o = 0.7) =>
  `<g fill="none" stroke="#fff" stroke-opacity="${o}" stroke-width="${w}" stroke-linecap="round">${paths.map((p) => `<path d="${p}"/>`).join('')}</g>`;
// Bubbles rising in a drink: [[x, y, r], …].
const bubbles = (list, o = 0.75) =>
  `<g fill="none" stroke="#fff" stroke-opacity="${o}" stroke-width="1">${list.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>`;
// Four-point sparkle, like the one over cheers.
const spark = (x, y, s, fill = '#FFF3A6') =>
  `<path d="M${x} ${n(y - s)} Q${n(x + s * 0.18)} ${n(y - s * 0.18)} ${n(x + s)} ${y} Q${n(x + s * 0.18)} ${n(y + s * 0.18)} ${x} ${n(y + s)} Q${n(x - s * 0.18)} ${n(y + s * 0.18)} ${n(x - s)} ${y} Q${n(x - s * 0.18)} ${n(y - s * 0.18)} ${x} ${n(y - s)} Z" fill="${fill}"/>`;

// The edge secondary parts get by hand (the engine only outlines `body`).
const edge = (ink, w = 1.2, o = 0.55) => `stroke="${ink}" stroke-opacity="${o}" stroke-width="${w}" stroke-linejoin="round"`;

// Wisps of steam, like the coffee mug's.
const steam = (wisps, opacity = 0.75, w = 3) =>
  `<g fill="none" stroke="#fff" stroke-opacity="${opacity}" stroke-width="${w}" stroke-linecap="round">${wisps
    .map(([x, y, h = 14]) => `<path d="M${x} ${y} C${x - 4} ${n(y - h * 0.35)} ${x + 4} ${n(y - h * 0.65)} ${x} ${y - h}"/>`)
    .join('')}</g>`;

// The sphere every globe shares, so they all match globe.js: same size, sea and land lighting.
const GLOBE = 'M48 16 A32 32 0 1 1 47.99 16 Z';
function globe(c, land) {
  const sea = c.radial('sea', 'blue', 0.32, 0.25);
  const fill = c.radial('land', 'green', 0.3, 0.2);
  c.def(`<clipPath id="${c.id('ball')}"><path d="${GLOBE}"/></clipPath>`);
  return `<path d="${GLOBE}" fill="${sea}"/>
      <g clip-path="url(#${c.id('ball')})" fill="${fill}">${land}</g>`;
}

module.exports = {
  n, place, placePt, ellipse, topHalf, nearBack, nearHalf, cylinder, crown, drips,
  glassFill, pane, solid, gleam, bubbles, spark, edge, steam, GLOBE, globe,
};
