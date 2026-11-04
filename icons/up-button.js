const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'up-button',
  name: 'UP! Button',
  emoji: '🆙',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['up', 'level up', 'boost', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'UP!', { palette: 'blue', size: 32 }),
};
