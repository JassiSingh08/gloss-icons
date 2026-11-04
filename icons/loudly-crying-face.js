const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'loudly-crying-face',
  name: 'Loudly Crying Face',
  emoji: '😭',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['sobbing', 'crying', 'tears', 'heartbroken', 'bawling'],
  draw: (c) => f.head(c) + b.worried({ y: 34, slant: 5, dx: 12 }) + f.eyes.closed({ y: 45, dx: 12, w: 6 }) + b.stream(c, [[36, 49], [35, 62], [33.5, 81]], 6) + b.stream(c, [[60, 49], [61, 62], [62.5, 81]], 6) + b.openFrown(c, { y: 69, w: 9, h: 10, teeth: true }),
};
