const p = require('../src/parts/paper');
module.exports = {
  id: 'green-book',
  name: 'Green Book',
  emoji: '📗',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['book', 'read', 'study', 'textbook', 'library'],
  tone: 'green',
  body: p.BOOK.body,
  shine: [22, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    return p.book(c, 'green', p.label(c, 32, 26, 32, 15, c.ramp('green')[3]));
  },
};
