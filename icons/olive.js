const L = require('../src/parts/leaf');
// Two olives hanging from a sprig of narrow leaves.
const left = L.ellipse(32, 62, 15, 20, 16);
const right = L.ellipse(64, 63, 15, 20, -14);
module.exports = {
  id: 'olive',
  name: 'Olive',
  emoji: '🫒',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['olive', 'mediterranean', 'oil', 'fruit', 'martini'],
  tone: 'olive',
  body: [left, right],
  shine: [24, 54, -60],
  shineSize: [5.5, 2.6],
  draw(c) {
    const k = L.kit(c, 'olive');
    const fruit = c.radial('a', 'olive', 0.3, 0.22);
    return `${L.twig('M12 27 C30 22 52 20 84 17', 2.4)}
      ${L.twig('M30 24 C32 30 33 36 34 43 M60 20 C61 28 62 36 61.5 44', 1.8)}
      ${k.leaf([20, 25.5], [6, 42], 0.16, 0.2)}
      ${k.leaf([40, 22], [56, 5], 0.16, 0.2)}
      ${k.leaf([44, 21.5], [26, 8], 0.16, -0.2)}
      ${k.leaf([70, 18.5], [90, 32], 0.16, -0.2)}
      ${k.leaf([76, 17.5], [92, 4], 0.15, 0.2)}
      <path d="${left}" fill="${fruit}"/>
      <path d="${right}" fill="${fruit}"/>
      ${L.glint(56.5, 54, 5, 2.4, -70)}`;
  },
};
