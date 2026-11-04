const p = require('../src/parts/paper');
module.exports = {
  id: 'notebook',
  name: 'Notebook',
  emoji: '📓',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['notebook', 'journal', 'notes', 'school', 'diary'],
  tone: 'black',
  body: p.BOOK.body,
  shine: [22, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    const k = c.ramp('black');
    return p.book(c, 'black', `${p.label(c, 31, 24, 30, 15, k[3])}
      <path d="M60 14 L65 14 L65 84 L60 84 Z" fill="${c.linear('band', 'black', [0, 0, 1, 0], 1, 3)}"/>
      ${p.line('M60.8 15 L60.8 83', k[0], 1, 0.5)}
      <path d="M40 84 L46 84 L46 90 L43 88 L40 90 Z" fill="${c.linear('rib', 'red', [0, 0, 0, 1], 1, 2)}"/>`);
  },
};
