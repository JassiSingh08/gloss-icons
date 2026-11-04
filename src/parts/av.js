// AV buttons, plain geometric shapes and cloth flags.
//
//   const av = require('../src/parts/av');
//   module.exports = av.button(meta, (c) => (k) => markup)   white symbol on the blue tile; the
//                                                             inner fn is painted twice (drop, light)
//   av.tri(cx, cy, len, half, deg)   rounded triangle centred on cx, cy pointing along deg (0 = right)
//   av.circle(meta, colour)  av.square(meta, colour, size)  av.diamond(meta, colour, half)
//   av.flag(meta, { tone, paint(c, F, cloth), pennant })     a cloth flag on the shared pole
//
// Colour names follow the coloured hearts: yellow is gold, orange is the hearts' tangerine.
const b = require('./button');
const h = require('./heart');
const m = require('./metal');
const s = require('./sign');

const n = (v) => +v.toFixed(2);
const rad = (d) => (d * Math.PI) / 180;
const PAL = 'blue';

// ---- AV buttons ----

function ink(c, fn) {
  const id = c.id('av-ink');
  c.def(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="24" x2="0" y2="72"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E2DDF0"/></linearGradient>`);
  return `<g transform="translate(1.3 2.2)" opacity=".42">${fn(c.ramp(PAL)[3])}</g>${fn(`url(#${id})`)}`;
}

function button(meta, art) {
  return {
    ...b.spec(PAL),
    group: 'Symbols',
    subgroup: 'av-symbol',
    ...meta,
    draw: (c) => b.face(c, PAL) + ink(c, art(c)),
  };
}

// Points turned by deg about (cx, cy).
const turn = (pts, deg, cx = 48, cy = 47) => {
  const a = rad(deg);
  return pts.map(([x, y, r]) => {
    const dx = x - cx;
    const dy = y - cy;
    const p = [cx + dx * Math.cos(a) - dy * Math.sin(a), cy + dx * Math.sin(a) + dy * Math.cos(a)];
    return r === undefined ? p : [...p, r];
  });
};

// A triangle len long and 2 * half wide, pointing along deg. The centre sits 45% from the base,
// between the centroid and the middle of the box, so it looks centred.
function tri(cx, cy, len, half, deg = 0, r = 2.6, pivot = [48, 47]) {
  const x0 = cx - len * 0.45;
  return m.round(turn([[x0, cy - half], [x0 + len, cy], [x0, cy + half]], deg, ...pivot), r);
}
function rect(x0, y0, x1, y1, r = 2.6, deg = 0) {
  return m.round(turn([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], deg), r);
}
const fill = (d, k) => `<path d="${d}" fill="${k}"/>`;
const hole = (d, k) => `<path d="${d}" fill="${k}" fill-rule="evenodd"/>`;
const line = (d, k, w) => `<path d="${d}" stroke="${k}" ${s.ST(w)}/>`;
const disc = (cx, cy, r) => b.circle(cx, cy, r);
// Filled arrowhead with softened corners, tip at x, y.
function head(x, y, deg = 0, len = 11, half = 8.5, r = 1.6) {
  const a = rad(deg);
  const [ux, uy] = [Math.cos(a), Math.sin(a)];
  const [bx, by] = [x - ux * len, y - uy * len];
  return m.round([[x, y], [bx - uy * half, by + ux * half], [bx + uy * half, by - ux * half]], r);
}
// Sun rays: count strokes from radius r0 to r1 round (cx, cy).
function rays(cx, cy, r0, r1, count = 8, from = 0) {
  return Array.from({ length: count }, (_, i) => {
    const a = rad(from + (360 / count) * i);
    return `M${n(cx + r0 * Math.cos(a))} ${n(cy + r0 * Math.sin(a))} L${n(cx + r1 * Math.cos(a))} ${n(cy + r1 * Math.sin(a))}`;
  }).join(' ');
}
// An arc of radius r from a0 to a1 degrees (0 = right, clockwise on screen).
function arc(cx, cy, r, a0, a1) {
  const p = (d) => `${n(cx + r * Math.cos(rad(d)))} ${n(cy + r * Math.sin(rad(d)))}`;
  return `M${p(a0)} A${r} ${r} 0 ${Math.abs(a1 - a0) > 180 ? 1 : 0} ${a1 > a0 ? 1 : 0} ${p(a1)}`;
}
// A mask that cuts a gap of width w along d, so a stroke drawn over it reads as passing in front.
function cut(c, d, w, name = 'cut') {
  const id = c.id(name);
  c.def(`<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="96"><rect width="96" height="96" fill="#fff"/><path d="${d}" stroke="#000" ${s.ST(w)}/></mask>`);
  return `url(#${id})`;
}

// A phone with a window for the screen (paint it with `fill`, which is even-odd).
function phone(x = 48, y = 47) {
  const o = b.rrect(x - 11, y - 22.5, 22, 45, 5);
  const i = b.rrect(x - 7.6, y - 17.5, 15.2, 31, 2.2);
  const dot = b.circle(x, y + 18.6, 1.7);
  return `${o} ${i} ${dot}`;
}

// ---- plain shapes ----

// Fill palette (a palette or a heart ramp) and tone for each colour name.
const COLOUR = {
  red: ['red', 'red'],
  orange: ['orange', 'tangerine'],
  yellow: ['gold', 'gold'],
  green: ['green', 'green'],
  blue: ['blue', 'blue'],
  purple: ['purple', 'purple'],
  brown: ['brown', 'brown'],
  black: ['black', 'black'],
  white: ['white', 'white'],
};
const paint = (c, name, colour, cx, cy) => h.paint(c, name, COLOUR[colour][1], cx, cy);

// A thin lit rim just inside the edge, as on the buttons.
const rim = (c, d, colour, w = 2.2) => b.bevel(c, d, COLOUR[colour][0], 'rim', w, 0.5, 0.35);

const geo = (meta, colour) => ({ group: 'Symbols', subgroup: 'geometric', tone: COLOUR[colour][0], ...meta });

function circle(meta, colour, r = 34) {
  const body = b.circle(48, 47, r);
  const k = r / 34;
  return {
    ...geo(meta, colour),
    body,
    shine: [n(48 - 19 * k), n(47 - 19.5 * k), -45],
    shineSize: [n(7.4 * k), n(3.2 * k)],
    draw: (c) => `<path d="${body}" fill="${paint(c, 'a', colour, 0.32, 0.24)}"/>${rim(c, b.circle(48, 47, r - 1.4), colour)}`,
  };
}

// Square sizes: large 66, medium 54, medium-small 44, small 34. Smaller ones sit a little lower,
// so they rest nearer the ground line instead of floating over the shadow.
const SQ = { large: 66, medium: 54, mediumSmall: 44, small: 34 };
function squareAt(size) {
  const cy = 47 + (66 - size) * 0.3;
  const x0 = 48 - size / 2;
  const y0 = cy - size / 2;
  return { x0, y0, cy, r: Math.max(4, size * 0.17), d: b.rrect(n(x0), n(y0), size, size, n(Math.max(4, size * 0.17))) };
}
function square(meta, colour, size = SQ.large) {
  const q = squareAt(size);
  const k = size / 66;
  return {
    ...geo(meta, colour),
    body: q.d,
    shine: [n(q.x0 + 12 * k), n(q.y0 + 10.5 * k), -42],
    shineSize: [n(Math.max(3, 6.6 * k)), n(Math.max(1.5, 2.8 * k))],
    draw: (c) => `<path d="${q.d}" fill="${paint(c, 'a', colour, 0.3, 0.22)}"/>
      ${rim(c, b.rrect(n(q.x0 + 1.4), n(q.y0 + 1.4), n(size - 2.8), n(size - 2.8), n(q.r - 1.4)), colour, size < 40 ? 1.6 : 2.2)}`,
  };
}

function diamondAt(half, cy = 47) {
  return m.round([[48, cy - half], [48 + half, cy], [48, cy + half], [48 - half, cy]], half * 0.16);
}
function diamond(meta, colour, half = 36) {
  const cy = 47 + (36 - half) * 0.3;
  const body = diamondAt(half, cy);
  const k = half / 36;
  return {
    ...geo(meta, colour),
    body,
    shine: [n(48 - 15 * k), n(cy - 15.5 * k), -45],
    shineSize: [n(7 * k), n(2.6 * k)],
    draw: (c) => `<path d="${body}" fill="${paint(c, 'a', colour, 0.32, 0.22)}"/>
      ${rim(c, diamondAt(half - 1.9, cy), colour, half < 30 ? 1.6 : 2.2)}`,
  };
}

// Rounded triangle, pointing up or down, inside the same box as the large square.
const TRI = { up: [[48, 12], [85, 77.5], [11, 77.5]], down: [[11, 16.5], [85, 16.5], [48, 82]] };
function shrink(pts, by) {
  const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length;
  const cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
  return pts.map(([x, y]) => [cx + (x - cx) * by, cy + (y - cy) * by]);
}
function triangle(meta, colour, dir = 'up') {
  const pts = TRI[dir];
  const body = m.round(pts, 7);
  return {
    ...geo(meta, colour),
    body,
    shine: dir === 'up' ? [37.5, 40, -60] : [27, 22.5, -3],
    shineSize: [7, 2.6],
    draw: (c) => `<path d="${body}" fill="${paint(c, 'a', colour, dir === 'up' ? 0.4 : 0.3, dir === 'up' ? 0.3 : 0.15)}"/>
      ${rim(c, m.round(shrink(pts, 0.93), 6), colour)}`,
  };
}

// Extra art painted over a spec's own drawing.
const more = (spec, fn) => ({ ...spec, draw: (c) => spec.draw(c) + fn(c) });

// ---- flags ----
// A flag in its own frame: pole along x = 0 from the finial at y = 0 down to y = 73, cloth flying
// from the pole to the right. The cloth waves once along its length and droops a little.
const CLOTH = { x0: 2.6, w: 57, y0: 3.6, h: 44, amp: 3, droop: 3.5 };
const top = (t, C = CLOTH) => C.y0 + C.amp * Math.sin(2 * Math.PI * t) + C.droop * t;
const bot = (t, C = CLOTH) => top(t, C) + C.h - 1.6 * t;
const X = (t, C = CLOTH) => C.x0 + C.w * t;
// Point at t along the cloth and f down it (0 top, 1 bottom).
const at = (t, f, C = CLOTH) => [X(t, C), top(t, C) + f * (bot(t, C) - top(t, C))];
const samples = (k) => Array.from({ length: k + 1 }, (_, i) => i / k);

function edge(F, f, t0 = 0, t1 = 1, steps = 12, C = CLOTH) {
  return samples(steps).map((u) => F.p(at(t0 + (t1 - t0) * u, f, C)));
}
const path = (pts) => `M${n(pts[0][0])} ${n(pts[0][1])}${s.smooth(pts)}`;
// The band between two depths f0 and f1 (and two lengths t0, t1): one closed path.
function band(F, f0, f1, t0 = 0, t1 = 1, steps = 12, C = CLOTH) {
  const a = edge(F, f0, t0, t1, steps, C);
  const z = edge(F, f1, t0, t1, steps, C).reverse();
  return `${path(a)} L${n(z[0][0])} ${n(z[0][1])}${s.smooth(z)} Z`;
}

// Pennant: the bottom edge rises to meet the top at the tip.
function pennant(F, C = CLOTH) {
  const mid = (t) => (top(t, C) + bot(t, C)) / 2;
  const up = samples(12).map((t) => F.p([X(t, C), top(t, C) + (mid(t) - top(t, C)) * t ** 1.1]));
  const lo = samples(12).map((t) => F.p([X(t, C), bot(t, C) - (bot(t, C) - mid(t)) * t ** 1.1])).reverse();
  return `${path(up)} L${n(lo[0][0])} ${n(lo[0][1])}${s.smooth(lo)} Z`;
}

// Folds: light where the cloth turns towards the top-left light, shade in the troughs.
function folds(c, F, d, name = 'fold', C = CLOTH, strength = 1) {
  const id = c.id(name);
  const a = F.p([C.x0, 20]);
  const z = F.p([C.x0 + C.w, 20]);
  const stops = samples(10).map((t) => {
    const v = -Math.cos(2 * Math.PI * t) * strength;
    return v > 0
      ? `<stop offset="${n(t)}" stop-color="#fff" stop-opacity="${n(0.24 * v)}"/>`
      : `<stop offset="${n(t)}" stop-color="#000" stop-opacity="${n(-0.22 * v)}"/>`;
  }).join('');
  c.def(`<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${n(a[0])}" y1="${n(a[1])}" x2="${n(z[0])}" y2="${n(z[1])}">${stops}</linearGradient>`);
  return `<path d="${d}" fill="url(#${id})"/>`;
}

function pole(c, F, name = 'pole', len = 73) {
  const a = F.p([0, 2]);
  const z = F.p([0, len]);
  const w = 5.4 * F.s;
  const d = m.bar(a, z, w, w / 2);
  const ball = F.p([0, 0]);
  return `<path d="${d}" fill="${m.cyl(c, name, 'steel', a, z, w)}" ${m.edge('steel', 1.1)}/>
    <circle cx="${n(ball[0])}" cy="${n(ball[1])}" r="${n(4.7 * F.s)}" fill="${c.radial(`${name}-ball`, 'gold', 0.32, 0.28)}" ${m.edge('gold', 1.1)}/>`;
}

// The standard single flag: finial at (21.5, 11), cloth flying right.
const FRAME = { at: [21.5, 11], deg: 0, s: 1 };

// opts.paint(c, F, cloth) returns the cloth's art; opts.pennant for a triangle.
function flag(meta, { tone, paint: art, pennant: tri = false, strength = 1 }) {
  const F = m.frame(FRAME);
  const cloth = tri ? pennant(F) : band(F, 0, 1);
  const sh = F.p([10, 11]);
  return {
    group: 'Flags',
    subgroup: 'flag',
    tone,
    body: cloth,
    shine: [n(sh[0]), n(sh[1]), -18],
    shineSize: [6.4, 2.6],
    ...meta,
    draw: (c) => `${pole(c, F)}${art(c, F, cloth)}${folds(c, F, cloth, 'fold', CLOTH, strength)}`,
  };
}

// Horizontal stripes following the wave, each a palette (or heart ramp) lit top-left.
function stripes(c, F, ramps) {
  const k = ramps.length;
  return ramps.map((r, i) => {
    const d = band(F, i / k, Math.min(1, (i + 1) / k + 0.01));
    const g = c.id(`st${i}`);
    const [a, mm, dd] = typeof r === 'string' && !h.RAMPS[r] ? c.ramp(r) : h.RAMPS[r];
    c.def(`<linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset=".45" stop-color="${mm}"/><stop offset="1" stop-color="${dd}"/></linearGradient>`);
    return `<path d="${d}" fill="url(#${g})"/>`;
  }).join('');
}

module.exports = {
  PAL, ink, button, turn, tri, rect, fill, hole, line, disc, head, rays, arc, cut, phone,
  COLOUR, paint, rim, geo, circle, square, squareAt, SQ, diamond, diamondAt, triangle, shrink, more,
  CLOTH, FRAME, top, bot, at, band, pennant, folds, pole, flag, stripes, samples, n, rad,
};
