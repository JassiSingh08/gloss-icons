const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'kissing-face-with-closed-eyes',
  name: 'Kissing Face With Closed Eyes',
  emoji: '😚',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['kiss', 'blush', 'smooch', 'love', 'shy'],
  draw: (c) => f.head(c) + f.eyes.closed() + f.extras.blush(c) + a.mouth.pucker(),
};
