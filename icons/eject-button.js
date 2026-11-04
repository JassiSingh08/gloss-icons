const av = require('../src/parts/av');

module.exports = av.button({
  id: 'eject-button',
  name: 'Eject Button',
  emoji: '⏏️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['eject', 'open', 'media', 'disc', 'out'],
}, () => (k) => av.fill(`${av.tri(54.3, 47, 25, 19.5, 270)} ${av.rect(29, 57, 67, 65, 2.4)}`, k));
