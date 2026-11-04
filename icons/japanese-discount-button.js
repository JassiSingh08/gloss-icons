const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'japanese-discount-button',
  name: 'Japanese “discount” Button',
  emoji: '🈹',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['discount', 'sale', 'cheap', 'japanese'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, '割', { palette: 'red', size: 50 }),
};
