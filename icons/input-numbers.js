const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'input-numbers',
  name: 'Input Numbers',
  emoji: '🔢',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['numbers', 'digits', '1234', 'input'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, '12', { palette: 'blue', y: 36, size: 19 }) +
      b.label(c, '34', { palette: 'blue', y: 59, size: 19 }),
};
