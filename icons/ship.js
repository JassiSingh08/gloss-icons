const v = require('../src/parts/vehicle');
const body = 'M6 52 L20 52 L20 43 L72 43 L72 50 L91 47 L83 72 L14 72 Z';
const funnel = (x) => `M${x} 43 L${x + 2} 22 Q${x + 2.2} 20 ${x + 4.2} 20 L${x + 10} 20 Q${x + 12} 20 ${x + 11.8} 22 L${x + 10} 43 Z`;
module.exports = {
  id: 'ship',
  name: 'Ship',
  emoji: '🚢',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['ocean liner', 'voyage', 'steamship', 'sea', 'travel'],
  tone: 'navy',
  body,
  shine: [12, 55, -5],
  shineSize: [4, 1.5],
  draw(c) {
    const hull = c.linear('a', 'navy', [0, 0, 0, 1], 0, 3);
    const deck = c.linear('deck', 'white', [0, 0, 0, 1], 0, 2);
    const red = c.linear('red', 'red', [0, 0, 1, 0], 0, 2);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const f = [26, 41, 56].map((x) => `<path d="${funnel(x)}" fill="${red}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M${x + 1.6} 26 L${x + 2.2} 20 L${x + 11.8} 20 L${x + 11.4} 26 Z" fill="#141420"/>`).join('');
    const ports = Array.from({ length: 10 }, (_, i) => `<circle cx="${20 + i * 6}" cy="58" r="1.4" fill="#C9ECFF"/>`).join('');
    return `${f}
      <path d="${body}" fill="${hull}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="0" y="40" width="96" height="12.5" fill="${deck}"/><rect x="0" y="66" width="96" height="8" fill="#B4000A"/></g>
      ${Array.from({ length: 12 }, (_, i) => `<rect x="${23 + i * 4}" y="46" width="2.4" height="2.6" rx=".8" fill="#1A238A"/>`).join('')}
      ${ports}
      ${v.water(c, 72)}`;
  },
};
