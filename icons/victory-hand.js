const h = require('../src/parts/hand');

// Index and middle up in a V, the rest curled under the thumb.
const a = h.hand({ at: [48, 56], scale: 0.98, fingers: { index: { spread: 13 }, middle: { spread: -8 }, ring: h.CURL, pinky: h.CURL }, thumb: h.TUCK });

module.exports = {
  id: 'victory-hand',
  name: 'Victory Hand',
  emoji: '✌️',
  group: 'People & Body',
  subgroup: 'hand-fingers-partial',
  tags: ['peace', 'victory', 'two', 'v sign', 'yay'],
  tone: 'yellow',
  body: a.body,
  shine: [38, 58, -60],
  shineSize: [5, 2.4],
  draw: (c) => a.draw(c),
};
