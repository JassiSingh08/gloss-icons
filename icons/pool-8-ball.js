const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const b = ball.make(48, 51, 32, { x: 0, y: 0, z: 0 });
const face = ball.norm([-0.22, -0.26, 0.94]);

module.exports = {
  id: 'pool-8-ball',
  name: 'Pool 8 Ball',
  emoji: '🎱',
  group: 'Activities',
  subgroup: 'game',
  tags: ['pool', 'billiards', 'eight ball', 'snooker', 'game'],
  tone: 'black',
  body: b.body,
  shine: [34, 32, -40],
  draw(c) {
    const [x, y] = b.at(face);
    const disc = b.poly(ball.ring(face, 0.86, 48));
    const eight = glyph.path('8', { x, y: y + 0.4, size: 12.5, weight: 2.6 });
    return `<path d="${b.body}" fill="${b.fill(c, 'a', 'black')}"/>
      <path d="${disc}" fill="${b.fill(c, 'disc', 'white', 0.5, 0.7)}"/>
      <path d="${eight.d}" fill="none" stroke="#141420" stroke-width="${eight.weight}" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
};
