const L = require('../src/parts/leaf');
// A tapering root lying on the diagonal, ringed with growth lines, with a spray of greens.
const body = 'M57 27 C65 23 74 27 75 35 C76 42 70 49 60 58 C47 69 32 79 20 84 C16.5 85.5 14 83 15.5 79.5 C21 68 31 54 41 43 C47 36 51 30 57 27 Z';
module.exports = {
  id: 'carrot',
  name: 'Carrot',
  emoji: '🥕',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['carrot', 'vegetable', 'root', 'orange', 'healthy'],
  tone: 'orange',
  body,
  shine: [50, 35, -50],
  shineSize: [6, 2.6],
  draw(c) {
    const k = L.kit(c);
    return `${k.stem('M66 28 C66 20 64 14 60 9', 2.6)}${k.stem('M68 29 C73 22 79 18 86 16', 2.6)}${k.stem('M67 28 C70 19 74 13 78 8', 2.6)}
      ${k.leaf([62, 19], [52, 9], 0.32, -0.2)}${k.leaf([78, 19], [88, 26], 0.32, 0.2)}${k.leaf([73, 14], [83, 6], 0.32, 0.1)}
      <path d="${body}" fill="${c.radial('a', 'orange', 0.35, 0.25)}"/>
      <g stroke="#8A2A00" stroke-opacity=".45" stroke-width="1.5" stroke-linecap="round" fill="none">
        <path d="M47 41 Q51 44 53 48"/><path d="M60 37 Q63 40 64 44"/><path d="M38 54 Q42 56 44 60"/><path d="M52 52 Q55 55 56 58"/><path d="M30 66 Q33 68 35 71"/><path d="M23 76 Q26 77 27 80"/>
      </g>`;
  },
};
