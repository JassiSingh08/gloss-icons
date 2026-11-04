const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'grinning-face-with-big-eyes',
  name: 'Grinning Face With Big Eyes',
  emoji: '😃',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['happy', 'grin', 'smile', 'delighted', 'excited'],
  draw: (c) => f.head(c) + a.eyes.big() + f.mouth.grin(c, { w: 19, depth: 20 }),
};
