const m = require('../src/parts/metal');
const F = m.frame({ at: [46, 50], deg: 45, s: 1.2 });
const O = { tip: -40, half: 7.5, guard: 6, reach: 15, grip: 12, leaf: true };
const d = m.tools.sword(m.dry, F, 'dg', O).d;
module.exports = {
  id: 'dagger',
  name: 'Dagger',
  emoji: '🗡️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['dagger', 'knife', 'blade', 'weapon', 'sharp'],
  tone: 'silver',
  body: d,
  shine: [62, 32, 45],
  shineSize: [6, 1.8],
  draw: (c) => m.tools.sword(c, F, 'dg', O).art,
};
