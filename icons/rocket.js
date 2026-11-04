const v = require('../src/parts/vehicle');
const DEG = 45;
const AT = [50, 46];
const hull = 'M0 -37 C10 -27 13 -13 13 3 L13 19 Q13 23 9 23 L-9 23 Q-13 23 -13 19 L-13 3 C-13 -13 -10 -27 0 -37 Z';
module.exports = {
  id: 'rocket',
  name: 'Rocket',
  emoji: '🚀',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['launch', 'space', 'startup', 'blast off', 'ambition'],
  tone: 'white',
  body: v.place(hull, DEG, AT),
  shine: (() => { const [x, y] = v.point(-7, -10, DEG, AT); return [x, y, DEG - 80]; })(),
  shineSize: [6, 2],
  draw(c) {
    const paint = c.linear('a', 'white', [0, 0, 1, 0], 0, 3);
    const red = c.linear('red', 'red', [0, 0, 1, 0], 0, 2);
    const glassRing = c.linear('ring', 'silver', [0, 0, 1, 1], 0, 3);
    const flame = c.radial('flame', 'flame', 0.5, 0.15);
    const nozzle = c.linear('noz', 'grey', [0, 0, 1, 0], 1, 3);
    c.def(`<clipPath id="${c.id('k')}"><path d="${hull}"/></clipPath>`);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${DEG})">
        <path d="M-8 27 Q-11 40 0 52 Q11 40 8 27 Z" fill="${flame}" stroke="#FF8C00" stroke-opacity=".6" stroke-width="1"/>
        <path d="M-7 23 L7 23 L9 29 L-9 29 Z" fill="${nozzle}" stroke="#2E2E3A" stroke-opacity=".6" stroke-width="1"/>
        <path d="M-13 4 Q-24 12 -23 27 L-13 21 Z M13 4 Q24 12 23 27 L13 21 Z" fill="${red}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.2"/>
        <path d="${hull}" fill="${paint}"/>
        <g clip-path="url(#${c.id('k')})">
          <path d="M-20 -21 L20 -21 L20 -50 L-20 -50 Z" fill="${red}"/>
          <rect x="-20" y="14" width="40" height="4" fill="${red}"/>
        </g>
        <path d="M-2 18 L2 18 L2 31 L-2 31 Z" fill="${red}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1"/>
        <circle cx="0" cy="-6" r="7" fill="${glassRing}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
        <circle cx="0" cy="-6" r="4.6" fill="${v.glass(c, 'dark')}"/>
        <ellipse cx="-1.6" cy="-7.6" rx="1.8" ry="1.1" fill="#fff" opacity=".8"/>
      </g>`;
  },
};
