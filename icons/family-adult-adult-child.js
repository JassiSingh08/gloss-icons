const F = require('../src/parts/figure');

// Silhouettes in the style of person (👤): two grown-ups behind, a child in front.
const PEOPLE = [[30, 0.78, 'navy'], [66, 0.78, 'navy'], [48, 0.56, 'sky']];
module.exports = {
  id: 'family-adult-adult-child',
  name: 'Family: Adult, Adult, Child',
  emoji: '🧑‍🧑‍🧒',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['family', 'parents', 'child', 'household', 'kid'],
  tone: 'blue',
  ...F.build((c) => ({ art: PEOPLE.map(([x, k, pal], i) => F.silhouette(c, x, k, pal, `p${i}`)).join('') })),
  shine: [24, 34, -35], shineSize: [4, 2],
};
