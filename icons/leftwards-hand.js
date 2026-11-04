const h = require('../src/parts/hand');

// A hand reaching out to the left, back to us, thumb on top.
const a = h.hand({ at: [55, 50], scale: 1, mirror: true, aim: [[1, -0.05, 0.1], [0, -0.35, -1]], fingers: { index: { spread: 2, curl: [6, 8, 4] }, middle: { spread: 0, curl: [8, 10, 5] }, ring: { spread: -2, curl: [10, 12, 6] }, pinky: { spread: -5, curl: [12, 14, 8] } }, thumb: { out: 45, across: 15, bend: [-5, 10] } });

module.exports = {
  id: 'leftwards-hand',
  name: 'Leftwards Hand',
  emoji: '🫲',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'left', 'reach', 'offer', 'handshake'],
  tone: 'yellow',
  body: a.body,
  shine: [62, 44, 15],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
