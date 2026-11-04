const B = require('../src/parts/building');

const body = 'M18 84 Q14 84 14 80 L14 33 Q14 30 17 30 L34 30 L34 15 Q34 12 37 12 L59 12 Q62 12 62 15 L62 30 L79 30 Q82 30 82 33 L82 80 Q82 84 78 84 Z';
module.exports = {
  id: 'hospital',
  name: 'Hospital',
  emoji: '🏥',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['medical', 'doctor', 'health', 'clinic', 'emergency'],
  tone: 'white',
  body,
  shine: [21, 40, -20],
  draw(c) {
    const wall = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const plus = c.linear('plus', 'red', [0, 0, 1, 1], 0, 2);
    let w = '';
    for (const x of [18, 66]) for (const y of [38, 52, 66]) w += B.win(c, x, y, 12, 9, { lit: false, frame: '#5A6B8C' });
    for (const x of [37, 49]) w += B.win(c, x, 38, 10, 9, { lit: false, frame: '#5A6B8C' });
    return `<path d="${body}" fill="${wall}"/>
      <path d="M34 30 L62 30 L62 84 L34 84 Z" fill="#D8D2EE" opacity=".45"/>
      <rect x="38" y="14.5" width="20" height="14" rx="3" fill="#fff" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <path d="M45.5 16.5 L50.5 16.5 L50.5 19.5 L53.5 19.5 L53.5 23.5 L50.5 23.5 L50.5 26.5 L45.5 26.5 L45.5 23.5 L42.5 23.5 L42.5 19.5 L45.5 19.5 Z" fill="${plus}"/>
      ${w}
      <path d="M38 84 L38 56 L58 56 L58 84 Z" fill="${B.glass(c)}" stroke="#5A6B8C" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M48 56 L48 84" stroke="#fff" stroke-width="1.6"/>
      <path d="M34 54 L62 54 L60 50 L36 50 Z" fill="${c.linear('canopy', 'red', [0, 0, 0, 1], 1, 2)}"/>`;
  },
};
