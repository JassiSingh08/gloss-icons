const b = require('../src/parts/button');

module.exports = {
  ...b.spec('purple'),
  id: 'id-button',
  name: 'ID Button',
  emoji: '🆔',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['id', 'identity', 'card', 'button'],
  draw: (c) =>
    b.face(c, 'purple') +
    b.label(c, 'ID', { palette: 'purple', size: 34 }),
};
