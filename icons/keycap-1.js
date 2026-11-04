const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-1',
  name: 'Keycap: 1',
  emoji: '1️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '1', 'number', 'key', 'digit'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '1', { palette: 'silver', shape: 'key', size: 34 }),
};
