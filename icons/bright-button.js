const av = require('../src/parts/av');

module.exports = av.button({
  id: 'bright-button',
  name: 'Bright Button',
  emoji: '🔆',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['bright', 'brightness', 'high', 'sun', 'screen'],
}, () => (k) => av.fill(av.disc(48, 47, 10.5), k) + av.line(av.rays(48, 47, 16, 25, 8), k, 4.6));
