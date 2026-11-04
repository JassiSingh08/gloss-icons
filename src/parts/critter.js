// Shared parts for the animals (birds, reptiles, sea life, bugs): glossy ink eyes, secondary
// parts with the same thin edge the engine gives the body, ink legs that still read at 64 px.
//
//   const k = require('../src/parts/critter');
//   k.part(c, d, fill, 'orange') + k.eye(40, 30) + k.legs(['M40 78 L38 86'])
const n = (v) => +v.toFixed(2);

// Ellipse as a path, so it can go in a body list or a clip.
function ellipse(cx, cy, rx, ry = rx, rot = 0) {
  const t = (rot * Math.PI) / 180;
  const dx = rx * Math.cos(t), dy = rx * Math.sin(t);
  return `M${n(cx + dx)} ${n(cy + dy)} A${rx} ${ry} ${rot} 1 1 ${n(cx - dx)} ${n(cy - dy)} A${rx} ${ry} ${rot} 1 1 ${n(cx + dx)} ${n(cy + dy)} Z`;
}
const circle = (cx, cy, r) => ellipse(cx, cy, r, r);

// A part outside the body (beak, fin, claw, wing): its own fill and the engine's thin edge.
function part(c, d, fill, palette, extra = '') {
  return `<path d="${d}" fill="${fill}" stroke="${c.ramp(palette)[3]}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"${extra}/>`;
}

// A small white glint, for parts that sit outside the body and so miss the engine's shine.
const glint = (x, y, rx = 3, ry = 1.4, rot = -40, op = 0.75) =>
  `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" opacity="${op}" transform="rotate(${rot} ${x} ${y})"/>`;

// Glossy ink eye with one catchlight up-left.
function eye(x, y, r = 3.2, ink = '#14081F') {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}"/><circle cx="${n(x - r * 0.36)}" cy="${n(y - r * 0.38)}" r="${n(r * 0.36)}" fill="#fff" opacity=".9"/>`;
}

// Eye with a coloured iris ring (eagle, owl, crocodile, dark birds where ink would vanish).
function irisEye(x, y, r, iris, ink = '#14081F', pupil = 0.55) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${iris}" stroke="${ink}" stroke-width="1"/>${eye(x, y, n(r * pupil), ink)}`;
}

// Heavy upper lid across an eye: the knowing, grown-up look. tilt > 0 drops the outer end.
function lid(x, y, r, fill, tilt = 0) {
  return `<path d="M${n(x - r - 0.6)} ${n(y - r * 0.15 - tilt)} A${r + 0.6} ${r + 0.6} 0 0 1 ${n(x + r + 0.6)} ${n(y - r * 0.15 + tilt)} Z" fill="${fill}"/>`;
}

// Round-capped strokes: legs, antennae, whiskers. Default is a 3 px deep-ink line.
function legs(paths, ink = '#14081F', w = 3) {
  const d = Array.isArray(paths) ? paths.join(' ') : paths;
  return `<path d="${d}" stroke="${ink}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// A plain stroke with opacity, for creases, feather lines and seams.
function line(d, color, w = 1.4, op = 0.5) {
  return `<path d="${d}" stroke="${color}" stroke-opacity="${op}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// Bird foot: a leg down to (x, y) and three toes forward (dir -1 = facing left).
function foot(x, y, top, dir = -1, ink = '#14081F', w = 2.8) {
  const s = dir;
  return legs([`M${x} ${top} L${x} ${y}`, `M${x} ${y} L${x + 5 * s} ${y + 0.6} M${x} ${y} L${x + 3.2 * s} ${y + 2.4} M${x} ${y} L${x - 2.6 * s} ${y + 1}`], ink, w);
}

// Shift an absolute path (M L C Q S T Z only, no arcs) by dx, dy: for nudging a body to the ground
// line without retyping it. Pair it with <g transform="translate(dx dy)"> around the art.
const move = (d, dx, dy) => d.replace(/(-?\d*\.?\d+)[ ,](-?\d*\.?\d+)/g, (m, x, y) => `${n(+x + dx)} ${n(+y + dy)}`);

// Points along a chain of cubic segments [[p0, p1, p2, p3], …], each p an [x, y].
function sample(segs, per = 24) {
  const pts = [];
  segs.forEach(([a, b, c, d], si) => {
    for (let i = si ? 1 : 0; i <= per; i++) {
      const t = i / per, u = 1 - t;
      pts.push([0, 1].map((j) => u * u * u * a[j] + 3 * u * u * t * b[j] + 3 * u * t * t * c[j] + t * t * t * d[j]));
    }
  });
  return pts;
}

// A closed outline round a centre line (worms, tails, tentacles), so a stroked shape can be a
// body with an outline. width(t) gives the full width at t in 0..1; the ends are rounded.
function tube(segs, width = () => 10) {
  const pts = sample(segs);
  const side = (s) => pts.map((p, i) => {
    const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, pts.length - 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    const w = width(i / (pts.length - 1)) / 2;
    return [p[0] - (s * dy * w) / len, p[1] + (s * dx * w) / len];
  });
  const L = side(1), R = side(-1).reverse();
  const f = ([x, y]) => `${n(x)} ${n(y)}`;
  const r0 = n(width(0) / 2), r1 = n(width(1) / 2);
  return `M${f(L[0])} ${L.slice(1).map((p) => `L${f(p)}`).join(' ')} A${r1} ${r1} 0 0 0 ${f(R[0])} ${R.slice(1).map((p) => `L${f(p)}`).join(' ')} A${r0} ${r0} 0 0 0 ${f(L[0])} Z`;
}

// Short rings across a tube at even steps, for worm and caterpillar segments.
function rings(segs, width, count, from = 0.08, to = 0.92) {
  const pts = sample(segs);
  let d = '';
  for (let k = 0; k < count; k++) {
    const t = from + ((to - from) * k) / (count - 1);
    const i = Math.round(t * (pts.length - 1));
    const a = pts[Math.max(i - 1, 0)], b = pts[Math.min(i + 1, pts.length - 1)], p = pts[i];
    const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    const w = (width(t) / 2) * 0.82;
    d += `M${n(p[0] - (dy * w) / len)} ${n(p[1] + (dx * w) / len)} L${n(p[0] + (dy * w) / len)} ${n(p[1] - (dx * w) / len)} `;
  }
  return d;
}

// A log spiral winding inward from radius r0 at angle a0 (radians), for shells.
function spiral(cx, cy, r0, turns, a0 = 0, tight = 0.28, dir = 1) {
  let d = '';
  for (let i = 0; i <= turns * 36; i++) {
    const t = (i / 36) * Math.PI * 2;
    const r = r0 * Math.exp(-tight * t);
    d += `${i ? 'L' : 'M'}${n(cx + r * Math.cos(a0 + dir * t))} ${n(cy + r * Math.sin(a0 + dir * t))} `;
  }
  return d;
}

module.exports = { sample, tube, rings, spiral, n, move, ellipse, circle, part, glint, eye, irisEye, lid, legs, line, foot };
