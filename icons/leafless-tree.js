const L = require('../src/parts/leaf');
// A bare winter tree: trunk, three main limbs and two side branches traced as one outline.
const body = 'M33 84.5 C39.5 80 42 74 43 64 C43 58 40 54 35 49 C30 45 23 43 15.5 41.5 C13.5 41 13.5 38.5 15.5 38.5 C22 39 28 40 32.5 42.5 C28.5 36 24.5 30 21.5 21.5 C21 19.5 23.5 18.5 24.5 20.5 C28 28.5 32.5 35 38.5 41.5 C41.5 44.5 44 47.5 45.5 50.5 C45.5 40 46 28 46.8 14 C47 12 49.6 12 49.7 14 C50 26 50.5 38 51 47.5 C54 40 59 32.5 63.5 26.5 C66.5 22 69.5 18 71.5 14.5 C72.6 12.8 75 14 74 15.8 C71.5 22 67.5 29.5 63.5 36.5 C70 36.5 77 35.5 83.5 33.5 C85.5 33 86.3 35.5 84.3 36.2 C77.5 39 69.5 41 61 42.5 C57 48 54.5 54 53.5 62 C53.5 73 56 80 63 84.5 Z';
module.exports = {
  id: 'leafless-tree',
  name: 'Leafless Tree',
  emoji: '🪾',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['bare tree', 'winter', 'dead', 'drought', 'branches'],
  tone: 'brown',
  body,
  shine: [41, 60, -80],
  shineSize: [5, 2],
  draw(c) {
    const bark = c.radial('a', 'brown', 0.3, 0.3);
    const twig = (d) => `<path d="${d}" stroke="#331805" stroke-width="3" stroke-linecap="round" fill="none"/><path d="${d}" stroke="#8A5226" stroke-width="1.6" stroke-linecap="round" fill="none"/>`;
    return `${twig('M24 26 L17 22 M30 37 L26 31 M47.5 26 L42 20 M49 22 L54 16 M68 22 L74 24 M76 35 L80 29 M20 40.5 L15 45')}
      <path d="${body}" fill="${bark}"/>
      <g stroke="#331805" stroke-opacity=".4" stroke-width="1.4" stroke-linecap="round" fill="none"><path d="M47 66 C46.5 72 46.5 78 45 83"/><path d="M50 58 C51 64 51 70 52 76"/></g>
      <path d="M45 62 C45.5 56 44 52 41 48" stroke="#E8B98A" stroke-opacity=".45" stroke-width="1.3" stroke-linecap="round" fill="none"/>`;
  },
};
