const L = require('../src/parts/leaf');
// A hanging bunch, 3-4-3-2-1, nudged off the grid so it looks grown rather than stacked.
const G0 = [
  [34, 27, 8], [48.5, 26, 8.3], [62.5, 27.5, 8],
  [26.5, 39, 8], [41, 38.5, 8.3], [55.5, 38.5, 8.3], [70, 40, 7.8],
  [33.5, 51, 8.2], [48, 50.5, 8.4], [62.5, 51.5, 8.2],
  [40.5, 63, 8.2], [55, 63.5, 8.2],
  [47.5, 75, 8.2],
];
const G = G0.map(([x, y, r]) => [48 + (x - 48) * 1.14, 47 + (y - 50) * 1.08, r * 1.12]);
const body = L.blob(G, [48, 46]);
module.exports = {
  id: 'grapes',
  name: 'Grapes',
  emoji: '🍇',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['grapes', 'wine', 'fruit', 'vineyard', 'purple'],
  tone: 'purple',
  body,
  shine: [27, 32, -40],
  shineSize: [4.5, 2.2],
  draw(c) {
    const k = L.kit(c);
    const grape = c.radial('a', 'purple', 0.32, 0.25);
    const edge = c.ramp('purple')[3];
    const grapes = G.map(([x, y, r]) => `<path d="${L.circle(x, y, r)}" fill="${grape}" stroke="${edge}" stroke-opacity=".45" stroke-width="1.1"/>`).join('');
    const glints = G.slice(1).map(([x, y, r]) => `<ellipse cx="${x - r * 0.4}" cy="${y - r * 0.45}" rx="${r * 0.32}" ry="${r * 0.16}" transform="rotate(-40 ${x - r * 0.4} ${y - r * 0.45})"/>`).join('');
    return `${k.stem('M49 17 C49 13 51 10 54 8', 3)}
      ${k.leaf([52, 12], [80, 12], 0.32, 0.35)}
      ${grapes}
      <g fill="#fff" opacity=".6">${glints}</g>`;
  },
};
