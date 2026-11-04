const p = require('../src/parts/paper');
module.exports = {
  id: 'closed-book',
  name: 'Closed Book',
  emoji: '📕',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['book', 'read', 'novel', 'study', 'library'],
  tone: 'red',
  body: p.BOOK.body,
  shine: [22, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    return p.book(c, 'red', p.label(c, 32, 26, 32, 15, c.ramp('red')[3]));
  },
};
