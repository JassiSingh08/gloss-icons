const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-9',
  name: 'Keycap: 9',
  emoji: '9️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '9', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '9', { palette: 'silver', shape: 'key', size: 34 }),
};
