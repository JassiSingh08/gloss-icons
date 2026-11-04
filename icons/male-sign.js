const s = require('../src/parts/sign');
const P = s.SERIES.gender;
const d = 'M52.4 43.6 L68.5 27.5 M55 27 L69 27 L69 41 M42 42 A14 14 0 1 1 41.99 42 Z';
module.exports = {
  id: 'male-sign',
  name: 'Male Sign',
  emoji: '♂️',
  group: 'Symbols',
  subgroup: 'gender',
  tags: ['male', 'man', 'mars', 'gender', 'symbol'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
