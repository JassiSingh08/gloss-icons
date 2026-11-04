const av = require('../src/parts/av');

module.exports = av.button({
  id: 'antenna-bars',
  name: 'Antenna Bars',
  emoji: '📶',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['signal', 'bars', 'reception', 'mobile', 'network'],
}, () => (k) => av.fill([[25.3, 54], [37.8, 46], [50.3, 38], [62.8, 30]].map(([x, y]) => av.rect(x, y, x + 8, 64, 2)).join(' '), k));
