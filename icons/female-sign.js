const s = require('../src/parts/sign');
const P = s.SERIES.gender;
const d = 'M48 50.5 L48 75 M38.5 65 L57.5 65 M48 24 A13.2 13.2 0 1 1 47.99 24 Z';
module.exports = {
  id: 'female-sign',
  name: 'Female Sign',
  emoji: '♀️',
  group: 'Symbols',
  subgroup: 'gender',
  tags: ['female', 'woman', 'venus', 'gender', 'symbol'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
