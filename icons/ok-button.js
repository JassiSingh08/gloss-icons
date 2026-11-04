const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'ok-button',
  name: 'OK Button',
  emoji: '🆗',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['ok', 'okay', 'agree', 'yes', 'button'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'OK', { palette: 'blue', size: 34 }),
};
