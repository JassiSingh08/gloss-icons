const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'input-latin-letters',
  name: 'Input Latin Letters',
  emoji: '🔤',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['abc', 'alphabet', 'letters', 'input'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'abc', { palette: 'blue', size: 24 }),
};
