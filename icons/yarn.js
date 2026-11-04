const ball = require('../src/parts/ball');

const b = ball.make(48, 52, 30, { x: 15, y: -20, z: 0 });

module.exports = {
  id: 'yarn',
  name: 'Yarn',
  emoji: '🧶',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['yarn', 'wool', 'knitting', 'crochet', 'cosy'],
  tone: 'magenta',
  body: b.body,
  shine: [35, 34, -40],
  draw(c) {
    // Bands of strands wound round different axes, each a fan of nearby great circles.
    const wraps = [[[1, 0.3, 0.2], 0], [[0.2, 1, -0.3], 0], [[-0.6, 0.5, 0.6], 0], [[0.7, -0.4, 0.6], 0]];
    let d = '';
    for (const [axis] of wraps) {
      for (const h of [-0.24, -0.12, 0, 0.12, 0.24]) d += b.line(ball.ring(axis, h, 40)) + ' ';
    }
    return `${require('../src/parts/glyph').tube(c, 'M26 22 L74 82 M70 20 L22 80', { width: 3, palette: 'brown', name: 'kn' })}
      <path d="${b.body}" fill="${b.fill(c, 'a', 'magenta')}"/>
      <g ${b.clip(c)}>
        <path d="${d}" fill="none" stroke="#3D0033" stroke-opacity=".35" stroke-width="1.5"/>
        <path d="${d}" fill="none" stroke="#FF9BEA" stroke-opacity=".35" stroke-width=".8" transform="translate(-.6 -.7)"/>
        ${b.shade(c, 0.3)}
      </g>
      <path d="M30 76 C24 82 16 78 12 84" fill="none" stroke="#E21FC4" stroke-width="2.6" stroke-linecap="round"/>`;
  },
};
