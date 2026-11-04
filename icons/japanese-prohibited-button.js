const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'japanese-prohibited-button',
  name: 'Japanese “prohibited” Button',
  emoji: '🈲',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['prohibited', 'forbidden', 'banned', 'japanese'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, '禁', { palette: 'red', size: 50 }),
};
