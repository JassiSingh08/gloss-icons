const b = require('../src/parts/button');

// A four-point star with concave sides, plus short diagonal rays tipped with dots.
const star = 'M48 17 Q51.5 43.5 78 47 Q51.5 50.5 48 77 Q44.5 50.5 18 47 Q44.5 43.5 48 17 Z';
let rays = '';
let dots = '';
for (const [sx, sy] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
  rays += `M${48 + sx * 8} ${47 + sy * 8} L${48 + sx * 16} ${47 + sy * 16} `;
  dots += `<circle cx="${48 + sx * 21.5}" cy="${47 + sy * 21.5}" r="3"/>`;
}
module.exports = {
  ...b.spec('green'),
  id: 'sparkle',
  name: 'Sparkle',
  emoji: '❇️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['sparkle', 'shine', 'new', 'star', 'clean'],
  draw(c) {
    const sh = c.ramp('green')[3];
    const art = (fill) => `<path d="${star}" fill="${fill}"/>
      <path d="${rays}" stroke="${fill}" stroke-width="4.4" stroke-linecap="round"/>
      <g fill="${fill}">${dots}</g>`;
    return b.face(c, 'green') +
      `<g opacity=".45" transform="translate(1.2 2)">${art(sh)}</g>${art('#fff')}`;
  },
};
