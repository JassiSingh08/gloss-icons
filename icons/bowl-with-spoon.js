// Cereal: milk, golden rings and a spoon resting against the far rim.
const d = require('../src/parts/dish');
const B = { cx: 46, y: 44, rx: 34, ry: 9, depth: 33, foot: 4 };
const body = d.bowl(B);
module.exports = {
  id: 'bowl-with-spoon',
  name: 'Bowl with Spoon',
  emoji: '🥣',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['cereal', 'breakfast', 'bowl', 'spoon', 'porridge'],
  tone: 'sky',
  body,
  shine: [19, 54, -70],
  draw(c) {
    const bowl = c.radial('a', 'sky', 0.3, 0.2);
    const rim = c.linear('rim', 'sky', [0, 0, 1, 0], 0, 2);
    const milk = c.radial('milk', 'white', 0.4, 0.3);
    const spoon = c.linear('spoon', 'silver', [0, 0, 1, 1], 0, 2);
    const ring = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="3.6" ry="2.4" fill="none" stroke="#3D1500" stroke-opacity=".35" stroke-width="3.6"/><ellipse cx="${x}" cy="${y}" rx="3.6" ry="2.4" fill="none" stroke="#F2A03A" stroke-width="2.4"/>`;
    return `<path d="${body}" fill="${bowl}"/>
      <path d="${d.ellipse(46, 44, 34, 9)}" fill="${rim}"/>
      <path d="${d.ellipse(46, 44.8, 30.5, 7)}" fill="${milk}"/>
      ${ring(30, 44)}${ring(40, 41)}${ring(52, 41.5)}${ring(36, 47.5)}${ring(47, 47)}${ring(60, 46)}${ring(25, 47)}
      <path d="M54 43 L79 15" stroke="#3A3E52" stroke-width="6" stroke-linecap="round"/>
      <path d="M54 43 L79 15" stroke="${spoon}" stroke-width="4" stroke-linecap="round"/>
      <path d="M68 25 L77 15" stroke="#fff" stroke-opacity=".8" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M12.5 46 C14 52 30 56 46 56 C62 56 78 52 79.5 46" stroke="#C9ECFF" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
