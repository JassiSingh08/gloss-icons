const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

module.exports = {
  ...f.spec(),
  id: 'kissing-face',
  name: 'Kissing Face',
  emoji: '😗',
  group: 'Smileys & Emotion',
  subgroup: 'face-affection',
  tags: ['kiss', 'pucker', 'whistle', 'smooch'],
  draw: (c) => f.head(c) + f.brows.flat() + f.eyes.oval() + a.mouth.pucker(),
};
