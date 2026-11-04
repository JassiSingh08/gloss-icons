const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'cool-button',
  name: 'COOL Button',
  emoji: '🆒',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['cool', 'nice', 'chill', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'COOL', { palette: 'blue', size: 26 }),
};
