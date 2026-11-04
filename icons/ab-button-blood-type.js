const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'ab-button-blood-type',
  name: 'AB Button (blood Type)',
  emoji: '🆎',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['ab', 'blood type', 'letters', 'button'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, 'AB', { palette: 'red', size: 34 }),
};
