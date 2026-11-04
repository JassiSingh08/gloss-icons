const ball = require('../src/parts/ball');

const ski = (dx) => ball.band(ball.curve([[18 + dx, 84], [36 + dx, 62], [58 + dx, 34], [72 + dx, 17], [75 + dx, 13], [80 + dx, 12], [79 + dx, 16]], 16), 8.6);
const body = ski(6);
const back = ski(-6);

module.exports = {
  id: 'skis',
  name: 'Skis',
  emoji: '🎿',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['skiing', 'snow', 'slope', 'winter', 'alps'],
  tone: 'red',
  body,
  shine: [62, 32, -52],
  shineSize: [5, 1.6],
  draw(c) {
    const binding = (dx, dy) => `<path d="M${34 + dx} ${57 + dy} L${44 + dx} ${66 + dy} L${48 + dx} ${61 + dy} L${39 + dx} ${52 + dy} Z" fill="${c.linear('bind' + dx, 'black', [0, 0, 1, 1], 0, 2)}"/>`;
    const stripe = (dx, op) => `<path d="M${22 + dx} ${80} L${70 + dx} ${21}" stroke="#fff" stroke-opacity="${op}" stroke-width="1.4"/>`;
    return `<path d="${back}" fill="${c.linear('back', 'red', [0, 0, 1, 1], 1, 3)}"/>
      ${stripe(-6, 0.5)}${binding(-6, -2)}
      <path d="${body}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      ${stripe(6, 0.85)}${binding(6, 2)}`;
  },
};
