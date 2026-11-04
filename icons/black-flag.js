const av = require('../src/parts/av');

module.exports = av.flag({
  id: 'black-flag',
  name: 'Black Flag',
  emoji: '🏴',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['flag', 'black', 'pirate', 'waving', 'dark'],
}, {
  tone: 'black',
  paint: (c, F, cloth) => `<path d="${cloth}" fill="${c.linear('cloth', 'black', [0, 0, 1, 1], 0, 2)}"/>`,
});
