const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'tired-face',
  name: 'Tired Face',
  emoji: '😫',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['tired', 'exhausted', 'drained', 'sleepy', 'fed up'],
  draw: (c) => f.head(c) + b.worried({ y: 34, slant: 5 }) + f.eyes.squint({ y: 46 }) + b.openFrown(c, { y: 69, w: 12.5, h: 10, teeth: true }),
};
