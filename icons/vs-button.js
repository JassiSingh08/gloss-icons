const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange'),
  id: 'vs-button',
  name: 'VS Button',
  emoji: '🆚',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['vs', 'versus', 'match', 'fight'],
  draw: (c) =>
    b.face(c, 'orange') +
    b.label(c, 'VS', { palette: 'orange', size: 34 }),
};
