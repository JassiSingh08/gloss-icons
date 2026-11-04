const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'japanese-vacancy-button',
  name: 'Japanese “vacancy” Button',
  emoji: '🈳',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['vacancy', 'empty', 'available', 'japanese'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, '空', { palette: 'blue', size: 50 }),
};
