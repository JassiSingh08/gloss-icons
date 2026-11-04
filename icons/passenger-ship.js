const v = require('../src/parts/vehicle');
const body = 'M7 56 L15 56 L15 48 L21 48 L21 40 L29 40 L29 32 L45 32 L47 19 Q47.4 17 49.4 17 L56 17 Q58 17 57.6 19 L56 32 L63 32 L63 40 L71 40 L71 48 L79 48 L79 56 L89 56 L83 72 L14 72 Z';
module.exports = {
  id: 'passenger-ship',
  name: 'Passenger Ship',
  emoji: '🛳️',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['cruise', 'liner', 'voyage', 'holiday', 'ocean'],
  tone: 'white',
  body,
  shine: [32, 35.5, -10],
  shineSize: [4, 1.5],
  draw(c) {
    const paint = c.linear('a', 'white', [0, 0, 0.4, 1], 0, 2);
    const hull = c.linear('hull', 'navy', [0, 0, 0, 1], 1, 3);
    const funnel = c.linear('funnel', 'red', [0, 0, 1, 0], 0, 2);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const row = (x1, x2, y, s = 4) => Array.from({ length: Math.floor((x2 - x1) / s) + 1 }, (_, i) => `<rect x="${x1 + i * s}" y="${y}" width="2.4" height="2.6" rx=".8" fill="#1A238A"/>`).join('');
    return `<path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})">
        <path d="M44 16 L60 16 L57 33 L44 33 Z" fill="${funnel}"/>
        <rect x="40" y="16" width="22" height="6" fill="#141420"/>
        <rect x="0" y="61" width="96" height="12" fill="${hull}"/>
        <rect x="0" y="58" width="96" height="3" fill="#E3120B"/>
      </g>
      ${row(32, 58, 35.5)}${row(24, 66, 43.5)}${row(18, 74, 51.5)}
      <path d="M15 56 L79 56" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.2"/>
      ${v.water(c, 72)}`;
  },
};
