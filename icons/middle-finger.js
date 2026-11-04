const h = require('../src/parts/hand');

// Back of the hand, middle finger up. Kept plain.
const a = h.hand({ at: [49, 60], scale: 0.98, yaw: 180, fingers: { index: h.CURL, middle: { spread: 0 }, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'middle-finger',
  name: 'Middle Finger',
  emoji: '🖕',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['middle finger', 'rude', 'flip off', 'insult', 'finger'],
  tone: 'yellow',
  body: a.body,
  shine: [42, 60, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
