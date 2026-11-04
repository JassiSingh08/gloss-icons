const m = require('../src/parts/metal');
const body = 'M33 32 Q33 23 48 23 Q63 23 63 32 L63 79 Q63 84 58 84 L38 84 Q33 84 33 79 Z';
module.exports = {
  id: 'fire-extinguisher',
  name: 'Fire Extinguisher',
  emoji: '🧯',
  group: 'Objects',
  subgroup: 'household',
  tags: ['fire extinguisher', 'safety', 'emergency', 'fire', 'put out'],
  tone: 'red',
  body,
  shine: [39, 32, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const tank = c.linear('a', 'red', [0, 0, 1, 0], 0, 2);
    const valve = m.band(c, 'v', 'steel', [42, 0], [56, 0]);
    const lever = m.band(c, 'l', 'steel', [0, 9], [0, 15]);
    const label = c.linear('w', 'white', [0, 0, 0, 1], 0, 1);
    return `${m.tube(c, 'M43 18 C30 16 22 24 22 36 L22 52', { width: 5, palette: 'black', name: 'h' })}
      ${m.part(m.round([[18.5, 50], [25.5, 50], [24.5, 60], [19.5, 60]], 1.5), c.linear('n', 'black', [0, 0, 1, 0], 0, 2), 'black')}
      ${m.part(m.round([[42, 13], [54, 13], [55, 24], [41, 24]], 1.5), valve, 'steel')}
      ${m.part(m.round([[36, 9], [64, 12], [63.5, 15], [36, 13]], 1.5), lever, 'steel')}
      <path d="${body}" fill="${tank}"/>
      ${m.part(m.round([[33, 46], [63, 46], [63, 64], [33, 64]], 0.5), label, 'white')}
      <path d="M48 50 C52 54 54 57 53 60 Q48 63 43 60 C42 57 44 55 46 53 C47 55 48 55 48 50 Z" fill="${c.radial('f', 'orange', 0.5, 0.6)}"/>
      <path d="M33 77 L63 77" stroke="#3D0003" stroke-opacity=".3" stroke-width="1.3"/>`;
  },
};
