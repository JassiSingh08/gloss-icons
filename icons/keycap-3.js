const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-3',
  name: 'Keycap: 3',
  emoji: '3️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '3', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '3', { palette: 'silver', shape: 'key', size: 34 }),
};
