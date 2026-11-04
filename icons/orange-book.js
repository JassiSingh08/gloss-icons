const p = require('../src/parts/paper');
module.exports = {
  id: 'orange-book',
  name: 'Orange Book',
  emoji: '📙',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['book', 'read', 'study', 'guide', 'library'],
  tone: 'orange',
  body: p.BOOK.body,
  shine: [22, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    return p.book(c, 'orange', p.label(c, 32, 26, 32, 15, c.ramp('orange')[3]));
  },
};
