const m = require('../src/parts/metal');
const F = m.frame({ at: [46, 52], deg: 40, s: 1.12 });
const U = 'M-26 -27 L-26 0 A26 26 0 0 0 26 0 L26 -27 L11 -27 L11 0 A11 11 0 0 1 -11 0 L-11 -27 Z';
module.exports = {
  id: 'magnet',
  name: 'Magnet',
  emoji: '🧲',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['magnet', 'attract', 'pull', 'magnetic', 'science'],
  tone: 'red',
  body: F.d(U),
  shine: [26, 55, -60],
  shineSize: [6, 2.4],
  draw(c) {
    const paint = c.radial('a', 'red', 0.3, 0.3);
    const tip = (x) => m.part(F.d(`M${x - 7.5} -27 L${x + 7.5} -27 L${x + 7.5} -16 L${x - 7.5} -16 Z`), m.cyl(c, `t${x}`, 'steel', F.p([x - 7.5, -21]), F.p([x + 7.5, -21]), 15 * F.s), 'steel');
    return `<path d="${F.d(U)}" fill="${paint}"/>
      ${tip(-18.5)}${tip(18.5)}
      <path d="${F.d('M-22 -12 L-22 0 A22 22 0 0 0 0 22')}" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  },
};
