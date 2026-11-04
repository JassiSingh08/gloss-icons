const av = require('../src/parts/av');

module.exports = av.button({
  id: 'fast-down-button',
  name: 'Fast Down Button',
  emoji: '⏬',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['fast down', 'double', 'down', 'bottom', 'arrow'],
}, () => (k) => av.fill(`${av.tri(37, 47, 20, 15.5, 90)} ${av.tri(57, 47, 20, 15.5, 90)}`, k));
