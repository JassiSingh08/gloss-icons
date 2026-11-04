const h = require('../src/parts/hand');

const T = [1, 40, 9];
const to = (off, bow) => ({ reach: T, off, bow });
// All five fingertips gathered to a point, held up.
const a = h.hand({ at: [48, 56], scale: 1, aim: [[0, 1, 0.15], [0.75, 0, 0.65]], fingers: { index: to([1.5, 0, 0], [0.5, 0, -5]), middle: to([0, 1, -1], [0, 0, -7.5]), ring: to([-1.5, 0, -1], [-1, 0, -7.5]), pinky: to([-3, -1.5, 0], [-2, 0, -5]) }, thumb: { out: 20, across: 50, root: 0.4, reach: T, off: [1.5, -1, 3], bow: [1, 0, 1], front: true } });

module.exports = {
  id: 'pinched-fingers',
  name: 'Pinched Fingers',
  emoji: '🤌',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['pinched', 'italian', 'what', 'chef kiss', 'gesture'],
  tone: 'yellow',
  body: a.body,
  shine: [42, 58, -70],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
