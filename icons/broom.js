const m = require('../src/parts/metal');
const F = m.frame({ at: [52, 46], deg: 32, s: 0.96 });
const straw = 'M-8 8 L8 8 C14 18 20 30 22 42 Q22 45 19 45 L-19 45 Q-22 45 -22 42 C-20 30 -14 18 -8 8 Z';
module.exports = {
  id: 'broom',
  name: 'Broom',
  emoji: '🧹',
  group: 'Objects',
  subgroup: 'household',
  tags: ['broom', 'sweep', 'clean', 'witch', 'chores'],
  tone: 'sand',
  body: F.d(straw),
  shine: [44, 52, -55],
  shineSize: [4.5, 1.8],
  draw(c) {
    const hay = c.radial('a', 'sand', 0.35, 0.2);
    const band = m.cyl(c, 'b', 'red', F.p([-9, 4]), F.p([9, 4]), 8 * F.s);
    const lines = [-15, -9, -3, 3, 9, 15].map((x) => `M${x * 0.45} 14 L${x} 43`).join(' ');
    return `${m.part(F.d(m.round([[-3, -50], [3, -50], [3, 4], [-3, 4]], 2.5)), m.cyl(c, 'h', 'wood', F.p([0, -50]), F.p([0, 4]), 6 * F.s), 'wood')}
      <path d="${F.d(straw)}" fill="${hay}"/>
      <path d="${F.d(lines)}" stroke="#5C4420" stroke-opacity=".4" stroke-width="1.2" stroke-linecap="round"/>
      ${m.part(F.d(m.round([[-9, 2], [9, 2], [9.5, 10], [-9.5, 10]], 2)), band, 'red')}`;
  },
};
