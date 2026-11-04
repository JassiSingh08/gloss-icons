const h = require('../src/parts/hand');

// Back of the hand tipped toward us, index out to the right, curled fingers stacked below.
const a = h.hand({ at: [35, 50], scale: 1.08, yaw: 160, pitch: 35, roll: -90, fingers: { index: { spread: 0 }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'backhand-index-pointing-right',
  name: 'Backhand Index Pointing Right',
  emoji: '👉',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['point', 'right', 'next', 'that way', 'direction'],
  tone: 'yellow',
  body: a.body,
  shine: [28, 44, -20],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
