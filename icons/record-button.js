const av = require('../src/parts/av');

module.exports = av.button({
  id: 'record-button',
  name: 'Record Button',
  emoji: '⏺️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['record', 'rec', 'media', 'circle', 'capture'],
}, () => (k) => av.fill(av.disc(48, 47, 16.5), k));
