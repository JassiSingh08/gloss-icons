const av = require('../src/parts/av');

module.exports = av.button({
  id: 'downwards-button',
  name: 'Downwards Button',
  emoji: '🔽',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['down', 'triangle', 'decrease', 'bottom', 'arrow'],
}, () => (k) => av.fill(av.tri(48, 47, 28, 19, 90), k));
