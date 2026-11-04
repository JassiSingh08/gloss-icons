const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-5',
  name: 'Keycap: 5',
  emoji: '5️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '5', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '5', { palette: 'silver', shape: 'key', size: 34 }),
};
