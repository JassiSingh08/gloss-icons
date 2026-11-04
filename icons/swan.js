const k = require('../src/parts/critter');
// A swan gliding left: long S of a neck, wings lifted on the back, orange bill with a black knob.
const body = 'M27 25 C27 18 31 14 36 14 C42 14 45 19 44 26 C43 34 39 40 40 48 C41 53 46 54 52 50 C60 45 72 42 86 40 C84 48 80 54 74 58 C78 60 80 64 78 68 C74 78 64 82 50 82 C36 82 24 76 22 66 C21 58 25 52 29 46 C33 40 34 34 33 30 C31 30 29 29 27 28 Z';
module.exports = {
  id: 'swan',
  name: 'Swan',
  emoji: '🦢',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['swan', 'elegant', 'lake', 'bird', 'grace'],
  tone: 'white',
  body,
  shine: [33, 18, -40],
  shineSize: [4.5, 2.2],
  draw(c) {
    const edge = '#8C83AD';
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.4, 0.3)}"/>
      <path d="M46 58 C56 48 70 45 84 43 C80 52 72 58 64 61 C69 63 69 67 65 69 C57 71 49 67 46 62 Z" fill="${c.radial('w', 'white', 0.3, 0.2)}" stroke="${edge}" stroke-opacity=".55" stroke-width="1.1"/>
      ${k.line('M52 60 C60 56 68 52 78 48 M55 65 C60 64 63 63 66 62', edge, 1.2, 0.55)}
      ${k.part(c, 'M28 19 L16 25.5 C15 26.5 16 27.5 17 27.5 L29 26 Z', c.radial('bill', 'orange', 0.4, 0.3), 'orange')}
      <circle cx="28.5" cy="21.5" r="2.4" fill="#14081F"/>
      ${k.eye(35, 20, 2.3)}`;
  },
};
