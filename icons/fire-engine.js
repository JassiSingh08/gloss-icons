const v = require('../src/parts/vehicle');
const body = 'M12 73 Q8 73 8 69 L8 45 Q8 41 12 41 L58 41 L58 32 Q58 28 62 28 L73 28 Q77 28 79 32 L84.5 44 Q87 46 87 50 L87 69 Q87 73 83 73 Z';
module.exports = {
  id: 'fire-engine',
  name: 'Fire Engine',
  emoji: '🚒',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['firefighter', 'emergency', 'rescue', 'ladder', 'siren'],
  tone: 'red',
  body,
  shine: [14, 45.5, -12],
  shineSize: [5, 2],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.3, 1], 0, 2);
    const metal = c.linear('metal', 'silver', [0, 0, 0, 1], 0, 2);
    const shutter = c.linear('shutter', 'silver', [0, 0, 0, 1], 1, 2);
    const dome = c.radial('dome', 'blue', 0.35, 0.3);
    const r = c.ramp('red');
    const rungs = Array.from({ length: 11 }, (_, i) => `M${10 + i * 5} 32 L${10 + i * 5} 37`).join(' ');
    return `<path d="M62 28 L62 24.5 Q62 21.5 65.5 21.5 Q69 21.5 69 24.5 L69 28 Z" fill="${dome}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1"/>
      <path d="M50 37 L50 41" stroke="#3A3E52" stroke-width="2.4"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${rungs}" stroke="${metal}" stroke-width="1.8"/>
      <path d="M7 32 L63 32 M7 37 L63 37" stroke="#3A3E52" stroke-width="3.6" stroke-linecap="round"/>
      <path d="M7 32 L63 32 M7 37 L63 37" stroke="${metal}" stroke-width="2.2" stroke-linecap="round"/>
      <path d="${v.rr(12, 46, 19, 15, 1.5)}" fill="${shutter}"/><path d="${v.rr(34, 46, 19, 15, 1.5)}" fill="${shutter}"/>
      <path d="M12 50 L31 50 M12 54 L31 54 M12 58 L31 58 M34 50 L53 50 M34 54 L53 54 M34 58 L53 58" stroke="#6E6E80" stroke-width="1"/>
      <path d="M62 33 L72 33 Q74.5 33 75.7 35.5 L80.5 46 L62 46 Z" fill="${v.glass(c)}"/>
      <path d="M57.5 41 L57.5 69" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1.3"/>
      <path d="M86.8 54 L83 54 Q81.5 54 81.5 55.5 L81.5 58 Q81.5 59.5 83 59.5 L86.8 59.5 Z" fill="#FFF7A8"/>
      <path d="M8 64 L87 64" stroke="#F7F5FF" stroke-opacity=".9" stroke-width="2.6"/>
      ${v.wheel(c, 22, 74.5, 9)}${v.wheel(c, 42, 74.5, 9)}${v.wheel(c, 73, 74.5, 9)}`;
  },
};
