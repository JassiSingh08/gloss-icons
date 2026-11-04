const h = require('../src/parts/hand');

// Palm on, index raised, the thumb across the curled fingers.
const a = h.hand({ at: [47, 60], scale: 0.98, fingers: { index: { spread: 0 }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'index-pointing-up',
  name: 'Index Pointing Up',
  emoji: '☝️',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['one', 'point', 'up', 'attention', 'first'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 62, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
