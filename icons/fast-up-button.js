const av = require('../src/parts/av');

module.exports = av.button({
  id: 'fast-up-button',
  name: 'Fast Up Button',
  emoji: '⏫',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['fast up', 'double', 'up', 'top', 'arrow'],
}, () => (k) => av.fill(`${av.tri(37, 47, 20, 15.5, 270)} ${av.tri(57, 47, 20, 15.5, 270)}`, k));
