const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-7',
  name: 'Keycap: 7',
  emoji: '7️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '7', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '7', { palette: 'silver', shape: 'key', size: 34 }),
};
