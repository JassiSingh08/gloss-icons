const F = require('../src/parts/figure');

module.exports = {
  id: 'person-kneeling',
  name: 'Person Kneeling',
  emoji: '🧎',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['kneel', 'kneeling', 'propose', 'pray', 'one knee'],
  tone: 'purple',
  ...F.shineOf(52, 21, 13),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [52, 21], r: 13, hair: 'bob', color: 'auburn', face: F.face.calm({ dx: 4 }),
      torso: [[50, 44], [47, 57]], tw: [10, 8.5], top: 'purple', bottom: 'navy',
      armB: [[52, 42], [58, 51], [64, 56]],
      legB: [[44, 60], [42, 72], [41, 79], [27, 79]], footB: [21, 77],
      legF: [[49, 61], [62, 62], [63, 78]], footF: [70, 79.5],
      armF: [[46, 42], [44, 52], [47, 61]],
    }),
  })),
};
