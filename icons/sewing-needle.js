const ball = require('../src/parts/ball');

const body = ball.band([[16, 84], [33, 66], [50, 47], [72, 23], [76, 18.6]], (t) => 1.2 + t * 7.4);
const thread = 'M71 22.5 C88 30 84 48 68 47 C52 46 48 62 60 67 C70 71 72 79 64 84';

module.exports = {
  id: 'sewing-needle',
  name: 'Sewing Needle',
  emoji: '🪡',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['needle', 'sewing', 'stitch', 'mend', 'craft'],
  tone: 'silver',
  body,
  shine: [61, 32, -48],
  shineSize: [5, 1.4],
  draw(c) {
    return `<path d="${thread}" fill="none" stroke="#0A3A6B" stroke-opacity=".6" stroke-width="4.4" stroke-linecap="round"/>
      <path d="${thread}" fill="none" stroke="${c.linear('t', 'sky', [0, 0, 1, 1], 1, 2)}" stroke-width="3" stroke-linecap="round"/>
      <path d="${body}" fill="${c.linear('a', 'silver', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M68.6 26 L74.4 19.8" stroke="#1E2A3D" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M71.6 22.8 C77 17 80 13 76 10" fill="none" stroke="#0A3A6B" stroke-opacity=".6" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M71.6 22.8 C77 17 80 13 76 10" fill="none" stroke="#5BC2FF" stroke-width="3" stroke-linecap="round"/>`;
  },
};
