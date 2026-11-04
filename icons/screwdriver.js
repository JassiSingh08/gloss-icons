const m = require('../src/parts/metal');
const F = m.frame({ at: [53, 41], deg: 45, s: 1.25 });
const grip = 'M-7.5 4 L7.5 4 Q9.5 4 9.5 7 L10 30 Q10 38 0 38 Q-10 38 -10 30 L-9.5 7 Q-9.5 4 -7.5 4 Z';
module.exports = {
  id: 'screwdriver',
  name: 'Screwdriver',
  emoji: '🪛',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['screwdriver', 'tool', 'fix', 'screw', 'diy'],
  tone: 'red',
  body: F.d(grip),
  shine: [36, 52, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const shaft = m.cyl(c, 's', 'steel', F.p([0, -32]), F.p([0, 4]), 5.6 * F.s);
    const tip = m.cyl(c, 't', 'steel', F.p([0, -38]), F.p([0, -30]), 7 * F.s);
    const plastic = m.cyl(c, 'a', 'red', F.p([0, 4]), F.p([0, 38]), 20 * F.s);
    const ferrule = m.cyl(c, 'f', 'steel', F.p([0, -2]), F.p([0, 5]), 12 * F.s);
    return `${m.part(F.d('M-2.8 -30 L2.8 -30 L2.8 2 L-2.8 2 Z'), shaft, 'steel')}
      ${m.part(F.d('M-2.8 -30 L-3.6 -36 Q-3.6 -38 -1.8 -38 L1.8 -38 Q3.6 -38 3.6 -36 L2.8 -30 Z'), tip, 'steel')}
      ${m.part(F.d(m.round([[-5.5, -2], [5.5, -2], [6.5, 5], [-6.5, 5]], 1.2)), ferrule, 'steel')}
      <path d="${F.d(grip)}" fill="${plastic}"/>
      <path d="${F.d('M-4.8 9 L-5 33 M0 9 L0 34.5 M4.8 9 L5 33')}" stroke="#3D0003" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/>
      <path d="${F.d('M-2.4 9 L-2.5 33')}" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
