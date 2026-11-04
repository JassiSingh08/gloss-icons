const av = require('../src/parts/av');

module.exports = av.button({
  id: 'upwards-button',
  name: 'Upwards Button',
  emoji: '🔼',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['up', 'triangle', 'increase', 'top', 'arrow'],
}, () => (k) => av.fill(av.tri(48, 47, 28, 19, 270), k));
