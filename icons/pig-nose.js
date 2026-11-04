const a = require('../src/parts/animal');

// The snout seen end-on: a fat disc with a little depth on its lower edge.
const body = a.spline([[48, 20], [69, 23], [82, 38], [81, 58], [68, 73], [48, 77], [28, 73], [15, 58], [14, 38], [27, 23]]);
const face = a.spline([[48, 22.5], [67, 25.5], [79, 38], [78, 53], [66, 64], [48, 67], [30, 64], [18, 53], [17, 38], [29, 25.5]]);
module.exports = {
  id: 'pig-nose',
  name: 'Pig Nose',
  emoji: '🐽',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['pig', 'snout', 'oink', 'nose', 'piggy'],
  tone: 'pink',
  body,
  shine: [28, 32, -35],
  draw(c) {
    const hole = (x, s) => `<path d="${a.spline([[x, 34], [x + s * 6, 38], [x + s * 6.5, 48], [x, 54], [x - s * 5, 48], [x - s * 4.5, 39]])}" fill="${c.linear('hole' + s, 'pink', [0, 0, 0, 1], 3, 2)}"/>`;
    return `<path d="${body}" fill="${a.custom(c, 'side', ['#F7A8B8', '#D2667F', '#A84462', '#5E1A2E'], 0.5, 0.2)}"/>
      <path d="${face}" fill="${a.custom(c, 'a', a.ROSE, 0.35, 0.2)}"/>
      ${hole(37, -1)}${hole(59, 1)}
      <ellipse cx="36" cy="50" rx="3.5" ry="1.5" fill="#FFE3E8" opacity=".5"/><ellipse cx="60" cy="50" rx="3.5" ry="1.5" fill="#FFE3E8" opacity=".5"/>`;
  },
};
