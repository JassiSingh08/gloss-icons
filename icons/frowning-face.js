const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'frowning-face',
  name: 'Frowning Face',
  emoji: '☹️',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['frown', 'sad', 'unhappy', 'upset', 'gloomy'],
  draw: (c) => f.head(c) + b.worried({ y: 36, slant: 3 }) + f.eyes.oval({ y: 46 }) + f.mouth.frown({ y: 68, w: 12 }),
};
