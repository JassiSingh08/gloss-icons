const p = require('../src/parts/paper');
module.exports = {
  id: 'notebook-with-decorative-cover',
  name: 'Notebook With Decorative Cover',
  emoji: '📔',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['journal', 'diary', 'notebook', 'keepsake', 'ornate'],
  tone: 'purple',
  body: p.BOOK.body,
  shine: [22, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const g = c.ramp('gold');
    const corner = (x, y, sx, sy) => `M${x} ${y + sy * 9} L${x} ${y} L${x + sx * 9} ${y}`;
    return p.book(c, 'purple', `<path d="${p.rr(30, 21, 34, 56, 3)}" fill="none" stroke="${g[1]}" stroke-opacity=".75" stroke-width="1.4"/>
      ${p.line(`${corner(33.5, 24.5, 1, 1)} ${corner(60.5, 24.5, -1, 1)} ${corner(33.5, 73.5, 1, -1)} ${corner(60.5, 73.5, -1, -1)}`, g[1], 2.4)}
      <path d="M47 35 C51 42 56 45 60 49 C56 53 51 56 47 63 C43 56 38 53 34 49 C38 45 43 42 47 35 Z" fill="${gold}" stroke="${g[3]}" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="M47 42 C49 45.5 51.5 47.5 53.5 49 C51.5 50.5 49 52.5 47 56 C45 52.5 42.5 50.5 40.5 49 C42.5 47.5 45 45.5 47 42 Z" fill="${c.radial('gem', 'teal', 0.35, 0.3)}"/>`);
  },
};
