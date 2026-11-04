const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red', 'circle'),
  id: 'japanese-congratulations-button',
  name: 'Japanese “congratulations” Button',
  emoji: '㊗️',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['congratulations', 'celebrate', 'party', 'japanese'],
  draw: (c) =>
    b.face(c, 'red', 'circle') +
    b.label(c, '祝', { palette: 'red', shape: 'circle', size: 44 }),
};
