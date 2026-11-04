const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'p-button',
  name: 'P Button',
  emoji: '🅿️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['p', 'parking', 'car park', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'P', { palette: 'blue', size: 42 }),
};
