const F = require('../src/parts/figure');

// Silhouettes in the style of person (👤): a grown-up and a child beside them.
const PEOPLE = [[38, 0.92, 'navy'], [64, 0.6, 'sky']];
module.exports = {
  id: 'family-adult-child',
  name: 'Family: Adult, Child',
  emoji: '🧑‍🧒',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['family', 'parent', 'child', 'single parent', 'kid'],
  tone: 'blue',
  ...F.build((c) => ({ art: PEOPLE.map(([x, k, pal], i) => F.silhouette(c, x, k, pal, `p${i}`)).join('') })),
  shine: [32, 28, -35], shineSize: [4, 2],
};
