const body = 'M12 50 A36 19 0 0 1 84 50 L84 60 A36 19 0 0 1 12 60 Z';
module.exports = {
  id: 'petri-dish',
  name: 'Petri Dish',
  emoji: '🧫',
  group: 'Objects',
  subgroup: 'science',
  tags: ['petri dish', 'bacteria', 'lab', 'culture', 'biology'],
  tone: 'sky',
  body,
  shine: [24, 44, -18],
  shineSize: [6, 2],
  draw(c) {
    const glass = c.linear('a', 'sky', [0, 0, 0, 1], 0, 2);
    const agar = c.radial('g', 'gold', 0.4, 0.3);
    const blob = (x, y, r, pal, k) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.6}" fill="${c.radial(`c${k}`, pal, 0.35, 0.3)}"/>`;
    return `<path d="${body}" fill="${glass}" opacity=".5"/>
      <ellipse cx="48" cy="55" rx="32" ry="15.5" fill="${agar}" opacity=".95"/>
      ${blob(36, 51, 6, 'pink', 1)}${blob(57, 49, 4.5, 'green', 2)}${blob(60, 60, 6.5, 'purple', 3)}${blob(40, 61, 3.6, 'teal', 4)}${blob(48, 44, 2.6, 'pink', 5)}${blob(27, 57, 2.6, 'green', 6)}${blob(70, 53, 2.4, 'teal', 7)}
      <ellipse cx="48" cy="50" rx="36" ry="19" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.6"/>
      <path d="M17 57 A33 15 0 0 0 79 57" stroke="#C9ECFF" stroke-opacity=".5" stroke-width="1.2" fill="none"/>`;
  },
};
