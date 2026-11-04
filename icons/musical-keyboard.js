const d = require('../src/parts/device');

const body = 'M24 24 L72 24 Q75 24 76 27 L85 63 L85 71 Q85 76 80 76 L16 76 Q11 76 11 71 L11 63 L20 27 Q21 24 24 24 Z';
const WHITE = 10;

module.exports = {
  id: 'musical-keyboard',
  name: 'Musical Keyboard',
  emoji: '🎹',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['piano', 'keyboard', 'keys', 'synth', 'music'],
  tone: 'purple',
  body,
  shine: [21, 33, -75],
  shineSize: [4.5, 1.8],
  draw(c) {
    const shell = c.linear('a', 'purple', [0, 0, 1, 1], 0, 2);
    const edge = c.linear('edge', 'purple', [0, 0, 0, 1], 2, 3);
    const ivory = c.linear('ivory', 'white', [0, 0, 0, 1], 0, 2);
    const ebony = c.linear('ebony', 'black', [0, 0, 0, 1], 0, 2);
    const knob = c.radial('knob', 'silver', 0.35, 0.3);
    const map = d.quad([22.4, 36], [73.6, 36], [83, 63], [13, 63]);
    const panel = d.quad([23.2, 27], [72.8, 27], [74, 33], [22, 33]);
    let whites = '';
    for (let k = 0; k < WHITE; k++) whites += `${d.cell(map, k / WHITE, 0, (k + 1) / WHITE, 1, 0.006, 0.01)} `;
    let blacks = '';
    for (let k = 0; k < WHITE - 1; k++) if ([0, 1, 3, 4, 5].includes(k % 7)) blacks += `${d.cell(map, (k + 0.68) / WHITE, 0, (k + 1.32) / WHITE, 0.6)} `;
    const [sx, sy] = panel(0.06, 0.15);
    return `<path d="${body}" fill="${shell}"/>
      <path d="M11 63 L85 63 L85 71 Q85 76 80 76 L16 76 Q11 76 11 71 Z" fill="${edge}"/>
      <path d="${d.cell(map, 0, 0, 1, 1)}" fill="#1A0040"/>
      <path d="${whites}" fill="${ivory}"/>
      <path d="${blacks}" fill="${ebony}"/>
      <rect x="${sx}" y="${sy}" width="14" height="4.6" rx="1.2" fill="#12002E"/>
      <path d="M${sx + 2} ${sy + 2.3} L${sx + 9} ${sy + 2.3}" stroke="#9BF5E6" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="${panel(0.55, 0.5)[0]}" cy="${panel(0.55, 0.5)[1]}" r="2.6" fill="${knob}"/>
      <circle cx="${panel(0.67, 0.5)[0]}" cy="${panel(0.67, 0.5)[1]}" r="2.6" fill="${knob}"/>
      <circle cx="${panel(0.8, 0.5)[0]}" cy="${panel(0.8, 0.5)[1]}" r="1.8" fill="#FF8C00"/>
      <circle cx="${panel(0.9, 0.5)[0]}" cy="${panel(0.9, 0.5)[1]}" r="1.8" fill="#14C2A3"/>`;
  },
};
