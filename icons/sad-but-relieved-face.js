const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'sad-but-relieved-face',
  name: 'Sad But Relieved Face',
  emoji: '😥',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['relieved', 'phew', 'sad', 'sweat', 'disappointed'],
  draw: (c) => f.head(c) + b.worried({ y: 35, slant: 5 }) + f.eyes.oval({ y: 46 }) + b.openFrown(c, { y: 69, w: 7, h: 5.5, tongue: false }) + f.extras.drop(c, 25, 39, { scale: 1.05, rot: 10 }),
};
