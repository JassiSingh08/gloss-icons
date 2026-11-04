const s = require('../src/parts/sign');
const P = s.SERIES.arrow;
module.exports = {
  id: 'top-arrow',
  name: 'TOP Arrow',
  emoji: '🔝',
  group: 'Symbols',
  subgroup: 'arrow',
  tags: ['top', 'up', 'best', 'arrow'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const a = s.arrow(48, 37.5, 0, { len: 24, headLen: 14, half: 11, shaft: 4.6 });
    const w = s.word('TOP', 48, 63.5, 13.5, 4.3);
    const g = (k) => `<path d="${a}" fill="${k}" stroke="${k}" stroke-width="2.4" stroke-linejoin="round"/><path d="${w}" stroke="${k}" ${s.ST(4.3)}/>`;
    return s.tile(c, P) + s.emboss(c, P, g);
  },
};
