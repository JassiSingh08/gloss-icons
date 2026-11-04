const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-2',
  name: 'Keycap: 2',
  emoji: '2️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '2', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '2', { palette: 'silver', shape: 'key', size: 34 }),
};
