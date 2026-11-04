const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M25 29 L35.5 69 L43.5 40 C45.5 34 50.5 35 52 40 L56 50 M56.5 58.5 C59 66 55.5 72.5 47.5 73.5 M61.5 46.5 A7.2 7.2 0 1 1 61.49 46.5 Z';
module.exports = {
  id: 'capricorn',
  name: 'Capricorn',
  emoji: '♑',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['capricorn', 'goat', 'zodiac', 'astrology', 'horoscope'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>4.6`);
  },
};
