const v = require('../src/parts/vehicle');
const body = 'M10 67 Q6 67 6 63 L6 24 Q6 20 10 20 L62 20 Q65 20 65 23 L65 31 L75 31 Q79 31 81 35 L86.5 45.5 Q89 47.5 89 52 L89 69 Q89 73 85 73 L65 73 L65 67 Z';
module.exports = {
  id: 'articulated-lorry',
  name: 'Articulated Lorry',
  emoji: '🚛',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['truck', 'freight', 'semi', 'haulage', 'highway'],
  tone: 'blue',
  body,
  shine: [12, 26, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const cab = c.radial('a', 'blue', 0.3, 0.2);
    const box = c.linear('box', 'silver', [0, 0, 0.4, 1], 0, 2);
    const b = c.ramp('blue');
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const ribs = Array.from({ length: 8 }, (_, i) => `M${12 + i * 7} 22 L${12 + i * 7} 65`).join(' ');
    return `<path d="${body}" fill="${cab}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="0" y="0" width="64.5" height="68" fill="${box}"/></g>
      <path d="${ribs}" stroke="#3A3E52" stroke-opacity=".25" stroke-width="1.3"/>
      <path d="M64.5 20 L64.5 67" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.6"/>
      <path d="M69 35 L74.5 35 Q76.5 35 77.7 37.3 L83 48 L69 48 Z" fill="${v.glass(c)}"/>
      <path d="M88.8 56 L85 56 Q83.5 56 83.5 57.5 L83.5 60 Q83.5 61.5 85 61.5 L88.8 61.5 Z" fill="#FFF7A8"/>
      <path d="M65.5 66 L89 66" stroke="${b[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <rect x="6.5" y="63" width="58" height="4" fill="#3A3E52" opacity=".7"/>
      ${v.wheel(c, 15, 76, 8)}${v.wheel(c, 32, 76, 8)}${v.wheel(c, 59, 76, 8)}${v.wheel(c, 78, 76, 8)}`;
  },
};
