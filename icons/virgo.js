const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M26 33 Q29 32 29 37 L29 66 M29 39 C29 31 39 31 39 39 L39 66 M39 39 C39 31 49 31 49 39 L49 75 M49 52 C53 42 64 42 64 51 C64 61 55 66 45 67';
module.exports = {
  id: 'virgo',
  name: 'Virgo',
  emoji: '♍',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['virgo', 'maiden', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>4.6`);
  },
};
