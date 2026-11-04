const L = require('../src/parts/leaf');
// A chunky brown cap on a short pale stem; cap and stem are one outline so the edge never breaks.
const body = 'M13 50 C13 29 29 18 48 18 C67 18 83 29 83 50 C83 56 78 58 71 57.5 C66 57 62 56.8 60 57.5 C59.5 65 60.5 74 62.5 80 C63 83 60.5 84.5 56 84.5 L40 84.5 C35.5 84.5 33 83 33.5 80 C35.5 74 36.5 65 36 57.5 C34 56.8 30 57 25 57.5 C18 58 13 56 13 50 Z';
const cap = 'M13 50 C13 29 29 18 48 18 C67 18 83 29 83 50 C83 56 78 58 71 57.5 C63 56.8 55 56.4 48 56.4 C41 56.4 33 56.8 25 57.5 C18 58 13 56 13 50 Z';
module.exports = {
  id: 'brown-mushroom',
  name: 'Brown Mushroom',
  emoji: '🍄‍🟫',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['mushroom', 'shiitake', 'fungi', 'cooking', 'umami'],
  tone: 'brown',
  body,
  shine: [27, 33, -40],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.22" r="0.95"><stop offset="0" stop-color="#E8B98A"/><stop offset="0.35" stop-color="#9A5A28"/><stop offset="0.75" stop-color="#5A2E10"/><stop offset="1" stop-color="#2A1205"/></radialGradient>`);
    const stem = c.linear('stem', 'cream', [0, 0, 1, 0], 0, 2);
    return `<path d="${body}" fill="${stem}"/>
      <path d="M38 62 C42 63 54 63 58 62 M38.5 72 C43 73 53 73 58.5 72" stroke="#B08A4E" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round" fill="none"/>
      <path d="${cap}" fill="url(#${c.id('a')})"/>
      <path d="M16 52 C26 55 40 54 48 54 C56 54 70 55 80 52" stroke="#E8B98A" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      <g fill="#F4DDB8" opacity=".7"><ellipse cx="36" cy="30" rx="2.4" ry="1.3" transform="rotate(-20 36 30)"/><ellipse cx="56" cy="27" rx="2" ry="1.1"/><ellipse cx="66" cy="36" rx="2.2" ry="1.2" transform="rotate(25 66 36)"/><ellipse cx="46" cy="40" rx="1.8" ry="1"/><ellipse cx="27" cy="44" rx="1.8" ry="1" transform="rotate(-30 27 44)"/><ellipse cx="72" cy="47" rx="1.8" ry="1" transform="rotate(30 72 47)"/></g>`;
  },
};
