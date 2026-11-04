const av = require('../src/parts/av');

module.exports = av.button({
  id: 'fast-forward-button',
  name: 'Fast-Forward Button',
  emoji: '⏩',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['fast forward', 'skip', 'media', 'double', 'speed'],
}, () => (k) => av.fill(`${av.tri(36.5, 47, 21, 15)} ${av.tri(57.5, 47, 21, 15)}`, k));
