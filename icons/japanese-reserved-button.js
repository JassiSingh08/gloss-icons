const b = require('../src/parts/button');

module.exports = {
  ...b.spec('green'),
  id: 'japanese-reserved-button',
  name: 'Japanese “reserved” Button',
  emoji: '🈯',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['reserved', 'finger', 'booked', 'japanese'],
  draw: (c) =>
    b.face(c, 'green') +
    b.label(c, '指', { palette: 'green', size: 50 }),
};
