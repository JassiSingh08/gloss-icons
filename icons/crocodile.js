const k = require('../src/parts/critter');
// A crocodile low on the ground facing left: long toothy snout, eye on a bump, ridged back, tail to the right.
const body = 'M8 64 C8 58 13 56 22 56 L34 54 C36 46 41 43 46 44 C52 40 62 40 72 44 C80 48 86 54 92 64 C86 65 80 64 74 66 C72 74 66 78 58 79 L50 80 C42 80 37 77 35 74 L22 74 C13 74 8 70 8 64 Z';
module.exports = {
  id: 'crocodile',
  name: 'Crocodile',
  emoji: '🐊',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['crocodile', 'alligator', 'swamp', 'reptile', 'teeth'],
  tone: 'olive',
  body,
  shine: [22, 58.5, -10],
  shineSize: [6, 2],
  draw(c) {
    const ink = '#1A2003';
    const leg = c.radial('leg', 'olive', 0.3, 0.2);
    const ridge = [[53, 41], [59, 40.5], [65, 41.8], [71, 43.8], [77, 47], [83, 51.5], [88, 57]].map(([x, y]) =>
      `M${x - 2.6} ${y + 1.8} L${x} ${y - 2.8} L${x + 2.6} ${y + 1.8} Z`).join(' ');
    return `<path d="${ridge}" fill="#5A6B14" stroke="#273005" stroke-opacity=".5" stroke-width="1"/>
      ${k.part(c, 'M40 70 L51 70 C53 76 56 80 59 83 C59 85 50 85.5 46 84.5 C44 80 42 76 40 70 Z', leg, 'olive')}
      ${k.part(c, 'M64 68 L75 66 C77 72 79 78 82 83 C82 85 73 85.5 69 84.5 C67 79 66 74 64 68 Z', leg, 'olive')}
      <path d="${body}" fill="${c.radial('a', 'olive', 0.35, 0.3)}"/>
      <path d="M22 74 L35 74 C37 77 42 80 50 80 L58 79 C64 78 69 76 72 71 C60 74 46 73 37 70 Z" fill="${c.ramp('sand')[1]}" opacity=".55"/>
      <path d="M13 65 L14.6 69 L16.2 65.1 Z M19 65.3 L20.6 69.3 L22.2 65.4 Z M25 65.6 L26.6 69.6 L28.2 65.7 Z M31 65.9 L32.4 68.8 L33.8 66 Z" fill="#FFF8EC"/>
      ${k.legs('M10 64.8 L34 66 C36 66.2 38 68 39 70', ink, 1.8)}
      ${k.legs('M24 60 L29 60', ink, 1.4)}
      <circle cx="12.5" cy="57.5" r="1.3" fill="${ink}"/>
      ${k.irisEye(45, 48.5, 3.4, '#E3EF6A', ink, 0.5)}
      ${k.legs('M40.5 45.6 L49.5 46.6', ink, 2.2)}`;
  },
};
