const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'new-button',
  name: 'NEW Button',
  emoji: '🆕',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['new', 'fresh', 'latest', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'NEW', { palette: 'blue', size: 28 }),
};
