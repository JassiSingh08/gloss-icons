const p = require('../src/parts/paper');
const body = 'M26 10 L60 10 L74 24 L74 80 Q74 84 70 84 L26 84 Q22 84 22 80 L22 14 Q22 10 26 10 Z';
module.exports = {
  id: 'page-facing-up',
  name: 'Page Facing Up',
  emoji: '📄',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['document', 'page', 'paper', 'file', 'text'],
  tone: 'white',
  body,
  shine: [28, 17, -55],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M30 24 L50 24', '#3D4FD6', 3.2, 0.7)}
      ${p.textLines(30, 66, [36, 44, 52, 60, 68], w[3], 2.4, 0.55)}
      <path d="M60 10 L60 21 Q60 24 63 24 L74 24 Z" fill="${c.linear('fold', 'white', [0, 0, 1, 1], 1, 3)}"/>
      <path d="M60 10 L60 21 Q60 24 63 24 L74 24" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1" fill="none"/>`;
  },
};
