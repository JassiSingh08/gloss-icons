const F = require('../src/parts/figure');

// A barbell locked out overhead, knees bent, teeth gritted.
module.exports = {
  id: 'person-lifting-weights',
  name: 'Person Lifting Weights',
  emoji: '🏋️',
  group: 'People & Body',
  subgroup: 'person-sport',
  tags: ['weightlifting', 'gym', 'barbell', 'strong', 'workout'],
  tone: 'red',
  ...F.shineOf(48, 31, 12),
  ...F.build((c) => {
    const plate = c.linear('plate', 'black', [0, 0, 1, 1], 0, 2);
    const plates = [[11, 18], [17, 18], [79, 18], [73, 18]].map(([x, y], i) => `<rect x="${x - 3}" y="${y - (i % 2 ? 7 : 10)}" width="6" height="${i % 2 ? 14 : 20}" rx="2.5" fill="${plate}" stroke="#05050A" stroke-width="1.2"/>`).join('');
    return {
      art: F.rod('M14 18 L82 18', 3, '#D9DCE8', '#3A3E52') + plates + F.person(c, {
        head: [48, 31], r: 12, hair: 'short', color: 'dark', face: F.face.effort(),
        torso: [[48, 52], [48, 62]], tw: [10, 8.5], top: 'red', shorts: 'black', shoes: 'black', tee: 0.01,
        armB: [[40, 48], [31, 36], [29, 24]], handB: { dir: -90, thumb: 1 },
        armF: [[56, 48], [65, 36], [67, 24]], handF: { dir: -90, thumb: -1 },
        legB: [[43, 65], [32, 70], [33, 80]], footB: [28, 82],
        legF: [[53, 65], [64, 70], [63, 80]], footF: [68, 82],
      }),
    };
  }),
};
