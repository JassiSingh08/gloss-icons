const F = require('../src/parts/figure');

module.exports = {
  id: 'people-holding-hands',
  name: 'People Holding Hands',
  emoji: '🧑‍🤝‍🧑',
  group: 'People & Body',
  subgroup: 'family',
  tags: ['holding hands', 'friends', 'together', 'pair', 'couple'],
  tone: 'teal',
  ...F.shineOf(30, 22, 11.5),
  ...F.build((c) => ({ art: F.pair(c, { hair: 'crop', color: 'dark', top: 'teal', bottom: 'navy' }, { hair: 'curly', color: 'auburn', top: 'orange', bottom: 'slate' }) })),
};
