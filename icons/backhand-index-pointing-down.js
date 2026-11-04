const h = require('../src/parts/hand');

// Back of the hand, index straight down, curled fingers to the side.
const a = h.hand({ at: [46, 36], scale: 0.98, mirror: true, yaw: 160, pitch: 35, roll: 180, fingers: { index: { spread: 0 }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'backhand-index-pointing-down',
  name: 'Backhand Index Pointing Down',
  emoji: '👇',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['point', 'down', 'below', 'here', 'direction'],
  tone: 'yellow',
  body: a.body,
  shine: [46, 28, -30],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
