const h = require('../src/parts/hand');

// A hand reaching out to the right, back to us, thumb on top, as if offering a handshake.
const a = h.hand({ at: [41, 50], scale: 1, aim: [[1, -0.05, 0.1], [0, -0.35, -1]], fingers: { index: { spread: 2, curl: [6, 8, 4] }, middle: { spread: 0, curl: [8, 10, 5] }, ring: { spread: -2, curl: [10, 12, 6] }, pinky: { spread: -5, curl: [12, 14, 8] } }, thumb: { out: 45, across: 15, bend: [-5, 10] } });

module.exports = {
  id: 'rightwards-hand',
  name: 'Rightwards Hand',
  emoji: '🫱',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'right', 'reach', 'offer', 'handshake'],
  tone: 'yellow',
  body: a.body,
  shine: [28, 46, -15],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
