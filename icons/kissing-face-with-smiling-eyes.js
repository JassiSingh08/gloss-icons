const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'kissing-face-with-smiling-eyes',
  name: 'Kissing Face With Smiling Eyes',
  emoji: '😙',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['kiss', 'whistle', 'happy', 'smooch'],
  draw: (c) => f.head(c) + f.brows.raised() + f.eyes.smile() + a.mouth.pucker(),
};
