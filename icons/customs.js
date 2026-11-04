const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'customs',
  name: 'Customs',
  emoji: '🛃',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['customs', 'border', 'declare', 'luggage', 'airport'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `<circle cx="48" cy="31.5" r="6.4" fill="${k}"/>
      <path d="M39.5 26 Q41 17.5 48 17.5 Q55 17.5 56.5 26 Z" fill="${k}"/>
      <path d="M37.5 26.6 L58.5 26.6" stroke="${k}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M38.5 26.6 L57.5 26.6" stroke="${g}" stroke-width="1.2" opacity=".55"/>
      <path d="M31.5 55 Q31.5 41.5 48 41.5 Q64.5 41.5 64.5 55 Z" fill="${k}"/>
      <path d="M30 55.5 L66 55.5" stroke="${g}" stroke-width="2" opacity=".6"/>
      ${s.suitcase(33, 59.5, 30, 15, k, g)}`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
