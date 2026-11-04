const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'passport-control',
  name: 'Passport Control',
  emoji: '🛂',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['passport', 'border', 'immigration', 'travel', 'control'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `<rect x="32" y="24" width="32" height="50" rx="4.5" fill="${k}"/>
      <path d="M36 24.5 L36 73.5" stroke="${g}" stroke-width="1.4" opacity=".4"/>
      <g fill="none" stroke="${g}" stroke-width="2.2" opacity=".6"><circle cx="49" cy="44" r="9.5"/><ellipse cx="49" cy="44" rx="4" ry="9.5"/><path d="M39.5 44 L58.5 44"/></g>
      <path d="M41 62.5 L57 62.5" stroke="${g}" stroke-width="2.6" stroke-linecap="round" opacity=".6"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
