const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'left-luggage',
  name: 'Left Luggage',
  emoji: '🛅',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['luggage', 'locker', 'storage', 'baggage', 'suitcase'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `${s.suitcase(24, 38, 30, 34, k, g)}
      <path d="M60 52 L60 47 A6 6 0 0 1 72 47 L72 52" stroke="${k}" ${s.ST(3.4)}/>
      <rect x="56.5" y="51.5" width="19" height="16" rx="3" fill="${k}"/>
      <path d="M66 57 L66 62" stroke="${g}" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
