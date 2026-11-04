const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
const R = 17.5;
const at = (deg) => [48 + R * Math.cos(s.rad(deg)), 50 + R * Math.sin(s.rad(deg))];
// Two arcs chasing each other round a circle, heads on the left and right sides.
function half(from, to, tipDeg) {
  const [a, b] = [at(from), at(to)];
  const [tx, ty] = at(tipDeg);
  const [bx, by] = at(to + 4);
  const dir = (Math.atan2(ty - by, tx - bx) * 180) / Math.PI;
  const shaft = `M${s.n(a[0])} ${s.n(a[1])} A${R} ${R} 0 0 1 ${s.n(b[0])} ${s.n(b[1])}`;
  return [shaft, s.head(tx, ty, dir, Math.hypot(tx - bx, ty - by), 11.5)];
}
module.exports = {
  id: 'clockwise-vertical-arrows',
  name: 'Clockwise Vertical Arrows',
  emoji: '🔃',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['clockwise', 'reload', 'refresh', 'cycle', 'arrows'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const parts = [half(-118, -14, 34), half(62, 166, 214)];
    const g = (k) => `<g transform="translate(0 0)">${parts.map(([sh, hd]) => `<path d="${sh}" stroke="${k}" ${s.ST(8.5)}/><path d="${hd}" fill="${k}" stroke="${k}" stroke-width="2.6" stroke-linejoin="round"/>`).join('')}</g>`;
    return s.tile(c, P) + s.emboss(c, P, g);
  },
};
