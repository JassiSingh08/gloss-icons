const f = require('../src/parts/face');
const p = require('../src/parts/person');
const F = require('../src/parts/figure');

// Slicked hair, a dark mask, a smirk, and a high stiff collar on a purple cape.
const P = p.pose({ hair: 'crop' });
const COLLAR = 'M14 84 L10 44 C14 38 20 36 24 40 L30 62 L66 62 L72 40 C76 36 82 38 86 44 L82 84 Z';
const INK = '#12002E';
module.exports = {
  id: 'supervillain',
  name: 'Supervillain',
  emoji: '🦹',
  group: 'People & Body',
  subgroup: 'person-fantasy',
  tags: ['villain', 'evil', 'criminal', 'mastermind', 'bad guy'],
  tone: 'purple',
  ...p.spec(P, 'purple'),
  ...F.build((c) => {
    const cape = c.radial('cape', 'purple', 0.3, 0.2);
    const mask = `<path d="M20 43 C30 40 42 42 48 46 C54 42 66 40 76 43 C78 50 72 56 64 56 C58 56 52 52 48 50 C44 52 38 56 32 56 C24 56 18 50 20 43 Z" fill="#141420" stroke="#05050A" stroke-width="2" stroke-linejoin="round"/>`;
    const emblem = `<path d="M48 64 L54 72 L48 82 L42 72 Z" fill="${c.linear('gem', 'lime', [0, 0, 1, 1], 0, 2)}" stroke="#203D00" stroke-width="1.2" stroke-linejoin="round"/>`;
    return {
      art: `<path d="${COLLAR}" fill="${cape}" stroke="#1A0040" stroke-opacity=".7" stroke-width="1.3" stroke-linejoin="round"/>
        <path d="M14 46 C18 42 22 44 24 48 L28 62" stroke="#E21FC4" stroke-opacity=".6" stroke-width="2" fill="none"/>`
        + F.bust(c, P, { garment: 'black', neck: 'none', hair: 'crop', color: 'black', under: emblem })
        + P.at(mask + f.eyes.lidded({ y: 49, ink: '#E8FF9B' }) + f.brows.angry({ y: 39, ink: INK, sw: 4, slant: 5 }) + f.mouth.smirk({ y: 69 })),
    };
  }),
};
