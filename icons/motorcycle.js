const v = require('../src/parts/vehicle');
const g = require('../src/parts/glyph');
const body = 'M13 50 Q11.5 46 15 45.5 L39 45 Q42 38.5 49 37.5 L61 37 Q67 37 68.5 43 L67.5 49 Q65.5 53.5 59 53.5 L42 53.5 L40 56 L21 56 Q15 56 13 50 Z';
module.exports = {
  id: 'motorcycle',
  name: 'Motorcycle',
  emoji: '🏍️',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['motorbike', 'bike', 'ride', 'biker', 'road'],
  tone: 'red',
  body,
  shine: [50, 41, -12],
  shineSize: [5, 1.8],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.4, 1], 0, 2);
    const engine = c.linear('engine', 'black', [0, 0, 0, 1], 0, 2);
    const seat = c.linear('seat', 'black', [0, 0, 0, 1], 0, 3);
    return `${g.tube(c, 'M42 62 L22 72.5', { width: 4, palette: 'black', name: 'arm' })}
      ${g.tube(c, 'M66 38 L74 72.5', { width: 4, palette: 'silver', name: 'fork' })}
      <path d="M62 31 L66 37 L71 33" stroke="#2E2E3D" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M38 53 L58 53 L60 63 Q60 67 56 67 L42 67 Q38 67 38 63 Z" fill="${engine}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M41 57 L57 57 M41 61 L57 61" stroke="#8E93AD" stroke-width="1.4"/>
      ${g.tube(c, 'M46 67 L32 69 L12 66', { width: 3.6, palette: 'silver', name: 'pipe' })}
      <path d="${body}" fill="${paint}"/>
      <path d="M15 45.6 L39 45 Q40 42 41.5 40.5 L26 41 Q19 41.5 15 45.6 Z" fill="${seat}"/>
      <path d="M61 53.5 Q66 52 67.5 49" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.2" fill="none"/>
      ${v.lamp(70.5, 41, 3.2, 3.6)}
      ${v.wheel(c, 22, 72.5, 11.5)}${v.wheel(c, 74, 72.5, 11.5)}
      <path d="M61.5 68 A13.5 13.5 0 0 1 84 63" stroke="#8A0006" stroke-width="5.2" fill="none" stroke-linecap="round"/>
      <path d="M61.5 68 A13.5 13.5 0 0 1 84 63" stroke="${paint}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;
  },
};
