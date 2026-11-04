const d = require('../src/parts/device');

// The deck is seen from the front and above: the far edge is narrower, and every key is a cell
// of the same perspective map.
const body = 'M24 28 L72 28 Q75 28 76 31 L85 65 L85 71 Q85 76 80 76 L16 76 Q11 76 11 71 L11 65 L20 31 Q21 28 24 28 Z';

module.exports = {
  id: 'keyboard',
  name: 'Keyboard',
  emoji: '⌨️',
  group: 'Objects',
  subgroup: 'computer',
  tags: ['keyboard', 'typing', 'computer', 'keys', 'write'],
  tone: 'slate',
  body,
  shine: [21, 37, -75],
  shineSize: [4.5, 1.8],
  draw(c) {
    const deck = c.linear('a', 'slate', [0, 0, 1, 1], 1, 2);
    const edge = c.linear('edge', 'slate', [0, 0, 0, 1], 2, 3);
    const cap = c.linear('cap', 'white', [0, 0, 0.3, 1], 0, 2);
    const map = d.quad([24, 31.5], [72, 31.5], [81.5, 63], [14.5, 63]);
    const sunk = d.quad([24, 32.8], [72, 32.8], [81.5, 64.6], [14.5, 64.6]);
    const rows = [
      [0, 9],
      [0, 9],
      [0, 9],
    ];
    let shade = '';
    let keys = '';
    const key = (u0, v0, u1, v1) => {
      shade += `${d.cell(sunk, u0, v0, u1, v1, 0.01, 0.035)} `;
      keys += `${d.cell(map, u0, v0, u1, v1, 0.01, 0.035)} `;
    };
    rows.forEach(([, k], r) => {
      for (let i = 0; i < k; i++) key(i / k, r / 4, (i + 1) / k, (r + 1) / 4);
    });
    [[0, 0.12], [0.12, 0.24], [0.24, 0.76], [0.76, 0.88], [0.88, 1]].forEach(([u0, u1]) => key(u0, 0.75, u1, 1));
    return `<path d="${body}" fill="${deck}"/>
      <path d="M11 65 L85 65 L85 71 Q85 76 80 76 L16 76 Q11 76 11 71 Z" fill="${edge}"/>
      <path d="${shade}" fill="#1E2A3D" opacity=".55"/>
      <path d="${keys}" fill="${cap}"/>`;
  },
};
