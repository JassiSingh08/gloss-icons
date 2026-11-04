const v = require('../src/parts/vehicle');
const body = v.rr(14, 34, 68, 38, [9, 9, 12, 12]);
module.exports = {
  id: 'suspension-railway',
  name: 'Suspension Railway',
  emoji: '🚟',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['hanging train', 'elevated', 'monorail', 'city', 'rail'],
  tone: 'teal',
  body,
  shine: [20, 39, -35],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'teal', [0, 0, 0.4, 1], 0, 2);
    const beam = c.linear('beam', 'slate', [0, 0, 0, 1], 0, 2);
    const arm = c.linear('arm', 'grey', [0, 0, 1, 0], 1, 3);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const truss = Array.from({ length: 9 }, (_, i) => `M${6 + i * 10} 20 L${11 + i * 10} 12 L${16 + i * 10} 20`).join(' ');
    return `<path d="${v.rr(4, 10, 88, 12, 2)}" fill="${beam}" stroke="#1E2A3D" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${truss}" stroke="#4D5F7A" stroke-width="1.6" fill="none"/>
      ${v.wheel(c, 36, 22, 3.8)}${v.wheel(c, 60, 22, 3.8)}
      <path d="M33 24 L37 34 L59 34 L63 24" fill="none" stroke="#3A3E52" stroke-width="5.4" stroke-linejoin="round"/>
      <path d="M33 24 L37 34 L59 34 L63 24" fill="none" stroke="${arm}" stroke-width="3.6" stroke-linejoin="round"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="0" y="58" width="96" height="4" fill="#F7F5FF" opacity=".9"/></g>
      ${[19, 33, 47, 61].map((x) => v.win(c, x, 41, 11, 12, 2)).join('')}
      <path d="M75 41 L77 41 Q81.5 41 81.5 46 L81.5 53 L75 53 Z" fill="${v.glass(c)}"/>
      ${v.lamp(78, 64, 2, 2)}`;
  },
};
