const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'input-symbols',
  name: 'Input Symbols',
  emoji: '🔣',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['symbols', 'punctuation', 'characters', 'input'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, '#%', { palette: 'blue', y: 36, size: 19 }) +
      b.label(c, '?!', { palette: 'blue', y: 59, size: 19 }),
};
