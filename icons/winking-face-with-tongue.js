const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'winking-face-with-tongue',
  name: 'Winking Face With Tongue',
  emoji: '😜',
  group: 'Smileys & Emotion',
  subgroup: 'face-tongue',
  tags: ['wink', 'tongue', 'kidding', 'cheeky', 'silly'],
  draw: (c) => f.head(c) + f.brows.one({ side: -1 }) + f.eyes.wink() + f.mouth.grin(c, { y: 58, w: 17, depth: 13, teeth: true, tongue: false })
    + f.extras.tongue(c, 50, 68, { rot: -12, scale: 1.2 }),
};
