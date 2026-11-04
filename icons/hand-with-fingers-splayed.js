const h = require('../src/parts/hand');

// Palm on, every finger fanned wide.
const a = h.hand({ at: [48, 56], scale: 0.95, fingers: { index: { spread: 16 }, middle: { spread: 4 }, ring: { spread: -8 }, pinky: { spread: -20 } }, thumb: { out: 58, bend: [-5, 8] } });

module.exports = {
  id: 'hand-with-fingers-splayed',
  name: 'Hand With Fingers Splayed',
  emoji: '🖐️',
  group: 'People & Body',
  subgroup: 'hand-fingers-open',
  tags: ['hand', 'five', 'splayed', 'open', 'palm'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 54, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
