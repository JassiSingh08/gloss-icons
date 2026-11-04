const k = require('../src/parts/critter');
// Standing on one leg, the other tucked: S-necked, head bowed, the black-tipped bill bent down.
const body = 'M34 18 C34 12 38 9 43 9 C48 9 51 13 50 18 C49 24 44 27 42 32 C40 36 42 40 46 38 C52 34 60 33 68 35 L84 40 C82 46 78 52 72 56 C64 60 54 60 48 56 C42 52 37 48 36 42 C35 36 38 30 41 26 C42 24 41 22 39 22 C37 22 35 21 34 18 Z';
module.exports = {
  id: 'flamingo',
  name: 'Flamingo',
  emoji: '🦩',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['flamingo', 'pink', 'tropical', 'bird', 'flamboyant'],
  tone: 'pink',
  body,
  shine: [41, 13, -30],
  shineSize: [4.5, 2.2],
  draw(c) {
    const leg = '#9E0030';
    return `${k.legs('M58 58 L58 85 M58 85 L52 86 M64 57 L69 69 L58 71', leg, 2.8)}
      <path d="${body}" fill="${c.radial('a', 'pink', 0.35, 0.25)}"/>
      <path d="M54 42 C62 38 74 40 82 42 C78 50 70 54 60 54 C55 52 52 46 54 42 Z" fill="${c.radial('w', 'pink', 0.7, 0.7)}" stroke="#4A0016" stroke-opacity=".45" stroke-width="1.1"/>
      <path d="M78 45.5 C80 47 81 49 80 50 C77 51 74 51 72 50 C74 49 76 47.5 78 45.5 Z" fill="#14081F"/>
      ${k.part(c, 'M35 13 L27 15 C24 16 22.5 19 24 23 L26 26 C27 22 30 20 35.5 19.5 Z', c.radial('bill', 'cream', 0.3, 0.2), 'cream')}
      <path d="M24 21 C24.5 23 25 24.5 26 26 C26.5 24 27.5 22.5 29 21.5 Z" fill="#14081F"/>
      ${k.eye(42, 14, 2.3)}`;
  },
};
