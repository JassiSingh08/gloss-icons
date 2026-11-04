const v = require('../src/parts/vehicle');
const body = v.rr(9, 26, 78, 46, [9, 9, 3, 3]);
module.exports = {
  id: 'railway-car',
  name: 'Railway Car',
  emoji: '🚃',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['carriage', 'train', 'rail', 'commute', 'journey'],
  tone: 'gold',
  body,
  shine: [16, 31, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'gold', [0, 0, 0.3, 1], 0, 2);
    const roof = c.linear('roof', 'brown', [0, 0, 0, 1], 1, 3);
    const r = c.ramp('gold');
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const windows = [20, 33, 46, 59].map((x) => v.win(c, x, 37, 10, 12, 2)).join('');
    return `<path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="8" y="25" width="80" height="6.5" fill="${roof}"/><rect x="8" y="56" width="80" height="5" fill="#6E3A14"/></g>
      <path d="M12 35 L18 35 L18 68 L12 68 Z M78 35 L84 35 L84 68 L78 68 Z" fill="${r[3]}" opacity=".3"/>
      ${v.win(c, 12.5, 37, 5, 12, 1.5)}${v.win(c, 78.5, 37, 5, 12, 1.5)}${windows}
      <path d="M9.5 66 L86.5 66" stroke="${r[3]}" stroke-opacity=".45" stroke-width="1.3"/>
      ${v.rail(6, 90)}
      ${v.bogie(c, 25, 78.5)}${v.bogie(c, 71, 78.5)}`;
  },
};
