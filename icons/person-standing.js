const F = require('../src/parts/figure');

module.exports = {
  id: 'person-standing',
  name: 'Person Standing',
  emoji: '🧍',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['standing', 'stand', 'wait', 'person', 'upright'],
  tone: 'teal',
  ...F.shineOf(48, 20, 13),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [48, 20], r: 13, hair: 'short', color: 'dark', face: F.face.calm(),
      torso: [[48, 43], [48, 56]], tw: [10.5, 8.5], top: 'teal', bottom: 'navy',
      armB: [[39, 40], [36, 50], [35.5, 59]], armF: [[57, 40], [60, 50], [60.5, 59]],
      legB: [[43.5, 60], [43, 70], [42.5, 79]], footB: [39, 80.5],
      legF: [[52.5, 60], [53, 70], [53.5, 79]], footF: [57, 80.5],
    }),
  })),
};
