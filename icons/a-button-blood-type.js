const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'a-button-blood-type',
  name: 'A Button (blood Type)',
  emoji: '🅰️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['a', 'blood type', 'letter', 'button'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, 'A', { palette: 'red', size: 40 }),
};
