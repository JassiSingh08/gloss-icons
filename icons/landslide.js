const g = require('../src/parts/glass');
const body = 'M12 81 L12 36 C16 28 24 21 32 19 C38 18 42 22 46 28 C54 40 62 54 70 66 C74 72 78 76 84 80 Q85 84 81 84 L14.5 84 Q12 84 12 81 Z';
module.exports = {
  id: 'landslide',
  name: 'Landslide',
  emoji: '🛘',
  group: 'Travel & Places',
  subgroup: 'place-geographic',
  tags: ['landslide', 'rockfall', 'mudslide', 'disaster', 'hill'],
  tone: 'green',
  body,
  shine: [21, 33, -45],
  shineSize: [5, 2],
  draw(c) {
    const hill = c.radial('a', 'green', 0.3, 0.2);
    const mud = c.linear('mud', 'brown', [0, 0, 1, 1], 1, 2);
    const rock = c.radial('rock', 'grey', 0.35, 0.3);
    const ink = '#2E2E3A';
    const boulder = (x, y, r, a) => `<path d="M${x - r} ${y + r * 0.2} C${x - r} ${y - r * 0.8} ${x + r * 0.3} ${y - r * 1.1} ${x + r} ${y - r * 0.3} C${x + r * 1.1} ${y + r * 0.6} ${x + r * 0.2} ${y + r} ${x - r} ${y + r * 0.2} Z" fill="${rock}" ${g.edge(ink, 1.1, 0.55)} transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="${hill}"/>
      <path d="M34 22 C38 21 41 24 44 29 C51 40 58 52 66 63 C70 70 74 75 80 80 L84 84 L52 84 C50 74 46 66 42 58 C38 50 36 42 34 36 C32 30 31 25 34 22 Z" fill="${mud}"/>
      <path d="M36 25 C38 34 42 44 47 54 M41 30 C45 40 51 50 56 60" fill="none" stroke="#331805" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M20 40 C24 36 28 34 31 33" fill="none" stroke="#A6F07A" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/>
      ${boulder(60, 75, 8, 10)}${boulder(76, 70, 5.6, -30)}${boulder(48, 60, 4.6, 40)}${boulder(80, 59, 3.6, 0)}
      <g stroke="#fff" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"><path d="M66 62 L62 58 M83 53 L80 50 M73 62.5 L70 59 M54 56 L51 52"/></g>`;
  },
};
