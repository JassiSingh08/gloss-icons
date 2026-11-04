const m = require('../src/parts/metal');
const F = m.frame({ at: [46, 48], deg: 45, s: 1.14 });
const barrel = 'M-9 -22 L9 -22 L9 22 L-9 22 Z';
module.exports = {
  id: 'syringe',
  name: 'Syringe',
  emoji: '💉',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['syringe', 'vaccine', 'injection', 'needle', 'shot'],
  tone: 'sky',
  body: F.d(m.round([[-9, -22], [9, -22], [9, 22], [-9, 22]], 2)),
  shine: [57, 29, 45],
  shineSize: [6, 1.8],
  draw(c) {
    const glass = m.cyl(c, 'a', 'sky', F.p([0, -22]), F.p([0, 22]), 18 * F.s);
    const blood = m.cyl(c, 'r', 'red', F.p([0, -22]), F.p([0, 22]), 16 * F.s);
    const steel = m.cyl(c, 'n', 'steel', F.p([0, -48]), F.p([0, -26]), 3 * F.s);
    const hub = m.cyl(c, 'h', 'steel', F.p([0, -28]), F.p([0, -22]), 9 * F.s);
    const rod = m.cyl(c, 'p', 'grey', F.p([0, 22]), F.p([0, 40]), 6 * F.s);
    const flange = m.cyl(c, 'f', 'grey', F.p([0, 21]), F.p([0, 26]), 30 * F.s);
    const ticks = [-14, -8, -2, 4, 10].map((y) => `M-9 ${y} L-3 ${y}`).join(' ');
    return `${m.part(F.d('M-0.9 -27 L0.9 -27 L0.9 -44 L0 -48 L-0.9 -44 Z'), steel, 'steel')}
      ${m.part(F.d(m.round([[-4.5, -28], [4.5, -28], [6, -22], [-6, -22]], 1)), hub, 'steel')}
      ${m.part(F.d(m.round([[-3, 22], [3, 22], [3, 40], [-3, 40]], 0.5)), rod, 'grey')}
      ${m.part(F.d(m.round([[-9, 40], [9, 40], [9, 44], [-9, 44]], 1.6)), flange, 'grey')}
      <path d="${F.d(m.round([[-9, -22], [9, -22], [9, 22], [-9, 22]], 2))}" fill="${glass}" opacity=".5"/>
      <path d="${F.d(m.round([[-8, -21], [8, -21], [8, 6], [-8, 6]], 1.5))}" fill="${blood}"/>
      ${m.part(F.d(m.round([[-8, 6], [8, 6], [8, 11], [-8, 11]], 1)), c.radial('k', 'black', 0.3, 0.3), 'black')}
      ${m.part(F.d(m.round([[-15, 20.5], [15, 20.5], [15, 25], [-15, 25]], 2)), flange, 'grey')}
      <path d="${F.d(ticks)}" stroke="#fff" stroke-opacity=".8" stroke-width="1.1" stroke-linecap="round"/>`;
  },
};
