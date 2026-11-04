const h = require('../src/parts/hand');

// A mirrored pair: the hand in o on the left of x = 48, its mirror image (the other hand) on the right.
const pair = (o, dx, y) => [h.hand({ ...o, at: [48 - dx, y] }), h.hand({ ...o, mirror: true, at: [48 + dx, y] })];
const T = { index: { spread: 8 }, middle: { spread: 1 }, ring: { spread: -6 }, pinky: { spread: -13 } };
// Two open palms held out wide and tipped apart, thumbs inward.
const a = h.group(pair({ scale: 0.66, roll: 26, fingers: T, thumb: { out: 45 } }, 21, 58));

module.exports = {
  id: 'open-hands',
  name: 'Open Hands',
  emoji: '👐',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['open hands', 'hug', 'jazz hands', 'welcome', 'embrace'],
  tone: 'yellow',
  body: a.body,
  shine: [22, 58, -45],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
