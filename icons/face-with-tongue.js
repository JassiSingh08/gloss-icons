const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-with-tongue',
  name: 'Face With Tongue',
  emoji: '😛',
  group: 'Smileys & Emotion',
  subgroup: 'face-tongue',
  tags: ['tongue', 'cheeky', 'silly', 'playful'],
  draw: (c) => f.head(c) + f.eyes.oval() + f.mouth.flat({ w: 10 }) + f.extras.tongue(c, 48, 67),
};
