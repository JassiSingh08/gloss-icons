const b = require('../src/parts/button');

module.exports = {
  ...b.spec('blue'),
  id: 'japanese-here-button',
  name: 'Japanese “here” Button',
  emoji: '🈁',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['here', 'koko', 'japanese', 'katakana'],
  draw: (c) =>
    b.face(c, 'blue') +
    b.label(c, 'ココ', { palette: 'blue', size: 48 }),
};
