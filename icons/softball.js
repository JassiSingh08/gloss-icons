const ball = require('../src/parts/ball');

const b = ball.make(48, 51, 32, { x: 10, y: -6, z: -48 });
const pts = ball.seam(0.3, 160);

module.exports = {
  id: 'softball',
  name: 'Softball',
  emoji: '🥎',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['softball', 'ball', 'pitch', 'team', 'sport'],
  tone: 'yellow',
  body: b.body,
  shine: [34, 32, -40],
  draw(c) {
    return `<path d="${b.body}" fill="${b.fill(c, 'a', ['#FCFFB8', '#E6F23A', '#A8B800', '#4A5200'])}"/>
      <g ${b.clip(c)} fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="${b.line(pts)}" stroke="#E3120B" stroke-opacity=".35" stroke-width="1.2"/>
        <path d="${b.stitches(pts, 5, 0.1)}" stroke="#E3120B" stroke-width="1.8"/>
        ${b.shade(c, 0.3)}
      </g>`;
  },
};
