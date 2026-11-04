const p = require('../src/parts/paper');
const body = p.map('M14 36 L18 30 L80 30 L80 46 L82 46 L82 62 L84 62 L84 78 L80 84 L12 84 L12 68 L16 62 L18 62 L18 52 L14 52 Z', (x, y) => [x, 84 - (84 - y) * 1.2]);
module.exports = {
  id: 'books',
  name: 'Books',
  emoji: '📚',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['books', 'study', 'library', 'reading', 'school', 'stack'],
  tone: 'red',
  body,
  shine: [24, 38, -10],
  shineSize: [6, 2.2],
  draw(c) {
    const cream = c.ramp('cream');
    const r = c.ramp('red');
    const b = c.ramp('blue');
    const g = c.ramp('green');
    const ends = (x, y, h, edge) => `<path d="M${x} ${y} L${x + 4} ${y - 6} L${x + 4} ${y - 6 + h} L${x} ${y + h} Z" fill="${cream[1]}"/>
      <path d="M${x} ${y} L${x + 4} ${y - 6} M${x} ${y + h} L${x + 4} ${y - 6 + h}" stroke="${edge}" stroke-width="2.4"/>`;
    const bands = (x0, x1, y0, y1, col) => p.line(`M${x0} ${y0} L${x0} ${y1} M${x0 + 3} ${y0} L${x0 + 3} ${y1} M${x1} ${y0} L${x1} ${y1} M${x1 - 3} ${y0} L${x1 - 3} ${y1}`, col, 1.4, 0.85);
    return `<g transform="translate(0 -16.8) scale(1 1.2)"><path d="M12 68 L16 62 L84 62 L80 68 Z" fill="${r[1]}"/>
      ${ends(80, 68, 16, r[2])}
      <path d="M12 68 L80 68 L80 84 L12 84 Z" fill="${c.linear('r', 'red', [0, 0, 0, 1], 0, 2)}"/>
      ${bands(20, 72, 69.5, 82.5, '#FFC21A')}
      ${ends(78, 52, 16, b[2])}
      <path d="M18 52 L78 52 L78 68 L18 68 Z" fill="${c.linear('pg', 'cream', [0, 0, 0, 1], 0, 2)}"/>
      ${p.line('M19 56.5 L77 56.5 M19 60 L77 60 M19 63.5 L77 63.5', cream[3], 0.8, 0.4)}
      <path d="M18 52 L78 52 L78 54.6 L18 54.6 Z M18 65.4 L78 65.4 L78 68 L18 68 Z" fill="${c.linear('bc', 'blue', [0, 0, 1, 0], 1, 2)}"/>
      <path d="M18 30 L80 30 L76 36 L14 36 Z" fill="${c.linear('gt', 'green', [0, 0, 1, 0], 0, 1)}"/>
      ${ends(76, 36, 16, g[2])}
      <path d="M14 36 L76 36 L76 52 L14 52 Z" fill="${c.linear('g', 'green', [0, 0, 0, 1], 0, 2)}"/>
      ${bands(22, 68, 37.5, 50.5, '#FFC21A')}
      <path d="${p.rr(36, 40.5, 20, 7, 1.5)}" fill="${cream[0]}" opacity=".9"/></g>`;
  },
};
