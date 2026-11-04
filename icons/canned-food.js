// A tin with a red label and a tomato on it: ridged lid, curved label edges for roundness.
const d = require('../src/parts/dish');
const body = `M19 25 ${d.topHalf(48, 25, 29, 7)} L77 76 C77 80.4 64 84 48 84 C32 84 19 80.4 19 76 Z`;
const arc = (y) => `C19 ${y + 3.9} 32 ${y + 7} 48 ${y + 7} C64 ${y + 7} 77 ${y + 3.9} 77 ${y}`;
module.exports = {
  id: 'canned-food',
  name: 'Canned Food',
  emoji: '🥫',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['can', 'tin', 'soup', 'tomato', 'pantry'],
  tone: 'red',
  body,
  shine: [24, 46, -80],
  shineSize: [6, 2.6],
  draw(c) {
    const tin = c.linear('tin', 'silver', [0, 0, 1, 0], 0, 3);
    const lid = c.linear('lid', 'silver', [0, 0, 1, 1], 0, 2);
    const label = c.linear('a', 'red', [0, 0, 1, 0], 0, 3);
    const tomato = c.radial('tomato', 'red', 0.35, 0.3);
    const leaf = c.radial('leaf', 'green', 0.3, 0.2);
    return `<path d="${body}" fill="${tin}"/>
      <path d="M19 36 ${arc(36)} L77 69 C77 72.9 64 76 48 76 C32 76 19 72.9 19 69 Z" fill="${label}"/>
      <path d="M19 36 ${arc(36)}" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.2" fill="none"/>
      <path d="M19 30 ${arc(30)} M19 72.5 ${arc(72.5)}" stroke="#3A3E52" stroke-opacity=".45" stroke-width="1.2" fill="none"/>
      <path d="${d.ellipse(48, 25, 29, 7)}" fill="${lid}"/>
      <path d="${d.ellipse(48, 25, 24, 5)}" fill="none" stroke="#8E93AD" stroke-width="1.3"/>
      <path d="${d.ellipse(48, 25, 18, 3.6)}" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.1"/>
      <path d="M26 46 C31 50 65 50 70 46 L70 62 C65 66 31 66 26 62 Z" fill="#FFF4D6"/>
      <circle cx="48" cy="56.5" r="7" fill="${tomato}"/>
      <path d="M43 50.5 L48 52.5 L53 50.5 L50.5 53.5 L48 51.5 L45.5 53.5 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".5" stroke-width=".7"/>
      <ellipse cx="45.5" cy="55" rx="2" ry="1.1" fill="#fff" opacity=".8" transform="rotate(-35 45.5 55)"/>`;
  },
};
