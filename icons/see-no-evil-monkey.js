const f = require('../src/parts/face');
const k = require('../src/parts/cat');

module.exports = {
  ...k.monkeySpec(),
  id: 'see-no-evil-monkey',
  name: 'See-No-Evil Monkey',
  emoji: '🙈',
  group: 'Smileys & Emotion',
  subgroup: 'monkey-face',
  tags: ['monkey', 'see no evil', 'oops', 'embarrassed', 'hide'],
  draw: (c) => k.monkeyHead(c) + k.monkeyNose() + f.stroke('M38 68 Q48 73.5 58 67', 3.2, '#331805') + f.stroke('M56.5 66 L60 65', 2.6, '#331805') + k.monkeyHand(c, { x: 37, y: 47, rot: 8, flip: true }) + k.monkeyHand(c, { x: 59, y: 47, rot: -8 }),
};
