const f = require('../src/parts/face');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'grinning-cat-with-smiling-eyes',
  name: 'Grinning Cat With Smiling Eyes',
  emoji: '😸',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'grin', 'happy', 'joy', 'kitty'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.eyes.smile({ ...E, y: 51 }) + f.mouth.grin(c, { y: 62, w: 13, depth: 12 }) + k.nose(c),
};
