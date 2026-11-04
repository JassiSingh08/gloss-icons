const h = require('../src/parts/hand');

// A mirrored pair: the hand in o on the left of x = 48, its mirror image (the other hand) on the right.
const pair = (o, dx, y) => [h.hand({ ...o, at: [48 - dx, y] }), h.hand({ ...o, mirror: true, at: [48 + dx, y] })];
// Both palms up and out in celebration, thumbs inward (as the person facing us holds them), with a burst above each.
const a = h.group(pair({ scale: 0.68, roll: 14 }, 19, 60));

module.exports = {
  id: 'raising-hands',
  name: 'Raising Hands',
  emoji: '🙌',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['hooray', 'celebrate', 'praise', 'yay', 'success'],
  tone: 'yellow',
  body: a.body,
  shine: [26, 62, -60],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + h.mark('M13 18 L9 13') + h.mark('M21 13 L21 7') + h.mark('M83 18 L87 13') + h.mark('M75 13 L75 7');
  },
};
