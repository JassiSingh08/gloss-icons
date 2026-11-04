const ball = require('../src/parts/ball');

const b = ball.make(48, 51, 32, { x: 20, y: -10, z: 30 });
const pts = ball.seam(0.28, 160);

module.exports = {
  id: 'tennis',
  name: 'Tennis',
  emoji: '🎾',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['tennis', 'ball', 'racket', 'serve', 'sport'],
  tone: 'lime',
  body: b.body,
  shine: [34, 32, -40],
  draw(c) {
    return `<path d="${b.body}" fill="${b.fill(c, 'a', ['#F6FFB0', '#CBEA1E', '#7FA300', '#2E3D00'])}"/>
      <g ${b.clip(c)} fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="${b.line(pts)}" stroke="#2E3D00" stroke-opacity=".25" stroke-width="6.2"/>
        <path d="${b.line(pts)}" stroke="#FFFFF2" stroke-width="4"/>
        ${b.shade(c, 0.32)}
      </g>`;
  },
};
