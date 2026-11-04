const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'japanese-passing-grade-button',
  name: 'Japanese “passing Grade” Button',
  emoji: '🈴',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['pass', 'passing grade', 'match', 'japanese'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, '合', { palette: 'red', size: 50 }),
};
