const m = require('../src/parts/metal');
const F = m.frame({ at: [47, 44], deg: 38, s: 0.8 });
const blade = 'M-5 2 L5 2 L8 12 L16 12 Q19 12 19 15 L19 38 C19 52 8 59 0 66 C-8 59 -19 52 -19 38 L-19 15 Q-19 12 -16 12 L-8 12 Z';
module.exports = {
  id: 'shovel',
  name: 'Shovel',
  emoji: '🪏',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['shovel', 'dig', 'spade', 'garden', 'work'],
  tone: 'silver',
  body: F.d(blade),
  shine: [36, 61, -52],
  shineSize: [4.5, 2],
  draw(c) {
    const steel = m.band(c, 'a', 'steel', F.p([-20, 30]), F.p([20, 30]));
    return `${m.tube(c, F.d('M-2.5 -38 L-11 -51 L11 -51 L2.5 -38'), { width: 5, palette: 'brown', name: 'g' })}
      ${m.part(F.d(m.round([[-4.2, -40], [4.2, -40], [4.2, 4], [-4.2, 4]], 1)), m.cyl(c, 'h', 'wood', F.p([0, -40]), F.p([0, 4]), 8.4 * F.s), 'wood')}
      <path d="${F.d(blade)}" fill="${steel}"/>
      <path d="${F.d('M-5 2 L5 2 L8 12 L-8 12 Z')}" fill="#3A3E52" opacity=".3"/>
      <path d="${F.d('M0 16 L0 58')}" stroke="#3A3E52" stroke-opacity=".3" stroke-width="1.6" stroke-linecap="round"/>
      <path d="${F.d('M-14 17 L-14 38 C-14 48 -8 55 -3 59')}" stroke="#fff" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
