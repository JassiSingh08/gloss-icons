const ball = require('../src/parts/ball');

const b = ball.make(48, 51, 32, { x: 18, y: -24, z: -14 });
const seams = [
  ball.ring([1, 0, 0]),
  ball.ring([0, 1, 0]),
  ball.ring([1, 0, 0], 0.68),
  ball.ring([1, 0, 0], -0.68),
].map((p) => b.line(p)).join(' ');

module.exports = {
  id: 'basketball',
  name: 'Basketball',
  emoji: '🏀',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['basketball', 'hoops', 'ball', 'court', 'sport'],
  tone: 'orange',
  body: b.body,
  shine: [34, 32, -40],
  draw(c) {
    return `<path d="${b.body}" fill="${b.fill(c, 'a', ['#FFC58A', '#F57A12', '#B33F00', '#4A1500'])}"/>
      <g ${b.clip(c)}>
        <path d="${seams}" fill="none" stroke="#3A1200" stroke-width="2.2" stroke-linecap="round"/>
        ${b.shade(c, 0.3)}
      </g>`;
  },
};
