const m = require('../src/parts/metal');
const F = m.frame({ at: [48, 47], deg: 45, s: 1.12 });
const d = m.tools.wrench(m.dry, F).d;
module.exports = {
  id: 'wrench',
  name: 'Wrench',
  emoji: '🔧',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['wrench', 'spanner', 'tool', 'fix', 'repair'],
  tone: 'silver',
  body: d,
  shine: [62, 25, -40],
  shineSize: [5, 2.2],
  draw: (c) => m.tools.wrench(c, F).art,
};
