const f = require('../src/parts/face');
const a = require('../src/parts/face-a');

// One brow up, eyes off to the side, the thumb under the chin and a finger up the cheek.
module.exports = {
  ...f.spec(),
  id: 'thinking-face',
  name: 'Thinking Face',
  emoji: '🤔',
  group: 'Smileys & Emotion',
  subgroup: 'face-hand',
  tags: ['thinking', 'hmm', 'wonder', 'consider', 'doubt'],
  draw: (c) => f.head(c) + f.brows.one({ side: 1 }) + `<g transform="translate(2 0)">${f.eyes.oval({ dx: 10 })}</g>`
    + f.stroke('M45 64.5 L58 62', 3.6) + a.pointHand(c, { x: 31, y: 75, rot: -10, scale: 1.15 }, { index: 12, thumb: 'out' }),
};
