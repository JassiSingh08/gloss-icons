const body = 'M18 28 A30 10 0 0 1 78 28 L78 74 A30 10 0 0 1 18 74 Z';
module.exports = {
  id: 'roll-of-paper',
  name: 'Roll Of Paper',
  emoji: '🧻',
  group: 'Objects',
  subgroup: 'household',
  tags: ['toilet paper', 'tissue', 'roll', 'bathroom', 'stock up'],
  tone: 'white',
  body,
  shine: [24, 40, -85],
  shineSize: [6, 2],
  draw(c) {
    const side = c.linear('a', 'white', [0, 0, 1, 0], 0, 2);
    const top = c.linear('t', 'white', [0, 0, 1, 1], 0, 1);
    const core = c.linear('c', 'brown', [0, 0, 0, 1], 1, 3);
    const sheet = c.linear('s', 'white', [0, 0, 1, 0], 0, 1);
    return `<path d="${body}" fill="${side}"/>
      <ellipse cx="48" cy="28" rx="30" ry="10" fill="${top}"/>
      <ellipse cx="48" cy="28" rx="10" ry="3.6" fill="${core}"/>
      <ellipse cx="48" cy="28" rx="20" ry="6.6" fill="none" stroke="#D8D2EE" stroke-width="1"/>
      <path d="M58 37.4 Q66 36 72 33.6 L72 88 Q66 87 58 87 Z" fill="${sheet}" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M58 60 Q65 59.4 72 58" stroke="#8C83AD" stroke-width="1.3" stroke-dasharray="1.6 2.2"/>`;
  },
};
