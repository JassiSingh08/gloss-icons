const B = require('../src/parts/building');

const body = 'M16 84 Q12 84 12 80 L12 76 Q12 72 17 72 L19 72 L19 46 L15 46 Q12 44 14.5 41.5 L38.5 17.5 Q41 15.5 43.5 17.5 L67.5 41.5 Q70 44 67 46 L63 46 L63 72 L79 72 Q84 72 84 76 L84 80 Q84 84 80 84 Z';
module.exports = {
  id: 'house-with-garden',
  name: 'House with Garden',
  emoji: '🏡',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['home', 'garden', 'suburb', 'family', 'cosy'],
  tone: 'cream',
  body,
  shine: [29, 30, -45],
  draw(c) {
    const lawn = c.linear('lawn', 'green', [0, 0, 0.4, 1], 0, 2);
    const leaf = c.radial('leaf', 'green', 0.32, 0.25);
    const trunk = c.linear('trunk', 'brown', [0, 0, 1, 0], 1, 2);
    const flower = (x, y, col) => `<circle cx="${x}" cy="${y}" r="2.2" fill="${col}"/><circle cx="${x}" cy="${y}" r=".9" fill="#FFF3B0"/>`;
    return `<path d="${body}" fill="${B.wall(c)}"/>
      <path d="M38.5 17.5 Q41 15.5 43.5 17.5 L67.5 41.5 Q70 44 67 46 L15 46 Q12 44 14.5 41.5 Z" fill="${B.roof(c)}"/>
      ${B.eave(19, 46, 44)}
      ${B.win(c, 23, 52, 12, 11)}
      ${B.door(c, 40, 53, 12, 19)}
      <path d="M16 84 Q12 84 12 80 L12 76 Q12 72 17 72 L79 72 Q84 72 84 76 L84 80 Q84 84 80 84 Z" fill="${lawn}"/>
      <path d="M43 72 L49 72 L52 84 L40 84 Z" fill="#E9C98F"/>
      <path d="M69 74 L69 58 L75 58 L75 74 Z" fill="${trunk}" stroke="#331805" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M72 30 C80 30 85 37 84 44 C86 50 82 58 75 58 C72 61 66 60 64 56 C58 55 57 47 61 43 C60 35 65 30 72 30 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".55" stroke-width="1.2"/>
      <ellipse cx="68" cy="38" rx="4" ry="2" fill="#fff" opacity=".45" transform="rotate(-35 68 38)"/>
      <path d="M14 73 C14 66 21 64 24 68 C28 66 33 69 32 73 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.1"/>
      ${flower(20, 78, '#FF5C8A')}${flower(30, 80, '#FFD82E')}${flower(60, 79, '#FF5C8A')}`;
  },
};
