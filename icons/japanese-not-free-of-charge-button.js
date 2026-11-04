const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange'),
  id: 'japanese-not-free-of-charge-button',
  name: 'Japanese “not Free Of Charge” Button',
  emoji: '🈶',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['paid', 'not free', 'charge', 'japanese'],
  draw: (c) =>
    b.face(c, 'orange') +
    b.label(c, '有', { palette: 'orange', size: 50 }),
};
