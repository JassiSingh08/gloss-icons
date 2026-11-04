const av = require('../src/parts/av');

module.exports = av.button({
  id: 'next-track-button',
  name: 'Next Track Button',
  emoji: '⏭️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['next', 'track', 'skip', 'media', 'music'],
}, () => (k) => av.fill(`${av.tri(34.7, 47, 17, 13)} ${av.tri(51.7, 47, 17, 13)} ${av.rect(62.5, 34, 69, 60, 2)}`, k));
