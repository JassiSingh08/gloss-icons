const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange'),
  id: 'japanese-free-of-charge-button',
  name: 'Japanese “free Of Charge” Button',
  emoji: '🈚',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['free', 'no charge', 'nothing', 'japanese'],
  draw: (c) =>
    b.face(c, 'orange') +
    b.label(c, '無', { palette: 'orange', size: 50 }),
};
