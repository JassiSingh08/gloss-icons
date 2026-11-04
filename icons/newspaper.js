const p = require('../src/parts/paper');
const body = 'M20 14 L72 14 Q76 14 76 18 L76 22 L80 22 Q84 22 84 26 L84 78 Q84 84 78 84 L18 84 Q12 84 12 78 L12 30 Q12 26 16 26 L16 18 Q16 14 20 14 Z';
module.exports = {
  id: 'newspaper',
  name: 'Newspaper',
  emoji: '📰',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['news', 'paper', 'headlines', 'press', 'daily'],
  tone: 'white',
  body,
  shine: [21, 20, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    const ink = '#2E2E3D';
    return `<path d="${body}" fill="${c.linear('back', 'white', [0, 0, 1, 1], 1, 3)}"/>
      <path d="M20 14 L72 14 Q76 14 76 18 L76 80 L16 80 L16 18 Q16 14 20 14 Z" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M22 20 L70 20 L70 28 L22 28 Z" fill="${ink}"/>
      ${p.line('M26 24 L36 24 M40 24 L54 24 M58 24 L66 24', '#fff', 2, 0.85)}
      ${p.line('M22 32.5 L70 32.5', ink, 1.2, 0.8)}
      <path d="${p.rr(22, 37, 22, 18, 1.5)}" fill="${c.linear('img', 'sky', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M22 51 L29 44 L34 48 L38 44 L44 50 L44 55 L22 55 Z" fill="${c.ramp('blue')[2]}" opacity=".8"/>
      ${p.line('M49 38.5 L70 38.5 M49 44 L70 44 M49 49.5 L70 49.5 M49 55 L64 55 M22 61 L70 61 M22 66.5 L70 66.5 M22 72 L58 72', w[3], 2, 0.6)}
      <path d="M12 30 Q12 26 16 26 L16 80 L76 80 L76 22 L80 22 Q84 22 84 26 L84 78 Q84 84 78 84 L18 84 Q12 84 12 78 Z" fill="${c.linear('fold', 'white', [0, 0, 0, 1], 1, 2)}"/>
      ${p.line('M16 26.5 L16 80 L76 80 L76 22.5', w[3], 1.1, 0.5)}`;
  },
};
