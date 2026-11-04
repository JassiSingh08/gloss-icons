const B = require('../src/parts/building');

module.exports = {
  id: 'wedding',
  name: 'Wedding',
  emoji: '💒',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['marriage', 'chapel', 'love', 'romance', 'bride'],
  tone: 'white',
  body: B.CHAPEL,
  shine: [17.5, 33, -58],
  shineSize: [5, 2],
  draw(c) {
    const heart = c.radial('heart', 'red', 0.35, 0.25);
    const h = (x, y, s) => `M${x} ${y + 3.2 * s} C${x - 2.2 * s} ${y + 1.6 * s} ${x - 4 * s} ${y + 0.2 * s} ${x - 4 * s} ${y - 1.6 * s} C${x - 4 * s} ${y - 3.4 * s} ${x - 1.6 * s} ${y - 4 * s} ${x} ${y - 2 * s} C${x + 1.6 * s} ${y - 4 * s} ${x + 4 * s} ${y - 3.4 * s} ${x + 4 * s} ${y - 1.6 * s} C${x + 4 * s} ${y + 0.2 * s} ${x + 2.2 * s} ${y + 1.6 * s} ${x} ${y + 3.2 * s} Z`;
    const finial = `<path d="M25 14 L25 19" stroke="#C98500" stroke-width="1.6"/><path d="${h(25, 11, 1.25)}" fill="${heart}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1"/>`;
    const rose = `<path d="${h(25, 51.5, 1.5)}" fill="${heart}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>`;
    return B.chapel(c, { wall: c.linear('a', 'white', [0, 0, 1, 1], 0, 2), roof: c.radial('roof', 'pink', 0.35, 0.2), finial, rose });
  },
};
