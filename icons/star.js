const star = require('../src/parts/star');

const body = star.path(48, 51, 38);
module.exports = {
  id: 'star',
  name: 'Star',
  emoji: '⭐',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['star', 'favourite', 'rating', 'night', 'best'],
  tone: 'gold',
  body,
  shine: [37, 40, -30],
  shineSize: [6, 2.6],
  draw: (c) => star.draw(c, 48, 51, 38, { name: 'a' }),
};
