const v = require('../src/parts/vehicle');
const body = 'M10 49 L68 49 Q82 48 91 42 L86 59 Q80 71 64 71 L17 71 Q10 71 10 64 Z';
module.exports = {
  id: 'speedboat',
  name: 'Speedboat',
  emoji: '🚤',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['boat', 'fast', 'lake', 'summer', 'waterski'],
  tone: 'red',
  body,
  shine: [17, 53, -3],
  shineSize: [5, 1.6],
  draw(c) {
    const hull = c.linear('a', 'red', [0, 0, 0, 1], 0, 2);
    const deck = c.linear('deck', 'white', [0, 0, 0, 1], 0, 2);
    const seat = c.linear('seat', 'brown', [0, 0, 0, 1], 1, 3);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="M48 50 L57 33 Q58 31.5 60 31.5 L64.5 31.5 L59 50 Z" fill="${v.glass(c)}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${v.rr(28, 40, 15, 10, [3.5, 3.5, 0, 0])}" fill="${seat}"/>
      <path d="M11 43 L12 49" stroke="#3A3E52" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${body}" fill="${hull}"/>
      <g clip-path="url(#${c.id('k')})"><path d="M0 40 L96 40 L96 58 L0 58 Z" fill="${deck}"/></g>
      <path d="M10.5 58 L87 58" stroke="#8A0006" stroke-opacity=".6" stroke-width="1.3"/>
      <path d="M2 56 Q6 52 10 58 M0 63 Q5 58 9 65" stroke="#C9ECFF" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      ${v.water(c, 71)}`;
  },
};
