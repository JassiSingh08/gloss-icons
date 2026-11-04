const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'smiling-face-with-smiling-eyes',
  name: 'Smiling Face With Smiling Eyes',
  emoji: '😊',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['blush', 'happy', 'pleased', 'warm'],
  draw: (c) => f.head(c) + f.eyes.smile() + f.extras.blush(c) + f.mouth.smile(),
};
