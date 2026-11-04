const h = require('../src/parts/hand');

// Flat hand held out level, palm to the floor, seen a little from above.
const a = h.hand({ at: [57, 50], scale: 1, aim: [[-1, -0.08, 0.05], [0, -0.75, -0.65]], fingers: { index: { spread: 4, curl: [4, 8, 4] }, middle: { spread: 1, curl: [5, 8, 4] }, ring: { spread: -2, curl: [6, 9, 5] }, pinky: { spread: -6, curl: [8, 10, 6] } }, thumb: { out: 22, across: 5, bend: [0, 5] } });

module.exports = {
  id: 'palm-down-hand',
  name: 'Palm Down Hand',
  emoji: '🫳',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'palm down', 'drop', 'pat', 'dismiss'],
  tone: 'yellow',
  body: a.body,
  shine: [60, 44, -10],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
