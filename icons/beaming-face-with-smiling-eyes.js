const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'beaming-face-with-smiling-eyes',
  name: 'Beaming Face With Smiling Eyes',
  emoji: '😁',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['beam', 'grin', 'teeth', 'proud', 'happy'],
  draw: (c) => f.head(c) + f.eyes.smile({ y: 43 }) + a.mouth.beam(c),
};
