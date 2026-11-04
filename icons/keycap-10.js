const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-10',
  name: 'Keycap: 10',
  emoji: '🔟',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', '10', 'ten', 'number', 'key'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '10', { palette: 'silver', shape: 'key', size: 32 }),
};
