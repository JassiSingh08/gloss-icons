const av = require('../src/parts/av');

module.exports = av.button({
  id: 'reverse-button',
  name: 'Reverse Button',
  emoji: '◀️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['reverse', 'back', 'left', 'media', 'triangle'],
}, () => (k) => av.fill(av.tri(49, 47, 31, 18.5, 180), k));
