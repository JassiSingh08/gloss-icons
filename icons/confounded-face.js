const f = require('../src/parts/face');
const b = require('../src/parts/face-b');

module.exports = {
  ...f.spec(),
  id: 'confounded-face',
  name: 'Confounded Face',
  emoji: '😖',
  group: 'Smileys & Emotion',
  subgroup: 'face-concerned',
  tags: ['confounded', 'frustrated', 'scrunched', 'ugh', 'annoyed'],
  draw: (c) => f.head(c) + b.worried({ y: 34, slant: 6 }) + f.eyes.squint({ y: 46 }) + f.stroke('M37 68 L41.5 64.5 L46 68.5 L50.5 64.5 L55 68.5 L59.5 65', 3.4),
};
