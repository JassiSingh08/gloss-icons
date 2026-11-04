const h = require('../src/parts/hand');

// Fingers curled toward us, the thumb wrapped across them, a bit of wrist below.
const a = h.hand({ at: [48, 48], scale: 1.32, pitch: 10, fingers: { index: h.CURL, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'raised-fist',
  name: 'Raised Fist',
  emoji: '✊',
  group: 'People & Body',
  subgroup: 'hand-fingers-closed',
  tags: ['fist', 'solidarity', 'power', 'strength', 'resist'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 38, -40],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
