const v = require('../src/parts/vehicle');
const body = 'M33 25 L63 25 L63 29 L60 29 L65 72 L31 72 L36 29 L33 29 Z';
module.exports = {
  id: 'lighthouse',
  name: 'Lighthouse',
  emoji: '🛙',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['coast', 'beacon', 'harbour', 'guide', 'sea'],
  tone: 'red',
  body,
  shine: [38, 34, -80],
  shineSize: [4, 1.6],
  draw(c) {
    const red = c.linear('a', 'red', [0, 0, 1, 0], 0, 2);
    const white = c.linear('w', 'white', [0, 0, 1, 0], 0, 2);
    const cap = c.radial('cap', 'red', 0.35, 0.3);
    const lamp = c.radial('lamp', 'flame', 0.5, 0.5);
    const rock = c.radial('rock', 'slate', 0.35, 0.25);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>
      <linearGradient id="${c.id('beam')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFE35C" stop-opacity=".75"/><stop offset="1" stop-color="#FFE35C" stop-opacity="0"/></linearGradient>
      <linearGradient id="${c.id('beam2')}" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#FFE35C" stop-opacity=".75"/><stop offset="1" stop-color="#FFE35C" stop-opacity="0"/></linearGradient>`);
    return `<path d="M58 17 L92 9 L92 27 Z" fill="url(#${c.id('beam')})"/>
      <path d="M38 17 L4 9 L4 27 Z" fill="url(#${c.id('beam2')})"/>
      <path d="M36 12 Q36 5 48 4 Q60 5 60 12 Z" fill="${cap}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="48" cy="3.5" r="1.6" fill="#3D0003"/>
      <rect x="37" y="12" width="22" height="13" rx="1" fill="${lamp}" stroke="#3A3E52" stroke-width="1.6"/>
      <path d="M44.5 12 L44.5 25 M51.5 12 L51.5 25" stroke="#3A3E52" stroke-width="1.4"/>
      <path d="${body}" fill="${red}"/>
      <g clip-path="url(#${c.id('k')})"><path d="M0 37 L96 37 L96 47 L0 47 Z M0 57 L96 57 L96 66 L0 66 Z" fill="${white}"/></g>
      <path d="M33 29 L63 29" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.2"/>
      ${v.win(c, 45, 49, 6, 7, 3, 'dark')}
      <path d="M14 76 Q16 66 26 67 Q32 63 40 68 L58 68 Q64 63 72 67 Q82 66 83 76 Z" fill="${rock}" stroke="#1E2A3D" stroke-opacity=".5" stroke-width="1.2"/>
      ${v.water(c, 75)}`;
  },
};
