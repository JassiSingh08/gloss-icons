const s = require('../src/parts/sign');
const P = s.SERIES.religion;
module.exports = {
  id: 'peace-symbol',
  name: 'Peace Symbol',
  emoji: '☮️',
  group: 'Symbols',
  subgroup: 'religion',
  tags: ['peace', 'pacifism', 'calm', 'hippie', 'symbol'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[1];
    const art = (k) => `<circle cx="48" cy="50" r="22" fill="none" stroke="${k}" stroke-width="4.6"/>
      <path d="M48 28 L48 72 M48 50 L32.4 65.6 M48 50 L63.6 65.6" stroke="${k}" stroke-width="4.6"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
