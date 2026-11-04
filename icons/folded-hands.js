const h = require('../src/parts/hand');

const T = { index: { spread: 2 }, middle: { spread: 0 }, ring: { spread: -1 }, pinky: { spread: -3 } };
// A right and a left palm pressed together, fingers up, seen three-quarter: the back of the near hand, the far fingertips beyond.
const a = h.group([
  h.hand({ at: [54, 53], scale: 1, arm: 16, aim: [[0.05, 1, 0], [-0.9, 0, 0.44]], fingers: T, thumb: { out: 12, across: 10 } }),
  h.hand({ at: [42, 53], scale: 1, arm: 16, mirror: true, aim: [[-0.05, 1, 0], [-0.9, 0, -0.44]], fingers: T, thumb: { out: 12, across: 10 } }),
]);

module.exports = {
  id: 'folded-hands',
  name: 'Folded Hands',
  emoji: '🙏',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['please', 'pray', 'thank you', 'namaste', 'hope'],
  tone: 'yellow',
  body: a.body,
  shine: [42, 50, -70],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
