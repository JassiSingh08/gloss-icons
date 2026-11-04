const m = require('../src/parts/metal');
// Three-quarter view: back posts and the far leg behind the seat, front legs in front.
const body = 'M38 46 L78 46 L62 58 L62 63 L20 63 L20 58 Z';
module.exports = {
  id: 'chair',
  name: 'Chair',
  emoji: '🪑',
  group: 'Objects',
  subgroup: 'household',
  tags: ['chair', 'seat', 'sit', 'furniture', 'wait'],
  tone: 'brown',
  body,
  shine: [36, 50, -20],
  shineSize: [5, 1.6],
  draw(c) {
    const top = c.linear('a', 'brown', [0, 0, 1, 1], 0, 1);
    const front = c.linear('f', 'brown', [0, 0, 0, 1], 2, 3);
    const leg = (x, y1, y2, k) => m.part(m.round([[x, y1], [x + 5, y1], [x + 5, y2], [x, y2]], 1), m.cyl(c, `l${k}`, 'wood', [x + 2.5, y1], [x + 2.5, y2], 5), 'wood');
    const back = c.linear('b', 'brown', [0, 0, 1, 1], 0, 2);
    return `${leg(73, 50, 77, 1)}
      ${leg(38, 10, 48, 2)}${leg(73, 10, 48, 3)}
      ${m.part(m.round([[38, 12], [78, 12], [78, 21], [38, 21]], 2.5), back, 'brown')}
      ${m.part('M47 21 L52 21 L52 46 L47 46 Z M64 21 L69 21 L69 46 L64 46 Z', back, 'brown')}
      <path d="M40 15 L76 15" stroke="#FFE2C4" stroke-opacity=".5" stroke-width="1.3" stroke-linecap="round"/>
      <path d="${body}" fill="${front}"/>
      <path d="M38 46 L78 46 L62 58 L20 58 Z" fill="${top}"/>
      ${leg(20, 62, 84, 4)}${leg(57, 62, 84, 5)}`;
  },
};
