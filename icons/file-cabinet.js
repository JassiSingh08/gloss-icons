const p = require('../src/parts/paper');
const body = 'M24 14 L30 9 L76 9 Q78 9 78 11 L78 78 L72 84 L26 84 Q22 84 22 80 L22 18 Q22 14 24 14 Z';
module.exports = {
  id: 'file-cabinet',
  name: 'File Cabinet',
  emoji: '🗄️',
  group: 'Objects',
  subgroup: 'office',
  tags: ['cabinet', 'files', 'archive', 'office', 'storage'],
  tone: 'grey',
  body,
  shine: [27, 20, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const g = c.ramp('grey');
    const drawer = (y, i) => `<path d="${p.rr(26, y, 42, 20, 2.5)}" fill="${c.linear(`d${i}`, 'grey', [0, 0, 1, 1], 0, 1)}" stroke="${g[3]}" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${p.rr(39, y + 4, 16, 5, 1.2)}" fill="#fff" stroke="${g[3]}" stroke-opacity=".5" stroke-width=".9"/>
      <path d="M40 ${y + 13} L54 ${y + 13}" stroke="${g[3]}" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M40 ${y + 12.4} L54 ${y + 12.4}" stroke="${c.ramp('silver')[0]}" stroke-width="1.4" stroke-linecap="round"/>`;
    return `<path d="${body}" fill="${g[2]}"/>
      <path d="M24 14 L30 9 L76 9 Q78 9 78 11 L72 14 Z" fill="${g[0]}"/>
      <path d="M72 14 L78 9 L78 78 L72 84 Z" fill="${c.linear('side', 'grey', [0, 0, 1, 0], 2, 3)}"/>
      <path d="M22 18 Q22 14 26 14 L72 14 L72 84 L26 84 Q22 84 22 80 Z" fill="${c.linear('a', 'grey', [0, 0, 1, 1], 0, 2)}"/>
      ${drawer(18, 0)}${drawer(41, 1)}${drawer(64, 2)}`;
  },
};
