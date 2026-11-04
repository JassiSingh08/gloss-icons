const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'anxious-face-with-sweat',
  name: 'Anxious Face With Sweat',
  emoji: '😰',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['anxious', 'nervous', 'stressed', 'sweat', 'panic'],
  draw: (c) => f.head(c) + b.fear(c, { to: 46 }) + b.worried({ y: 35, slant: 6 }) + f.eyes.oval({ y: 46 }) + b.openFrown(c, { y: 69, w: 8.5, h: 7 }) + f.extras.drop(c, 71, 37, { scale: 1.15, rot: -12 }),
};
