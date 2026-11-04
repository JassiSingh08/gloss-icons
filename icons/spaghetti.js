// A plate of pasta with tomato sauce and meatballs; the heap rises out of the plate's outline.
const d = require('../src/parts/dish');
const body = 'M11 64 C11 59.5 15 55.8 22 53.3 C23 36 34 28 48 28 C62 28 73 36 74 53.3 C81 55.8 85 59.5 85 64 C85 75 68 81 48 81 C28 81 11 75 11 64 Z';
module.exports = {
  id: 'spaghetti',
  name: 'Spaghetti',
  emoji: '🍝',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['spaghetti', 'pasta', 'italian', 'dinner', 'meatballs'],
  tone: 'white',
  body,
  shine: [26, 45, -60],
  shineSize: [5, 2.2],
  draw(c) {
    const plate = c.radial('a', 'white', 0.4, 0.15);
    const heap = c.radial('heap', 'gold', 0.4, 0.3);
    const sauce = c.radial('sauce', 'red', 0.4, 0.3);
    const ball = c.radial('ball', 'brown', 0.35, 0.3);
    const basil = c.radial('basil', 'green', 0.3, 0.2);
    return `<path d="${body}" fill="${plate}"/>
      <path d="${d.ellipse(48, 64, 37, 15)}" fill="${plate}" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1"/>
      <path d="${d.ellipse(48, 64.5, 29, 10.5)}" fill="#ECE8F8"/>
      <path d="M21 60 C19 40 32 29 48 29 C64 29 77 40 75 60 C75 68 62 72 48 72 C34 72 21 68 21 60 Z" fill="${heap}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.1"/>
      <g fill="none" stroke="#FFF3A6" stroke-width="1.6" stroke-linecap="round" stroke-opacity=".9">
        <path d="M24 60 C30 50 42 66 52 56 C60 48 68 62 73 56"/><path d="M26 66 C34 58 44 70 54 62 C62 56 66 68 72 63"/>
        <path d="M28 52 C36 44 44 58 50 48 C56 40 66 52 70 47"/><path d="M27 44 C33 36 41 46 47 38 C53 32 62 42 67 40"/><path d="M34 69 C40 64 48 72 56 68 C62 65 66 70 68 68"/>
      </g>
      <path d="M32 42 C31 34 42 31 48 33 C56 30 65 35 63 42 C62 48 54 49 48 48 C40 50 33 48 32 42 Z" fill="${sauce}"/>
      <circle cx="41.5" cy="40" r="6" fill="${ball}" stroke="#331805" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="55" cy="39" r="6" fill="${ball}" stroke="#331805" stroke-opacity=".5" stroke-width="1"/>
      <path d="M47 33 C49 27 56 25 60 28 C58 32 52 34 47 33 Z" fill="${basil}"/>`;
  },
};
