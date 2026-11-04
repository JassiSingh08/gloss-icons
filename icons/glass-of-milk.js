const g = require('../src/parts/glass');
const body = 'M25 15 L71 15 L66 80 Q65.6 84 61.5 84 L34.5 84 Q30.4 84 30 80 Z';
module.exports = {
  id: 'glass-of-milk',
  name: 'Glass Of Milk',
  emoji: '🥛',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['milk', 'glass', 'dairy', 'breakfast', 'drink'],
  tone: 'sky',
  body,
  shine: [30, 40, -85],
  shineSize: [6, 2],
  draw(c) {
    const milk = c.linear('milk', 'white', [0, 0, 1, 0], 0, 2);
    return `${g.pane(c, body, 0.4)}
      <path d="M26.3 29 L69.7 29 L66.4 72 L29.6 72 Z" fill="${milk}"/>
      <path d="${g.ellipse(48, 29, 21.7, 3.4)}" fill="#fff"/>
      ${g.solid('M29.4 72 L66.6 72 L66 80 Q65.6 84 61.5 84 L34.5 84 Q30.4 84 30 80 Z', 0.55)}
      <path d="${g.ellipse(48, 15, 23, 3.4)}" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.4"/>
      ${g.gleam(['M30 22 L33.5 66', 'M62 24 L60.5 44'], 1.8, 0.7)}`;
  },
};
