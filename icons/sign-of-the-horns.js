const h = require('../src/parts/hand');

// Back of the hand: index and little finger up as horns, the middle two folded down.
const a = h.hand({ at: [49, 57], scale: 0.98, yaw: 180, fingers: { index: { spread: 8 }, middle: h.CURL, ring: h.CURL, pinky: { spread: -11 } }, thumb: h.TUCK });

module.exports = {
  id: 'sign-of-the-horns',
  name: 'Sign Of The Horns',
  emoji: '🤘',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['rock', 'metal', 'horns', 'rock on', 'concert'],
  tone: 'yellow',
  body: a.body,
  shine: [42, 58, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
