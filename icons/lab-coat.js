const g = require('../src/parts/garment');

const body = 'M36 15 L28 17.5 Q20 20 18.5 27 L12 60 Q11.5 63 14.5 63.6 L20.5 64.6 Q23.5 65 24 62 L26 46 L26 80 Q26 83 29 83 L67 83 Q70 83 70 80 L70 46 L72 62 Q72.5 65 75.5 64.6 L81.5 63.6 Q84.5 63 84 60 L77.5 27 Q76 20 68 17.5 L60 15 Q48 21 36 15 Z';

module.exports = {
  id: 'lab-coat',
  name: 'Lab Coat',
  emoji: '🥼',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['lab coat', 'science', 'doctor', 'chemist', 'experiment'],
  tone: 'white',
  body,
  shine: [22, 30, -70],
  shineSize: [6, 2.2],
  draw(c) {
    const cloth = c.radial('a', 'white', 0.3, 0.2);
    const lapel = c.linear('lapel', 'white', [0, 0, 1, 1], 0, 2);
    const shirt = c.linear('shirt', 'sky', [0, 0, 0, 1], 0, 1);
    const w = c.ramp('white');
    const pen = c.linear('pen', 'blue', [0, 0, 1, 0], 0, 2);
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M36 15 Q48 21 60 15 L48 46 Z" fill="${shirt}"/>
      <path d="M36 15 L31.5 30 L36.5 31.5 L48 50 Z M60 15 L64.5 30 L59.5 31.5 L48 50 Z" fill="${lapel}" stroke="${w[3]}" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>
      ${g.fold('M48 50 L48 82.5', w[3], 0.5, 1.3)}
      ${g.fold('M26 46 L27 30 M70 46 L69 30', w[2], 0.8, 1.4)}
      ${g.fold('M31 66 L42 66 M54 66 L65 66', w[3], 0.45, 1.3)}
      <path d="M57 41 L67 41" stroke="${w[3]}" stroke-opacity=".45" stroke-width="1.3" stroke-linecap="round"/>
      <rect x="59.5" y="34" width="2.6" height="9" rx="1.2" fill="${pen}"/>
      <rect x="63.5" y="35.5" width="2.4" height="7.5" rx="1.1" fill="#E3120B"/>
      ${[56, 66, 76].map((y) => `<circle cx="51.5" cy="${y}" r="1.7" fill="${w[2]}" stroke="${w[3]}" stroke-opacity=".6" stroke-width=".8"/>`).join('')}`;
  },
};
