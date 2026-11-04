const v = require('../src/parts/vehicle');
const body = 'M18 23 L74 23 C84 23 90 32 90 40 C90 48 85 54 78 54 L18 54 C10 54 6 48 6 39 C6 30 10 23 18 23 Z';
module.exports = {
  id: 'monorail',
  name: 'Monorail',
  emoji: '🚝',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['elevated', 'theme park', 'airport', 'rail', 'future'],
  tone: 'sky',
  body,
  shine: [14, 30, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'sky', [0, 0, 0.3, 1], 0, 2);
    const beam = c.linear('beam', 'grey', [0, 0, 0, 1], 0, 2);
    const pillar = c.linear('pillar', 'grey', [0, 0, 1, 0], 1, 3);
    const navy = c.linear('stripe', 'navy', [0, 0, 1, 0], 1, 2);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="M41 62 L55 62 L57 84 L39 84 Z" fill="${pillar}" stroke="#2E2E3A" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="${v.rr(4, 52, 88, 10, 2.5)}" fill="${beam}" stroke="#2E2E3A" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="0" y="44" width="96" height="4.5" fill="${navy}"/></g>
      ${[14, 27, 40, 53].map((x) => v.win(c, x, 30, 10, 10, 2, 'dark')).join('')}
      <path d="M68 29 L76 29 C82 29 86 33 87.5 39 L68 39 Z" fill="${v.glass(c, 'dark')}"/>
      <path d="M65 28 L65 51" stroke="#0A3A6B" stroke-opacity=".4" stroke-width="1.3"/>
      ${v.lamp(86.5, 47, 1.8, 1.8)}`;
  },
};
