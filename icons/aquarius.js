const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M25 44 L32.5 36 L40 44 L48 36 L56 44 L63.5 36 L71 44 M25 64 L32.5 56 L40 64 L48 56 L56 64 L63.5 56 L71 64';
module.exports = {
  id: 'aquarius',
  name: 'Aquarius',
  emoji: '♒',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['aquarius', 'water bearer', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
