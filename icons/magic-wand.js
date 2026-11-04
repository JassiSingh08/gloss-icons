const ball = require('../src/parts/ball');
const star = require('../src/parts/star');

const line = [[20, 82], [62, 34]];
const body = ball.band(line, 9.6);

module.exports = {
  id: 'magic-wand',
  name: 'Magic Wand',
  emoji: '🪄',
  group: 'Activities',
  subgroup: 'game',
  tags: ['magic', 'wand', 'wizard', 'spell', 'trick'],
  tone: 'black',
  body,
  shine: [36, 61, -48],
  shineSize: [7, 1.6],
  draw(c) {
    const tip = ball.band([[55.5, 41.4], [62, 34]], 9.6);
    const tail = ball.band([[20, 82], [26.5, 74.6]], 9.6);
    const white = c.linear('tip', 'white', [0, 0, 1, 1], 0, 2);
    return `<path d="${body}" fill="${c.linear('a', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${tip} ${tail}" fill="${white}"/>
      ${star.draw(c, 72, 24, 11.5, { palette: 'gold', name: 'st', rot: 12, edge: true })}
      ${star.sparkle(54, 18, 5, '#FFF3A6')}${star.sparkle(82, 44, 4.2, '#FFF3A6')}${star.sparkle(84, 12, 3, '#fff')}${star.sparkle(64, 48, 2.4, '#fff', 0.8)}`;
  },
};
