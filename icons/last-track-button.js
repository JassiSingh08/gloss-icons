const av = require('../src/parts/av');

module.exports = av.button({
  id: 'last-track-button',
  name: 'Last Track Button',
  emoji: '⏮️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['previous', 'last', 'track', 'media', 'music'],
}, () => (k) => av.fill(`${av.tri(34.7, 47, 17, 13, 180)} ${av.tri(51.7, 47, 17, 13, 180)} ${av.rect(62.5, 34, 69, 60, 2, 180)}`, k));
