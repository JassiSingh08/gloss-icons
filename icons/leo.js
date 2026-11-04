const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M39 53 C35 45 35.5 30 49 27 C62 24.5 67 36 62.5 47 C59.5 55 56 63 58 69 C59.5 73.5 64.5 74.5 68 71 M33 50.5 A7.2 7.2 0 1 0 33.01 50.5 Z';
module.exports = {
  id: 'leo',
  name: 'Leo',
  emoji: '♌',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['leo', 'lion', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
