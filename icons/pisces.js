const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M31 27 C42 37 42 63 31 73 M65 27 C54 37 54 63 65 73 M27 50 L69 50';
module.exports = {
  id: 'pisces',
  name: 'Pisces',
  emoji: '♓',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['pisces', 'fish', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
