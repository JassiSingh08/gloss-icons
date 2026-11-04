const av = require('../src/parts/av');
// Six by five checks, each cell following the wave.
const cells = (F) => [0, 1, 2, 3, 4].flatMap((i) => [0, 1, 2, 3, 4, 5].filter((j) => (i + j) % 2 === 0).map((j) => av.band(F, i / 5, (i + 1) / 5, j / 6, (j + 1) / 6, 3))).join(' ');

module.exports = av.flag({
  id: 'chequered-flag',
  name: 'Chequered Flag',
  emoji: '🏁',
  group: 'Flags',
  subgroup: 'flag',
  tags: ['chequered', 'checkered', 'racing', 'finish', 'flag'],
}, {
  tone: 'black',
  paint: (c, F, cloth) => `<path d="${cloth}" fill="${c.linear('cloth', 'white', [0, 0, 1, 1], 0, 2)}"/>
    <path d="${cells(F)}" fill="${c.linear('sq', 'black', [0, 0, 1, 1], 0, 2)}"/>`,
});
