// A frying pan with a sunny-side-up egg; the long handle runs off to the upper right.
const d = require('../src/parts/dish');
const rim = (dy) => Array.from({ length: 36 }, (_, i) => [42 + 31 * Math.cos((i * Math.PI) / 18), 56 + dy + 22 * Math.sin((i * Math.PI) / 18)]);
const body = d.hull([...rim(0), ...rim(4)]);
module.exports = {
  id: 'cooking',
  name: 'Cooking',
  emoji: '🍳',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['cooking', 'frying pan', 'egg', 'breakfast', 'kitchen'],
  tone: 'black',
  body,
  shine: [19, 46, -55],
  shineSize: [6, 2.6],
  draw(c) {
    const pan = c.radial('a', 'black', 0.3, 0.2);
    const inner = c.radial('inner', 'black', 0.6, 0.7);
    const handle = c.linear('handle', 'black', [0, 0, 1, 1], 0, 2);
    const white = c.radial('white', 'white', 0.35, 0.3);
    const yolk = c.radial('yolk', 'orange', 0.35, 0.3);
    return `<path d="M67 46 L86 28" stroke="#05050A" stroke-opacity=".6" stroke-width="9" stroke-linecap="round"/>
      <path d="M67 46 L86 28" stroke="${handle}" stroke-width="7" stroke-linecap="round"/>
      <path d="M70 41 L83 29" stroke="#9A9AB0" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>
      <path d="${body}" fill="${pan}"/>
      <path d="${d.ellipse(42, 55, 26.5, 18)}" fill="${inner}"/>
      <path d="${d.ellipse(42, 55, 26.5, 18)}" fill="none" stroke="#000" stroke-opacity=".5" stroke-width="1.4"/>
      <path d="M26 54 C24 46 32 41 40 43 C46 39 56 41 58 48 C64 52 61 62 54 63 C50 69 38 69 34 64 C26 64 23 59 26 54 Z" fill="${white}" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="43" cy="53.5" r="8" fill="${yolk}" stroke="#6B0F00" stroke-opacity=".4" stroke-width="1"/>
      <ellipse cx="40.5" cy="50.5" rx="3" ry="1.7" fill="#fff" opacity=".85" transform="rotate(-35 40.5 50.5)"/>`;
  },
};
