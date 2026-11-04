const p = require('../src/parts/paper');
const body = 'M10 28 L22 24 C33 21 43 23 48 28 C53 23 63 21 74 24 L86 28 L86 78 L74 76 C63 74 54 76 50 81 Q48 83 46 81 C42 76 33 74 22 76 L10 78 Z';
module.exports = {
  id: 'open-book',
  name: 'Open Book',
  emoji: '📖',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['read', 'book', 'story', 'study', 'literature'],
  tone: 'blue',
  body,
  shine: [16, 34, -80],
  shineSize: [4.5, 1.8],
  draw(c) {
    const cream = c.ramp('cream');
    const left = c.linear('l', 'cream', [0, 0, 1, 1], 0, 1);
    const right = c.linear('r', 'cream', [1, 0, 0, 1], 0, 2);
    const row = (y, side) => side < 0
      ? `M20 ${y} C30 ${y - 3} 38 ${y - 2.4} 44 ${y + 0.6}`
      : `M52 ${y + 0.6} C58 ${y - 2.4} 66 ${y - 3} 76 ${y}`;
    let lines = '';
    for (const y of [34, 40, 46, 52, 58, 64]) lines += `${row(y, -1)} ${row(y, 1)} `;
    return `<path d="${body}" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 1, 3)}"/>
      <path d="M14 26 L22 23 C33 20 43 22 48 27 L48 79 C43 74 33 72 22 73 L14 74 Z" fill="${cream[2]}"/>
      <path d="M82 26 L74 23 C63 20 53 22 48 27 L48 79 C53 74 63 72 74 73 L82 74 Z" fill="${cream[2]}"/>
      <path d="M17 24 C30 18 42 19 48 25 L48 77 C42 71 30 70 17 72 Z" fill="${left}"/>
      <path d="M79 24 C66 18 54 19 48 25 L48 77 C54 71 66 70 79 72 Z" fill="${right}"/>
      ${p.line(lines, cream[3], 1.6, 0.4)}
      <path d="M44 25 L48 25 L48 77 L44 74 Z" fill="${cream[3]}" opacity=".18"/>
      ${p.line('M48 25 L48 77', cream[3], 1.2, 0.6)}`;
  },
};
