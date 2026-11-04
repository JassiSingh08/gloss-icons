const p = require('../src/parts/paper');
module.exports = {
  id: 'blue-book',
  name: 'Blue Book',
  emoji: '📘',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['book', 'read', 'study', 'manual', 'library'],
  tone: 'blue',
  body: p.BOOK.body,
  shine: [22, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    return p.book(c, 'blue', p.label(c, 32, 26, 32, 15, c.ramp('blue')[3]));
  },
};
