// A wooden bowl heaped with leaves, tomato and cucumber; the leaves make the top of the silhouette.
const d = require('../src/parts/dish');
const heap = 'C13 36 18 26 26 24 C30 16 40 13 47 17 C54 12 66 14 70 22 C78 23 84 32 82 46';
const body = d.bowl({ cx: 48, y: 46, rx: 34, ry: 9, depth: 32, foot: 4, top: heap });
module.exports = {
  id: 'green-salad',
  name: 'Green Salad',
  emoji: '🥗',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['salad', 'healthy', 'vegan', 'greens', 'lunch'],
  tone: 'brown',
  body,
  shine: [28, 30, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const wood = c.radial('wood', 'brown', 0.3, 0.2);
    const leafA = c.radial('a', 'green', 0.35, 0.25);
    const leafB = c.radial('leafB', 'lime', 0.35, 0.25);
    const tomato = c.radial('tomato', 'red', 0.35, 0.3);
    const leaf = (dd, f) => `<path d="${dd}" fill="${f}" stroke="#053A1A" stroke-opacity=".55" stroke-width="1.1"/>`;
    const cuke = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="5" ry="3.6" fill="#2E7A2A"/><ellipse cx="${x}" cy="${y}" rx="3.8" ry="2.6" fill="#D8F5A8"/><circle cx="${x}" cy="${y}" r=".8" fill="#9BBE5A"/>`;
    return `<path d="${body}" fill="${leafA}"/>
      ${leaf('M14 46 C12 36 18 27 27 25 C34 24 40 30 40 38 C40 44 30 48 14 46 Z', leafB)}
      ${leaf('M38 40 C34 28 40 15 48 16 C56 15 62 26 58 40 Z', leafA)}
      ${leaf('M56 42 C56 30 64 21 71 22 C80 24 84 34 82 46 Z', leafB)}
      ${leaf('M26 44 C24 36 30 31 36 31 C42 31 46 36 44 44 Z', leafA)}
      <path d="M40 40 C44 32 46 24 48 18 M70 26 C66 32 62 38 60 42 M22 32 C26 36 30 40 32 44" stroke="#E8FF9B" stroke-opacity=".6" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M50 44 C50 36 56 32 62 33 C68 34 70 40 68 46 Z" fill="${tomato}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M54 42 C55 38 58 36 61 37" stroke="#FFC9B8" stroke-opacity=".8" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      ${cuke(32, 38)}${cuke(66, 32)}
      <path d="${d.bowl({ cx: 48, y: 46, rx: 34, ry: 9, depth: 32, foot: 4, top: d.nearHalf(48, 46, 34, 7).replace(/^M[\d.]+ [\d.]+ /, '') })}" fill="${wood}"/>
      <path d="M17 52 C26 58 70 58 79 52 M20 62 C30 67 66 67 76 62" stroke="#6E3A14" stroke-opacity=".45" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="${d.nearHalf(48, 46, 34, 7)}" stroke="#E8B98A" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  },
};
