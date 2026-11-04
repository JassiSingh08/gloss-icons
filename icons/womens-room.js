const s = require('../src/parts/sign');
const P = 'pink';
module.exports = {
  id: 'womens-room',
  name: 'Women’s Room',
  emoji: '🚺',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['women', 'toilet', 'restroom', 'bathroom', 'ladies'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    return s.tile(c, P) + s.emboss(c, P, (k) => s.woman(k));
  },
};
