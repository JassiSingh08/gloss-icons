const av = require('../src/parts/av');

module.exports = av.flag({
  id: 'rainbow-flag',
  name: 'Rainbow Flag',
  emoji: '🏳️‍🌈',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['rainbow', 'pride', 'lgbtq', 'flag', 'gay'],
}, {
  tone: 'purple',
  paint: (c, F) => av.stripes(c, F, ['red', 'tangerine', 'gold', 'green', 'blue', 'purple']),
});
