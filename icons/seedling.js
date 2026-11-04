const L = require('../src/parts/leaf');
// Two first leaves opening on a short stem out of a mound of soil.
const left = L.leafPath([45.5, 50], [14, 32], 0.36, -0.25);
const right = L.leafPath([50.5, 44], [82, 22], 0.36, 0.25);
module.exports = {
  id: 'seedling',
  name: 'Seedling',
  emoji: '🌱',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['sprout', 'seedling', 'growth', 'spring', 'new'],
  tone: 'green',
  body: [left, right],
  shine: [24, 33, -20],
  shineSize: [5.5, 2.4],
  draw(c) {
    const k = L.kit(c);
    const soil = c.radial('soil', 'brown', 0.4, 0.2);
    const leaf = c.radial('a', 'green', 0.3, 0.2);
    return `${k.stem('M48 78 C48 68 47 58 46 51 M47.5 56 C48.5 52 49.5 48 50.5 45', 3.6)}
      <path d="M20 84 C22 76 33 71 48 71 C63 71 74 76 76 84 Z" fill="${soil}" stroke="#331805" stroke-opacity=".5" stroke-width="1.2"/>
      <g fill="#331805" opacity=".35"><circle cx="34" cy="78" r="1.2"/><circle cx="58" cy="76" r="1.1"/><circle cx="64" cy="81" r="1.2"/><circle cx="42" cy="81" r="1"/></g>
      <path d="${left}" fill="${leaf}"/>
      <path d="${right}" fill="${leaf}"/>
      <path d="${L.veinPath([45.5, 50], [14, 32], -0.25, 0.36)} ${L.veinPath([50.5, 44], [82, 22], 0.25, 0.36)}" stroke="${k.light}" stroke-opacity=".7" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
  },
};
