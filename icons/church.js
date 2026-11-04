const B = require('../src/parts/building');

module.exports = {
  id: 'church',
  name: 'Church',
  emoji: '⛪',
  group: 'Travel & Places',
  subgroup: 'place-religious',
  tags: ['christian', 'chapel', 'worship', 'cross', 'sunday'],
  tone: 'cream',
  body: B.CHAPEL,
  shine: [17.5, 33, -58],
  shineSize: [5, 2],
  draw(c) {
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const finial = `<path d="M23.6 6.5 L26.4 6.5 L26.4 10 L29.6 10 L29.6 12.8 L26.4 12.8 L26.4 19 L23.6 19 L23.6 12.8 L20.4 12.8 L20.4 10 L23.6 10 Z" fill="${gold}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>`;
    const rose = `<circle cx="25" cy="51" r="5" fill="${B.glow(c)}" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.2"/><path d="M25 46 L25 56 M20 51 L30 51" stroke="#E0B472" stroke-width="1.4"/>`;
    return B.chapel(c, { wall: B.wall(c), roof: B.roof(c), finial, rose });
  },
};
