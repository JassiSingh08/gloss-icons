const sky = require('../src/parts/sky');

// Furled umbrella drawn upright, then tipped so the point leans right.
const TILT = 28;
const C = [48, 46];
const furl = 'M48 6 C51 20 60 42 61 55 Q61 63 54 63.5 L42 63.5 Q35 63 35 55 C36 42 45 20 48 6 Z';
const body = sky.turn(furl, TILT, ...C);
module.exports = {
  id: 'closed-umbrella',
  name: 'Closed Umbrella',
  emoji: '🌂',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['umbrella', 'closed', 'rain', 'accessory', 'dry'],
  tone: 'purple',
  body,
  shine: [52, 32, -55],
  shineSize: [4.5, 2],
  draw(c) {
    const cane = c.linear('cane', 'brown', [0, 0, 1, 0], 0, 2);
    const handle = 'M48 60 L48 77 Q48 86 40.5 86 Q33.5 86 33.5 79';
    return `<g transform="rotate(${TILT} ${C[0]} ${C[1]})">
        <path d="${handle}" stroke="#331805" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="${handle}" stroke="${cane}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="${furl}" fill="${c.radial('a', 'purple', 0.3, 0.3)}"/>
        <path d="M48 10 C47 28 43 46 41 62 M48 10 C50 28 54 46 56 62" stroke="#1A0040" stroke-opacity=".35" stroke-width="1.3" fill="none"/>
        <path d="M37.5 49 Q48 52 58.5 49 L59 54.5 Q48 57.5 37 54.5 Z" fill="${c.linear('strap', 'magenta', [0, 0, 1, 0], 0, 2)}" stroke="#3D0033" stroke-opacity=".5" stroke-width="1"/>
      </g>`;
  },
};
