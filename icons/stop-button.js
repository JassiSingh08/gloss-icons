const av = require('../src/parts/av');

module.exports = av.button({
  id: 'stop-button',
  name: 'Stop Button',
  emoji: '⏹️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['stop', 'end', 'media', 'square', 'halt'],
}, () => (k) => av.fill(av.rect(32, 31, 64, 63, 4.5), k));
