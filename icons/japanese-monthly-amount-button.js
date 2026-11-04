const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange'),
  id: 'japanese-monthly-amount-button',
  name: 'Japanese “monthly Amount” Button',
  emoji: '🈷️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['monthly', 'month', 'subscription', 'japanese'],
  draw: (c) =>
    b.face(c, 'orange') +
    b.label(c, '月', { palette: 'orange', size: 50 }),
};
