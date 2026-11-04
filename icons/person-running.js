const F = require('../src/parts/figure');

module.exports = {
  id: 'person-running',
  name: 'Person Running',
  emoji: '🏃',
  group: 'People & Body',
  subgroup: 'person-activity',
  tags: ['running', 'run', 'jog', 'marathon', 'hurry'],
  tone: 'red',
  ...F.shineOf(55, 19, 12.5),
  ...F.build((c) => ({
    art: F.person(c, {
      head: [55, 19], r: 12.5, hair: 'crop', color: 'dark', face: F.face.focus({ dx: 6 }),
      torso: [[51, 40], [45, 53]], tw: [9.5, 8], top: 'red', bottom: 'navy',
      armB: [[53, 38], [62, 45], [68, 38]],
      armF: [[48, 38], [38, 44], [30, 39]],
      legB: [[44, 56], [34, 63], [22, 61]], footB: [19, 66],
      legF: [[46, 56], [59, 61], [56, 75]], footF: [62, 78],
    }),
  })),
};
