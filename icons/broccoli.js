const L = require('../src/parts/leaf');
// A cloud of bumpy florets on a thick pale stalk.
const F = [
  [27, 46, 12], [32, 31, 12], [46, 23, 13], [62, 27, 12.5], [71, 42, 12], [62, 52, 11], [44, 50, 12], [48, 37, 12],
];
const body = L.blob(F, [48, 38]);
module.exports = {
  id: 'broccoli',
  name: 'Broccoli',
  emoji: '🥦',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['broccoli', 'vegetable', 'green', 'healthy', 'greens'],
  tone: 'green',
  body,
  shine: [23, 38, -50],
  draw(c) {
    c.def(`<linearGradient id="${c.id('stalk')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#E8FFC0"/><stop offset=".55" stop-color="#9CD860"/><stop offset="1" stop-color="#4E8E22"/></linearGradient>`);
    const head = c.radial('a', 'green', 0.32, 0.25);
    const g = c.ramp('green');
    const florets = F.map(([x, y, r]) => `<path d="${L.circle(x, y, r)}" fill="${head}" stroke="${g[3]}" stroke-opacity=".45" stroke-width="1.1"/>`).join('');
    const bumps = F.map(([x, y, r]) => `<circle cx="${x - r * 0.3}" cy="${y - r * 0.2}" r="${r * 0.18}"/><circle cx="${x + r * 0.25}" cy="${y + r * 0.1}" r="${r * 0.16}"/><circle cx="${x - r * 0.1}" cy="${y + r * 0.42}" r="${r * 0.14}"/>`).join('');
    return `<path d="M40 56 C42 64 41 74 38 82 C42 84.5 54 84.5 58 82 C55 74 54 64 56 56 C58 50 63 47 66 44 L60 42 C56 46 52 50 48 50 C45 48 40 44 36 41 L31 45 C35 48 38 51 40 56 Z" fill="url(#${c.id('stalk')})" stroke="#1E4A0A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${head}"/>
      ${florets}
      <g fill="${g[3]}" opacity=".3">${bumps}</g>`;
  },
};
