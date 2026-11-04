const h = require('../src/parts/hand');

// Hand held out level, palm up and a little cupped, offering.
const a = h.hand({ at: [57, 54], scale: 1, aim: [[-1, 0.05, 0.1], [0, 0.6, 0.8]], fingers: { index: { spread: 4, curl: [14, 18, 8] }, middle: { spread: 1, curl: [16, 18, 8] }, ring: { spread: -2, curl: [18, 20, 10] }, pinky: { spread: -6, curl: [20, 22, 12] } }, thumb: { out: 40, across: 10, bend: [0, 10] } });

module.exports = {
  id: 'palm-up-hand',
  name: 'Palm Up Hand',
  emoji: '🫴',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'palm up', 'offer', 'beckon', 'come'],
  tone: 'yellow',
  body: a.body,
  shine: [60, 54, -10],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
