const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M28 70 L68 30 M55 29.5 L68.5 29.5 L68.5 43 M36 48 L50 62';
module.exports = {
  id: 'sagittarius',
  name: 'Sagittarius',
  emoji: '♐',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['sagittarius', 'archer', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
