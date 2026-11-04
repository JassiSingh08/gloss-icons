const h = require('../src/parts/hand');

// The back of a raised hand, fingers together, nails showing.
const a = h.hand({ at: [49, 53], scale: 1.02, yaw: 180, fingers: { index: { spread: 3 }, middle: { spread: 1 }, ring: { spread: -1 }, pinky: { spread: -4 } }, thumb: { out: 32 } });

module.exports = {
  id: 'raised-back-of-hand',
  name: 'Raised Back Of Hand',
  emoji: '🤚',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'raised', 'backhand', 'stop', 'halt'],
  tone: 'yellow',
  body: a.body,
  shine: [40, 50, -65],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
