const L = require('../src/parts/leaf');
// A round leafy crown of clumps on a forked brown trunk.
const CROWN = [[28, 40, 14], [36, 24, 14], [52, 18, 15], [66, 28, 14], [70, 44, 13], [58, 54, 13], [38, 54, 13], [48, 38, 16], [22, 50, 9], [74, 52, 8]];
const body = L.blob(CROWN, [48, 38]);
module.exports = {
  id: 'deciduous-tree',
  name: 'Deciduous Tree',
  emoji: '🌳',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['tree', 'oak', 'park', 'shade', 'nature'],
  tone: 'green',
  body,
  shine: [24, 33, -50],
  draw(c) {
    const crown = c.radial('a', 'green', 0.32, 0.25);
    const bark = c.linear('bark', 'brown', [0, 0, 1, 0], 0, 2);
    const g = c.ramp('green');
    const arcs = [CROWN[0], CROWN[1], CROWN[2], CROWN[3], CROWN[7]].map(([x, y, r]) => `<path d="M${x - r * 0.75} ${y + r * 0.05} A${r * 0.78} ${r * 0.78} 0 0 1 ${x + r * 0.15} ${y - r * 0.72}"/>`).join('');
    return `<path d="M42 84.5 C44 76 45 68 44 60 L38 53 L41.5 51.5 L46.5 56 L48 49 L51.5 49.5 L51 57 L57 51 L59.5 53 L52.5 61 C52 69 53 77 56 84.5 Z" fill="${bark}" stroke="#331805" stroke-opacity=".55" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="${body}" fill="${crown}"/>
      <g fill="${g[3]}" opacity=".22"><path d="M30 62 C40 66 56 66 66 60 C62 66 54 68 48 68 C40 68 34 66 30 62 Z"/><path d="M60 40 C64 44 70 46 76 45 C72 50 64 50 60 46 Z"/><path d="M34 46 C38 50 44 52 50 51 C46 55 38 55 34 50 Z"/></g>
      <g stroke="${g[0]}" stroke-opacity=".45" stroke-width="1.4" fill="none" stroke-linecap="round">${arcs}</g>`;
  },
};
