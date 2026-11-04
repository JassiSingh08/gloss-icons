const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red', 'circle'),
  id: 'japanese-secret-button',
  name: 'Japanese “secret” Button',
  emoji: '㊙️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['secret', 'hidden', 'private', 'japanese'],
  draw: (c) =>
    b.face(c, 'red', 'circle') +
    b.label(c, '秘', { palette: 'red', shape: 'circle', size: 44 }),
};
