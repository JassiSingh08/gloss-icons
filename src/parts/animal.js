// Shared parts for the mammals. Two families:
//
// Faces (dog face, cat face, bear, panda…) all sit on the same head: centre HEAD, about 27 wide
// either side, top near y 28 and chin near y 80, ears behind it. Eyes are deep ink with one
// glint, never black, and slightly lidded so they read grown-up rather than baby-cute.
//
// Full bodies stand on GROUND, seen in profile facing left so the head takes the light. `body` is
// the torso, neck and head as one silhouette; legs, tails, ears and horns are separate parts drawn
// behind or over it with their own thin edge, the way the devil's horns sit outside its head.
//
// Silhouettes are written as a list of points and smoothed (Catmull-Rom), so a path reads as the
// shape it describes: [x, y] is a smooth point, [x, y, 1] a sharp corner (an ear tip, a hoof).
const palettes = require('../palettes');

const HEAD = { cx: 48, cy: 54 };
const GROUND = 84;

const n = (v) => +v.toFixed(2);
const pt = ([x, y]) => `${n(x)} ${n(y)}`;

// Smooth path through points. closed: join the end back to the start.
function spline(points, closed = true, t = 1 / 6) {
  const p = points;
  const len = p.length;
  const at = (i) => (closed ? p[(i + len) % len] : p[Math.max(0, Math.min(len - 1, i))]);
  let d = `M${pt(p[0])}`;
  const segs = closed ? len : len - 1;
  for (let i = 0; i < segs; i++) {
    const a = at(i), b = at(i + 1), a0 = at(i - 1), b1 = at(i + 2);
    const ka = a[2] ? 0 : t, kb = b[2] ? 0 : t;
    const c1 = [a[0] + (b[0] - a0[0]) * ka, a[1] + (b[1] - a0[1]) * ka];
    const c2 = [b[0] - (b1[0] - a[0]) * kb, b[1] - (b1[1] - a[1]) * kb];
    d += ` C${pt(c1)} ${pt(c2)} ${pt(b)}`;
  }
  return closed ? `${d} Z` : d;
}

// Mirror points drawn for the left half of a face onto the right half (x around HEAD.cx), so
// a symmetrical head is written once: give the points from the top centre down the left side to
// the chin; returns the closed outline.
function mirror(half, cx = HEAD.cx) {
  const right = half.slice(1, -1).reverse().map(([x, y, k]) => [2 * cx - x, y, k]);
  return spline([...half, ...right]);
}
const flipX = (pts, cx = HEAD.cx) => pts.map(([x, y, k]) => [2 * cx - x, y, k]);

// An ellipse as a path (for bodies, which must be paths).
const ellipse = (cx, cy, rx, ry) =>
  `M${n(cx - rx)} ${n(cy)} A${rx} ${ry} 0 1 1 ${n(cx + rx)} ${n(cy)} A${rx} ${ry} 0 1 1 ${n(cx - rx)} ${n(cy)} Z`;

// The thin edge every part gets, in the shadow stop of its palette, matching the engine outline.
const edge = (palette, o = 0.5, w = 1.3) =>
  ` stroke="${palettes[palette][3]}" stroke-opacity="${o}" stroke-width="${w}" stroke-linejoin="round"`;

// A filled part lit from the top left, with an edge.
function part(c, name, d, palette, { cx = 0.35, cy = 0.25, o = 0.5, fill } = {}) {
  return `<path d="${d}" fill="${fill ?? c.radial(name, palette, cx, cy)}"${edge(palette, o)}/>`;
}

// A leg from its top down to the ground, as stations [x, y, half-width] from the top down. The
// last station is the ground; the foot gets a flat sole with rounded corners.
function leg(st, { r = 2.2 } = {}) {
  const last = st[st.length - 1];
  const left = st.slice(0, -1).map(([x, y, h]) => [x - h, y]);
  const right = st.slice(0, -1).map(([x, y, h]) => [x + h, y]).reverse();
  const [fx, fy, fh] = last;
  const pts = [...left, [fx - fh, fy - r], [fx - fh + r * 0.4, fy, 1], [fx + fh - r * 0.4, fy, 1], [fx + fh, fy - r], ...right];
  return spline(pts);
}

// A straight leg: top centre (x, top), down to the ground at foot x (fx), tapering from w to wf.
// knee: [y, x-shift, half-width] adds a joint station between.
function post(x, top, w, wf, { fx = x, foot = GROUND, knee, r } = {}) {
  const st = [[x, top, w]];
  if (knee) st.push([x + knee[1], knee[0], knee[2] ?? (w + wf) / 2]);
  st.push([fx, foot - 6, wf], [fx, foot, wf]);
  return leg(st, { r });
}

// A hoof band over the bottom of a leg drawn with post(): fx, half-width, height.
function hoof(fx, h, { foot = GROUND, ht = 4.5, fill = '#2A1A10' } = {}) {
  return `<path d="M${n(fx - h)} ${foot - ht} Q${fx} ${foot - ht - 1} ${n(fx + h)} ${foot - ht} L${n(fx + h)} ${foot - 1.2} Q${n(fx + h)} ${foot} ${n(fx + h - 1.2)} ${foot} L${n(fx - h + 1.2)} ${foot} Q${n(fx - h)} ${foot} ${n(fx - h)} ${foot - 1.2} Z" fill="${fill}"/>`;
}

// The four legs of a standing animal, drawn behind the body (whose belly overlaps their tops).
// Each leg: { x, top, w, wf, fx, knee, far }. Far legs stand a little higher and darker, which
// is all the depth a profile needs. hoof: a fill for hooves, or omit for paws. over: a second
// fill laid over each leg (a stripe pattern, say). paint: [near, far] fills for a custom coat.
function legs(c, palette, list, { hoof: hf, ht, lift = 1.5, over, paint } = {}) {
  const near = paint?.[0] ?? c.linear('legn', palette, [0, 0, 0, 1], 1, 2);
  const far = paint?.[1] ?? c.linear('legf', palette, [0, 0, 0, 1], 2, 3);
  const one = (L) => {
    const foot = GROUND - (L.far ? lift : 0);
    const fx = L.fx ?? L.x;
    const d = post(L.x, L.top, L.w, L.wf, { fx, knee: L.knee, foot, r: L.r });
    return `<path d="${d}" fill="${L.far ? far : near}"${edge(palette)}/>${over ? `<path d="${d}" fill="${over}"/>` : ''}${hf ? hoof(fx, L.wf, { foot, ht, fill: hf }) : ''}`;
  };
  return list.filter((L) => L.far).map(one).join('') + list.filter((L) => !L.far).map(one).join('');
}

// Eye: an almond in ink with a glint. lid flattens the top (0 round, 0.5 heavy-lidded); tilt
// lifts the outer corner (side: -1 left eye, 1 right eye, so a pair slants as a pair).
function eye(x, y, { rx = 3.2, ry = 3.8, ink = '#1A0E05', lid = 0.25, tilt = 0, side = 1, glint = true } = {}) {
  const o = tilt * side;
  const d = `M${n(x - rx)} ${n(y + o)} Q${n(x)} ${n(y - ry * 2 * (1 - lid))} ${n(x + rx)} ${n(y - o)} Q${n(x)} ${n(y + ry * 2)} ${n(x - rx)} ${n(y + o)} Z`;
  const g = glint ? `<circle cx="${n(x - rx * 0.3 + side * 0)}" cy="${n(y - ry * 0.05)}" r="${n(Math.min(rx, ry) * 0.32)}" fill="#fff" opacity=".9"/>` : '';
  return `<path d="${d}" fill="${ink}"/>${g}`;
}
const eyes = (y, dx, opts = {}, cx = HEAD.cx) => eye(cx - dx, y, { ...opts, side: -1 }) + eye(cx + dx, y, { ...opts, side: 1 });

// Profile eye for animals seen side-on: a lidded almond looking forward (left).
const sideEye = (x, y, { r = 2.4, ink = '#1A0E05', lid = 0.3 } = {}) => eye(x, y, { rx: r, ry: r * 1.15, ink, lid, tilt: 0.4, side: 1 });

// Nose: a soft rounded triangle, point down, with a glint. w: half width.
function nose(x, y, w, fill = '#1A0E05') {
  return `<path d="M${n(x - w)} ${n(y - w * 0.2)} Q${n(x)} ${n(y - w * 0.75)} ${n(x + w)} ${n(y - w * 0.2)} Q${n(x + w * 0.9)} ${n(y + w * 0.55)} ${n(x)} ${n(y + w * 0.85)} Q${n(x - w * 0.9)} ${n(y + w * 0.55)} ${n(x - w)} ${n(y - w * 0.2)} Z" fill="${fill}"/>
    <ellipse cx="${n(x - w * 0.35)}" cy="${n(y - w * 0.22)}" rx="${n(w * 0.32)}" ry="${n(w * 0.16)}" fill="#fff" opacity=".55"/>`;
}

// A stroked line with round ends.
const line = (d, ink, w = 2.2, extra = '') =>
  `<path d="${d}" stroke="${ink}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"${extra}/>`;

// A stripe or tuft: thick (half-width w) at (x1, y1), coming to a point at (x2, y2). bend pushes
// the middle sideways so stripes follow the curve of the body.
function taper(x1, y1, x2, y2, w, bend = 0) {
  const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy) || 1;
  const nx = -dy / l, ny = dx / l;
  const mx = (x1 + x2) / 2 + nx * bend, my = (y1 + y2) / 2 + ny * bend;
  return `M${n(x1 + nx * w)} ${n(y1 + ny * w)} Q${n(mx + nx * w * 0.6)} ${n(my + ny * w * 0.6)} ${n(x2)} ${n(y2)} Q${n(mx - nx * w * 0.6)} ${n(my - ny * w * 0.6)} ${n(x1 - nx * w)} ${n(y1 - ny * w)} Q${n(x1 - dx / l * w * 1.2)} ${n(y1 - dy / l * w * 1.2)} ${n(x1 + nx * w)} ${n(y1 + ny * w)} Z`;
}

// Soft pink for pig skin, cow and mouse muzzles: the 'pink' palette is a hot lacquer pink,
// far too loud for skin. Same four-stop shape as the palettes.
const ROSE = ['#FFE3E8', '#F7A8B8', '#D2667F', '#6E2238'];
const vertical = (c, name, top, bottom) => {
  c.def(`<linearGradient id="${c.id(name)}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>`);
  return `url(#${c.id(name)})`;
};
// Leg fills [near, far] from a custom four-stop ramp, matching legs()'s own.
const legPaint = (c, stops) => [vertical(c, 'legn', stops[1], stops[2]), vertical(c, 'legf', stops[2], stops[3])];
function custom(c, name, stops = ROSE, cx = 0.35, cy = 0.25) {
  const [s0, s1, s2, s3] = stops;
  c.def(`<radialGradient id="${c.id(name)}" cx="${cx}" cy="${cy}" r="0.95"><stop offset="0" stop-color="${s0}"/><stop offset="0.35" stop-color="${s1}"/><stop offset="0.75" stop-color="${s2}"/><stop offset="1" stop-color="${s3}"/></radialGradient>`);
  return `url(#${c.id(name)})`;
}

// A tapering tube along a centreline (tails, trunks, long necks): half-width w0 at the first
// point easing to w1 at the last, with a rounded tip.
function tube(pts, w0, w1 = w0) {
  const L = [], R = [];
  const k = pts.length - 1;
  pts.forEach((p, i) => {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[Math.min(k, i + 1)];
    const dx = p1[0] - p0[0], dy = p1[1] - p0[1], l = Math.hypot(dx, dy) || 1;
    const w = w0 + ((w1 - w0) * i) / k;
    L.push([p[0] - (dy / l) * w, p[1] + (dx / l) * w]);
    R.push([p[0] + (dy / l) * w, p[1] - (dx / l) * w]);
  });
  const e = pts[k], q = pts[k - 1], dl = Math.hypot(e[0] - q[0], e[1] - q[1]) || 1;
  const tip = [e[0] + ((e[0] - q[0]) / dl) * w1, e[1] + ((e[1] - q[1]) / dl) * w1];
  return spline([...L, tip, ...R.reverse()]);
}

// A rod (antler, whisker-thick horn, handle): an edge stroke under a lit stroke, like the limbs
// in skin.js, so a branching shape keeps its outline where branches meet.
function rod(c, name, d, palette, w = 2.6) {
  const r = palettes[palette];
  return `<path d="${d}" stroke="${r[3]}" stroke-opacity=".75" stroke-width="${w + 1.6}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${c.linear(name, palette, [0, 0, 1, 1], 0, 2)}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// A woolly outline: an ellipse whose edge rises and falls in soft curls.
function wool(cx, cy, rx, ry, curls = 14, depth = 0.08, phase = 0) {
  const pts = [];
  for (let i = 0; i < curls * 2; i++) {
    const t = (i / (curls * 2)) * Math.PI * 2 + phase;
    const k = i % 2 ? 1 - depth : 1;
    pts.push([cx + rx * k * Math.cos(t), cy + ry * k * Math.sin(t)]);
  }
  return spline(pts);
}

// Clip some markup to a path (stripes, spots, patches on a body).
function clip(c, name, d, markup) {
  const k = c.id(`clip-${name}`);
  c.def(`<clipPath id="${k}"><path d="${d}"/></clipPath>`);
  return `<g clip-path="url(#${k})">${markup}</g>`;
}

// A soft shading wash over a shape's lower right, for patches that sit on a body and should
// darken with it (a white patch on a dark body would otherwise glow flat).
function wash(c, name, d, color, o = 0.35) {
  c.def(`<linearGradient id="${c.id(name)}" x1="0.2" y1="0.1" x2="0.8" y2="1"><stop offset="0.35" stop-color="${color}" stop-opacity="0"/><stop offset="1" stop-color="${color}" stop-opacity="${o}"/></linearGradient>`);
  return `<path d="${d}" fill="url(#${c.id(name)})"/>`;
}

// Whiskers: three fine pale strokes either side of a muzzle at (x, y).
function whiskers(x, y, dx, { color = '#fff', o = 0.75, len = 13, w = 1 } = {}) {
  let d = '';
  for (const s of [-1, 1]) {
    for (const k of [-1, 0, 1]) {
      const x0 = x + s * dx, y0 = y + k * 2.4;
      d += `M${n(x0)} ${n(y0)} Q${n(x0 + s * len * 0.5)} ${n(y0 + k * 1.6 - 0.8)} ${n(x0 + s * len)} ${n(y0 + k * 3.6 + 0.6)} `;
    }
  }
  return line(d, color, w, ` opacity="${o}"`);
}

module.exports = { HEAD, GROUND, n, spline, mirror, flipX, ellipse, edge, part, leg, post, hoof, legs, eye, eyes, sideEye, nose, line, taper, tube, rod, wool, clip, wash, whiskers, ROSE, custom, legPaint, palettes };
