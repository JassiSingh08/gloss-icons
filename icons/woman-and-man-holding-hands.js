const F = require('../src/parts/figure');

module.exports = {
  id: 'woman-and-man-holding-hands',
  name: 'Woman And Man Holding Hands',
  emoji: '👫',
  group: 'People & Body',
  subgroup: 'family',
  tags: ['couple', 'holding hands', 'date', 'together', 'love'],
  tone: 'red',
  ...F.shineOf(30, 22, 11.5),
  ...F.build((c) => ({ art: F.pair(c, { hair: 'long', color: 'auburn', top: 'red', skirt: true, shoes: 'red' }, { hair: 'short', color: 'dark', top: 'blue', bottom: 'navy' }) })),
};
