const F = require('../src/parts/figure');

// Silhouettes in the style of person (👤): a second person behind the first, a step back.
const PEOPLE = [[62, 0.82, 'navy'], [40, 1, 'blue']];
module.exports = {
  id: 'busts-in-silhouette',
  name: 'Busts In Silhouette',
  emoji: '👥',
  group: 'People & Body',
  subgroup: 'person-symbol',
  tags: ['people', 'group', 'users', 'team', 'members'],
  tone: 'blue',
  ...F.build((c) => ({ art: PEOPLE.map(([x, k, pal], i) => F.silhouette(c, x, k, pal, `p${i}`)).join('') })),
  shine: [34, 24, -35], shineSize: [4, 2],
};
