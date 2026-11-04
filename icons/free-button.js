const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'free-button',
  name: 'FREE Button',
  emoji: '🆓',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['free', 'no charge', 'gratis', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'FREE', { palette: 'blue', size: 26 }),
};
