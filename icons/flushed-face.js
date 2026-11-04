const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'flushed-face',
  name: 'Flushed Face',
  emoji: '😳',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['flushed', 'embarrassed', 'blushing', 'awkward', 'shy'],
  draw: (c) => f.head(c) + f.extras.blush(c, { y: 59, dx: 19, rx: 8.5, ry: 5.2, opacity: 0.85 }) + f.brows.raised({ y: 31 }) + f.eyes.wide({ y: 44, r: 6.4, pupil: 2.2 }) + f.mouth.flat({ y: 69, w: 5 }),
};
