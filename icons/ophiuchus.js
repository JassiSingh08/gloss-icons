const s = require('../src/parts/sign');
const P = s.SERIES.zodiac;
const d = 'M24 40 Q30 29 36 38 Q42 47 48 38 Q54 29 60 38 Q66 47 72 38 M36 38 L36 72 M60 38 L60 72';
module.exports = {
  id: 'ophiuchus',
  name: 'Ophiuchus',
  emoji: '⛎',
  group: 'Symbols',
  subgroup: 'zodiac',
  tags: ['ophiuchus', 'serpent bearer', 'zodiac', 'astrology', 'snake'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    return s.tile(c, P) + s.emboss(c, P, (k) => `<path d="${d}" stroke="${k}" ${s.ST(5)}/>`);
  },
};
