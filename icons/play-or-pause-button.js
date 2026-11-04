const av = require('../src/parts/av');

module.exports = av.button({
  id: 'play-or-pause-button',
  name: 'Play Or Pause Button',
  emoji: '⏯️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['play', 'pause', 'toggle', 'media', 'music'],
}, () => (k) => av.fill(`${av.tri(36.2, 47, 22, 15)} ${av.rect(53.2, 33, 59.2, 61, 2)} ${av.rect(63.7, 33, 69.7, 61, 2)}`, k));
