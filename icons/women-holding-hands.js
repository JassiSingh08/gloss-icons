const F = require('../src/parts/figure');

module.exports = {
  id: 'women-holding-hands',
  name: 'Women Holding Hands',
  emoji: '👭',
  group: 'People & Body',
  subgroup: 'family',
  tags: ['women', 'holding hands', 'friends', 'couple', 'together'],
  tone: 'pink',
  ...F.shineOf(30, 22, 11.5),
  ...F.build((c) => ({ art: F.pair(c, { hair: 'long', color: 'brown', top: 'pink', skirt: true, shoes: 'red' }, { hair: 'bob', color: 'blond', top: 'purple', skirt: true, shoes: 'purple' }) })),
};
