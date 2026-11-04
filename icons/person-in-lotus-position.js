const F = require('../src/parts/figure');
const s = require('../src/parts/skin');

// Cross-legged, back straight, eyes closed, hands resting on the knees.
module.exports = {
  id: 'person-in-lotus-position',
  name: 'Person In Lotus Position',
  emoji: '🧘',
  group: 'People & Body',
  subgroup: 'person-resting',
  tags: ['yoga', 'meditation', 'lotus', 'calm', 'zen'],
  tone: 'teal',
  ...F.shineOf(48, 22, 13),
  ...F.build((c) => {
    const feet = [[34, 74, -20], [62, 74, 20]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="5.5" ry="3.6" transform="rotate(${r} ${x} ${y})" fill="${s.fill(c)}" stroke="${s.EDGE}" stroke-opacity=".5" stroke-width="1.1"/>`).join('');
    return {
      art: F.person(c, {
        head: [48, 22], r: 13, hair: 'bun', color: 'dark', face: F.face.closed(),
        torso: [[48, 45], [48, 58]], tw: [10.5, 9], top: 'teal', bottom: 'purple',
        legB: [[52, 64], [24, 72], [52, 76]], legF: [[44, 64], [72, 72], [44, 76]], lw: 10.5,
        armB: [[39, 42], [30, 54], [24, 66]], handB: { dir: 100, thumb: 1 },
        armF: [[57, 42], [66, 54], [72, 66]], handF: { dir: 80, thumb: -1 },
        under: feet,
      }),
    };
  }),
};
