const p = require('../src/parts/paper');
const body = 'M22 12 L64 12 Q68 12 68 16 L68 80 Q68 84 64 84 L22 84 Q18 84 18 80 L18 16 Q18 12 22 12 Z';
module.exports = {
  id: 'bookmark-tabs',
  name: 'Bookmark Tabs',
  emoji: '📑',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['tabs', 'pages', 'marked', 'notes', 'sections'],
  tone: 'white',
  body,
  shine: [24, 18, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const w = c.ramp('white');
    const tab = (y, pal, i) => {
      const r = c.ramp(pal);
      return `<path d="M60 ${y} L80 ${y} Q83 ${y} 83 ${y + 3} L83 ${y + 8} Q83 ${y + 11} 80 ${y + 11} L60 ${y + 11} Z" fill="${c.linear(`t${i}`, pal, [0, 0, 1, 1], 0, 2)}" stroke="${r[3]}" stroke-opacity=".6" stroke-width="1.1"/>
        ${p.line(`M68 ${y + 2.6} L79 ${y + 2.6}`, '#fff', 1.2, 0.55)}`;
    };
    return `<path d="M27 8 L68 8 Q72 8 72 12 L72 76 Q72 80 68 80 L64 80 L64 12 L23 12 Q23 8 27 8 Z" fill="${c.linear('back', 'white', [0, 0, 1, 1], 1, 3)}"/>
      ${tab(18, 'red', 0)}${tab(34, 'gold', 1)}${tab(50, 'blue', 2)}${tab(66, 'green', 3)}
      <path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M26 22 L46 22', '#3D4FD6', 3, 0.7)}
      ${p.textLines(26, 60, [32, 39, 46, 53, 60, 67, 74], w[3], 2.2, 0.5)}`;
  },
};
