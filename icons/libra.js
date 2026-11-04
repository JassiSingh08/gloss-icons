const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M26 69 L70 69 M26 57 L39 57 C34 53 33 47 34 43 C36 35 42 32 48 32 C54 32 60 35 62 43 C63 47 62 53 57 57 L70 57';
module.exports = {
  id: 'libra',
  name: 'Libra',
  emoji: '♎',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['libra', 'scales', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
