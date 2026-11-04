const av = require('../src/parts/av');

module.exports = av.button({
  id: 'play-button',
  name: 'Play Button',
  emoji: '▶️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['play', 'start', 'media', 'triangle', 'right'],
}, () => (k) => av.fill(av.tri(49, 47, 31, 18.5), k));
