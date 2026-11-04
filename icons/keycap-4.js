const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-4',
  name: 'Keycap: 4',
  emoji: '4️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '4', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '4', { palette: 'silver', shape: 'key', size: 34 }),
};
