const av = require('../src/parts/av');

module.exports = av.button({
  id: 'fast-reverse-button',
  name: 'Fast Reverse Button',
  emoji: '⏪',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['rewind', 'fast reverse', 'back', 'media', 'double'],
}, () => (k) => av.fill(`${av.tri(36.5, 47, 21, 15, 180)} ${av.tri(57.5, 47, 21, 15, 180)}`, k));
