const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'cl-button',
  name: 'CL Button',
  emoji: '🆑',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['cl', 'clear', 'delete', 'button'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, 'CL', { palette: 'red', size: 34 }),
};
