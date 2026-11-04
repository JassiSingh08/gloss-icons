const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'input-latin-uppercase',
  name: 'Input Latin Uppercase',
  emoji: '🔠',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['uppercase', 'letters', 'abc', 'capitals', 'input'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'AB', { palette: 'blue', y: 36, size: 19 }) +
      b.label(c, 'CD', { palette: 'blue', y: 59, size: 19 }),
};
