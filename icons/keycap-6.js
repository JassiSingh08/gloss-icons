const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-6',
  name: 'Keycap: 6',
  emoji: '6️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '6', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '6', { palette: 'silver', shape: 'key', size: 34 }),
};
