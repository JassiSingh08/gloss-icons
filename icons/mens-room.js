const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'mens-room',
  name: 'Men’s Room',
  emoji: '🚹',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['men', 'toilet', 'restroom', 'bathroom', 'gents'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    return s.tile(c, P) + s.emboss(c, P, (k) => s.man(k));
  },
};
