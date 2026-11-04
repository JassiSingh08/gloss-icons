const a = require('../src/parts/animal');
const { bovine } = require('./cow');

module.exports = bovine({
  id: 'water-buffalo',
  name: 'Water Buffalo',
  emoji: '🐃',
  tags: ['water buffalo', 'buffalo', 'asia', 'rice', 'cattle'],
  coat: 'slate',
  ink: '#0E1420',
  hoof: '#141C28',
  // Heavy horns that sweep back in a crescent over the neck.
  horn: a.spline([[17, 31], [17, 24], [24, 17.5], [35, 17], [44, 23, 1], [35, 21.5], [28, 24], [24.5, 31]]),
  hornPal: 'sand',
  ear: [[22, 35], [14, 34], [9, 37], [15, 39.5], [23, 39]],
  muzzle: (c) => c.radial('muzzle', 'grey', 0.4, 0.25),
});
