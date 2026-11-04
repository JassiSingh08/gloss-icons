const F = require('../src/parts/figure');

module.exports = {
  id: 'men-holding-hands',
  name: 'Men Holding Hands',
  emoji: '👬',
  group: 'People & Body',
  subgroup: 'family',
  tags: ['men', 'holding hands', 'couple', 'friends', 'together'],
  tone: 'blue',
  ...F.shineOf(30, 22, 11.5),
  ...F.build((c) => ({ art: F.pair(c, { hair: 'short', color: 'brown', top: 'green', bottom: 'navy' }, { hair: 'spiky', color: 'black', top: 'blue', bottom: 'slate' }) })),
};
