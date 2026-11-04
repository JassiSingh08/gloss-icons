const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'place-of-worship',
  name: 'Place Of Worship',
  emoji: '🛐',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['worship', 'prayer', 'kneel', 'religion', 'faith'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const art = (k) => `<circle cx="53" cy="29.5" r="5.4" fill="${k}"/>
      <path d="M49 38.5 L43.5 56 L59 64 L59.5 72.5 M49.5 41.5 L60 44 L63.5 35.5 M38 72.5 L61 72.5" stroke="${k}" ${s.ST(5.6)}/>
      <path d="M26 77.5 L70 77.5" stroke="${k}" stroke-width="2.6" stroke-linecap="round"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
