const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red', 'circle'),
  id: 'japanese-bargain-button',
  name: 'Japanese “bargain” Button',
  emoji: '🉐',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['bargain', 'deal', 'gain', 'japanese'],
  draw: (c) =>
    b.face(c, 'red', 'circle') +
    b.label(c, '得', { palette: 'red', shape: 'circle', size: 44 }),
};
