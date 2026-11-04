const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'fearful-face',
  name: 'Fearful Face',
  emoji: '😨',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['fear', 'scared', 'afraid', 'frightened', 'shocked'],
  draw: (c) => f.head(c) + b.fear(c) + b.worried({ y: 33, slant: 6 }) + f.eyes.wide({ y: 45, r: 6, pupil: 2.4 }) + b.openFrown(c, { y: 69, w: 10, h: 8.5, teeth: true }),
};
