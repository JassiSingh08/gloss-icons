const av = require('../src/parts/av');

module.exports = av.button({
  id: 'pause-button',
  name: 'Pause Button',
  emoji: '⏸️',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['pause', 'hold', 'media', 'bars', 'break'],
}, () => (k) => av.fill(`${av.rect(34, 31, 44, 63, 3)} ${av.rect(52, 31, 62, 63, 3)}`, k));
