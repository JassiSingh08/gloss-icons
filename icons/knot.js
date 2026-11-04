const ball = require('../src/parts/ball');

// An overhand knot is a trefoil cut open at one lobe with the ends pulled out. Along the rope the
// crossings go over, under, over…; the strand on top at each is drawn again over the other.
const N = 120;
const S = 10.5;
const CX = 48;
const CY = 43;
const knotPt = (i) => {
  const t = (i / N) * Math.PI * 2;
  return [CX + S * (Math.sin(t) + 2 * Math.sin(2 * t)), CY - S * (Math.cos(t) - 2 * Math.cos(2 * t))];
};
const idx = [];
for (let i = 63; i <= N; i++) idx.push(i % N);
for (let i = 1; i <= 57; i++) idx.push(i);
const lead = ball.curve([[82, 84], [76, 80], [66, 77], knotPt(63)], 4).slice(0, -1);
const pts = [
  ...lead,
  ...idx.map(knotPt),
  ...ball.curve([knotPt(57), [30, 77], [20, 80], [14, 84]], 4).slice(1),
];
// Positions in pts of the over-passes (at trefoil indices 75, 115 and 35 of 120).
const OVER = [75, 115, 35].map((k) => lead.length + idx.indexOf(k));
const W = 9;
const d = (a, b) => `M${pts.slice(Math.max(0, a), b + 1).map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L')}`;
function dist(x, y) {
  let best = 1e9;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
    const vx = bx - ax, vy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * vx + (y - ay) * vy) / (vx * vx + vy * vy)));
    best = Math.min(best, Math.hypot(x - ax - vx * t, y - ay - vy * t));
  }
  return best;
}
const body = ball.silhouette((x, y) => dist(x, y) <= W / 2, { box: [6, 6, 90, 90], step: 0.5, tol: 0.45 });
const lengths = [0];
for (let i = 1; i < pts.length; i++) lengths.push(lengths[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));

module.exports = {
  id: 'knot',
  name: 'Knot',
  emoji: '🪢',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['knot', 'rope', 'tie', 'sailing', 'tangle'],
  tone: 'sand',
  body,
  shine: [26, 30, -60],
  shineSize: [5, 1.8],
  draw(c) {
    c.def(`<linearGradient id="${c.id('rope')}" gradientUnits="userSpaceOnUse" x1="14" y1="10" x2="82" y2="86"><stop offset="0" stop-color="#FBE6B8"/><stop offset=".45" stop-color="#DDB06A"/><stop offset="1" stop-color="#9A6E32"/></linearGradient>`);
    const rope = `url(#${c.id('rope')})`;
    const deep = c.ramp('sand')[3];
    const strand = (a, b, edge) => {
      const p = d(a, b);
      const off = lengths[Math.max(0, a)].toFixed(1);
      return `${edge ? `<path d="${d(a + 2, b - 2)}" fill="none" stroke="${deep}" stroke-opacity=".6" stroke-width="${W + 1.6}" stroke-linecap="butt"/>` : ''}
        <path d="${p}" fill="none" stroke="${rope}" stroke-width="${W}" stroke-linecap="butt" stroke-linejoin="round"/>
        <path d="${p}" fill="none" stroke="${deep}" stroke-opacity=".2" stroke-width="${W - 1.5}" stroke-dasharray="1.2 3.2" stroke-dashoffset="${off}"/>
        <path d="${p}" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.6" stroke-linecap="round" transform="translate(-1.1 -1.4)"/>`;
    };
    return `<path d="${body}" fill="${rope}"/>
      ${strand(0, pts.length - 1, false)}
      ${OVER.map((k) => strand(k - 6, k + 6, true)).join('')}`;
  },
};
