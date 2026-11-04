const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M34.5 33.5 C46.5 30.5 60 31 70 36.5 M61.5 66.5 C49.5 69.5 36 69 26 63.5 M34.5 33.5 A6.8 6.8 0 1 0 34.51 33.5 Z M61.5 66.5 A6.8 6.8 0 1 0 61.49 66.5 Z';
module.exports = {
  id: 'cancer',
  name: 'Cancer',
  emoji: '♋',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['cancer', 'crab', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
