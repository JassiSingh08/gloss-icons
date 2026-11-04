const ball = require('../src/parts/ball');

const line = ball.curve([[72, 9], [62, 30], [50, 52], [40, 70], [35, 79], [28, 85], [20, 80], [16, 77], [17, 71], [22, 70]], 14);
const body = ball.band(line, (t) => (t < 0.55 ? 7.4 : 7.4 + (t - 0.55) * 7));
const grip = ball.band(line.slice(0, 7), 8);
const b = ball.make(64, 77, 7);

module.exports = {
  id: 'field-hockey',
  name: 'Field Hockey',
  emoji: '🏑',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['hockey', 'stick', 'field', 'team', 'sport'],
  tone: 'blue',
  body,
  shine: [57, 36, -62],
  shineSize: [5, 1.6],
  draw(c) {
    return `<path d="${body}" fill="${c.linear('a', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${grip}" fill="${c.linear('grip', 'black', [0, 0, 1, 0], 0, 2)}"/>
      <path d="M66 18 L71.5 20.5 M64.5 22 L70 24.5 M63 26 L68.5 28.5" stroke="#6E6E85" stroke-width="1"/>
      <path d="M29 84 C24 84 20 81 18.6 77" fill="none" stroke="#FFF7A8" stroke-width="1.6" stroke-linecap="round"/>
      <path d="${b.body}" fill="${b.fill(c, 'ball', 'white')}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <ellipse cx="61.6" cy="74.2" rx="2" ry="1.1" fill="#fff" transform="rotate(-40 61.6 74.2)"/>`;
  },
};
