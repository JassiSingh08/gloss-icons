const L = require('../src/parts/leaf');
// Three berries, each with the little five-point crown at its blossom end.
const front = L.circle(48, 64, 19.5);
module.exports = {
  id: 'blueberries',
  name: 'Blueberries',
  emoji: '🫐',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['blueberry', 'berries', 'fruit', 'healthy', 'blue'],
  tone: 'navy',
  body: front,
  shine: [36, 56, -40],
  draw(c) {
    const k = L.kit(c);
    c.def(`<radialGradient id="${c.id('a')}" cx="0.32" cy="0.25" r="0.95"><stop offset="0" stop-color="#C2CCF5"/><stop offset="0.35" stop-color="#5465C4"/><stop offset="0.75" stop-color="#242C78"/><stop offset="1" stop-color="#0B0E33"/></radialGradient>`);
    const berry = `url(#${c.id('a')})`;
    const edge = c.ramp('navy')[3];
    const crown = (x, y, s) => `<path d="${L.star(x, y, 4.4 * s, 2.9 * s, 5)}" fill="${edge}" opacity=".75" stroke="${edge}" stroke-opacity=".75" stroke-width="1.6" stroke-linejoin="round"/><circle cx="${x}" cy="${y + 0.5 * s}" r="${1.6 * s}" fill="#5465C4" opacity=".6"/>`;
    const back = (x, y, r) => `<path d="${L.circle(x, y, r)}" fill="${berry}" stroke="${edge}" stroke-opacity=".5" stroke-width="1.3"/>`;
    return `${k.leaf([50, 32], [68, 12], 0.28, -0.2)}
      ${back(30, 42, 15)}${back(66, 40, 15.5)}
      ${L.glint(24, 36)}${L.glint(60, 33.5)}
      ${crown(33, 40, 0.8)}${crown(68, 38, 0.8)}
      <path d="${front}" fill="${berry}"/>
      ${crown(52, 61, 1.15)}`;
  },
};
