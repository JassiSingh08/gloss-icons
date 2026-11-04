// Shared parts for plants, fruit and vegetables: leaves, stems, calyxes, cluster outlines and
// the bird's nest, so every organic icon uses the same greens and the same leaf finish as rose,
// cherries and peach.
//
//   const L = require('../src/parts/leaf');
//   draw(c) { const k = L.kit(c); return k.stem('M48 60 C47 70 48 84') + k.leaf([48, 70], [70, 60]); }

const n = (v) => +v.toFixed(2);
const pt = (x, y) => `${n(x)} ${n(y)}`;

// Almond leaf from base to tip. w is the half-width as a share of the length; bend > 0 pushes the
// bulge to the left of the base→tip direction (in screen space) and curls the leaf.
function leafPath([bx, by], [tx, ty], w = 0.32, bend = 0) {
  const dx = tx - bx;
  const dy = ty - by;
  const L = Math.hypot(dx, dy);
  const ux = dx / L;
  const uy = dy / L;
  const nx = uy;
  const ny = -ux;
  const h = w * L * 1.33;
  const at = (t, off) => pt(bx + ux * L * t + nx * off, by + uy * L * t + ny * off);
  const a = h * (1 + bend);
  const b = -h * (1 - bend);
  return `M${pt(bx, by)} C${at(0.22, a)} ${at(0.7, a * 0.9)} ${pt(tx, ty)} C${at(0.7, b * 0.9)} ${at(0.22, b)} ${pt(bx, by)} Z`;
}

// Midrib of the same leaf, curving with it.
function veinPath([bx, by], [tx, ty], bend = 0, w = 0.32) {
  const dx = tx - bx;
  const dy = ty - by;
  const L = Math.hypot(dx, dy);
  const off = w * L * 0.5 * bend;
  const nx = dy / L;
  const ny = -dx / L;
  const ex = bx + dx * 0.88;
  const ey = by + dy * 0.88;
  return `M${pt(bx + dx * 0.06, by + dy * 0.06)} Q${pt(bx + dx * 0.5 + nx * off, by + dy * 0.5 + ny * off)} ${pt(ex, ey)}`;
}

// Moves every coordinate pair of a path made of absolute M/L/C/Q/S/T/Z commands (no arcs, no H/V).
function xform(d, { rotate = 0, cx = 48, cy = 48, scale = 1, sx = scale, sy = scale, dx = 0, dy = 0 } = {}) {
  const r = (rotate * Math.PI) / 180;
  const cos = Math.cos(r);
  const sin = Math.sin(r);
  let even = true;
  let px = 0;
  return d.replace(/-?\d*\.?\d+(?:e-?\d+)?/g, (m) => {
    const v = parseFloat(m);
    if (even) {
      px = v;
      even = false;
      return '\u0000';
    }
    even = true;
    const x = (px - cx) * sx;
    const y = (v - cy) * sy;
    return `${n(cx + dx + x * cos - y * sin)} ${n(cy + dy + x * sin + y * cos)}`;
  }).replace(/\u0000\s*/g, '');
}

// Ellipse as four cubics, so it can be rotated, joined or put in a body list.
function ellipse(cx, cy, rx, ry, rot = 0) {
  const k = 0.5523;
  const d = `M${cx + rx} ${cy} C${cx + rx} ${cy + ry * k} ${cx + rx * k} ${cy + ry} ${cx} ${cy + ry} C${cx - rx * k} ${cy + ry} ${cx - rx} ${cy + ry * k} ${cx - rx} ${cy} C${cx - rx} ${cy - ry * k} ${cx - rx * k} ${cy - ry} ${cx} ${cy - ry} C${cx + rx * k} ${cy - ry} ${cx + rx} ${cy - ry * k} ${cx + rx} ${cy} Z`;
  return rot ? xform(d, { rotate: rot, cx, cy }) : xform(d, { cx, cy });
}

const circle = (cx, cy, r) => `M${n(cx)} ${n(cy - r)} A${r} ${r} 0 1 1 ${n(cx - 0.01)} ${n(cy - r)} Z`;

// Outer outline of a bunch of overlapping circles [[x, y, r], …] (grapes, florets, a canopy), as
// arcs. The bunch must be star-shaped around `o` (default: the mean centre), which clusters are.
function blob(circles, o) {
  const [ox, oy] = o ?? [circles.reduce((s, c) => s + c[0], 0) / circles.length, circles.reduce((s, c) => s + c[1], 0) / circles.length];
  const reach = (t) => {
    const ux = Math.cos(t);
    const uy = Math.sin(t);
    let best = -1;
    let bi = -1;
    circles.forEach(([x, y, r], i) => {
      const b = ux * (x - ox) + uy * (y - oy);
      const q = (x - ox) ** 2 + (y - oy) ** 2 - r * r;
      const disc = b * b - q;
      if (disc < 0) return;
      const d = b + Math.sqrt(disc);
      if (d > best) {
        best = d;
        bi = i;
      }
    });
    return bi;
  };
  const N = 1440;
  const owner = [];
  for (let k = 0; k < N; k++) owner.push(reach((k / N) * 2 * Math.PI));
  let s = owner.findIndex((v, k) => v !== owner[(k + N - 1) % N]);
  if (s < 0) return circle(...circles[owner[0]]);
  // Where the outline passes from circle i to circle j: the meeting point nearer to that angle.
  const meet = (i, j, t) => {
    const [x1, y1, r1] = circles[i];
    const [x2, y2, r2] = circles[j];
    const d = Math.hypot(x2 - x1, y2 - y1);
    const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
    const mx = x1 + (a * (x2 - x1)) / d;
    const my = y1 + (a * (y2 - y1)) / d;
    const cands = [
      [mx + (h * (y2 - y1)) / d, my - (h * (x2 - x1)) / d],
      [mx - (h * (y2 - y1)) / d, my + (h * (x2 - x1)) / d],
    ];
    const ang = (p) => Math.abs(((Math.atan2(p[1] - oy, p[0] - ox) - t + 3 * Math.PI) % (2 * Math.PI)) - Math.PI);
    const far = (p) => Math.hypot(p[0] - ox, p[1] - oy);
    // Both points can sit on the same ray from the centre; the outline wants the outer one.
    if (Math.abs(ang(cands[0]) - ang(cands[1])) < 0.05) return far(cands[0]) > far(cands[1]) ? cands[0] : cands[1];
    return ang(cands[0]) < ang(cands[1]) ? cands[0] : cands[1];
  };
  const pts = [];
  for (let k = 0; k < N; k++) {
    const i = (s + k) % N;
    const prev = owner[(i + N - 1) % N];
    if (owner[i] !== prev) pts.push({ p: meet(prev, owner[i], (i / N) * 2 * Math.PI), c: owner[i] });
  }
  let d = `M${pt(...pts[0].p)}`;
  for (let k = 0; k < pts.length; k++) {
    const from = pts[k];
    const to = pts[(k + 1) % pts.length];
    const [x, y, r] = circles[from.c];
    let sweep = Math.atan2(to.p[1] - y, to.p[0] - x) - Math.atan2(from.p[1] - y, from.p[0] - x);
    while (sweep <= 0) sweep += 2 * Math.PI;
    d += ` A${r} ${r} 0 ${sweep > Math.PI ? 1 : 0} 1 ${pt(...to.p)}`;
  }
  return `${d} Z`;
}

// Pointed star: calyxes, sepals, the crown of a blueberry.
function star(cx, cy, R, r, points = 5, turn = -90) {
  const out = [];
  for (let i = 0; i < points * 2; i++) {
    const a = ((turn + (180 / points) * i) * Math.PI) / 180;
    const d = i % 2 ? r : R;
    out.push(pt(cx + d * Math.cos(a), cy + d * Math.sin(a)));
  }
  return `M${out.join(' L')} Z`;
}

// Leaf-and-stem painter bound to one icon, sharing one gradient per finish.
function kit(c, palette = 'green') {
  const g = c.ramp(palette);
  const fill = c.radial('leaf', palette, 0.3, 0.2);
  let stemFill;
  const leaf = (base, tip, w = 0.32, bend = 0, { vein = true, f = fill } = {}) =>
    `<path d="${leafPath(base, tip, w, bend)}" fill="${f}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="1.1"/>` +
    (vein ? `<path d="${veinPath(base, tip, bend, w)}" stroke="${g[0]}" stroke-opacity=".7" stroke-width="1" fill="none" stroke-linecap="round"/>` : '');
  // A shape of your own with the leaf finish.
  const paint = (d, f = fill) => `<path d="${d}" fill="${f}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>`;
  const stem = (d, w = 3.6) => {
    stemFill ??= c.linear('stem', palette, [0, 0, 1, 0], 1, 2);
    return `<path d="${d}" stroke="${g[3]}" stroke-width="${w + 1.8}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${stemFill}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  };
  return { fill, ink: g[3], light: g[0], ramp: g, leaf, paint, stem };
}

// A woody stalk: dark edge plus a brown core.
function twig(d, w = 3) {
  return `<path d="${d}" stroke="#331805" stroke-width="${w + 1.6}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="#8A5226" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// Small white highlight for a secondary round part that the engine's shine does not reach.
const glint = (x, y, rx = 2.6, ry = 1.3, rot = -40) =>
  `<ellipse cx="${n(x)}" cy="${n(y)}" rx="${rx}" ry="${ry}" fill="#fff" opacity=".8" transform="rotate(${rot} ${n(x)} ${n(y)})"/>`;

// Leaf with a shaped edge, as straight segments along a curved midrib. edge 'saw' gives teeth
// leaning to the tip (palm leaflets, serrated leaves); 'wave' gives rounded lobes (oak, ruffles).
function shapedLeaf([bx, by], [tx, ty], { w = 0.3, bend = 0, teeth = 8, depth = 0.3, edge = 'saw' } = {}) {
  const L = Math.hypot(tx - bx, ty - by);
  const nx = (ty - by) / L;
  const ny = -(tx - bx) / L;
  const mx = (bx + tx) / 2 + nx * bend * L * 0.5;
  const my = (by + ty) / 2 + ny * bend * L * 0.5;
  const at = (t) => {
    const u = 1 - t;
    const x = u * u * bx + 2 * u * t * mx + t * t * tx;
    const y = u * u * by + 2 * u * t * my + t * t * ty;
    const dx = 2 * u * (mx - bx) + 2 * t * (tx - mx);
    const dy = 2 * u * (my - by) + 2 * t * (ty - my);
    const l = Math.hypot(dx, dy);
    return [x, y, dy / l, -dx / l];
  };
  const hw = (t) => w * L * Math.pow(Math.sin(Math.PI * t), 0.85) * (1.1 - 0.35 * t);
  const mod = (t) => {
    const f = (t * teeth) % 1;
    return edge === 'wave' ? 1 - depth * (0.5 - 0.5 * Math.cos(2 * Math.PI * f)) : 1 - depth * (1 - f);
  };
  const steps = edge === 'wave' ? teeth * 6 : teeth * 2;
  const side = (sgn) => {
    const out = [];
    for (let i = 1; i < steps; i++) {
      let t = i / steps;
      if (edge === 'saw') t = (Math.floor(i / 2) + (i % 2 ? 0.98 : 0.02)) / teeth;
      const [x, y, px, py] = at(t);
      const r = hw(t) * mod(t);
      out.push(pt(x + px * r * sgn, y + py * r * sgn));
    }
    return out;
  };
  const a = side(1);
  const b = side(-1).reverse();
  return `M${pt(bx, by)} L${a.join(' L')} L${pt(tx, ty)} L${b.join(' L')} Z`;
}

// The bird's nest shared by empty-nest and nest-with-eggs: a woven bowl seen from just above.
// `inside` is drawn in the hollow and the front lip of the bowl covers its lower part.
const NEST = 'M10 54 C10 47.5 27 44 48 44 C69 44 86 47.5 86 54 C86 70 70 82 48 82 C26 82 10 70 10 54 Z';
function nest(c, inside = '') {
  const straw = c.radial('nest', 'brown', 0.32, 0.15);
  c.def(`<radialGradient id="${c.id('hollow')}" cx="0.5" cy="0.25" r="0.8"><stop offset="0" stop-color="#1E0E03"/><stop offset=".7" stop-color="#3D1F08"/><stop offset="1" stop-color="#6E3A14"/></radialGradient>`);
  c.def(`<clipPath id="${c.id('lip')}"><path d="M6 52 C26 63 70 63 90 52 L90 92 L6 92 Z"/></clipPath>`);
  const dark = '#331805';
  const light = '#F0C890';
  return `<path d="${NEST}" fill="${straw}"/>
    <ellipse cx="48" cy="52" rx="32" ry="7.5" fill="url(#${c.id('hollow')})"/>
    ${inside}
    <g clip-path="url(#${c.id('lip')})">
      <path d="${NEST}" fill="${straw}"/>
      <g fill="none" stroke-linecap="round">
        <g stroke="${dark}" stroke-opacity=".5" stroke-width="1.5">
          <path d="M11 61 C28 69 68 69 85 61"/><path d="M15 69 C30 76 66 76 81 69"/><path d="M24 77 C36 81 60 81 72 77"/>
          <path d="M18 62 L27 73 M33 66 L37 77 M50 67 L46 79 M64 66 L58 77 M78 62 L70 72"/>
        </g>
        <g stroke="${light}" stroke-opacity=".6" stroke-width="1.3">
          <path d="M14 65 C30 72 66 72 82 65"/><path d="M20 73 C34 78 62 78 76 73"/><path d="M26 63 L33 70 M56 66 L52 74 M70 65 L66 71"/>
        </g>
      </g>
    </g>
    <path d="M12 53 C26 61 70 61 84 53" stroke="${light}" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g stroke="${dark}" stroke-width="2" stroke-linecap="round"><path d="M13 57 L6 52 M83 56 L90 50 M20 72 L13 76 M77 71 L85 74"/></g>
    <g stroke="#8A5226" stroke-width="1" stroke-linecap="round"><path d="M13 57 L6.5 52.5 M83 56 L89.5 50.5"/></g>`;
}

module.exports = { leafPath, veinPath, shapedLeaf, xform, ellipse, circle, blob, star, kit, twig, glint, nest, NEST, n, pt };
