const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'pensive-face',
  name: 'Pensive Face',
  emoji: '😔',
  group: 'Smileys & Emotion',
  subgroup: 'face-sleepy',
  tags: ['pensive', 'sad', 'regret', 'dejected', 'thoughtful'],
  draw: (c) => f.head(c) + a.brows.sad({ y: 37, slant: 5.5 }) + f.eyes.closed({ y: 48, w: 5 }) + f.mouth.frown({ y: 67, w: 6.5 }),
};
