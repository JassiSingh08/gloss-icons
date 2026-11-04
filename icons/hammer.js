const m = require('../src/parts/metal');
const F = m.frame({ at: [51, 46], deg: 40, s: 1.12 });
const d = m.tools.hammer(m.dry, F).d;
module.exports = {
  id: 'hammer',
  name: 'Hammer',
  emoji: '🔨',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['hammer', 'tool', 'build', 'fix', 'diy'],
  tone: 'silver',
  body: d,
  shine: [32, 21, 40],
  shineSize: [5.5, 2.4],
  draw: (c) => m.tools.hammer(c, F).art,
};
