const h = require('../src/parts/hand');

// Back of the hand, thumb and little finger out like a phone receiver.
const a = h.hand({ at: [50, 52], scale: 1, yaw: 180, roll: -50, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: { spread: -12 } }, thumb: { out: 80, across: 0, bend: [0, -5] } });

module.exports = {
  id: 'call-me-hand',
  name: 'Call Me Hand',
  emoji: '🤙',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['call me', 'shaka', 'hang loose', 'phone', 'surf'],
  tone: 'yellow',
  body: a.body,
  shine: [42, 46, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
