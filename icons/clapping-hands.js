const h = require('../src/parts/hand');

const T = { index: { spread: 3 }, middle: { spread: 1 }, ring: { spread: -1 }, pinky: { spread: -4 } };
// A right hand and a left hand meeting palm to palm, the near one showing its back, with the clap flying off them.
const a = h.group([
  h.hand({ at: [57, 56], scale: 0.9, aim: [[0.35, 1, 0], [-0.8, 0, 0.6]], fingers: T }),
  h.hand({ at: [42, 59], scale: 0.9, mirror: true, aim: [[-0.35, 1, 0], [-0.8, 0, -0.6]], fingers: T }),
]);

module.exports = {
  id: 'clapping-hands',
  name: 'Clapping Hands',
  emoji: '👏',
  group: 'People & Body',
  subgroup: 'hands',
  tags: ['clap', 'applause', 'bravo', 'well done', 'congrats'],
  tone: 'yellow',
  body: a.body,
  shine: [46, 58, -50],
  shineSize: [5, 2.4],
  draw(c) {
    return a.draw(c) + h.mark('M17 26 L10 21') + h.mark('M15 37 L7 36') + h.mark('M26 17 L22 9');
  },
};
