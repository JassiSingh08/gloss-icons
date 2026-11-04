const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M25 33 Q28 32 28 37 L28 66 M28 39 C28 31 37.5 31 37.5 39 L37.5 66 M37.5 39 C37.5 31 47 31 47 39 L47 62 C47 69 51 72 58 72 L67 72 M61 66 L67.5 72 L61 78';
module.exports = {
  id: 'scorpio',
  name: 'Scorpio',
  emoji: '♏',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['scorpio', 'scorpion', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>4.6`);
  },
};
