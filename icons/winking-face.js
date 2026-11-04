const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'winking-face',
  name: 'Winking Face',
  emoji: '😉',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['wink', 'flirt', 'joke', 'kidding'],
  draw: (c) => f.head(c) + f.brows.one({ side: -1 }) + f.eyes.wink() + f.mouth.smirk(),
};
