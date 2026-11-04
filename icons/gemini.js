const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M39 33.5 L39 66.5 M57 33.5 L57 66.5 M27 28 Q48 37 69 28 M27 72 Q48 63 69 72';
module.exports = {
  id: 'gemini',
  name: 'Gemini',
  emoji: '♊',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['gemini', 'twins', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
