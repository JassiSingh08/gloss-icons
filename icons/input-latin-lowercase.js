const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'input-latin-lowercase',
  name: 'Input Latin Lowercase',
  emoji: '🔡',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['lowercase', 'letters', 'abc', 'small', 'input'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'ab', { palette: 'blue', y: 36, size: 20 }) +
      b.label(c, 'cd', { palette: 'blue', y: 59, size: 20 }),
};
