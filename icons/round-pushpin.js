const p = require('../src/parts/paper');
const body = p.ell(50, 33, 21, 21);
module.exports = {
  id: 'round-pushpin',
  name: 'Round Pushpin',
  emoji: '📍',
  group: 'Objects',
  subgroup: 'office',
  tags: ['pin', 'location', 'map', 'here', 'place'],
  tone: 'red',
  body,
  shine: [41, 23, -40],
  draw(c) {
    return `${p.tube(c, 'M50 52 L44 83', { width: 3.8, palette: 'silver', name: 'n' })}
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.28)}"/>
      <ellipse cx="57" cy="42" rx="7" ry="4" fill="#FF7A62" opacity=".35" transform="rotate(-35 57 42)"/>`;
  },
};
