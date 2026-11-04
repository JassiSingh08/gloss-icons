// A puff of dust kicked up by someone leaving fast, speed lines trailing behind.
const h = require('../src/parts/heart');
const T = { s: 1.22, ox: 60, oy: 52, x: 58, y: 54 };
const body = h.xform('M40 67 C33 67 30 59 35.5 55 C34 45 42 39 50.5 41.5 C54 32 69 31 73 41 C81 39.5 87 46.5 85 54 C89 60 84 68 76 67 Z', T);
module.exports = {
  id: 'dashing-away',
  name: 'Dashing Away',
  emoji: '💨',
  group: 'Smileys & Emotion',
  subgroup: 'emotion',
  tags: ['dash', 'fast', 'speed', 'gone', 'puff', 'wind'],
  tone: 'white',
  body,
  shine: h.at([50, 46], T).concat(-30),
  shineSize: [6, 2.6],
  draw(c) {
    const lines = 'M12 44 L36 44 M8 55 L32 55 M14 66 L34 66';
    return `<path d="${lines}" stroke="#8C83AD" stroke-width="7.2" stroke-linecap="round" stroke-opacity=".8"/>
      <path d="${lines}" stroke="${c.linear('line', 'white', [0, 0, 1, 0], 2, 0)}" stroke-width="5" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'white', 0.35, 0.25)}"/>
      <path d="${h.xform('M60 58 C55 58 53 53 56 50.5 C59 48 63.5 50 63 53.5', T)}" stroke="#8C83AD" stroke-opacity=".65" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  },
};
