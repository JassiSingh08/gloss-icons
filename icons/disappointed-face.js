const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'disappointed-face',
  name: 'Disappointed Face',
  emoji: '😞',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['disappointed', 'sad', 'dejected', 'let down', 'upset'],
  draw: (c) => f.head(c) + b.worried({ y: 37, slant: 4 }) + f.eyes.closed({ y: 48, h: 3 }) + f.mouth.frown({ y: 68, w: 10 }),
};
