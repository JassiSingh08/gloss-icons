const v = require('../src/parts/vehicle');
const body = v.rr(9, 30, 78, 22, 4);
module.exports = {
  id: 'construction',
  name: 'Construction',
  emoji: '🚧',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['roadworks', 'barrier', 'work in progress', 'under construction', 'detour'],
  tone: 'orange',
  body,
  shine: [15, 34, -20],
  shineSize: [4.5, 1.8],
  draw(c) {
    const orange = c.linear('a', 'orange', [0, 0, 0.3, 1], 1, 2);
    const white = c.linear('w', 'white', [0, 0, 0, 1], 0, 2);
    const leg = c.linear('leg', 'white', [0, 0, 1, 0], 0, 3);
    const lampFill = c.radial('lamp', 'flame', 0.45, 0.4);
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    const stripes = Array.from({ length: 7 }, (_, i) => `M${4 + i * 14} 54 L${14 + i * 14} 28 L${21 + i * 14} 28 L${11 + i * 14} 54 Z`).join(' ');
    const legs = (x, s) => `<path d="M${x} 50 L${x + s * 8} 84" stroke="#3A3E52" stroke-width="5.4" stroke-linecap="round"/><path d="M${x} 50 L${x + s * 8} 84" stroke="${leg}" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M${x} 50 L${x - s * 6} 84" stroke="#3A3E52" stroke-width="5.4" stroke-linecap="round"/><path d="M${x} 50 L${x - s * 6} 84" stroke="${leg}" stroke-width="3.6" stroke-linecap="round"/>`;
    const lamp = (x) => `<rect x="${x - 2}" y="24" width="4" height="7" fill="#2E2E3D"/>
      <path d="M${x - 6} 25 L${x - 6} 19 Q${x - 6} 13 ${x} 13 Q${x + 6} 13 ${x + 6} 19 L${x + 6} 25 Z" fill="${lampFill}" stroke="#B85F00" stroke-opacity=".7" stroke-width="1.2"/>
      <path d="M${x - 6} 21 L${x + 6} 21" stroke="#E02A00" stroke-opacity=".35" stroke-width="1"/>`;
    return `${legs(22, -1)}${legs(74, 1)}
      ${lamp(20)}${lamp(76)}
      <path d="${body}" fill="${white}"/>
      <g clip-path="url(#${c.id('k')})"><path d="${stripes}" fill="${orange}"/></g>
      <path d="${v.rr(14, 62, 68, 9, 2.5)}" fill="${white}" stroke="#6B0F00" stroke-opacity=".45" stroke-width="1.2"/>`;
  },
};
