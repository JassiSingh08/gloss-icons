const av = require('../src/parts/av');

module.exports = av.button({
  id: 'wireless',
  name: 'Wireless',
  emoji: '🛜',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['wifi', 'wireless', 'network', 'internet', 'signal'],
}, () => (k) => av.fill(av.disc(48, 62, 4.6), k) + av.line([10, 19, 28].map((r) => av.arc(48, 62, r, -135, -45)).join(' '), k, 5.6));
