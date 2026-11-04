const av = require('../src/parts/av');

module.exports = av.flag({
  id: 'white-flag',
  name: 'White Flag',
  emoji: '🏳️',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['flag', 'white', 'surrender', 'peace', 'waving'],
}, {
  tone: 'white',
  paint: (c, F, cloth) => `<path d="${cloth}" fill="${c.linear('cloth', 'white', [0, 0, 1, 1], 0, 2)}"/>`,
});
