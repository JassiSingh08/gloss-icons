const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-hash',
  name: 'Keycap: #',
  emoji: '#️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', 'hash', 'pound', 'number sign', 'key'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '#', { palette: 'silver', shape: 'key', size: 38 }),
};
