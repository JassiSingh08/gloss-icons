const v = require('../src/parts/vehicle');
const body = 'M14 73 Q10 73 10 69 L10 22 Q10 18 14 18 L54 18 Q57 18 57 21 L57 35 L69 35 Q73 35 75 39 L81.5 49.5 Q85 51.5 85 56 L85 69 Q85 73 81 73 Z';
module.exports = {
  id: 'delivery-truck',
  name: 'Delivery Truck',
  emoji: '🚚',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['delivery', 'parcel', 'moving', 'shipping', 'van'],
  tone: 'red',
  body,
  shine: [16, 24, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const box = c.linear('box', 'white', [0, 0, 0.6, 1], 0, 2);
    const cab = c.radial('a', 'red', 0.3, 0.2);
    const w = c.ramp('white');
    const r = c.ramp('red');
    c.def(`<clipPath id="${c.id('t')}"><path d="${body}"/></clipPath>`);
    return `<path d="${body}" fill="${cab}"/>
      <g clip-path="url(#${c.id('t')})"><rect x="9" y="17" width="47.5" height="47" fill="${box}"/></g>
      <path d="M56.5 18 L56.5 64" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M22 34 L36 34 L36 29 L46 39.5 L36 50 L36 45 L22 45 Z" fill="#E3120B" stroke="#3D0003" stroke-opacity=".35" stroke-width="1"/>
      <path d="M61 39 L70 39 Q72 39 73.2 41 L79 50.5 L61 50.5 Z" fill="${v.glass(c)}"/>
      <rect x="62" y="55" width="5" height="2" rx="1" fill="${r[3]}" opacity=".5"/>
      <path d="M84.8 57 L81 57 Q79.5 57 79.5 58.5 L79.5 61 Q79.5 62.5 81 62.5 L84.8 62.5 Z" fill="#FFF7A8"/>
      <path d="M10 64 L85 64 L85 69 Q85 73 81 73 L14 73 Q10 73 10 69 Z" fill="#2E2E3D" opacity=".75"/>
      ${v.wheel(c, 25, 74.5)}${v.wheel(c, 70, 74.5)}`;
  },
};
