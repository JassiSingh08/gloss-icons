const av = require('../src/parts/av');

module.exports = av.button({
  id: 'dim-button',
  name: 'Dim Button',
  emoji: '🔅',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['dim', 'brightness', 'low', 'sun', 'screen'],
}, () => (k) => av.fill(av.disc(48, 47, 8), k) + av.line(av.rays(48, 47, 14, 17.5, 8), k, 3.4));
