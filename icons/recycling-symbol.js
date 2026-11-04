// Three chasing arrows on a rounded triangle. Each arrow is a bent band folded round one corner,
// built from straight offsets and two concentric arcs, ending in a head that points at the
// next arrow's tail. The three are separate subpaths that never touch.
const C = [48, 52];
const RV = 37; // centre to triangle corner
const RC = 9; // corner radius of the centre line
const H = 6; // half the band width
const WING = 6.5; // how far the head flares beyond the band
const START = 15; // tail, measured back from the corner along the incoming side
const BASE = 26; // head base, measured on from the corner along the outgoing side
const TIP = 39;
const f = (v) => +v.toFixed(2);
const P = (p) => `${f(p[0])} ${f(p[1])}`;
const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k];

const V = [-90, 30, 150].map((deg) => {
  const t = (deg * Math.PI) / 180;
  return [C[0] + RV * Math.cos(t), C[1] + RV * Math.sin(t)];
});

function arrow(i) {
  const prev = V[(i + 2) % 3];
  const v = V[i];
  const next = V[(i + 1) % 3];
  const unit = (a, b) => { const d = [b[0] - a[0], b[1] - a[1]]; const l = Math.hypot(...d); return [d[0] / l, d[1] / l]; };
  const din = unit(prev, v);
  const dout = unit(v, next);
  // Outward normals (away from the centre): for clockwise travel on screen that is (dy, -dx).
  const oin = [din[1], -din[0]];
  const oout = [dout[1], -dout[0]];
  const t = RC * Math.sqrt(3);
  const t1 = add(v, din, -t);
  const t2 = add(v, dout, t);
  const s = add(v, din, -START);
  const b = add(v, dout, BASE);
  const tip = add(v, dout, TIP);
  return `M${P(add(s, oin, H))} L${P(add(t1, oin, H))} A${RC + H} ${RC + H} 0 0 1 ${P(add(t2, oout, H))} L${P(add(b, oout, H))} L${P(add(b, oout, H + WING))} L${P(tip)} L${P(add(b, oout, -H - WING))} L${P(add(b, oout, -H))} L${P(add(t2, oout, -H))} A${RC - H} ${RC - H} 0 0 0 ${P(add(t1, oin, -H))} L${P(add(s, oin, -H))} Z`;
}

const body = [0, 1, 2].map(arrow).join(' ');
module.exports = {
  id: 'recycling-symbol',
  name: 'Recycling Symbol',
  emoji: '♻️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['recycle', 'environment', 'green', 'reuse', 'eco'],
  tone: 'green',
  body,
  shine: [41, 26, -60],
  shineSize: [5, 2],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.25)}" stroke-linejoin="round"/>`;
  },
};
