const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'on-arrow',
  name: 'ON! Arrow',
  emoji: '🔛',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['on', 'active', 'switch', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const a = s.arrow(48, 37.5, 90, { len: 48, headLen: 14, half: 11, shaft: 4.6, double: true });
    const w = s.word('ON!', 48, 63.5, 13.5, 4.3);
    const g = (k) => `<path d="${a}" fill="${k}" stroke="${k}" stroke-width="2.4" stroke-linejoin="round"/><path d="${w}" stroke="${k}" ${s.ST(4.3)}/>`;
    return s.tile(c, P) + s.emboss(c, P, g);
  },
};
