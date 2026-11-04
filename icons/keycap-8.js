const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-8',
  name: 'Keycap: 8',
  emoji: '8️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '8', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '8', { palette: 'silver', shape: 'key', size: 34 }),
};
