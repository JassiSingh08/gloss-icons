const v = require('../src/parts/vehicle');
const g = require('../src/parts/glyph');
const body = v.rr(18, 9, 60, 46, 11);
module.exports = {
  id: 'metro',
  name: 'Metro',
  emoji: '🚇',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['subway', 'underground', 'tube', 'commute', 'city'],
  tone: 'blue',
  body,
  shine: [26, 16, -35],
  shineSize: [5.5, 2.4],
  draw(c) {
    const sign = c.linear('a', 'blue', [0, 0, 0.6, 1], 0, 2);
    const pole = c.linear('pole', 'silver', [0, 0, 1, 0], 0, 3);
    const foot = c.linear('foot', 'grey', [0, 0, 0, 1], 1, 3);
    return `<path d="M44.5 54 L51.5 54 L51.5 80 L44.5 80 Z" fill="${pole}" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${v.rr(36, 78, 24, 6, 2.5)}" fill="${foot}" stroke="#2E2E3A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${sign}"/>
      <path d="${v.rr(22.5, 13.5, 51, 37, 7.5)}" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>
      ${g.draw('M', { x: 48, y: 32, size: 25, color: '#fff', shadow: '#001E4D' })}`;
  },
};
