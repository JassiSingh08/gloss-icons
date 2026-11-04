const f = require('../src/parts/face');
const k = require('../src/parts/cat');

module.exports = {
  ...k.monkeySpec(),
  id: 'speak-no-evil-monkey',
  name: 'Speak-No-Evil Monkey',
  emoji: '🙊',
  group: 'Smileys & Emotion',
  subgroup: 'monkey-face',
  tags: ['monkey', 'speak no evil', 'oops', 'secret', 'shh'],
  draw: (c) => k.monkeyHead(c) + f.eyes.wide({ y: k.MONKEY_EYE, dx: k.MONKEY_DX, r: 4.8, pupil: 2.2, look: [0.4, 0], ink: '#331805' }) + f.brows.raised({ y: 38, dx: 10, ink: '#331805', sw: 2.6 }) + k.monkeyHand(c, { x: 38.5, y: 74, rot: 6, flip: true, sc: 0.9 }) + k.monkeyHand(c, { x: 57.5, y: 74, rot: -6, sc: 0.9 }),
};
