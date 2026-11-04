const star = require('../src/parts/star');

const body = star.path(48, 50, 31);
module.exports = {
  id: 'glowing-star',
  name: 'Glowing Star',
  emoji: '🌟',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['star', 'glow', 'shine', 'sparkle', 'magic', 'excellent'],
  tone: 'gold',
  body,
  shine: [39, 41, -30],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('halo')}" cx="0.5" cy="0.5" r="0.5"><stop offset="0.35" stop-color="#FFE35C" stop-opacity=".75"/><stop offset="0.7" stop-color="#FFB000" stop-opacity=".25"/><stop offset="1" stop-color="#FF8C00" stop-opacity="0"/></radialGradient>`);
    return `<circle cx="48" cy="51" r="40" fill="url(#${c.id('halo')})"/>
      ${star.draw(c, 48, 50, 31, { name: 'a' })}
      ${star.sparkle(18, 22, 6.5)}${star.sparkle(80, 74, 5)}${star.sparkle(79, 18, 3.6, '#FFF3A6')}`;
  },
};
