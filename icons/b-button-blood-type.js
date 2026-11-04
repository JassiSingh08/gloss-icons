const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'b-button-blood-type',
  name: 'B Button (blood Type)',
  emoji: '🅱️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['b', 'blood type', 'letter', 'button'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, 'B', { palette: 'red', size: 40 }),
};
