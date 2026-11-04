const h = require('../src/parts/hand');

// Palm on, fingers together, the thumb held a little apart.
const a = h.hand({ at: [47, 53], scale: 1.02, fingers: { index: { spread: 3 }, middle: { spread: 1 }, ring: { spread: -1 }, pinky: { spread: -4 } }, thumb: { out: 32 } });

module.exports = {
  id: 'raised-hand',
  name: 'Raised Hand',
  emoji: '✋',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'stop', 'high five', 'halt', 'raised'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 50, -65],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
