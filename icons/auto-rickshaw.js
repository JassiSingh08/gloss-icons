const v = require('../src/parts/vehicle');
const body = 'M16 72 Q12 72 12 68 L12 31 Q12 21 24 21 L61 21 Q71 21 75 30 L81.5 51 Q84 55 84 60 L84 68 Q84 72 80 72 Z';
module.exports = {
  id: 'auto-rickshaw',
  name: 'Auto Rickshaw',
  emoji: '🛺',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['tuk tuk', 'rickshaw', 'taxi', 'india', 'three wheeler'],
  tone: 'green',
  body,
  shine: [18, 26, -45],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'green', [0, 0, 0.4, 1], 0, 2);
    const roof = c.linear('roof', 'yellow', [0, 0, 0, 1], 0, 2);
    const seat = c.linear('seat', 'brown', [0, 0, 0, 1], 1, 3);
    const gr = c.ramp('green');
    c.def(`<clipPath id="${c.id('k')}"><path d="${body}"/></clipPath>`);
    return `<path d="${body}" fill="${paint}"/>
      <g clip-path="url(#${c.id('k')})"><rect x="0" y="0" width="96" height="30" fill="${roof}"/></g>
      <path d="M12.5 30 L74.5 30" stroke="#6B4A00" stroke-opacity=".6" stroke-width="1.4"/>
      <path d="${v.rr(17, 34, 33, 20, 3)}" fill="#14261A"/>
      <path d="${v.rr(19, 42, 14, 12, [3, 3, 0, 0])}" fill="${seat}"/>
      <path d="M54 34 L67 34 Q70 34 71 37 L76 53 L54 53 Z" fill="${v.glass(c)}"/>
      <path d="M52 30 L52 68" stroke="${gr[3]}" stroke-opacity=".45" stroke-width="1.3"/>
      <path d="M13 60 L84 60" stroke="#FFD82E" stroke-width="2.4"/>
      ${v.lamp(81.5, 54.5, 2.2, 2.6)}
      ${v.wheel(c, 27, 75.5, 8.5)}${v.wheel(c, 71, 75.5, 8.5)}`;
  },
};
