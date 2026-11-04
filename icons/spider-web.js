const k = require('../src/parts/critter');
// An orb web strung corner to corner; the glossy body here is three dew drops caught in the threads.
const CX = 48, CY = 46;
const spokes = [[48, 9], [76, 16], [86, 44], [78, 74], [50, 84], [20, 76], [10, 48], [18, 18]];
const drops = [[64, 34, 4.4], [30, 60, 3.6], [60, 72, 3.2]];
const body = drops.map(([x, y, r]) => k.circle(x, y, r));
module.exports = {
  id: 'spider-web',
  name: 'Spider Web',
  emoji: '🕸️',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['web', 'spider', 'halloween', 'trap', 'cobweb'],
  tone: 'sky',
  body,
  shine: [62.3, 32.3, -40],
  shineSize: [2, 1],
  draw(c) {
    const ring = (f) => {
      const pts = spokes.map(([x, y]) => [CX + (x - CX) * f, CY + (y - CY) * f]);
      return pts.map((p, i) => {
        const q = pts[(i + 1) % pts.length];
        const m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
        const cx = CX + (m[0] - CX) * 0.82, cy = CY + (m[1] - CY) * 0.82;
        return `${i ? '' : `M${k.n(p[0])} ${k.n(p[1])} `}Q${k.n(cx)} ${k.n(cy)} ${k.n(q[0])} ${k.n(q[1])}`;
      }).join(' ');
    };
    const web = spokes.map(([x, y]) => `M${CX} ${CY} L${x} ${y}`).join(' ') + ' ' + [0.3, 0.6, 0.92].map(ring).join(' ');
    const drop = c.radial('a', 'sky', 0.35, 0.3);
    return `<path d="${web}" stroke="${c.linear('silk', 'silver', [0, 0, 1, 1], 0, 2)}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      ${body.map((d) => `<path d="${d}" fill="${drop}"/>`).join('')}`;
  },
};
