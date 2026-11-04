const p = require('../src/parts/paper');
const body = 'M26 10 L70 10 Q74 10 74 14 L74 74 C74 80 71 84 65 84 L28 84 C22 84 19 80 19 76 C19 72 21 70 22 70 L22 14 Q22 10 26 10 Z';
module.exports = {
  id: 'page-with-curl',
  name: 'Page With Curl',
  emoji: '📃',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['document', 'page', 'paper', 'curl', 'letter'],
  tone: 'white',
  body,
  shine: [28, 17, -55],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.textLines(30, 66, [22, 30, 38, 46, 54], w[3], 2.4, 0.55)}
      <path d="M22 70 L74 66 L74 74 C74 80 71 84 65 84 L28 84 C22 84 19 80 19 76 C19 72 21 70 22 70 Z" fill="${c.linear('roll', 'white', [0, 0, 0, 1], 1, 3)}"/>
      <path d="M26 76.5 L70 73.6" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>
      <path d="${p.ell(25.5, 77, 4.6, 6.2)}" fill="${w[2]}"/>
      <path d="M25.5 73.5 C23.4 73.5 22.6 76 23.6 78 C24.6 80 27.6 79.6 27.8 77.4" stroke="${w[3]}" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
  },
};
