const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-0',
  name: 'Keycap: 0',
  emoji: '0️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '0', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '0', { palette: 'silver', shape: 'key', size: 34 }),
};
