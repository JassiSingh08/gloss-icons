const F = require('../src/parts/figure');

// Silhouettes in the style of person (👤): a grown-up in the middle, a child either side.
const PEOPLE = [[48, 0.84, 'navy'], [27, 0.56, 'sky'], [69, 0.56, 'sky']];
module.exports = {
  id: 'family-adult-child-child',
  name: 'Family: Adult, Child, Child',
  emoji: '🧑‍🧒‍🧒',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['family', 'parent', 'children', 'single parent', 'kids'],
  tone: 'blue',
  ...F.build((c) => ({ art: PEOPLE.map(([x, k, pal], i) => F.silhouette(c, x, k, pal, `p${i}`)).join('') })),
  shine: [43, 32, -35], shineSize: [4, 2],
};
