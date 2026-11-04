const h = require('../src/parts/hand');

// Back of the hand tipped toward us, index out to the left, curled fingers stacked below.
const a = h.hand({ at: [61, 50], scale: 1.08, mirror: true, yaw: 160, pitch: 35, roll: -90, fingers: { index: { spread: 0 }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'backhand-index-pointing-left',
  name: 'Backhand Index Pointing Left',
  emoji: '👈',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['point', 'left', 'back', 'that way', 'direction'],
  tone: 'yellow',
  body: a.body,
  shine: [60, 44, 20],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
