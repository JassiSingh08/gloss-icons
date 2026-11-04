const F = require('../src/parts/figure');

module.exports = {
  id: 'person-walking',
  name: 'Person Walking',
  emoji: '🚶',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['walking', 'walk', 'stroll', 'pedestrian', 'hike'],
  tone: 'orange',
  ...F.shineOf(50, 19, 13),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [50, 19], r: 13, hair: 'short', color: 'brown', face: F.face.calm({ dx: 5 }),
      torso: [[49, 42], [47.5, 55]], tw: [9.5, 8], top: 'orange', bottom: 'navy',
      armB: [[50, 40], [56, 49], [61, 55]],
      armF: [[46, 40], [41, 49], [36, 54]],
      legB: [[47, 58], [42, 68], [36, 78]], footB: [40, 81],
      legF: [[48, 58], [55, 67], [59, 78]], footF: [65, 79.5],
    }),
  })),
};
