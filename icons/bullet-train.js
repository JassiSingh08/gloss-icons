const v = require('../src/parts/vehicle');
const body = 'M11 71 Q8 71 8 67 L8 36 Q8 29 15 29 L40 29 C56 29 66 38 76 50 C82 57 88 62 88 66 Q88 71 82 71 Z';
module.exports = {
  id: 'bullet-train',
  name: 'Bullet Train',
  emoji: '🚅',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['shinkansen', 'fast', 'japan', 'rail', 'speed'],
  tone: 'white',
  body,
  shine: [14, 34, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'white', [0, 0, 0.3, 1], 0, 2);
    const blue = c.linear('blue', 'blue', [0, 0, 0, 1], 1, 2);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="M2 44 L6 44 M0 52 L6 52 M3 60 L6 60" stroke="#8CD8FF" stroke-width="2" stroke-linecap="round" opacity=".7"/>
      <path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})">
        <path d="M0 55 L58 55 C68 55 78 60 92 70 L92 64 C78 57 70 51 58 51 L0 51 Z" fill="${blue}"/>
        <path d="M0 58.5 L60 58.5 C70 58.5 80 63 92 72" stroke="#0049A8" stroke-width="1.6" fill="none"/>
      </g>
      <path d="${v.rr(12, 37, 34, 8, 3)}" fill="${v.glass(c, 'dark')}"/>
      <path d="M21 37 L21 45 M30 37 L30 45 M39 37 L39 45" stroke="#F7F5FF" stroke-width="1.6"/>
      <path d="M49 35 C58 36 64 40 69 47 L51 47 Q49 47 49 45 Z" fill="${v.glass(c, 'dark')}"/>
      ${v.lamp(83, 64, 2.6, 1.8)}
      ${v.rail(5, 91)}
      ${v.bogie(c, 23, 78.5)}${v.bogie(c, 70, 78.5)}`;
  },
};
