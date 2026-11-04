const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'anguished-face',
  name: 'Anguished Face',
  emoji: '😧',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['anguished', 'distressed', 'pained', 'shocked', 'horrified'],
  draw: (c) => f.head(c) + b.worried({ y: 33, slant: 6 }) + f.eyes.wide({ y: 45, r: 5.6, pupil: 2.8 }) + b.openFrown(c, { y: 69, w: 11, h: 9.5, teeth: true }),
};
