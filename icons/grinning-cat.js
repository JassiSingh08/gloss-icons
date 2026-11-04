const f = require('../src/parts/face');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'grinning-cat',
  name: 'Grinning Cat',
  emoji: '😺',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'grin', 'happy', 'kitty', 'smile'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.eyes.oval({ ...E, ry: 5.2 }) + f.mouth.grin(c, { y: 62, w: 12, depth: 11 }) + k.nose(c),
};
