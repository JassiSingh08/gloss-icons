const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'potable-water',
  name: 'Potable Water',
  emoji: '🚰',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['water', 'drinking', 'tap', 'faucet', 'potable'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => s.potable(k, g);
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
