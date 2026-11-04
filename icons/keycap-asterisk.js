const b = require('../src/parts/button');

module.exports = {
  ...b.spec('silver', 'key'),
  id: 'keycap-asterisk',
  name: 'Keycap: *',
  emoji: '*️⃣',
  group: 'Symbols',
  subgroup: 'keycap',
  tags: ['keycap', 'asterisk', 'star', 'key'],
  draw: (c) =>
    b.face(c, 'silver', 'key') +
    b.label(c, '*', { palette: 'silver', shape: 'key', size: 40 }),
};
