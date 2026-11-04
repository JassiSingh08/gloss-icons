const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'downcast-face-with-sweat',
  name: 'Downcast Face With Sweat',
  emoji: '😓',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['downcast', 'sweat', 'stressed', 'tired', 'hard work'],
  draw: (c) => f.head(c) + b.worried({ y: 37, slant: 4 }) + f.eyes.closed({ y: 48, h: 3 }) + f.mouth.flat({ y: 68, w: 7, tilt: 1.5 }) + f.extras.drop(c, 27, 36, { scale: 1.2, rot: 8 }),
};
