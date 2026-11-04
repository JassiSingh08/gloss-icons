const f = require('../src/parts/face');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'smiling-cat-with-heart-eyes',
  name: 'Smiling Cat With Heart-Eyes',
  emoji: '😻',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'love', 'heart eyes', 'adore', 'crush'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.eyes.heart(c, { ...E, dx: 12.5, scale: 1.3 }) + k.nose(c) + f.mouth.grin(c, { y: 62, w: 11, depth: 10 }),
};
