const k = require('../src/parts/critter');
// A round yellow chick in profile facing left, one stubby wing and a tuft of tail.
const body = 'M30 40 C30 28 38 20 48 20 C58 20 64 28 63 38 C70 41 75 46 78 52 L84 50 C83 56 80 60 77 63 C74 74 63 79 50 79 C37 79 27 72 26 61 C25 52 30 46 30 40 Z';
module.exports = {
  id: 'baby-chick',
  name: 'Baby Chick',
  emoji: '🐤',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['chick', 'baby', 'bird', 'cute', 'spring'],
  tone: 'yellow',
  body,
  shine: [39, 28, -40],
  draw(c) {
    const ink = '#3D1A00';
    const feet = '#C25A00';
    return `${k.foot(44, 85, 77, -1, feet)}${k.foot(56, 85, 77, -1, feet)}
      <path d="${body}" fill="${c.radial('a', 'yellow', 0.35, 0.25)}"/>
      <path d="M48 52 C56 46 68 48 71 56 C68 64 58 68 47 66 C44 61 45 56 48 52 Z" fill="${c.radial('w', 'gold', 0.3, 0.2)}" stroke="#6B4A00" stroke-opacity=".45" stroke-width="1.1"/>
      ${k.line('M50 60 C56 62 62 61 66 58', '#6B4A00', 1.2, 0.5)}
      ${k.part(c, 'M31 32 L20 36.5 L31 41 Z', c.radial('beak', 'orange', 0.4, 0.3), 'orange')}
      ${k.eye(41, 33, 3, ink)}
      <ellipse cx="38" cy="43" rx="3.4" ry="2" fill="#FF8C00" opacity=".35"/>`;
  },
};
