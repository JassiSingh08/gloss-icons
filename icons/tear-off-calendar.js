const p = require('../src/parts/paper');
const body = p.rr(16, 16, 64, 68, 8);
module.exports = {
  id: 'tear-off-calendar',
  name: 'Tear-off Calendar',
  emoji: '📆',
  group: 'Objects',
  subgroup: 'office',
  tags: ['calendar', 'day', 'date', 'today', 'schedule'],
  tone: 'white',
  body,
  shine: [23, 21, -40],
  draw(c) {
    const w = c.ramp('white');
    const ink = '#2E2E3D';
    const one = 'M33 47 L39 43 L39 70';
    const seven = 'M48 43 L62 43 L52 70';
    return `<path d="${body}" fill="${c.linear('a', 'white', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M16 24 Q16 16 24 16 L72 16 Q80 16 80 24 L80 33 L16 33 Z" fill="${c.linear('head', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M22 33 L74 33', '#001E4D', 1.2, 0.5)}
      <path d="${one} M${seven.slice(1)}" stroke="${ink}" stroke-width="6.5" ${p.ST}/>
      <path d="M58 84 L80 62 L80 76 Q80 84 72 84 Z" fill="${w[3]}" opacity=".25"/>
      <path d="M58 84 C62 78 70 72 80 62 C76 70 74 76 72 80 C68 82 62 84 58 84 Z" fill="${c.linear('curl', 'white', [1, 1, 0, 0], 0, 2)}" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
