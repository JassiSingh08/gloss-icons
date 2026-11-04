const b = require('../src/parts/button');

module.exports = {
  ...b.spec('red'),
  id: 'japanese-no-vacancy-button',
  name: 'Japanese “no Vacancy” Button',
  emoji: '🈵',
  group: 'Symbols',
  subgroup: 'alphanum',
  tags: ['full', 'no vacancy', 'sold out', 'japanese'],
  draw: (c) =>
    b.face(c, 'red') +
    b.label(c, '満', { palette: 'red', size: 50 }),
};
