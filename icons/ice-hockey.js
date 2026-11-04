const ball = require('../src/parts/ball');

const line = ball.curve([[74, 9], [66, 30], [54, 54], [44, 72], [40, 79], [36, 81], [30, 81], [24, 81], [18, 81], [13, 80]], 14);
const body = ball.band(line, (t) => (t < 0.6 ? 7.4 : 7.4 + Math.min(1, (t - 0.6) * 5) * 3.6));

module.exports = {
  id: 'ice-hockey',
  name: 'Ice Hockey',
  emoji: '🏒',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['hockey', 'puck', 'stick', 'ice', 'nhl'],
  tone: 'red',
  body,
  shine: [61, 36, -62],
  shineSize: [5, 1.6],
  draw(c) {
    const grip = ball.band(line.slice(0, 6), 8);
    const tape = ball.band(line.slice(-6), 11.6);
    return `<path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${grip}" fill="${c.linear('grip', 'black', [0, 0, 1, 0], 0, 2)}"/>
      <path d="${tape}" fill="${c.linear('tape', 'white', [0, 0, 0, 1], 0, 2)}"/>
      <path d="M17 76.5 L17 85.5 M21 76.5 L21 85.5" stroke="#8C83AD" stroke-width=".9"/>
      <path d="M58 77 L58 81.5 A13 4.6 0 0 0 84 81.5 L84 77 Z" fill="${c.linear('puck', 'black', [0, 0, 1, 0], 1, 3)}"/>
      <ellipse cx="71" cy="77" rx="13" ry="4.6" fill="${c.radial('pucktop', 'black', 0.3, 0.2)}"/>
      <path d="M60 76 A11 3.5 0 0 1 70 72.6" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1"/>`;
  },
};
