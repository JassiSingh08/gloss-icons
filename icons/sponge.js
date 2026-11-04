const m = require('../src/parts/metal');
const body = m.round([[13, 44], [52, 30], [85, 42], [85, 62], [46, 80], [13, 66]], 5);
module.exports = {
  id: 'sponge',
  name: 'Sponge',
  emoji: '🧽',
  group: 'Objects',
  subgroup: 'household',
  tags: ['sponge', 'clean', 'wash up', 'dishes', 'scrub'],
  tone: 'yellow',
  body,
  shine: [22, 55, -20],
  shineSize: [5, 1.8],
  draw(c) {
    const left = c.linear('a', 'yellow', [0, 0, 0, 1], 0, 2);
    const right = c.linear('r', 'yellow', [0, 0, 1, 1], 1, 3);
    const scrub = c.linear('g', 'green', [0, 0, 1, 1], 0, 2);
    const pore = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.75}" fill="#B88A00" opacity=".55"/>`;
    return `<path d="${body}" fill="${left}"/>
      <path d="M46 52 L85 42 L85 62 L46 80 Z" fill="${right}" opacity=".9"/>
      <path d="${m.round([[13, 44], [52, 30], [85, 42], [85, 48], [46, 60], [13, 51]], 4)}" fill="${scrub}"/>
      <path d="M13 44.5 L52 31 L85 42.5" stroke="#E8FF9B" stroke-opacity=".6" stroke-width="1.2" fill="none"/>
      <path d="M46 52 L46 79" stroke="#6B4A00" stroke-opacity=".3" stroke-width="1.2"/>
      ${pore(22, 60, 2.2)}${pore(31, 66, 1.6)}${pore(37, 61, 2.6)}${pore(26, 70, 1.4)}${pore(56, 65, 2.4)}${pore(66, 62, 1.7)}${pore(74, 58, 2.2)}${pore(62, 72, 1.5)}${pore(77, 66, 1.3)}`;
  },
};
