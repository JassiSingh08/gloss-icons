const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'water-closet',
  name: 'Water Closet',
  emoji: '🚾',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['wc', 'toilet', 'restroom', 'lavatory', 'loo'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const w = s.word('WC', 48, 50, 23, 6.4, 3.4);
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${w}" stroke="${k}" ${s.ST(6.4)}/>`);
  },
};
