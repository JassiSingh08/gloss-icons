const m = require('../src/parts/metal');
const H = m.frame({ at: [54, 45], deg: 40, s: 0.98 });
const P = m.frame({ at: [42, 46], deg: -40, s: 0.98 });
const d = m.tools.hammer(m.dry, H).d;
module.exports = {
  id: 'hammer-and-pick',
  name: 'Hammer and Pick',
  emoji: '⚒️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['hammer', 'pick', 'mining', 'tools', 'labour'],
  tone: 'silver',
  body: d,
  shine: [37, 22, 40],
  shineSize: [4.5, 2],
  draw: (c) => `${m.edged(m.tools.pick(c, P, 'p'), 'steel')}${m.tools.hammer(c, H, 'h').art}`,
};
