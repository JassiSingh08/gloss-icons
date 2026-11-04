const k = require('../src/parts/critter');
// A gecko seen from above, mid-scurry: S-curved body and a tail that curls round, toes spread.
const body = 'M48 12 C54 12 57 17 56 23 C55 27 53 29 54 33 C57 40 58 50 55 58 C53 64 52 70 56 76 C60 81 68 81 72 77 C74 75 77 76 76 79 C72 86 60 88 52 82 C46 77 44 70 45 62 C46 55 41 48 41 40 C41 34 42 30 41 27 C39 24 38 21 40 17 C41 14 44 12 48 12 Z';
module.exports = {
  id: 'lizard',
  name: 'Lizard',
  emoji: '🦎',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['lizard', 'gecko', 'reptile', 'scurry', 'sun'],
  tone: 'teal',
  body,
  shine: [44, 18, -50],
  shineSize: [4, 1.8],
  draw(c) {
    const deep = '#00796B';
    const legs = ['M43 33 L33 31 L28 23', 'M54 33 L64 30 L69 22', 'M45 55 L34 58 L29 66', 'M54 57 L65 61 L68 69'];
    const toes = [[28, 23, -1, -1], [69, 22, 1, -1], [29, 66, -1, 1], [68, 69, 1, 1]].map(([x, y, sx, sy]) =>
      `M${x} ${y} L${x + sx * 5} ${y - sy * 1} M${x} ${y} L${x + sx * 3} ${y + sy * 4.5} M${x} ${y} L${x - sx * 1} ${y + sy * -5}`).join(' ');
    return `${k.legs(legs.join(' '), '#003A33', 6.4)}${k.legs(legs.join(' '), c.linear('leg', 'teal', [0, 0, 1, 1], 1, 2), 4.2)}
      ${k.legs(toes, '#003A33', 2.6)}
      <path d="${body}" fill="${c.radial('a', 'teal', 0.35, 0.2)}"/>
      ${[[48, 36], [50, 46], [48, 56], [50, 66], [58, 78]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.2" fill="#FFD82E" opacity=".85"/>`).join('')}
      ${k.eye(42.5, 19, 2.3, '#003A33')}${k.eye(53.5, 19, 2.3, '#003A33')}`;
  },
};
