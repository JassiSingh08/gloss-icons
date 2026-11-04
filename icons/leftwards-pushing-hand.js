const h = require('../src/parts/hand');

// Palm turned to the left and pressed forward, wrist bent back, pushing something away.
const a = h.hand({ at: [48, 46], scale: 0.9, arm: 22, armBend: -25, aim: [[-0.18, 1, 0], [-0.55, 0, 0.83]], fingers: { index: { spread: 3, curl: [-8, 0, 0] }, middle: { spread: 0, curl: [-8, 0, 0] }, ring: { spread: -3, curl: [-8, 0, 0] }, pinky: { spread: -6, curl: [-8, 0, 0] } }, thumb: { out: 50, across: -10, bend: [0, 8] } });

module.exports = {
  id: 'leftwards-pushing-hand',
  name: 'Leftwards Pushing Hand',
  emoji: '🫷',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['push', 'stop', 'wait', 'refuse', 'high five'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 44, -65],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + h.mark('M14 30 L14 48') + h.mark('M9 35 L9 43');
  },
};
