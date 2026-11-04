const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Domino mask, a bolt on the chest, a red cape spread behind the shoulders.
const P = p.pose({ hair: 'short' });
const CAPE = 'M20 56 C10 64 8 76 10 84 L86 84 C88 76 86 64 76 56 Z';
const MASK = '<path d="M22 44 C30 40 42 41 48 45 C54 41 66 40 74 44 C76 50 72 56 64 56 C58 56 52 52 48 50 C44 52 38 56 32 56 C24 56 20 50 22 44 Z" fill="RED" stroke="#3D0003" stroke-width="2" stroke-linejoin="round"/>';
module.exports = {
  id: 'superhero',
  name: 'Superhero',
  emoji: '🦸',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['superhero', 'hero', 'superpower', 'cape', 'save the day'],
  tone: 'blue',
  ...p.spec(P, 'blue'),
  ...F.build((c) => {
    const red = c.radial('cape', 'red', 0.3, 0.2);
    const bolt = `<path d="M50 63 L42 74 L48 74 L45 83 L55 70 L49 70 L53 63 Z" fill="${c.linear('bolt', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-width="1.2" stroke-linejoin="round"/>`;
    return {
      art: `<path d="${CAPE}" fill="${red}" stroke="#3D0003" stroke-opacity=".6" stroke-width="1.2"/>`
        + F.bust(c, P, { garment: 'blue', neck: 'crew', hair: 'short', color: 'black', under: bolt })
        + P.at(MASK.replace('RED', red) + f.eyes.oval({ y: 49, rx: 3, ry: 4, ink: '#FFF7E8' }) + f.brows.angry({ y: 38, sw: 3.6, slant: 3 }) + f.mouth.smile({ y: 68 })),
    };
  }),
};
