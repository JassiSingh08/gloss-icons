const s = require('../src/parts/sign');

module.exports = {
  id: 'no-entry',
  name: 'No Entry',
  emoji: '⛔',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['no entry', 'stop', 'forbidden', 'do not enter', 'road'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    return s.disc(c, 'red') + s.emboss(c, 'red', (k) => `<rect x="25.5" y="44" width="45" height="12" rx="3" fill="${k}"/>`);
  },
};
