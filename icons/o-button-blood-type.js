const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'o-button-blood-type',
  name: 'O Button (blood Type)',
  emoji: '🅾️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['o', 'blood type', 'letter', 'button'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, 'O', { palette: 'red', size: 40 }),
};
