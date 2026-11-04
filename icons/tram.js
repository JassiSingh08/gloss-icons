const v = require('../src/parts/vehicle');
const body = v.rr(25, 22, 46, 56, [13, 13, 5, 5]);
module.exports = {
  id: 'tram',
  name: 'Tram',
  emoji: '🚊',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['streetcar', 'city', 'trolley', 'commute', 'rail'],
  tone: 'orange',
  body,
  shine: [32, 28, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'orange', [0, 0, 0.5, 1], 1, 2);
    return `<path d="M8 9 L88 9" stroke="#2E2E3A" stroke-width="1.4"/>
      <path d="M40 22 L48 13 L56 22 M44 13 L52 13 M48 13 L48 9.5" stroke="#3A3E52" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
      <rect x="20" y="81" width="56" height="3.5" rx="1" fill="#4A3020"/>
      <path d="M33 84 L34 76 M63 84 L62 76" stroke="#8E93AD" stroke-width="3"/>
      <rect x="29" y="74" width="9" height="8" rx="2" fill="#1E1E2A"/><rect x="58" y="74" width="9" height="8" rx="2" fill="#1E1E2A"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${v.rr(30, 28, 36, 8, 2)}" fill="#141420"/>
      <path d="M33 32 L46 32" stroke="#FFF07A" stroke-width="2" stroke-linecap="round"/>
      <path d="${v.rr(30, 39, 36, 22, 3)}" fill="${v.glass(c)}"/>
      <path d="M25.5 64 L70.5 64 L70.5 67.5 L25.5 67.5 Z" fill="#F7F5FF" opacity=".9"/>
      ${v.lamp(32, 72, 3.2, 2.6)}${v.lamp(64, 72, 3.2, 2.6)}`;
  },
};
