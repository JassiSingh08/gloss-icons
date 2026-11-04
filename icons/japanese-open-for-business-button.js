const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange'),
  id: 'japanese-open-for-business-button',
  name: 'Japanese “open For Business” Button',
  emoji: '🈺',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['open', 'business', 'shop', 'japanese'],
  draw: (c) =>
    b.face(c, 'orange') +
    b.label(c, '営', { palette: 'orange', size: 50 }),
};
