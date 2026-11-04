const g = require('../src/parts/garment');

const body = 'M35 14 L27 17 Q19.5 20 18 27 L12 60 Q11.5 63 14.5 63.6 L20.5 64.6 Q23.5 65 24 62 L26 46 L24 80 Q23.8 83 27 83 L69 83 Q72.2 83 72 80 L70 46 L72 62 Q72.5 65 75.5 64.6 L81.5 63.6 Q84.5 63 84 60 L78 27 Q76.5 20 69 17 L61 14 Q48 20 35 14 Z';

module.exports = {
  id: 'coat',
  name: 'Coat',
  emoji: '🧥',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['coat', 'winter', 'jacket', 'trench', 'cold'],
  tone: 'brown',
  body,
  shine: [22, 30, -70],
  shineSize: [6, 2.2],
  draw(c) {
    const cloth = c.radial('a', 'brown', 0.3, 0.2);
    const lapel = c.linear('lapel', 'brown', [0, 0, 1, 1], 1, 3);
    const belt = c.linear('belt', 'brown', [0, 0, 0, 1], 2, 3);
    const buckle = c.linear('buckle', 'gold', [0, 0, 0, 1], 0, 2);
    const b = c.ramp('brown');
    const btn = (x, y) => `<circle cx="${x}" cy="${y}" r="2" fill="${b[3]}" opacity=".85"/><circle cx="${x - 0.5}" cy="${y - 0.6}" r=".7" fill="${b[0]}" opacity=".7"/>`;
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M35 14 Q48 20 61 14 L48 40 Z" fill="${b[3]}" opacity=".8"/>
      <path d="M35 14 L29 31 L35 33 L48 48 L44 36 Z M61 14 L67 31 L61 33 L48 48 L52 36 Z" fill="${lapel}" stroke="${b[3]}" stroke-opacity=".6" stroke-width="1" stroke-linejoin="round"/>
      ${g.fold('M26 46 L27 30 M70 46 L69 30', b[3], 0.5, 1.4)}
      ${g.fold('M48 48 L52 60 L54 82.5', b[3], 0.55, 1.3)}
      <path d="M25.3 58 Q48 61 70.7 58 L70.9 64 Q48 67 25.1 64 Z" fill="${belt}"/>
      <rect x="43.5" y="57.5" width="9" height="8" rx="1.5" fill="none" stroke="${buckle}" stroke-width="2"/>
      ${btn(42, 52)}${btn(56, 52)}${btn(43, 72)}${btn(57, 72)}
      ${g.stitch('M25 79.5 L71 79.5', b[0], 0.35)}`;
  },
};
