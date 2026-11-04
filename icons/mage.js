const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// A tall pointed hat with a crooked tip and stars, a long silver beard over a purple robe.
const P = p.pose({ cy: 44, r: 20, sw: 32, sy: 66 });
const HAT = 'M4 40 C4 34 92 34 92 40 C92 46 4 46 4 40 Z';
const CONE = 'M18 38 C26 24 32 10 38 -2 C42 -10 52 -14 66 -9 C57 -6 54 2 56 10 C60 22 68 30 78 38 Z';
const BEARD = 'M19 56 C24 64 34 64 40 62 C44 60 52 60 56 62 C62 64 72 64 77 56 C80 74 72 92 60 102 C56 106 52 108 48 113 C44 108 40 106 36 102 C24 92 16 74 19 56 Z';
module.exports = {
  id: 'mage',
  name: 'Mage',
  emoji: '🧙',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['wizard', 'witch', 'sorcerer', 'magic', 'spell'],
  tone: 'purple',
  shine: [28, 44, -40], shineSize: [4, 1.8],
  ...F.build((c) => {
    const hat = c.radial('hat', 'purple', 0.3, 0.2);
    const star = (x, y, r) => `<path d="M${x} ${y - r} L${x + r * 0.3} ${y - r * 0.3} L${x + r} ${y} L${x + r * 0.3} ${y + r * 0.3} L${x} ${y + r} L${x - r * 0.3} ${y + r * 0.3} L${x - r} ${y} L${x - r * 0.3} ${y - r * 0.3} Z" fill="#FFD82E"/>`;
    const { fill, edge } = p.hairPaint(c, 'grey', 'beard');
    return {
      art: F.bust(c, P, { garment: 'purple', neck: 'none', face: f.brows.raised({ y: 47, sw: 4.6 }) + f.eyes.lidded({ y: 54 }) })
        + P.at(`<path d="${BEARD}" fill="${fill}" stroke="${edge}" stroke-opacity=".6" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M40 66 Q48 70 56 66" stroke="#4A0E14" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M34 80 C36 90 42 98 46 106 M60 80 C58 90 54 96 50 102" stroke="${edge}" stroke-opacity=".35" stroke-width="1.6" fill="none"/>
          <path d="${CONE}" fill="${hat}" stroke="#1A0040" stroke-width="2.2" stroke-linejoin="round"/>
          <path d="${HAT}" fill="${hat}" stroke="#1A0040" stroke-width="2.2"/>
          <path d="M20 37 Q48 32 76 37" stroke="#FFC21A" stroke-width="3.4" fill="none"/>
          ${star(44, 14, 6)}${star(56, 26, 4)}${star(35, 28, 3.4)}`),
    };
  }),
};
