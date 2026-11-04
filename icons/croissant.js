// Five rolled segments with the tips curling down; the dark seams between them carry the shape.
const body = 'M48 22 C62 22 72 31 76 41 C83 45 87 56 85 66 C84 72 81 77 76 77 C72 72 66 67 60 66 C56 67 52 68 48 68 C44 68 40 67 36 66 C30 67 24 72 20 77 C15 77 12 72 11 66 C9 56 13 45 20 41 C24 31 34 22 48 22 Z';
module.exports = {
  id: 'croissant',
  name: 'Croissant',
  emoji: '🥐',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['croissant', 'pastry', 'french', 'breakfast', 'bakery'],
  tone: 'amber',
  body,
  shine: [37, 30, -35],
  draw(c) {
    const dough = c.radial('a', 'amber', 0.38, 0.22);
    const seam = (dd) => `<path d="${dd}" stroke="#7A3600" stroke-opacity=".75" stroke-width="2.2" stroke-linecap="round" fill="none"/>`;
    const lit = (dd) => `<path d="${dd}" stroke="#FFE9A0" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round" fill="none"/>`;
    return `<path d="${body}" fill="${dough}"/>
      ${seam('M33 25.5 C28 36 28 52 34 66')}${seam('M63 25.5 C68 36 68 52 62 66')}
      ${seam('M20.5 42 C16 50 15.5 62 19 75')}${seam('M75.5 42 C80 50 80.5 62 77 75')}
      ${lit('M36 27 C32 37 32 50 37 63')}${lit('M66 28 C70 38 70 50 65 62')}${lit('M23 45 C20 52 19.5 61 21.5 70')}${lit('M78 46 C81 53 81 61 79 69')}
      <path d="M42 30 C46 28 52 28 56 30" stroke="#FFE9A0" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round" fill="none"/>`;
  },
};
