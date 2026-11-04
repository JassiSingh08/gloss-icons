// One hand anatomy for every hand emoji, so open hands, fists, pointing and gestures all match.
//
//   const h = require('../src/parts/hand');
//   const a = h.hand({ at: [48, 50], yaw: 180, fingers: { ring: h.CURL, pinky: h.CURL } });
//   module.exports = { …, tone: 'yellow', body: a.body, draw: (c) => a.draw(c) };
//
//   a.body       one smooth outline around the whole hand (palm, fingers, thumb, wrist)
//   a.draw(c)    the hand painted once in skin, creases where fingers touch, and the digits that
//                lie on top of the palm (a fist's curled fingers, a thumb across) as their own
//                light-edged layer
//   a.polys      the polygons, for unioning with props;  a.pt([x, y, z]) projects a point
//   h.group([a, b])   two hands, b drawn over a: { body, polys, draw }
//
// The hand is a small 3D model seen orthographically, so a pose is just joint angles. Hand space:
// x toward the thumb, y up the fingers, z out of the palm. With no rotation the palm faces the
// viewer with the thumb on the right (a right hand, palm on); yaw 180 shows its back.
// A hand is about 75 tall at scale 1, wrist to middle fingertip, the fingers about 0.4 of that.
//
// Pose options: at, scale, yaw/pitch/roll (degrees) or aim: [finger direction, palm normal] in
// view space (x right, y up, z toward the viewer), mirror, fingers: { index: [mcp, pip, dip] or
// { curl, spread, lift, len, shift, reach, off, bow, r, rs, front } }, thumb: { out, across,
// bend, toward, reach, off, bow, root, from, front }, hide: ['thumb', 'pinky', 'palm', …],
// arm: forearm length, nails: false, polish: [fill, edge], palmLines: false, light: [x, y].
const s = require('./skin');
const polygonClipping = require('polygon-clipping');

const DEG = Math.PI / 180;

// Knuckle positions, phalanx lengths, radii at knuckle and tip, and the natural fan.
// Middle longest, then ring, then index; the little finger clearly shorter.
const FINGERS = {
  index: { base: [12, 11, 0], len: [13, 8.5, 7.5], r: [4.8, 4.1], spread: 5 },
  middle: { base: [4, 12.5, 0], len: [14, 9.5, 8], r: [4.9, 4.2], spread: 1 },
  ring: { base: [-4, 11.5, 0], len: [13.5, 9, 7.8], r: [4.7, 4], spread: -4 },
  pinky: { base: [-11.4, 8, 0], len: [10, 7, 6], r: [4.2, 3.5], spread: -10 },
};
const ORDER = ['pinky', 'ring', 'middle', 'index'];
const PALM_R = 6;
const PALM = [[11, 8, 0], [-11, 5, 0], [11.5, -7, 0], [-11, -8, 0], [7, -17, 0], [-7, -17, 0]];
const THUMB = { base: [9, -12, 2], len: [12, 9, 8], r: [6.6, 5.4, 4.9, 4.5] };

const STRAIGHT = [0, 0, 0];
// Into a fist. The middle phalanx is drawn long: it is what shows of a curled finger.
const CURL = { curl: [88, 100, 65], len: [1, 1.3, 1] };
const HALF = [40, 50, 30];
// Thumb folded across curled fingers.
const TUCK = { out: 8, across: 62, bend: [78, 28], toward: [-1, 0, 0.3], root: 0.4, from: 0.5 };

const add = (a, b) => a.map((v, i) => v + b[i]);
const mul = (a, k) => a.map((v) => v * k);
const sub = (a, b) => add(a, mul(b, -1));
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => mul(a, 1 / Math.hypot(...a));
const lerp = (a, b, k) => add(a, mul(sub(b, a), k));
const rot = (v, k, t) => {
  const c = Math.cos(t), sn = Math.sin(t);
  return add(add(mul(v, c), mul(cross(k, v), sn)), mul(k, dot(k, v) * (1 - c)));
};
const n2 = (v) => +v.toFixed(2);
const P2 = (p) => `${n2(p[0])} ${n2(p[1])}`;

function chain(base, dir, axis, lens, bends) {
  const pts = [base];
  let d = dir, p = base;
  lens.forEach((l, i) => {
    d = rot(d, axis, (bends[i] ?? 0) * DEG);
    p = add(p, mul(d, l));
    pts.push(p);
  });
  return pts;
}

// A digit bowed from a to b: a quadratic through mid + bow, cut into n straight segments.
function arc(a, b, bow, n) {
  const m = add(mul(add(a, b), 0.5), mul(bow, 2));
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    return add(add(mul(a, (1 - t) * (1 - t)), mul(m, 2 * t * (1 - t))), mul(b, t * t));
  });
}

// skin.union with a retry: many overlapping capsules can trip polygon-clipping on nearly
// coincident edges, and a sub-pixel nudge of the input gets it through.
function union(polys) {
  let res;
  for (let k = 0; k < 6 && !res; k++) {
    const j = k * 0.0007;
    const ps = polys.map((p, i) => [p.map(([x, y], m) => [+(x + j * Math.sin(i * 7 + m)).toFixed(3), +(y + j * Math.cos(i * 5 + m)).toFixed(3)])]);
    try { res = polygonClipping.union(...ps); } catch (e) { if (k === 5) throw e; }
  }
  const f = (v) => +v.toFixed(2);
  return res.flatMap((poly) => poly).map((ring) => {
    const pts = simplify(ring.slice(0, -1), 0.14);
    const mid = (p, q) => [f((p[0] + q[0]) / 2), f((p[1] + q[1]) / 2)];
    const m0 = mid(pts[pts.length - 1], pts[0]);
    let d = `M${m0[0]} ${m0[1]}`;
    for (let i = 0; i < pts.length; i++) {
      const m = mid(pts[i], pts[(i + 1) % pts.length]);
      d += ` Q${f(pts[i][0])} ${f(pts[i][1])} ${m[0]} ${m[1]}`;
    }
    return `${d} Z`;
  }).join(' ');
}

// Drops points that sit within eps of the line through their neighbours (closed ring, RDP).
function simplify(pts, eps) {
  if (pts.length < 8) return pts;
  const rdp = (a) => {
    if (a.length < 3) return a;
    const [p, q] = [a[0], a.at(-1)];
    const L = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1e-9;
    let best = 0, bi = 0;
    for (let i = 1; i < a.length - 1; i++) {
      const d = Math.abs((q[0] - p[0]) * (p[1] - a[i][1]) - (p[0] - a[i][0]) * (q[1] - p[1])) / L;
      if (d > best) { best = d; bi = i; }
    }
    return best <= eps ? [p, q] : rdp(a.slice(0, bi + 1)).slice(0, -1).concat(rdp(a.slice(bi)));
  };
  let far = 0;
  pts.forEach((p, i) => { if (Math.hypot(p[0] - pts[0][0], p[1] - pts[0][1]) > Math.hypot(pts[far][0] - pts[0][0], pts[far][1] - pts[0][1])) far = i; });
  return rdp(pts.slice(0, far + 1)).slice(0, -1).concat(rdp(pts.slice(far).concat([pts[0]])).slice(0, -1));
}

function hull(pts) {
  const ps = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of ps) { while (lo.length >= 2 && cr(lo.at(-2), lo.at(-1), p) <= 0) lo.pop(); lo.push(p); }
  for (const p of ps.reverse()) { while (up.length >= 2 && cr(up.at(-2), up.at(-1), p) <= 0) up.pop(); up.push(p); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}

const inside = (p, poly) => {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > p[1]) !== (yj > p[1]) && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c;
  }
  return c;
};

function hand(o = {}) {
  const {
    at = [48, 50], scale = 1, yaw = 0, pitch = 0, roll = 0, mirror = false,
    fingers = {}, thumb = {}, nails = true, hide = [], wrist = true,
  } = o;
  let world = (v) => rot(rot(rot(v, [0, 1, 0], yaw * DEG), [1, 0, 0], pitch * DEG), [0, 0, 1], roll * DEG);
  if (o.aim) {
    const Y = norm(o.aim[0]);
    const Z = norm(sub(o.aim[1], mul(Y, dot(o.aim[1], Y))));
    const X = cross(Y, Z);
    world = (v) => rot(add(add(mul(X, v[0]), mul(Y, v[1])), mul(Z, v[2])), [0, 0, 1], roll * DEG);
  }
  const proj = (v) => {
    const w = world(v);
    return [at[0] + (mirror ? -1 : 1) * w[0] * scale, at[1] - w[1] * scale, w[2]];
  };

  // Digits as chains of 3D joints with a radius at each joint.
  const D = {};
  function target(reach, off = [0, 0, 0]) {
    return add(typeof reach === 'string' ? D[reach].pts.at(-1) : reach, off);
  }
  for (const name of ORDER) {
    if (hide.includes(name)) continue;
    const f = FINGERS[name];
    const pose = fingers[name] ?? STRAIGHT;
    const cfg = Array.isArray(pose) ? { curl: pose } : pose;
    const spread = (cfg.spread ?? f.spread) * DEG;
    const lat = [Math.cos(spread), -Math.sin(spread), 0];
    let dir = [Math.sin(spread), Math.cos(spread), 0];
    if (cfg.lift) dir = rot(dir, lat, cfg.lift * DEG);
    const base = add(f.base, cfg.shift ?? [0, 0, 0]);
    const lens = f.len.map((l, i) => l * (cfg.len?.[i] ?? cfg.scale ?? 1));
    const pts = cfg.reach ? arc(base, target(cfg.reach, cfg.off), cfg.bow ?? [0, 0, 0], 3) : chain(base, dir, lat, lens, cfg.curl ?? STRAIGHT);
    const k = cfg.r ?? 1;
    const rs = cfg.rs ?? [0, 1, 2, 3].map((i) => (f.r[0] + ((f.r[1] - f.r[0]) * i) / 3) * k);
    D[name] = { pts, rs, axis: lat, front: cfg.front, z: cfg.z ?? 0 };
  }
  let thumbRoot = null;
  if (!hide.includes('thumb')) {
    const t = { out: 36, across: 12, bend: [-6, 12], toward: [-0.6, 0.2, 0.8], root: 0.6, ...thumb };
    const d0 = [Math.sin(t.out * DEG) * Math.cos(t.across * DEG), Math.cos(t.out * DEG) * Math.cos(t.across * DEG), Math.sin(t.across * DEG)];
    const axis = norm(cross(d0, norm(t.toward)));
    const lens = THUMB.len.map((l, i) => l * (t.len?.[i] ?? 1));
    let pts = chain(add(THUMB.base, t.shift ?? [0, 0, 0]), d0, axis, lens, [0, ...(t.bend ?? [0, 0])]);
    if (t.reach) pts = [pts[0], ...arc(pts[1], target(t.reach, t.off), t.bow ?? [0, 0, 0], 2)];
    thumbRoot = lerp(pts[0], pts[1], t.root);
    const from = t.from ?? 0;
    const rs = THUMB.r.map((r, i) => (i === 0 ? r + (THUMB.r[1] - r) * from : r) * (t.r ?? 1));
    D.thumb = { pts: [lerp(pts[0], pts[1], from), ...pts.slice(1)], rs, axis, front: t.front, z: t.z ?? 0 };
  }

  // Palm: the hull of a few spheres (a slab face-on, a rounded edge side-on), taking in the
  // root of the thumb so it grows out of a soft web.
  const palm3 = (wrist ? PALM : PALM.slice(0, 4)).concat(thumbRoot ? [thumbRoot] : []).concat(o.palmExtra ?? []);
  const palmC = palm3.map(proj);
  const palmZ = palmC.reduce((a, p) => a + p[2], 0) / palmC.length;
  const ring = [];
  for (const [x, y] of palmC) for (let i = 0; i < 16; i++) ring.push([x + Math.cos((i * Math.PI) / 8) * PALM_R * scale, y + Math.sin((i * Math.PI) / 8) * PALM_R * scale]);
  const palmPoly = hull(ring);
  const polys = hide.includes('palm') ? [] : [palmPoly];
  if (o.arm) {
    const w0 = [0, -16, 0];
    const dir = rot([0, -1, 0], [1, 0, 0], -(o.armBend ?? 0) * DEG);
    const [a, b] = [w0, add(w0, mul(dir, o.arm))].map(proj);
    polys.push(s.capsule(a, b, 17 * scale, 15 * scale, 12));
  }

  // Each digit: tapered capsules per segment. Digits clearly in front of the palm become their
  // own light-edged layer; the rest merge into the silhouette.
  const digits = Object.entries(D).map(([name, d]) => {
    const p2 = d.pts.map(proj);
    const caps = p2.slice(1).map((q, i) => s.capsule(p2[i], q, 2 * d.rs[i] * scale, 2 * d.rs[i + 1] * scale));
    const zMax = Math.max(...p2.slice(1).map((q, i) => (q[2] + p2[i][2]) / 2));
    const front = d.front ?? zMax - palmZ > (name === 'thumb' ? 9 : 3.5);
    return { name, d, p2, caps, z: zMax + d.z, front };
  });
  polys.push(...digits.flatMap((g) => g.caps));
  const facing = world([0, 0, 1])[2]; // > 0: the palm faces us

  // Creases where neighbouring fingers touch, from the palm edge to where they part.
  const creases = [];
  const sample = (p2, rs, t) => {
    const L = p2.slice(1).map((q, i) => Math.hypot(q[0] - p2[i][0], q[1] - p2[i][1]));
    const tot = L.reduce((a, b) => a + b, 0) || 1;
    let u = t * tot;
    for (let i = 0; i < L.length; i++) {
      if (u <= L[i] || i === L.length - 1) {
        const k = L[i] ? Math.min(u / L[i], 1) : 0;
        return { p: lerp(p2[i], p2[i + 1], k), r: rs[i] + (rs[i + 1] - rs[i]) * k };
      }
      u -= L[i];
    }
  };
  const byName = Object.fromEntries(digits.filter((g) => !g.front).map((g) => [g.name, g]));
  for (let i = 0; i < ORDER.length - 1 && o.creases !== false; i++) {
    const A = byName[ORDER[i]], B = byName[ORDER[i + 1]];
    if (!A || !B) continue;
    const pts = [];
    for (let t = 0; t <= 1.0001; t += 0.05) {
      const a = sample(A.p2, A.d.rs, t), b = sample(B.p2, B.d.rs, t);
      if (Math.hypot(a.p[0] - b.p[0], a.p[1] - b.p[1]) > (a.r + b.r) * scale * 0.97) break;
      const m = [(a.p[0] + b.p[0]) / 2, (a.p[1] + b.p[1]) / 2];
      // Start just inside the palm edge rather than deep in the palm.
      if (pts.length && inside(m, palmPoly) && inside(pts[0], palmPoly)) pts.length = 0;
      pts.push(m);
    }
    if (pts.length > 2) creases.push(`M${pts.slice(0, -1).map(P2).join(' L')}`);
  }
  // Where the thumb meets the palm, and one palm line, when the palm faces us.
  const th = digits.find((g) => g.name === 'thumb');
  if (th && !th.front && facing > 0.35 && o.palmLines !== false && !hide.includes('palm')) {
    const [c0, c1] = D.thumb.pts;
    const a = proj(lerp(c0, c1, 0.1)), m = proj(add(lerp(c0, c1, 0.55), [-4.5, -0.5, 0])), b = proj(add(c1, [-3.5, 1.5, 0]));
    creases.push(`M${P2(a)} Q${P2(m)} ${P2(b)}`);
    const l0 = proj([-10, -12, 0]), l1 = proj([-1, -17, 0]), l2 = proj([6, -10, 0]);
    creases.push(`M${P2(l0)} Q${P2(l1)} ${P2(l2)}`);
  }

  // Nails on the backs of fingertips that face us.
  const nailList = [];
  if (nails) {
    for (const g of digits) {
      const n = g.d.pts.length;
      const A = g.d.pts[n - 2], B = g.d.pts[n - 1];
      const d = norm(sub(B, A));
      const backDir = norm(cross(d, g.d.axis));
      const f = world(backDir)[2];
      if (f < 0.3) continue;
      const r = g.d.rs.at(-1);
      const lift = mul(backDir, r * 0.5);
      const p0 = proj(add(add(B, mul(d, -r * (o.nailL ?? 1.25))), lift)), p1 = proj(add(add(B, mul(d, r * 0.05)), lift));
      nailList.push({ name: g.name, p0, p1, w: r * (o.nailW ?? 1.05) * scale, f });
    }
  }
  const nailMark = (nl) => {
    const d = `M${P2(nl.p0)} L${P2(nl.p1)}`;
    if (o.polish) {
      const [fill, edge] = o.polish;
      const hx = nl.p0[0] + (nl.p1[0] - nl.p0[0]) * 0.55 - nl.w * 0.15, hy = nl.p0[1] + (nl.p1[1] - nl.p0[1]) * 0.55 - nl.w * 0.15;
      return `<path d="${d}" stroke="${edge}" stroke-width="${n2(nl.w + 0.8)}" stroke-linecap="round"/><path d="${d}" stroke="${fill}" stroke-width="${n2(nl.w - 0.3)}" stroke-linecap="round"/><circle cx="${n2(hx)}" cy="${n2(hy)}" r="${n2(nl.w * 0.17)}" fill="#fff" opacity=".85"/>`;
    }
    return `<path d="${d}" stroke="#FFFDE8" stroke-opacity="${n2(0.6 * nl.f)}" stroke-width="${n2(nl.w)}" stroke-linecap="round"/>`;
  };

  const body = union(polys);
  function draw(c, { paint, edge = false } = {}) {
    const P = paint ?? (o.light ? s.fill(c, `skin${Math.round(o.light[0])}`, o.light) : s.fill(c));
    const fronts = digits.filter((g) => g.front).sort((a, b) => a.z - b.z);
    let art = edge ? s.shape(c, body, { paint: P }) : `<path d="${body}" fill="${P}"/>`;
    art += creases.map((d) => s.crease(d)).join('');
    art += nailList.filter((n) => !fronts.find((g) => g.name === n.name)).map(nailMark).join('');
    for (const g of fronts) {
      art += s.shape(c, union(g.caps), { paint: P });
      const nl = nailList.find((n) => n.name === g.name);
      if (nl) art += nailMark(nl);
    }
    return art;
  }

  return { body, polys, draw, pt: proj, D, digits, tip: (name) => D[name] && proj(D[name].pts.at(-1)), world };
}

// Two or more hands, each later one drawn over the earlier with a light edge.
function group(hands) {
  return {
    body: union(hands.flatMap((a) => a.polys)),
    polys: hands.flatMap((a) => a.polys),
    draw: (c, o = {}) => hands.map((a, i) => a.draw(c, { ...o, edge: i > 0 })).join(''),
  };
}

// A small glossy heart at (x, y), k times the 12-wide face.js heart.
function heart(c, x, y, k = 1, r = 0) {
  const { HEART } = require('./face');
  return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${k})"><path d="${HEART}" fill="${c.radial('heart', 'pink', 0.32, 0.22)}" stroke="#4A0016" stroke-opacity=".5" stroke-width="${n2(1 / k)}"/><ellipse cx="-2.6" cy="-2.2" rx="1.6" ry=".9" fill="#fff" opacity=".85" transform="rotate(-40 -2.6 -2.2)"/></g>`;
}

// Short motion marks in the skin's deep tone.
const mark = (d, w = 2.6) => `<path d="${d}" stroke="${s.RAMP[2]}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;

module.exports = { hand, group, union, heart, mark, STRAIGHT, CURL, HALF, TUCK, FINGERS };
