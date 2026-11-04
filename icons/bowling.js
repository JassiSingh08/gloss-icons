const ball = require('../src/parts/ball');

const b = ball.make(57, 61, 23);
const pin = 'M32 11 C37 11 39.5 15 39.5 20 C39.5 25 36.5 28 36 32 C36 37 43 46 43.5 58 C44 70 39.5 78 38.5 84 L25.5 84 C24.5 78 20 70 20.5 58 C21 46 28 37 28 32 C27.5 28 24.5 25 24.5 20 C24.5 15 27 11 32 11 Z';
const pin2 = require('../src/parts/ball').turn(pin, { s: 0.82, x: 54, y: 41, ox: 32, oy: 47 });

module.exports = {
  id: 'bowling',
  name: 'Bowling',
  emoji: '🎳',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['bowling', 'strike', 'pins', 'alley', 'league'],
  tone: 'navy',
  body: b.body,
  shine: [47, 49, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const white = c.radial('pin', 'white', 0.3, 0.2);
    const red = c.ramp('red')[1];
    const stripes = (dy, s = 1) => `<path d="M${28.4 + dy * 0} 30.5 L${35.6} 30.5 M28.2 34.5 L35.8 34.5" stroke="${red}" stroke-width="${2.2 * s}"/>`;
    const holes = [[-0.5, -0.55], [-0.12, -0.72], [-0.36, -0.2]].map(([x, y]) => {
      const p = ball.norm([x, y, Math.sqrt(Math.max(0.05, 1 - x * x - y * y))]);
      return b.poly(ball.ring(p, 0.985, 24));
    }).join(' ');
    return `<path d="${pin2}" fill="${white}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.1"/>
      <g transform="translate(54 41) scale(.82) translate(-32 -47)">${stripes(0)}</g>
      <path d="${pin}" fill="${white}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.1"/>
      ${stripes(0)}
      <ellipse cx="29.5" cy="17" rx="2.6" ry="1.4" fill="#fff" transform="rotate(-50 29.5 17)"/>
      <path d="${b.body}" fill="${b.fill(c, 'a', 'navy')}"/>
      <path d="${holes}" fill="#080C3D"/>`;
  },
};
