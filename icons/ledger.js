const p = require('../src/parts/paper');
module.exports = {
  id: 'ledger',
  name: 'Ledger',
  emoji: '📒',
  group: 'Objects',
  subgroup: 'book-paper',
  tags: ['ledger', 'accounts', 'records', 'notebook', 'bookkeeping'],
  tone: 'gold',
  body: p.BOOK.body,
  shine: [32, 22, -60],
  shineSize: [6, 2.6],
  draw(c) {
    const leather = c.linear('lea', 'brown', [0, 0, 1, 1], 1, 3);
    const b = c.ramp('brown');
    return p.book(c, 'gold', `<path d="M16 18 Q16 14 20 14 L28 14 L28 84 L20 84 Q16 84 16 80 Z" fill="${leather}"/>
      ${p.line('M28.6 15 L28.6 83', b[3], 1.4, 0.6)}
      <path d="M57 14 L70 14 L70 27 Z M57 84 L70 84 L70 71 Z" fill="${leather}"/>
      ${p.label(c, 36, 28, 26, 14, c.ramp('gold')[3])}
      ${p.line('M36 54 L62 54 M36 60 L62 60 M36 66 L62 66', c.ramp('gold')[3], 1.3, 0.35)}`);
  },
};
