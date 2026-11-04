const h = require('../src/parts/hand');

// Turned three-quarter so the ring of index and thumb shows clear beside the three raised fingers.
const a = h.hand({ at: [42, 56], scale: 0.95, aim: [[0.05, 1, 0], [0.8, 0, 0.6]], fingers: { index: { reach: [11, 14, 20], bow: [0, 8, -1] }, middle: { spread: 2 }, ring: { spread: -6 }, pinky: { spread: -14 } }, thumb: { root: 0.5, out: 20, across: 50, reach: 'index', off: [0, -4, 1], bow: [0, -3, 2] } });

module.exports = {
  id: 'ok-hand',
  name: 'OK Hand',
  emoji: '👌',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['ok', 'okay', 'perfect', 'fine', 'got it'],
  tone: 'yellow',
  body: a.body,
  shine: [34, 54, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
