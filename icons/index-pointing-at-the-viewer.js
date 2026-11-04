const h = require('../src/parts/hand');

// Index aimed out of the picture: the back of the hand on top, the fingertip swelling toward us.
const a = h.hand({ at: [48, 32], scale: 1.3, aim: [[0, -0.6, 0.8], [0, -0.8, -0.6]], fingers: { index: { spread: 0, rs: [5, 6.2, 7.6, 8.6], shift: [-5, 1, 0] }, middle: h.CURL, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'index-pointing-at-the-viewer',
  name: 'Index Pointing At The Viewer',
  emoji: '🫵',
  group: 'People & Body',
  subgroup: 'hand-single-finger',
  tags: ['you', 'point', 'pointing at you', 'blame', 'your turn'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 22, -20],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
