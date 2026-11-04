const m = require('../src/parts/metal');
const body = m.round([[11, 58], [42, 44], [85, 54], [85, 64], [54, 80], [11, 68]], 7);
module.exports = {
  id: 'soap',
  name: 'Soap',
  emoji: '🧼',
  group: 'Objects',
  subgroup: 'household',
  tags: ['soap', 'wash', 'clean', 'hygiene', 'hands'],
  tone: 'pink',
  body,
  shine: [26, 56, -20],
  shineSize: [6, 2],
  draw(c) {
    const side = c.linear('s', 'pink', [0, 0, 1, 1], 1, 3);
    const top = c.linear('a', 'pink', [0, 0, 1, 1], 0, 1);
    const bub = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity=".12" stroke="#fff" stroke-opacity=".85" stroke-width="1.4"/><path d="M${x - r * 0.55} ${y - r * 0.2} A${r * 0.6} ${r * 0.6} 0 0 1 ${x - r * 0.1} ${y - r * 0.6}" stroke="#fff" stroke-width="1.3" fill="none" stroke-linecap="round"/>`;
    return `<path d="${body}" fill="${side}"/>
      <path d="${m.round([[11, 58], [42, 44], [85, 54], [54, 70]], 7)}" fill="${top}"/>
      <path d="${m.round([[26, 57], [43, 50], [68, 56], [52, 64]], 4)}" fill="#fff" opacity=".22"/>
      ${bub(62, 28, 9)}${bub(45, 22, 6)}${bub(76, 18, 4.5)}${bub(30, 40, 4)}`;
  },
};
