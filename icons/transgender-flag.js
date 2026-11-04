const av = require('../src/parts/av');

module.exports = av.flag({
  id: 'transgender-flag',
  name: 'Transgender Flag',
  emoji: '🏳️‍⚧️',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['transgender', 'trans', 'pride', 'flag', 'lgbtq'],
}, {
  tone: 'sky',
  paint: (c, F) => av.stripes(c, F, ['sky', 'rose', 'white', 'rose', 'sky']),
});
