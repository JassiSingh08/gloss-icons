const f = require('../src/parts/face');
const p = require('../src/parts/person');

// The hood replaces the head: only a band of skin shows round the eyes.
const P = p.pose();
module.exports = {
  id: 'ninja',
  name: 'Ninja',
  emoji: '🥷',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['ninja', 'stealth', 'shinobi', 'martial arts', 'hidden'],
  ...p.spec(P, 'black'),
  draw(c) {
    const cloth = c.radial('hood', 'black', 0.32, 0.22);
    const band = c.linear('skin', 'yellow', [0, 0, 0, 1], 0, 2);
    return p.torso(c, P, { palette: 'black', neck: 'none' })
      + `<path d="M64 46 C72 46 80 50 84 58 C78 57 73 55 69 54 C74 60 76 66 75 72 C70 66 64 60 60 56 Z" fill="${cloth}" stroke="#05050A" stroke-width="1.2" stroke-linejoin="round"/>`
      + P.at(`<path d="${f.BODY}" fill="${cloth}"/>
        <path d="M19 40 Q48 34 77 40 L77 56 Q48 52 19 56 Z" fill="${band}"/>
        <path d="M19 40 Q48 34 77 40 M19 56 Q48 52 77 56" stroke="#05050A" stroke-opacity=".7" stroke-width="2" fill="none"/>
        ${f.brows.angry({ y: 42, sw: 3.4, slant: 3 })}${f.eyes.lidded({ y: 48 })}
        <path d="M24 66 Q48 62 72 66 M28 74 Q48 70 68 74" stroke="#fff" stroke-opacity=".08" stroke-width="2" fill="none"/>`);
  },
};
