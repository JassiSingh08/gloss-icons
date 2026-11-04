const h = require('../src/parts/hand');

// Two pairs of fingers held together with a clear V between middle and ring.
const a = h.hand({ at: [48, 56], scale: 0.95, fingers: { index: { spread: 12, shift: [-0.8, -0.6, 0] }, middle: { spread: 12, shift: [0.8, -0.4, 0] }, ring: { spread: -15, shift: [-0.8, 0, 0] }, pinky: { spread: -15, shift: [1, 1, 0] } }, thumb: { out: 55, bend: [-5, 8] } });

module.exports = {
  id: 'vulcan-salute',
  name: 'Vulcan Salute',
  emoji: '🖖',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['spock', 'vulcan', 'live long', 'prosper', 'star trek'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 56, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
