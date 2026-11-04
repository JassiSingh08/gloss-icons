const s = require('../src/parts/sign');
const P = s.SERIES.gender;
const d = 'M48 62.5 L48 76.5 M42 70.5 L54 70.5 M54.7 46.3 L70 31 M62 31 L70 31 L70 39 M41.3 46.3 L26 31 M34 31 L26 31 L26 39 M32.7 44.1 L39.1 37.7 M48 43.5 A9.5 9.5 0 1 1 47.99 43.5 Z';
module.exports = {
  id: 'transgender-symbol',
  name: 'Transgender Symbol',
  emoji: '⚧️',
  group: 'Symbols',
  subgroup: 'gender',
  tags: ['transgender', 'trans', 'gender', 'lgbtq', 'pride'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>4.4`);
  },
};
