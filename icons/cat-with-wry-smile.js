const f = require('../src/parts/face');
const k = require('../src/parts/cat');

const E = { y: k.CAT_EYE, dx: k.CAT_DX };
module.exports = {
  ...k.catSpec(),
  id: 'cat-with-wry-smile',
  name: 'Cat With Wry Smile',
  emoji: '😼',
  group: 'Smileys & Emotion',
  subgroup: 'cat-face',
  tags: ['cat', 'smirk', 'sly', 'wry', 'ironic'],
  draw: (c) => k.catHead(c) + k.whiskers() + f.brows.one({ dx: 12, y: 41 }) + f.eyes.lidded({ ...E, tilt: 3 }) + k.nose(c) + f.stroke('M48 61 L48 63.5 Q43 67 39 64.5', 2.8) + f.stroke('M48 63.5 Q54 66 60 59', 3.2) + f.stroke('M58.5 58.3 L62 57', 2.8),
};
