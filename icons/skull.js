const b = require('../src/parts/face-b');

const { body } = b.skull({ ramp: () => [], radial: () => '', id: (s) => s }, { y: 48 });
module.exports = {
  id: 'skull',
  name: 'Skull',
  emoji: '💀',
  group: 'Smileys & Emotion',
  subgroup: 'face-negative',
  tags: ['skull', 'dead', 'dying', 'spooky', 'halloween'],
  tone: 'ivory',
  body,
  shine: [30, 32, -45],
  draw: (c) => b.skull(c, { y: 48 }).art,
};
