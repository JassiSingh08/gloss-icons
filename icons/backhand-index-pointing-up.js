const h = require('../src/parts/hand');

// Back of the hand, index straight up, curled fingers to the side.
const a = h.hand({ at: [50, 60], scale: 0.98, yaw: 160, pitch: 35, fingers: { index: { spread: 0 }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'backhand-index-pointing-up',
  name: 'Backhand Index Pointing Up',
  emoji: '👆',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['point', 'up', 'above', 'look up', 'direction'],
  tone: 'yellow',
  body: a.body,
  shine: [44, 58, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
