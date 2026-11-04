const d = require('../src/parts/device');

const body = 'M18 36 L78 36 Q84 36 84 42 L84 70 Q84 75 79 75 L17 75 Q12 75 12 70 L12 42 Q12 36 18 36 Z';

module.exports = {
  id: 'printer',
  name: 'Printer',
  emoji: '🖨️',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['printer', 'print', 'office', 'paper', 'document'],
  tone: 'slate',
  body,
  shine: [18, 42, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const box = c.linear('a', 'slate', [0, 0, 1, 1], 0, 2);
    const top = c.linear('top', 'slate', [0, 0, 0, 1], 0, 1);
    const paper = c.linear('paper', 'white', [0, 0, 0, 1], 0, 2);
    const led = c.radial('led', 'green', 0.35, 0.3);
    const lines = (x0, x1, ys, op) => ys.map((y) => `M${x0} ${y} L${x1} ${y}`).join(' ');
    return `<path d="M28 13 L68 13 L68 38 L28 38 Z" fill="${paper}" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1"/>
      <path d="${lines(33, 63, [19, 24.5])} ${lines(33, 52, [30])}" stroke="#7A8CB0" stroke-width="2" stroke-linecap="round"/>
      <path d="${body}" fill="${box}"/>
      <path d="M18 36 L78 36 Q84 36 84 42 L84 47 L12 47 L12 42 Q12 36 18 36 Z" fill="${top}"/>
      <path d="M22 38.5 L74 38.5" stroke="#1E2A3D" stroke-opacity=".7" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="75" cy="55" r="2.6" fill="${led}"/>
      <rect x="64" y="53" width="6" height="4" rx="2" fill="#1E2A3D" opacity=".5"/>
      <rect x="22" y="62" width="52" height="4.5" rx="2.2" fill="#1E2A3D" opacity=".75"/>
      <path d="M27 64 L69 64 L72 84 L24 84 Z" fill="${paper}" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1"/>
      <path d="M31 71 L63 71 M31.5 76.5 L56 76.5" stroke="#7A8CB0" stroke-width="2" stroke-linecap="round"/>
      <rect x="22" y="62" width="52" height="2.6" rx="1.3" fill="#1E2A3D" opacity=".8"/>`;
  },
};
