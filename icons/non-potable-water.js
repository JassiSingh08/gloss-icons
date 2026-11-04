const s = require('../src/parts/sign');

module.exports = {
  id: 'non-potable-water',
  name: 'Non-Potable Water',
  emoji: '🚱',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['non-potable', 'not drinking water', 'tap', 'unsafe', 'water'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    return s.noSign(c, (k) => `<g transform="translate(50.5 50.5) scale(.76) translate(-48 -50)">${s.potable(k, '#FFFFFF')}</g>`);
  },
};
