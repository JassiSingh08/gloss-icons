// Whole-body people (walking, sport, dancing, couples), built from the same head, hair and amber
// skin as the busts in person.js, so a runner and a bust look like one family.
//
//   const F = require('../src/parts/figure');
//   module.exports = { …meta, tone: 'blue', ...F.build((c) => ({
//     art: F.person(c, { head: [48, 20], torso: [[48, 40], [48, 58]], armF: [[56, 40], [62, 54]], … }),
//     extra: '…',                         // drawn on top but left out of the silhouette
//   }), { shine: F.shineOf(48, 20) }) };
//
// build() renders `art` once and traces its silhouette (outline() below) into `body`, so the
// engine outlines and glosses the whole figure as one object, limbs and props included.
//
// person(c, o) options, all optional except head and torso:
//   head [x, y], r (12.5)          head centre and radius
//   hair, color, skin ('yellow')   a person.js hair style and colour; skin is the head palette
//   face                           face.js markup in head space (centre 48,52, r 30): F.face.*
//   look                           shift the face sideways (head-space units) for a 3/4 turn
//   hat, hatBack                   head-space markup in front of / behind the head
//   torso [[x, y], [x, y]]         centres of the shoulder and hip caps; tw [r1, r2] their radii
//   torsoPath                      a hand-drawn torso instead (a dress, a tutu, a coat)
//   top, bottom, shoes             palettes for the shirt and arms, the legs, the shoes ('bare': skin)
//   sleeve                         arm palette when it differs from top ('bare' for bare arms)
//   armB, armF                     polylines shoulder → wrist, behind / in front of the torso
//   handB, handF                   false for no hand, markup to draw in its place, or hand() options
//   legB, legF                     polylines hip → ankle; footB, footF: the toe point
//   aw (7.8), lw (9)             arm and leg widths
//   under                          markup between the torso and the front arm
//   armOver                        draw the front arm over the head (arms raised in front)
//   tee, shorts                    bare arms with short sleeves (true or a fraction) / bare legs
//                                  under shorts in that palette
//   transform                      an SVG transform for the whole figure (a cartwheel)
//   over                           markup on top of everything
const f = require('./face');
const s = require('./skin');
const p = require('./person');
const palettes = require('../palettes');
const { Resvg } = require('@resvg/resvg-js');

const n = (v) => +v.toFixed(2);

// A tapered capsule from a (radius r1) to b (radius r2): a torso, a tail, a horse's body.
function capsule([ax, ay], [bx, by], r1, r2 = r1) {
  const d = Math.hypot(bx - ax, by - ay) || 1e-6;
  const u = [(bx - ax) / d, (by - ay) / d];
  const nm = [-u[1], u[0]];
  const sa = (r1 - r2) / d;
  const ca = Math.sqrt(Math.max(0, 1 - sa * sa));
  const m1 = [u[0] * sa + nm[0] * ca, u[1] * sa + nm[1] * ca];
  const m2 = [u[0] * sa - nm[0] * ca, u[1] * sa - nm[1] * ca];
  const P = (o, r, m) => `${n(o[0] + r * m[0])} ${n(o[1] + r * m[1])}`;
  const A = [ax, ay], B = [bx, by];
  return `M${P(A, r1, m1)} L${P(B, r2, m1)} A${r2} ${r2} 0 0 0 ${P(B, r2, m2)} L${P(A, r1, m2)} A${r1} ${r1} 0 1 0 ${P(A, r1, m1)} Z`;
}

function cloth(c, palette) {
  return p.cloth(c, palette, `fc-${palette}`);
}

// Rounds the corners of a polyline (Chaikin), keeping its ends: soft elbows and knees.
function smooth(pts, times = 1) {
  let q = pts;
  for (let k = 0; k < times && q.length > 2; k++) {
    const out = [q[0]];
    for (let i = 0; i < q.length - 1; i++) {
      const [a, b] = [q[i], q[i + 1]];
      if (i > 0) out.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25]);
      if (i < q.length - 2) out.push([a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
    }
    out.push(q.at(-1));
    q = out;
  }
  return q;
}

// The outline of a limb along pts, tapering from width w0 to w1: one shape, round at the joints.
function limbPath(pts, w0, w1 = w0) {
  const q = smooth(pts);
  const len = q.slice(1).map((b, i) => Math.hypot(b[0] - q[i][0], b[1] - q[i][1]));
  const total = len.reduce((a, b) => a + b, 0) || 1;
  let acc = 0;
  const polys = q.slice(1).map((b, i) => {
    const wa = w0 + ((w1 - w0) * acc) / total;
    acc += len[i];
    return s.capsule(q[i], b, wa, w0 + ((w1 - w0) * acc) / total, 6);
  });
  return s.union(polys);
}

// A filled shape with one soft edge in its own deep colour.
function soft(d, paint, edge) {
  return `<path d="${d}" fill="${paint}" stroke="${edge}" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>`;
}

// An arm or leg in a garment colour, tapering a little; palette 'bare' gives skin.
function limb(c, pts, w, palette, w1 = w * 0.84) {
  const d = limbPath(pts, w, w1);
  return palette === 'bare' ? soft(d, s.fill(c), s.EDGE) : soft(d, cloth(c, palette), c.ramp(palette)[3]);
}

// A bare arm or leg in skin.
function skinLimb(c, pts, w) {
  return limb(c, pts, w, 'bare');
}

// A mitten hand with a thumb, the wrist at (x, y). dir: degrees the fingers point (90 = down);
// thumb: 1 or -1 picks its side (default: the side facing up). paint/edge: another skin.
function hand(c, x, y, { dir = 90, thumb, s: k = 1, paint, edge = s.EDGE } = {}) {
  const a = (dir * Math.PI) / 180;
  const u = [Math.cos(a), Math.sin(a)];
  const v = [-u[1], u[0]];
  const side = thumb ?? (v[1] < 0 || (v[1] === 0 && v[0] < 0) ? 1 : -1);
  const at = (du, dv) => [x + u[0] * du * k + v[0] * dv * side * k, y + u[1] * du * k + v[1] * dv * side * k];
  const [cx, cy] = at(3, 0);
  const d = s.union([s.ellipse(cx, cy, 4.7 * k, 4 * k, dir, 14), s.capsule(at(1.8, 2.2), at(3.6, 4.6), 3.1 * k, 2.7 * k, 5)]);
  const crease = s.crease(`M${at(2.4, 2.4).map(n).join(' ')} Q${at(4.4, 2.6).map(n).join(' ')} ${at(5.4, 1.8).map(n).join(' ')}`, 0.9);
  return soft(d, paint ?? s.fill(c), edge) + crease;
}

// A shoe from the ankle to the toe.
function shoe(c, [ax, ay], [tx, ty], palette = 'black', w = 6.4) {
  const paint = c.linear(`shoe-${palette}`, palette, [0, 0, 0, 1], 0, 2);
  const L = Math.hypot(tx - ax, ty - ay) || 1;
  const heel = [ax - ((tx - ax) / L) * 1.2, ay - ((ty - ay) / L) * 1.2];
  return soft(s.union([s.capsule(heel, [tx, ty], w, w * 0.92, 6)]), paint, c.ramp(palette)[3]);
}

// Faces for small heads: the face.js features, a little heavier so they survive at 64 px.
const Y = { brow: 39, eye: 49, mouth: 67 };
const face = {
  calm: ({ dx = 0 } = {}) => shift(dx, f.brows.flat({ y: Y.brow, sw: 4.4 }) + f.eyes.oval({ y: Y.eye, rx: 4.3, ry: 5.8 }) + f.mouth.smile({ y: Y.mouth, sw: 4.6, w: 11 })),
  happy: ({ dx = 0 } = {}) => shift(dx, f.brows.raised({ y: Y.brow - 2, sw: 4.2 }) + f.eyes.smile({ y: Y.eye + 1, sw: 4.6, w: 6 }) + f.mouth.smile({ y: Y.mouth, sw: 4.6, w: 11 })),
  closed: ({ dx = 0 } = {}) => shift(dx, f.brows.flat({ y: Y.brow, sw: 4.2 }) + f.eyes.closed({ y: Y.eye + 1, sw: 4.4, w: 6 }) + f.mouth.smile({ y: Y.mouth, sw: 4.4, w: 9, lift: 3, tick: false })),
  focus: ({ dx = 0 } = {}) => shift(dx, f.brows.angry({ y: Y.brow + 1, sw: 4.6, slant: 4 }) + f.eyes.oval({ y: Y.eye + 1, rx: 4.3, ry: 5.4 }) + f.mouth.flat({ y: Y.mouth + 1, w: 8, sw: 4.6, tilt: -2 })),
  grin: (c, { dx = 0 } = {}) => shift(dx, f.brows.raised({ y: Y.brow - 2, sw: 4.2 }) + f.eyes.oval({ y: Y.eye, rx: 4.3, ry: 5.8 }) + f.mouth.grin(c, { y: Y.mouth - 6, w: 14, depth: 13, name: `grin${dx}` })),
  effort: ({ dx = 0 } = {}) => shift(dx, f.brows.angry({ y: Y.brow + 1, sw: 4.6, slant: 5 }) + f.eyes.squint({ y: Y.eye + 1 }) + f.mouth.teeth({ y: Y.mouth, w: 11, h: 8 })),
};
function shift(dx, markup) {
  return dx ? `<g transform="translate(${dx} 0)">${markup}</g>` : markup;
}

// A head on its own: back hair, head, face, front hair, hat. Returns { back, front }.
function head(c, { at: [cx, cy], r = 12.5, hair, color = 'brown', face: fc = '', skin = 'yellow', hat = '', hatBack = '', name = 'a', crown } = {}) {
  const P = p.pose({ cx, cy, r, hair, crown });
  const h = hair ? p.hair(c, P, hair, color, `hair-${name}`) : { back: '', front: '' };
  const edge = c.ramp(skin)[3];
  const w = n(1.3 / P.k);
  return {
    P,
    back: h.back + (hatBack ? P.at(hatBack) : ''),
    front: P.at(`${f.head(c, skin, `head-${skin}`).replace('/>', ` stroke="${edge}" stroke-opacity=".5" stroke-width="${w}"/>`)}${fc}`) + h.front + (hat ? P.at(hat) : ''),
  };
}

function person(c, o) {
  const {
    r = 12.5, top = 'blue', bottom = 'navy', shoes = 'black', aw = 7.8, lw = 9, tw = [10, 8.5],
    under = '', over = '', armOver = false,
  } = o;
  const H = head(c, { at: o.head, r, hair: o.hair, color: o.color, face: o.face, skin: o.skin, hat: o.hat, hatBack: o.hatBack, name: o.name ?? 'a', crown: o.crown });
  const handAt = (pts, h) => {
    if (h === false) return '';
    if (typeof h === 'string') return h;
    const [a, b] = [pts.at(-2), pts.at(-1)];
    return hand(c, ...b, { dir: (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI, ...(h ?? {}) });
  };
  // Short sleeves / shorts: a bare limb with cloth over the first part of its first segment.
  const part = (pts, t) => [pts[0], [n(pts[0][0] + (pts[1][0] - pts[0][0]) * t), n(pts[0][1] + (pts[1][1] - pts[0][1]) * t)]];
  const arm = (pts, h) => (pts
    ? (o.tee ? limb(c, pts, aw, 'bare') + limb(c, part(pts, o.tee === true ? 0.55 : o.tee), aw + 1.6, top) : limb(c, pts, aw, o.sleeve ?? top)) + handAt(pts, h)
    : '');
  const leg = (pts, toe) => (pts
    ? (o.shorts ? limb(c, pts, lw, 'bare') + limb(c, part(pts, 0.8), lw + 1.8, o.shorts) : limb(c, pts, lw, bottom)) + (toe ? shoe(c, pts.at(-1), toe, shoes) : '')
    : '');
  const torsoD = o.torsoPath ?? capsule(o.torso[0], o.torso[1], tw[0], tw[1]);
  const tr = c.ramp(o.torsoPalette ?? top);
  const torso = `<path d="${torsoD}" fill="${cloth(c, o.torsoPalette ?? top)}" stroke="${tr[3]}" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>`;
  const front = arm(o.armF, o.handF);
  const all = H.back + arm(o.armB, o.handB) + leg(o.legB, o.footB) + leg(o.legF, o.footF) + (o.dress ?? '')
    + torso + under + (armOver ? '' : front) + H.front + (armOver ? front : '') + over;
  return o.transform ? `<g transform="${o.transform}">${all}</g>` : all;
}

// A wheel: dark tyre, silver rim, spokes. Bikes, wheelchairs.
function F_wheel(c, x, y, r, { spokes = 6, tyre = 4, hub = 2.6, rim = 'silver', name = 'wh' } = {}) {
  const steel = c.radial(`${name}-hub`, rim, 0.35, 0.3);
  const sp = Array.from({ length: spokes }, (_, i) => {
    const a = (i * Math.PI) / spokes + 0.3;
    const dx = n(Math.cos(a) * (r - tyre / 2)), dy = n(Math.sin(a) * (r - tyre / 2));
    return `M${n(x - dx)} ${n(y - dy)} L${n(x + dx)} ${n(y + dy)}`;
  }).join(' ');
  const rr = c.ramp(rim);
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#05050A" stroke-width="${tyre + 1.6}"/>
    <circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#2E2E3D" stroke-width="${tyre}"/>
    <path d="M${n(x - r * 0.72)} ${n(y - r * 0.55)} A${r} ${r} 0 0 1 ${n(x + r * 0.2)} ${n(y - r * 0.98)}" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <circle cx="${x}" cy="${y}" r="${n(r - tyre / 2 - 0.6)}" fill="none" stroke="${rr[2]}" stroke-width="1.3"/>
    <path d="${sp}" stroke="${rr[2]}" stroke-width="1.1"/>
    <circle cx="${x}" cy="${y}" r="${hub}" fill="${steel}" stroke="${rr[3]}" stroke-width="0.9"/>`;
}

// A rod (cane, pole, oar, club, sword): an edge and a lighter core.
function rod(d, w = 2.6, color = '#F4F0FF', edge = '#3A3E52') {
  return `<path d="${d}" stroke="${edge}" stroke-width="${n(w + 1.6)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${color}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// A bicycle seen side on, rear wheel at (rx, y), front at (fx, y). Rider points: SEAT, BARS,
// CRANK. mtb: fat tyres and a sloping top tube.
function bike(c, { rx = 23, fx = 73, y = 70, r = 13, mtb = false, palette = 'red' } = {}) {
  const fr = c.ramp(palette);
  const tube = (d) => `<path d="${d}" stroke="${fr[3]}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${fr[1]}" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const cr = [n((rx + fx) / 2 - 2), y];
  const seat = [cr[0] - 6, y - 24];
  const head = [fx - 10, y - 22];
  const frame = tube(`M${rx} ${y} L${cr} L${seat} L${rx} ${y} M${seat} L${head} L${cr} M${head} L${fx} ${y}`);
  const tyre = mtb ? 5.5 : 4;
  return {
    seat, head, crank: cr,
    art: F_wheel(c, rx, y, r, { tyre, name: 'wr', spokes: mtb ? 4 : 6 }) + F_wheel(c, fx, y, r, { tyre, name: 'wf', spokes: mtb ? 4 : 6 }) + frame
      + `<path d="M${seat[0] - 5} ${seat[1] - 2} L${seat[0] + 5} ${seat[1] - 2}" stroke="#14141E" stroke-width="3.6" stroke-linecap="round"/>
        <path d="M${head} L${head[0] - 1} ${head[1] - 5} L${head[0] + 5} ${head[1] - 6}" stroke="#2E2E3D" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="${cr[0]}" cy="${cr[1]}" r="3.4" fill="#8E93AD" stroke="#3A3E52" stroke-width="1.2"/>`,
  };
}

// A dress for torsoPath: fitted bodice from the shoulders (y top) flaring to a hem at y hem.
function dress(cx, top, hem, flare = 13) {
  return `M${cx - 8} ${top + 3} C${cx - 8} ${top - 2} ${cx + 8} ${top - 2} ${cx + 8} ${top + 3} L${cx + 6.5} ${top + 12} L${cx + flare} ${hem} Q${cx} ${hem + 4} ${cx - flare} ${hem} L${cx - 6.5} ${top + 12} Z`;
}

// Two whole figures side by side holding hands in the middle (the holding-hands family).
// a, b: { hair, color, top, bottom, skirt (true: a dress in top), face }.
function pair(c, a, b) {
  const one = (o, cx, side, name) => {
    const inner = side; // +1: the free hand is on the left
    const sx = (dx) => cx + dx * inner;
    const base = {
      name, head: [cx, 22], r: 11.5, hair: o.hair, color: o.color, face: o.face ?? face.calm({ dx: -2 * inner }),
      top: o.top, bottom: o.skirt ? 'bare' : o.bottom, shoes: o.shoes ?? 'black', aw: 7.2, lw: o.skirt ? 7.4 : 8.6,
      legB: [[sx(-3.5), 57], [sx(-4), 68], [sx(-4.5), 79]], footB: [sx(-7.5), 81],
      legF: [[sx(3.5), 57], [sx(4), 68], [sx(4.5), 79]], footF: [sx(7.5), 81],
      armB: [[sx(-8), 40], [sx(-11), 50], [sx(-12), 58]], handB: { dir: 92 },
      armF: [[sx(8), 40], [sx(12), 49], [sx(16), 56]], handF: false,
    };
    if (o.skirt) base.torsoPath = dress(cx, 36, 64, 12);
    else { base.torso = [[cx, 42.5], [cx, 54]]; base.tw = [9.5, 8]; }
    return person(c, base);
  };
  return one(a, 30, 1, 'a') + one(b, 66, -1, 'b')
    + hand(c, 46, 56, { dir: 20 }) + hand(c, 50, 56, { dir: 160 });
}

// A person.js bust that can share an icon with other busts: its own hair and cloth gradients.
// P: a p.pose(); neck: 'crew' | 'v' | 'none'; under / over: extra markup.
function bust(c, P, { garment = 'blue', hair, color = 'brown', face: fc = '', name = 'a', neck = 'crew', beard, under = '', over = '', skin = 'yellow' } = {}) {
  const h = hair ? p.hair(c, P, hair, color, `hair-${name}`) : { back: '', front: '' };
  const r = c.ramp(garment);
  const chin = P.cy + P.r;
  let nk = '';
  if (neck === 'crew') nk = `<path d="M${n(P.cx - 9 * P.k * 1.4)} ${n(chin - 4)} Q${P.cx} ${n(chin + 5)} ${n(P.cx + 9 * P.k * 1.4)} ${n(chin - 4)}" stroke="${r[3]}" stroke-opacity=".45" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  if (neck === 'v') nk = `<path d="M${n(P.cx - 8 * P.k * 1.3)} ${n(chin - 4)} L${P.cx} ${n(chin + 7)} L${n(P.cx + 8 * P.k * 1.3)} ${n(chin - 4)} Z" fill="${s.fill(c)}" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.2" stroke-linejoin="round"/>`;
  const torso = `<path d="${P.torso}" fill="${cloth(c, garment)}" stroke="${r[3]}" stroke-opacity=".5" stroke-width="1.1"/>`;
  const hd = head(c, { at: [P.cx, P.cy], r: P.r, skin, name });
  const bd = beard ? (() => { const { fill: bf, edge } = p.hairPaint(c, beard, `beard-${name}`); return P.at(`<path d="M19 54 C21 62 25 64 31 64 C36 59 43 58 48 61 C53 58 60 59 65 64 C71 64 75 62 77 54 C80 70 72 86 48 88 C24 86 16 70 19 54 Z" fill="${bf}" stroke="${edge}" stroke-opacity=".55" stroke-width="${n(1.3 / P.k)}" stroke-linejoin="round"/><path d="M40 68.5 Q48 73.5 56 68.5 Q48 70 40 68.5 Z" fill="${f.MOUTH}" stroke="${f.MOUTH}" stroke-width="2.4" stroke-linejoin="round"/>`); })() : '';
  return h.back + torso + nk + under + hd.front + bd + P.at(fc) + h.front + over;
}

// The 👤 silhouette (icons/person.js) scaled about its base at (cx, 83): head over a dome.
function silhouette(c, cx, k = 1, palette = 'blue', name = 's') {
  const t = (x, y) => `${n(cx + (x - 48) * k)} ${n(83 + (y - 83) * k)}`;
  const head = `M${t(48, 15)} A${n(15 * k)} ${n(15 * k)} 0 1 1 ${t(47.99, 15)} Z`;
  const torso = `M${t(48, 50)} C${t(66, 50)} ${t(79, 61)} ${t(79, 76)} Q${t(79, 83)} ${t(72, 83)} L${t(24, 83)} Q${t(17, 83)} ${t(17, 76)} C${t(17, 61)} ${t(30, 50)} ${t(48, 50)} Z`;
  const edge = c.ramp(palette)[3];
  const fill = (id) => `fill="${c.radial(`${name}-${id}`, palette, 0.32, 0.2)}" stroke="${edge}" stroke-opacity=".6" stroke-width="1.2"`;
  return `<path d="${torso}" ${fill('t')}/><path d="${head}" ${fill('h')}/>`;
}

// Shine on the upper left of a head at (x, y) with radius r.
function shineOf(x, y, r = 12.5) {
  const k = r / 30;
  return { shine: [n(x - 15.5 * k), n(y - 20.5 * k), -45], shineSize: [n(Math.max(2.6, 6.5 * k)), n(Math.max(1.4, 2.8 * k))] };
}

// Traces the outside of some markup (its alpha) into one path, holes included, for `body`: the
// engine then outlines and glosses a figure drawn from many parts as one object.
function outline(markup, { k = 4, eps = 0.22 } = {}) {
  const N = 96 * k;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="${N}" height="${N}">${markup}</svg>`;
  const px = new Resvg(svg).render().pixels;
  const W = N + 2;
  const a = new Float32Array(W * W);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) a[(y + 1) * W + x + 1] = px[(y * N + x) * 4 + 3];
  const T = 127.5;
  const at = (x, y) => a[y * W + x];
  const pt = new Map();
  const edgePt = (key) => {
    if (pt.has(key)) return pt.get(key);
    const [t, x, y] = key.split(',').map(Number);
    const [x2, y2] = t === 0 ? [x + 1, y] : [x, y + 1];
    const v1 = at(x, y), v2 = at(x2, y2);
    const q = (T - v1) / (v2 - v1);
    const r = [(x + (x2 - x) * q - 0.5) / k, (y + (y2 - y) * q - 0.5) / k];
    pt.set(key, r);
    return r;
  };
  const adj = new Map();
  const link = (e1, e2) => {
    (adj.get(e1) ?? adj.set(e1, []).get(e1)).push(e2);
    (adj.get(e2) ?? adj.set(e2, []).get(e2)).push(e1);
  };
  for (let y = 0; y < W - 1; y++) {
    for (let x = 0; x < W - 1; x++) {
      const v = [at(x, y), at(x + 1, y), at(x + 1, y + 1), at(x, y + 1)];
      const ins = v.map((q) => q > T);
      const cnt = ins.filter(Boolean).length;
      if (cnt === 0 || cnt === 4) continue;
      const E = [`0,${x},${y}`, `1,${x + 1},${y}`, `0,${x},${y + 1}`, `1,${x},${y}`];
      const cut = [0, 1, 2, 3].filter((i) => ins[i] !== ins[(i + 1) % 4]).map((i) => E[i]);
      if (cut.length === 2) link(cut[0], cut[1]);
      else {
        const centre = (v[0] + v[1] + v[2] + v[3]) / 4 > T;
        for (let i = 0; i < 4; i++) if (ins[i] !== centre) link(E[(i + 3) % 4], E[i]);
      }
    }
  }
  const seen = new Set();
  const loops = [];
  for (const start of adj.keys()) {
    if (seen.has(start)) continue;
    const loop = [];
    let prev = null, cur = start;
    while (cur && !seen.has(cur)) {
      seen.add(cur);
      loop.push(edgePt(cur));
      const nx = adj.get(cur).find((e) => e !== prev && !seen.has(e));
      prev = cur;
      cur = nx;
    }
    if (loop.length > 8) loops.push(rdpClosed(loop, eps));
  }
  const areaOf = (l) => l.reduce((sum, q, i) => { const r = l[(i + 1) % l.length]; return sum + q[0] * r[1] - r[0] * q[1]; }, 0);
  const inside = (q, l) => {
    let c = false;
    for (let i = 0, j = l.length - 1; i < l.length; j = i++) {
      const [xi, yi] = l[i], [xj, yj] = l[j];
      if ((yi > q[1]) !== (yj > q[1]) && q[0] < ((xj - xi) * (q[1] - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  };
  return loops
    .map((l) => {
      const depth = loops.filter((o) => o !== l && inside(l[0], o)).length;
      const want = depth % 2 === 0 ? 1 : -1;
      const q = Math.sign(areaOf(l)) === want ? l : [...l].reverse();
      return `M${q.map((r) => `${+r[0].toFixed(1)} ${+r[1].toFixed(1)}`).join(' L')} Z`;
    })
    .join(' ');
}
function rdp(q, eps) {
  if (q.length < 3) return q;
  const [a, b] = [q[0], q.at(-1)];
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1e-9;
  let best = 0, bi = 0;
  for (let i = 1; i < q.length - 1; i++) {
    const r = q[i];
    const dd = Math.abs((b[0] - a[0]) * (a[1] - r[1]) - (a[0] - r[0]) * (b[1] - a[1])) / L;
    if (dd > best) { best = dd; bi = i; }
  }
  if (best <= eps) return [a, b];
  return rdp(q.slice(0, bi + 1), eps).slice(0, -1).concat(rdp(q.slice(bi), eps));
}
function rdpClosed(q, eps) {
  let far = 0, fi = 0;
  q.forEach((r, i) => { const d = Math.hypot(r[0] - q[0][0], r[1] - q[0][1]); if (d > far) { far = d; fi = i; } });
  return rdp(q.slice(0, fi + 1), eps).slice(0, -1).concat(rdp(q.slice(fi).concat([q[0]]), eps).slice(0, -1));
}

// A stand-in context: records the defs so the silhouette render resolves every gradient.
function dummy() {
  const defs = [];
  const id = (name) => `m-${name}`;
  return {
    id, defs, ramp: (name) => palettes[name],
    def: (m) => defs.push(m),
    radial: () => '#000',
    linear: () => '#000',
  };
}

// fn(c) → { art, extra, behind }. Body is the traced outline of `art`.
function build(fn, extra = {}) {
  const d = dummy();
  const { art } = fn(d);
  const body = outline(`<defs>${d.defs.join('')}</defs>${art}`);
  return { body, ...extra, draw: (c) => { const o = fn(c); return (o.behind ?? '') + o.art + (o.extra ?? ''); } };
}

module.exports = { silhouette, bust, pair, dress, bike, outline, smooth, limbPath, soft, wheel: F_wheel, rod, capsule, cloth, limb, skinLimb, hand, shoe, face, Y, head, person, shineOf, build, dummy, n };
