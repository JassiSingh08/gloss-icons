const av = require('../src/parts/av');
// A cine camera with its two film reels.
const m = require('../src/parts/metal');
const reel = (x, y, r) => `${av.disc(x, y, r)} ${av.disc(x, y, r * 0.3)}`;
const lens = m.round([[60, 53], [72, 46], [72, 68], [60, 61]], 1.6);

module.exports = av.button({
  id: 'cinema',
  name: 'Cinema',
  emoji: '🎦',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['cinema', 'film', 'movie', 'camera', 'theatre'],
}, () => (k) => av.hole(reel(34.5, 35, 8.5), k) + av.hole(reel(53, 36.5, 7), k) + av.fill(`${av.rect(24, 46, 58, 68, 4)} ${lens}`, k));
