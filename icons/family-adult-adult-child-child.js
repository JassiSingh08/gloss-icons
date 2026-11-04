const F = require('../src/parts/figure');

// Silhouettes in the style of person (👤): two grown-ups behind, two children in front.
const PEOPLE = [[28, 0.76, 'navy'], [68, 0.76, 'navy'], [37, 0.52, 'sky'], [59, 0.52, 'sky']];
module.exports = {
  id: 'family-adult-adult-child-child',
  name: 'Family: Adult, Adult, Child, Child',
  emoji: '🧑‍🧑‍🧒‍🧒',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['family', 'parents', 'children', 'household', 'kids'],
  tone: 'blue',
  ...F.build((c) => ({ art: PEOPLE.map(([x, k, pal], i) => F.silhouette(c, x, k, pal, `p${i}`)).join('') })),
  shine: [22, 36, -35], shineSize: [4, 2],
};
