const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'japanese-service-charge-button',
  name: 'Japanese “service Charge” Button',
  emoji: '🈂️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['service charge', 'sa', 'japanese', 'katakana'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'サ', { palette: 'blue', size: 48 }),
};
