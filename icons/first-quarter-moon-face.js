const sky = require('../src/parts/sky');

// The crescent seen side-on, its inner edge carved into a profile looking right.
const prof = require('./last-quarter-moon-face').profile;
const P = prof(false);
module.exports = {
  id: 'first-quarter-moon-face',
  name: 'First Quarter Moon Face',
  emoji: '🌛',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['moon', 'face', 'crescent', 'sleepy', 'night'],
  tone: 'gold',
  body: P.body,
  shine: P.shine,
  shineSize: [5, 2.4],
  draw: P.draw,
};
