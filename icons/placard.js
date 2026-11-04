const m = require('../src/parts/metal');
const body = 'M18 12 L78 12 Q83 12 83 17 L83 51 Q83 56 78 56 L18 56 Q13 56 13 51 L13 17 Q13 12 18 12 Z';
module.exports = {
  id: 'placard',
  name: 'Placard',
  emoji: '🪧',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['placard', 'sign', 'protest', 'announcement', 'march'],
  tone: 'white',
  body,
  shine: [21, 18, -25],
  shineSize: [5.5, 2],
  draw(c) {
    const board = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const ink = '#1A238A';
    return `${m.part(m.round([[44.5, 52], [51.5, 52], [51.5, 85], [44.5, 85]], 1.5), m.cyl(c, 'p', 'wood', [48, 52], [48, 85], 7), 'wood')}
      <path d="${body}" fill="${board}"/>
      <path d="M23 25 L73 25 M23 34 L64 34 M23 43 L52 43" stroke="${ink}" stroke-opacity=".75" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M13 50 L83 50" stroke="#8C83AD" stroke-opacity=".35" stroke-width="1.2"/>`;
  },
};
