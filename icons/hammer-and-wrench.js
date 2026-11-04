const m = require('../src/parts/metal');
const H = m.frame({ at: [54, 45], deg: 40, s: 0.98 });
const W = m.frame({ at: [46, 48], deg: -45, s: 1 });
const d = m.tools.hammer(m.dry, H).d;
module.exports = {
  id: 'hammer-and-wrench',
  name: 'Hammer and Wrench',
  emoji: '🛠️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['tools', 'repair', 'fix', 'build', 'maintenance'],
  tone: 'silver',
  body: d,
  shine: [37, 22, 40],
  shineSize: [4.5, 2],
  draw: (c) => `${m.edged(m.tools.wrench(c, W, 'w'), 'steel')}${m.tools.hammer(c, H, 'h').art}`,
};
