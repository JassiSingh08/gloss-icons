const b = require('../src/parts/button');

module.exports = {
  ...b.spec('orange', 'circle'),
  id: 'japanese-acceptable-button',
  name: 'Japanese “acceptable” Button',
  emoji: '🉑',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['acceptable', 'ok', 'allowed', 'japanese'],
  draw: (c) =>
    b.face(c, 'orange', 'circle') +
    b.label(c, '可', { palette: 'orange', shape: 'circle', size: 44 }),
};
