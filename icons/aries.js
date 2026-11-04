const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M48 72 L48 42 C48 30 43 26 36.5 26 C30.5 26 26.5 30.5 26.5 36 C26.5 41 30 44 34 43 M48 42 C48 30 53 26 59.5 26 C65.5 26 69.5 30.5 69.5 36 C69.5 41 66 44 62 43';
module.exports = {
  id: 'aries',
  name: 'Aries',
  emoji: '♈',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['aries', 'ram', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
