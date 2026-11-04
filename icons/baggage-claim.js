const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'baggage-claim',
  name: 'Baggage Claim',
  emoji: '🛄',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['baggage', 'luggage', 'claim', 'airport', 'suitcase'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `${s.suitcase(34, 33, 28, 25, k, g)}
      <rect x="24" y="62" width="48" height="6" rx="3" fill="${k}"/>
      <circle cx="31" cy="73.5" r="2.6" fill="${k}"/><circle cx="48" cy="73.5" r="2.6" fill="${k}"/><circle cx="65" cy="73.5" r="2.6" fill="${k}"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
