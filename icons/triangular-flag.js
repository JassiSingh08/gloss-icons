const av = require('../src/parts/av');

module.exports = av.flag({
  id: 'triangular-flag',
  name: 'Triangular Flag',
  emoji: '🚩',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['flag', 'pennant', 'red', 'marker', 'post'],
}, {
  tone: 'red',
  pennant: true,
  paint: (c, F, cloth) => `<path d="${cloth}" fill="${c.linear('cloth', 'red', [0, 0, 1, 1], 0, 2)}"/>`,
});
