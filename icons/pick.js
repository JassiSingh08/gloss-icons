const m = require('../src/parts/metal');
const F = m.frame({ at: [49, 49], deg: -40, s: 1.12 });
const d = m.tools.pick(m.dry, F).d;
module.exports = {
  id: 'pick',
  name: 'Pick',
  emoji: '⛏️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['pick', 'mining', 'dig', 'tool', 'work'],
  tone: 'silver',
  body: d,
  shine: [28, 33, -80],
  shineSize: [5, 2.2],
  draw: (c) => m.tools.pick(c, F).art,
};
