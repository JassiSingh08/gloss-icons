const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M26 27 C30 37.5 38 43 48 43 C58 43 66 37.5 70 27 M48 43 A13.5 13.5 0 1 1 47.99 43 Z';
module.exports = {
  id: 'taurus',
  name: 'Taurus',
  emoji: '♉',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['taurus', 'bull', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
