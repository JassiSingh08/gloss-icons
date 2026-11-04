const p = require('../src/parts/paper');
const body = 'M22 10 L74 10 Q80 10 80 16 Q80 22 74 22 L72 22 L72 72 L74 72 Q80 72 80 78 Q80 84 74 84 L22 84 Q16 84 16 78 Q16 72 22 72 L24 72 L24 22 L22 22 Q16 22 16 16 Q16 10 22 10 Z';
module.exports = {
  id: 'scroll',
  name: 'Scroll',
  emoji: '📜',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['scroll', 'parchment', 'ancient', 'decree', 'history'],
  tone: 'sand',
  body,
  shine: [21, 14, -15],
  shineSize: [5, 2],
  draw(c) {
    const s = c.ramp('sand');
    const roll = (y) => `<path d="M22 ${y} L74 ${y} Q80 ${y} 80 ${y + 6} Q80 ${y + 12} 74 ${y + 12} L22 ${y + 12} Q16 ${y + 12} 16 ${y + 6} Q16 ${y} 22 ${y} Z" fill="${c.linear(`r${y}`, 'sand', [0, 0, 0, 1], 0, 2)}"/>
      ${p.line(`M22 ${y + 3} L72 ${y + 3}`, '#fff', 1.4, 0.55)}
      <path d="${p.ell(74, y + 6, 4, 5.4)}" fill="${s[2]}"/>
      <path d="M74 ${y + 3} C76.6 ${y + 3} 77.2 ${y + 6} 76 ${y + 7.6} C74.8 ${y + 9} 72.6 ${y + 8} 73 ${y + 6.4}" stroke="${s[3]}" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
    return `<path d="M24 20 L72 20 L72 74 L24 74 Z" fill="${c.linear('a', 'sand', [0, 0, 1, 1], 0, 1)}"/>
      ${p.line('M24 22 L24 72', s[2], 1.2, 0.6)}
      ${p.line('M36 30 L60 30', s[3], 3, 0.6)}
      ${p.textLines(31, 65, [39, 46, 53, 60, 67], s[3], 2, 0.4)}
      ${roll(10)}${roll(72)}`;
  },
};
