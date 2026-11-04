const m = require('../src/parts/metal');
const O = { tip: -46, half: 5.5, guard: 14, reach: 14, grip: 11 };
const A = m.frame({ at: [48, 46], deg: 45, s: 1.02 });
const B = m.frame({ at: [48, 46], deg: -45, s: 1.02 });
const d = m.tools.sword(m.dry, A, 'a', O).d;
module.exports = {
  id: 'crossed-swords',
  name: 'Crossed Swords',
  emoji: '⚔️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['swords', 'battle', 'duel', 'fight', 'rivalry'],
  tone: 'silver',
  body: d,
  shine: [70, 25, 45],
  shineSize: [5, 1.6],
  draw: (c) => `${m.edged(m.tools.sword(c, B, 'b', O), 'steel')}${m.tools.sword(c, A, 'a', O).art}`,
};
