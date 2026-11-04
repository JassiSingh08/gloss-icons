// A sphere under the set's light, for every ball and round toy. Seams, panels and stitching are
// drawn on a real unit sphere and projected, so they wrap round the ball instead of sitting on it
// like a sticker, and every ball turns to the light the same way.
//
//   const ball = require('../src/parts/ball');
//   const b = ball.make(48, 50, 32, { x: 20, y: -30, z: 0 })   centre, radius, turn in degrees
//   b.body                       the silhouette, for a spec's body
//   b.fill(c, 'a', 'orange')     a radial gradient laid on the whole ball (userSpaceOnUse), so panels
//                                of different colours share one highlight
//   b.clip(c)                    a clip-path attribute that keeps markup on the ball
//   b.shade(c)                   a darkening towards the lower right, drawn over panels and seams
//   b.line(pts)                  the visible (front) part of a 3D polyline on the unit sphere
//   b.poly(pts)                  a closed 3D polygon, points behind the ball pressed onto its rim
//   ball.ring(axis, h)           the circle on the sphere where dot(p, axis) = h (h = 0: great circle)
//   ball.arc(p, q, steps)        the great-circle arc between two points
//   ball.seam(b)                 the two-lobed seam of a tennis ball or baseball
//   b.stitches(pts)              V stitches across a seam, front side only
//
// Screen axes: x right, y down, z towards the viewer. The turn rotates about x, then y, then z.

const n = (v) => +v.toFixed(2);
const n1 = (v) => +v.toFixed(1);
const norm = ([x, y, z]) => {
  const l = Math.hypot(x, y, z);
  return [x / l, y / l, z / l];
};
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

function circle(cx, cy, r) {
  return `M${n(cx)} ${n(cy - r)} A${r} ${r} 0 1 1 ${n(cx - 0.01)} ${n(cy - r)} Z`;
}

function rotator({ x = 0, y = 0, z = 0 } = {}) {
  const [a, b, g] = [x, y, z].map((d) => (d * Math.PI) / 180);
  return ([px, py, pz]) => {
    let y1 = py * Math.cos(a) - pz * Math.sin(a);
    let z1 = py * Math.sin(a) + pz * Math.cos(a);
    const x2 = px * Math.cos(b) + z1 * Math.sin(b);
    const z2 = -px * Math.sin(b) + z1 * Math.cos(b);
    const x3 = x2 * Math.cos(g) - y1 * Math.sin(g);
    const y3 = x2 * Math.sin(g) + y1 * Math.cos(g);
    return [x3, y3, z2];
  };
}

function ring(axis, h = 0, steps = 72) {
  const a = norm(axis);
  const helper = Math.abs(a[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  const u = norm(cross(a, helper));
  const v = cross(a, u);
  const r = Math.sqrt(Math.max(0, 1 - h * h));
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * Math.PI * 2;
    return [0, 1, 2].map((k) => a[k] * h + r * (u[k] * Math.cos(t) + v[k] * Math.sin(t)));
  });
}

function arc(p, q, steps = 8) {
  const a = norm(p), b = norm(q);
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    return norm([0, 1, 2].map((k) => a[k] * (1 - t) + b[k] * t));
  });
}

// The two-lobed seam of a tennis ball or baseball (a + b = 1 keeps it on the sphere).
function seam(b = 0.3, steps = 120) {
  const a = 1 - b;
  const c = 2 * Math.sqrt(a * b);
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * Math.PI * 2;
    return [a * Math.cos(t) + b * Math.cos(3 * t), a * Math.sin(t) - b * Math.sin(3 * t), c * Math.sin(2 * t)];
  });
}

function make(cx, cy, r, turn = {}) {
  const rot = rotator(turn);
  const body = circle(cx, cy, r);
  const at = (p) => {
    const [x, y, z] = rot(p);
    return [cx + x * r, cy + y * r, z];
  };
  // Behind the ball: pressed out to the rim, so a panel that wraps round the edge stays closed.
  const rim = (p) => {
    const [x, y, z] = rot(p);
    if (z >= 0) return [cx + x * r, cy + y * r];
    const l = Math.hypot(x, y) || 1;
    return [cx + (x / l) * r, cy + (y / l) * r];
  };
  return {
    cx, cy, r, body, at, rot,
    fill(c, name, palette, fx = 0.36, fy = 0.5) {
      const [a, b, d, e] = typeof palette === 'string' ? c.ramp(palette) : palette;
      c.def(`<radialGradient id="${c.id(name)}" gradientUnits="userSpaceOnUse" cx="${n(cx - fx * r)}" cy="${n(cy - fy * r)}" r="${n(1.9 * r)}"><stop offset="0" stop-color="${a}"/><stop offset="0.35" stop-color="${b}"/><stop offset="0.75" stop-color="${d}"/><stop offset="1" stop-color="${e}"/></radialGradient>`);
      return `url(#${c.id(name)})`;
    },
    clip(c, name = 'ballclip') {
      c.def(`<clipPath id="${c.id(name)}"><path d="${body}"/></clipPath>`);
      return `clip-path="url(#${c.id(name)})"`;
    },
    shade(c, strength = 0.38, name = 'ballshade') {
      c.def(`<radialGradient id="${c.id(name)}" gradientUnits="userSpaceOnUse" cx="${n(cx - 0.3 * r)}" cy="${n(cy - 0.38 * r)}" r="${n(1.5 * r)}"><stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="0.8" stop-color="#000" stop-opacity="${n(strength * 0.55)}"/><stop offset="1" stop-color="#000" stop-opacity="${strength}"/></radialGradient>`);
      return `<path d="${body}" fill="url(#${c.id(name)})"/>`;
    },
    line(pts) {
      let d = '';
      let pen = false;
      for (const p of pts) {
        const [x, y, z] = at(p);
        if (z < -0.02) { pen = false; continue; }
        d += `${pen ? 'L' : 'M'}${n1(x)} ${n1(y)} `;
        pen = true;
      }
      return d.trim();
    },
    poly(pts) {
      return `M${pts.map((p) => rim(p).map(n1).join(' ')).join(' L')} Z`;
    },
    // Short stitches across a seam: each is a tick perpendicular to the seam, on the front only.
    stitches(pts, every = 3, len = 0.09, minZ = 0.12) {
      let d = '';
      for (let i = 1; i < pts.length - 1; i += every) {
        const p = rot(pts[i]);
        if (p[2] < minZ) continue;
        const a = rot(pts[i - 1]), b = rot(pts[i + 1]);
        const t = norm([b[0] - a[0], b[1] - a[1], b[2] - a[2]]);
        const s = norm(cross(p, t));
        const e = (k) => [cx + (p[0] + s[0] * k + t[0] * len * 0.35) * r, cy + (p[1] + s[1] * k + t[1] * len * 0.35) * r];
        const f = (k) => [cx + (p[0] + s[0] * k - t[0] * len * 0.35) * r, cy + (p[1] + s[1] * k - t[1] * len * 0.35) * r];
        const [x0, y0] = e(-len), [x1, y1] = f(0), [x2, y2] = e(len);
        d += `M${n1(x0)} ${n1(y0)} L${n1(x1)} ${n1(y1)} L${n1(x2)} ${n1(y2)} `;
      }
      return d.trim();
    },
  };
}

// Sticks, bats, rods and handles go with the balls: a stroke turned into a filled silhouette, so it
// can be a spec's body and take the engine's outline and gloss.
//   ball.curve([p0, c1, c2, p1, c1, c2, p2 …], steps)   points along chained cubic Béziers
//   ball.band(points, width)                            a closed outline round them, round ends;
//                                                       width may be a function of t in 0…1
function curve(p, steps = 16) {
  const out = [p[0]];
  for (let i = 0; i + 3 < p.length; i += 3) {
    const [a, b, c, d] = [p[i], p[i + 1], p[i + 2], p[i + 3]];
    for (let k = 1; k <= steps; k++) {
      const t = k / steps, u = 1 - t;
      out.push([0, 1].map((j) => u * u * u * a[j] + 3 * u * u * t * b[j] + 3 * u * t * t * c[j] + t * t * t * d[j]));
    }
  }
  return out;
}

function band(pts, width) {
  const w = typeof width === 'function' ? width : () => width;
  const L = [], R = [];
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const nx = -(b[1] - a[1]) / l, ny = (b[0] - a[0]) / l;
    const h = w(i / (pts.length - 1)) / 2;
    L.push([p[0] + nx * h, p[1] + ny * h]);
    R.push([p[0] - nx * h, p[1] - ny * h]);
  });
  const f = ([x, y]) => `${n1(x)} ${n1(y)}`;
  const h0 = n1(w(0) / 2), h1 = n1(w(1) / 2);
  R.reverse();
  return `M${f(L[0])} L${L.slice(1).map(f).join(' L')} A${h1} ${h1} 0 0 0 ${f(R[0])} L${R.slice(1).map(f).join(' L')} A${h0} ${h0} 0 0 0 ${f(L[0])} Z`;
}

// A medal: a struck disc hanging from a two-strap ribbon. `ramp` is the metal's 4-stop ramp,
// `emblem(cx, cy)` returns the markup struck on the face.
//   const m = ball.medal({ ramp, emblem }); spec.body = m.body; draw: (c) => m.draw(c)
function medal({ cx = 48, cy = 61, r = 22, ramp, straps = ['navy', 'red'], emblem = () => '' }) {
  const disc = make(cx, cy, r);
  const inner = make(cx, cy, r - 4.2);
  return {
    body: disc.body,
    shine: [n(cx - r * 0.55), n(cy - r * 0.52), -42],
    draw(c) {
      const left = c.linear('strapl', straps[0], [0, 0, 1, 1], 1, 3);
      const right = c.linear('strapr', straps[1], [0, 0, 1, 1], 0, 2);
      return `<path d="M20 9 L37 9 L56 46 L43 48 Z" fill="${left}"/>
        <path d="M76 9 L59 9 L40 46 L53 48 Z" fill="${right}"/>
        <path d="M66.5 9 L69.5 9 L50.5 47.2 L47.5 47 Z" fill="#fff" opacity=".7"/>
        <path d="${disc.body}" fill="${disc.fill(c, 'a', ramp)}"/>
        <path d="${inner.body}" fill="${inner.fill(c, 'face', [ramp[1], ramp[1], ramp[2], ramp[2]], -0.3, -0.3)}" stroke="${ramp[3]}" stroke-opacity=".45" stroke-width="1.4"/>
        <path d="${inner.body}" fill="none" stroke="${ramp[0]}" stroke-opacity=".7" stroke-width="1" transform="translate(.7 1)"/>
        ${emblem(cx, cy, ramp)}`;
    },
  };
}

// Any absolute path (M L H V Q C A Z) turned by deg about (ox, oy), scaled by s, and moved so
// (ox, oy) lands on (x, y). Arcs keep their radii (times s) and turn with the path.
function turn(d, { deg = 0, s = 1, ox = 48, oy = 48, x = ox, y = oy } = {}) {
  const a = (deg * Math.PI) / 180;
  const P = (px, py) => {
    const dx = (px - ox) * s, dy = (py - oy) * s;
    return `${n(x + dx * Math.cos(a) - dy * Math.sin(a))} ${n(y + dx * Math.sin(a) + dy * Math.cos(a))}`;
  };
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e-?\d+)?/g) || [];
  let out = '', cmd = '', args = [], cx = 0, cy = 0;
  const flush = () => {
    if (!cmd) return;
    if (cmd === 'Z') { out += 'Z '; return; }
    if (cmd === 'H') { args = args.flatMap((v) => [v, cy]); cmd = 'L'; }
    if (cmd === 'V') { args = args.flatMap((v) => [cx, v]); cmd = 'L'; }
    if (cmd === 'A') {
      for (let i = 0; i < args.length; i += 7) {
        const [rx, ry, r, l, sw, ex, ey] = args.slice(i, i + 7);
        out += `A${n(rx * s)} ${n(ry * s)} ${n(r + deg)} ${l} ${sw} ${P(ex, ey)} `;
        cx = ex; cy = ey;
      }
      return;
    }
    const pts = [];
    for (let i = 0; i < args.length; i += 2) { pts.push(P(args[i], args[i + 1])); cx = args[i]; cy = args[i + 1]; }
    out += `${cmd}${pts.join(' ')} `;
  };
  for (const t of tokens) {
    if (/[A-Za-z]/.test(t)) { flush(); cmd = t; args = []; } else args.push(+t);
  }
  flush();
  return out.trim();
}
// The same move for one point, e.g. to place a shine.
function turnPt([px, py], { deg = 0, s = 1, ox = 48, oy = 48, x = ox, y = oy } = {}) {
  const a = (deg * Math.PI) / 180;
  const dx = (px - ox) * s, dy = (py - oy) * s;
  return [n(x + dx * Math.cos(a) - dy * Math.sin(a)), n(y + dx * Math.sin(a) + dy * Math.cos(a))];
}

// The outline of any shape given only as an inside(x, y) test, holes included (they come out wound
// the other way, so they stay open under the clip's nonzero rule). For shapes that cross
// themselves, like a knot, whose body must be the outer edge only.
function silhouette(inside, { step = 0.5, box = [0, 0, 96, 96], tol = 0.3 } = {}) {
  const [x0, y0, x1, y1] = box;
  const W = Math.ceil((x1 - x0) / step), H = Math.ceil((y1 - y0) / step);
  const grid = new Uint8Array((W + 2) * (H + 2));
  const at = (i, j) => grid[(j + 1) * (W + 2) + (i + 1)];
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) grid[(j + 1) * (W + 2) + (i + 1)] = inside(x0 + (i + 0.5) * step, y0 + (j + 0.5) * step) ? 1 : 0;
  const next = new Map();
  const add = (a, b) => { const k = a.join(); (next.get(k) || next.set(k, []).get(k)).push(b); };
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    if (!at(i, j)) continue;
    if (!at(i, j - 1)) add([i, j], [i + 1, j]);
    if (!at(i + 1, j)) add([i + 1, j], [i + 1, j + 1]);
    if (!at(i, j + 1)) add([i + 1, j + 1], [i, j + 1]);
    if (!at(i - 1, j)) add([i, j + 1], [i, j]);
  }
  const rdp = (pts) => {
    if (pts.length < 3) return pts;
    const [a, b] = [pts[0], pts[pts.length - 1]];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    let far = 0, k = 0;
    for (let i = 1; i < pts.length - 1; i++) {
      const d = Math.abs((b[0] - a[0]) * (a[1] - pts[i][1]) - (a[0] - pts[i][0]) * (b[1] - a[1])) / L;
      if (d > far) { far = d; k = i; }
    }
    return far > tol ? [...rdp(pts.slice(0, k + 1)).slice(0, -1), ...rdp(pts.slice(k))] : [a, b];
  };
  let d = '';
  for (const [k0] of next) {
    if (!next.get(k0)?.length) continue;
    const loop = [];
    let cur = k0.split(',').map(Number);
    while (next.get(cur.join())?.length) {
      const nx = next.get(cur.join()).shift();
      loop.push([x0 + ((cur[0] + nx[0]) / 2) * step, y0 + ((cur[1] + nx[1]) / 2) * step]);
      cur = nx;
    }
    if (loop.length < 4) continue;
    const half = Math.floor(loop.length / 2);
    const pts = [...rdp(loop.slice(0, half + 1)).slice(0, -1), ...rdp([...loop.slice(half), loop[0]]).slice(0, -1)];
    d += `M${pts.map(([x, y]) => `${n1(x)} ${n1(y)}`).join(' L')} Z `;
  }
  return d.trim();
}

module.exports = { silhouette, turn, turnPt, medal, curve, band, make, ring, arc, seam, rotator, circle, norm, cross, dot };
