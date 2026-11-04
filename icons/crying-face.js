const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'crying-face',
  name: 'Crying Face',
  emoji: '😢',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['crying', 'sad', 'tear', 'upset', 'hurt'],
  draw: (c) => f.head(c) + b.worried({ y: 35, slant: 5 }) + f.eyes.oval({ y: 46 }) + f.mouth.frown({ y: 68, w: 9 }) + f.extras.drop(c, 62, 60, { scale: 1.2 }),
};
