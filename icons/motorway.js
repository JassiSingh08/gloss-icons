const v = require('../src/parts/vehicle');
const body = v.rr(10, 16, 76, 68, 13);
module.exports = {
  id: 'motorway',
  name: 'Motorway',
  emoji: '🛣️',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['highway', 'road', 'freeway', 'road trip', 'drive'],
  tone: 'green',
  body,
  shine: [19, 23, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const sky = c.linear('sky', 'sky', [0, 0, 0, 1], 0, 1);
    const grass = c.linear('a', 'green', [0, 0, 0, 1], 0, 2);
    const hill = c.linear('hill', 'teal', [0, 0, 0, 1], 1, 2);
    const road = c.linear('road', 'grey', [0, 0, 0, 1], 2, 3);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const dash = (y0, y1) => {
      const w = (y) => 0.5 + (y - 40) * 0.05;
      return `M${48 - w(y0)} ${y0} L${48 + w(y0)} ${y0} L${48 + w(y1)} ${y1} L${48 - w(y1)} ${y1} Z`;
    };
    return `<path d="${body}" fill="${grass}"/>
      <g clip-path="url(#${c.id('k')})">
        <rect x="0" y="0" width="96" height="41" fill="${sky}"/>
        <path d="M6 41 Q22 28 38 38 Q52 26 70 36 Q80 31 92 38 L92 42 L6 42 Z" fill="${hill}"/>
        <path d="M14 86 L45.5 40 L50.5 40 L82 86 Z" fill="${road}"/>
        <path d="M19 86 L46 40.5 M77 86 L50 40.5" stroke="#F7F5FF" stroke-width="1.6"/>
        <path d="${dash(42, 46)} ${dash(50, 56)} ${dash(62, 71)} ${dash(78, 90)}" fill="#FFD82E"/>
      </g>`;
  },
};
