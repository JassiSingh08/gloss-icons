const h = require('../src/parts/hand');

// Back of the hand: the middle finger crossed over the index for luck, the rest folded away.
const a = h.hand({ at: [48, 58], scale: 0.98, yaw: 180, fingers: { index: { spread: -12, curl: [10, 5, 0] }, middle: { spread: 22, lift: -10, front: true }, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'crossed-fingers',
  name: 'Crossed Fingers',
  emoji: '🤞',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['luck', 'hope', 'fingers crossed', 'wish', 'promise'],
  tone: 'yellow',
  body: a.body,
  shine: [42, 60, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
