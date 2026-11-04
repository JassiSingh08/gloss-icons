const f = require('../src/parts/face');
const k = require('../src/parts/cat');

module.exports = {
  ...k.monkeySpec(),
  id: 'hear-no-evil-monkey',
  name: 'Hear-No-Evil Monkey',
  emoji: '🙉',
  group: 'Smileys & Emotion',
  subgroup: 'monkey-face',
  tags: ['monkey', 'hear no evil', 'not listening', 'la la la', 'ignore'],
  draw: (c) => k.monkeyHead(c, { ears: false }) + f.eyes.closed({ y: k.MONKEY_EYE, dx: k.MONKEY_DX, w: 4.5, ink: '#331805' }) + k.monkeyNose() + f.stroke('M40 67.5 Q48 72 56 67.5', 3.2, '#331805') + k.monkeyHand(c, { x: 18, y: 53, rot: 6, flip: true, sc: 0.95 }) + k.monkeyHand(c, { x: 78, y: 53, rot: -6, sc: 0.95 }),
};
