const v = require('../src/parts/vehicle');
const body = 'M14 31 L16 25 Q17 23 19.5 23 L76.5 23 Q79 23 80 25 L82 31 Q86 31 86 35 L86 68 Q86 72 82 72 L14 72 Q10 72 10 68 L10 35 Q10 31 14 31 Z';
module.exports = {
  id: 'tram-car',
  name: 'Tram Car',
  emoji: '🚋',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['trolley', 'streetcar', 'heritage', 'city', 'vintage'],
  tone: 'red',
  body,
  shine: [15, 37, -60],
  shineSize: [4.5, 2],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.3, 1], 0, 2);
    const cream = c.linear('cream', 'cream', [0, 0, 0, 1], 0, 2);
    const roof = c.linear('roof', 'grey', [0, 0, 0, 1], 1, 3);
    const r = c.ramp('red');
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const arch = (x) => `<path d="M${x} 52 L${x} 41 Q${x} 36 ${x + 5} 36 Q${x + 10} 36 ${x + 10} 41 L${x + 10} 52 Z" fill="${v.glass(c)}"/>`;
    return `<path d="M5 9 L91 9" stroke="#2E2E3A" stroke-width="1.4"/>
      <path d="M32 23 L57 9.5" stroke="#3A3E52" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="57" cy="9.5" r="2" fill="#3A3E52"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})">
        <rect x="0" y="0" width="96" height="31" fill="${roof}"/>
        <rect x="0" y="31" width="96" height="25" fill="${cream}"/>
      </g>
      <path d="M10.5 31 L85.5 31" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.3"/>
      ${[15, 29, 43, 57, 71].map(arch).join('')}
      <path d="M10.5 56 L85.5 56" stroke="#8A5A1E" stroke-opacity=".7" stroke-width="1.6"/>
      <path d="M38 61 L58 61 M38 66 L58 66" stroke="#FFC21A" stroke-width="1.6" stroke-linecap="round"/>
      ${v.lamp(84, 61, 1.8, 2.4)}
      ${v.rail(6, 90)}
      ${v.bogie(c, 26, 78.5)}${v.bogie(c, 70, 78.5)}`;
  },
};
