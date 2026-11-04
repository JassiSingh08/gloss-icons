const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'sleeping-face',
  name: 'Sleeping Face',
  emoji: '😴',
  group: 'Smileys & Emotion',
  subgroup: 'face-sleepy',
  tags: ['sleeping', 'asleep', 'zzz', 'bored', 'night'],
  draw: (c) => f.head(c) + f.eyes.closed({ y: 47 }) + f.mouth.o({ y: 67, rx: 3.6, ry: 4.4 }) + a.extras.zzz(c, { x: 64, y: 25 }),
};
