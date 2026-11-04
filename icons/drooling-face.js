const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// Dreamy half-shut eyes, mouth hanging open, drool running off the corner.
module.exports = {
  ...f.spec(),
  id: 'drooling-face',
  name: 'Drooling Face',
  emoji: '🤤',
  group: 'Smileys & Emotion',
  subgroup: 'face-sleepy',
  tags: ['drool', 'craving', 'want', 'yummy', 'desire'],
  draw: (c) => f.head(c) + f.brows.raised({ y: 33 }) + a.eyes.half({ y: 45, look: 1 })
    + f.mouth.grin(c, { y: 60, w: 13, depth: 10, teeth: false })
    + f.extras.drop(c, 59, 72, { scale: 1.05, rot: -8 }),
};
