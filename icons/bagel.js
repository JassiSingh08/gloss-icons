// A thick ring with a see-through hole and seeds on top, no icing: bagel, not doughnut.
const d = require('../src/parts/dish');
const body = `${d.ellipse(48, 56, 35, 26)} ${d.ellipse(48, 56, 11.5, 4.6, true)}`;
module.exports = {
  id: 'bagel',
  name: 'Bagel',
  emoji: '🥯',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['bagel', 'bread', 'breakfast', 'bakery', 'brunch'],
  tone: 'amber',
  body,
  shine: [25, 43, -40],
  draw(c) {
    c.def(`<radialGradient id="${c.id('top')}" cx="0.32" cy="0.22" r="0.9"><stop offset="0" stop-color="#FFE2A6"/><stop offset="0.4" stop-color="#E9A04A"/><stop offset="0.8" stop-color="#B0601C"/><stop offset="1" stop-color="#6A3208"/></radialGradient>`);
    c.def(`<linearGradient id="${c.id('wall')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A2806"/><stop offset="1" stop-color="#C2783A"/></linearGradient>`);
    const seed = (x, y, a) => `<ellipse cx="${x}" cy="${y}" rx="1.9" ry="1.1" fill="#FFF4D6" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="#8E4A12"/>
      <path d="${d.ellipse(48, 52, 34, 22)} ${d.ellipse(48, 56, 11.5, 4.6, true)}" fill="url(#${c.id('top')})"/>
      <path d="M34 53 C34 46 40.5 43 48 43 C55.5 43 62 46 62 53 C62 54.8 60.9 55.8 59.6 56 C58 52.6 53 51 48 51 C43 51 38 52.6 36.4 56 C35.1 55.8 34 54.8 34 53 Z" fill="url(#${c.id('wall')})"/>
      <path d="M34 53 C34 46 40.5 43 48 43 C55.5 43 62 46 62 53" stroke="#6A3208" stroke-opacity=".6" stroke-width="1.2" fill="none"/>
      ${seed(30, 40, -30)}${seed(40, 37, 10)}${seed(55, 36, -15)}${seed(66, 40, 25)}${seed(72, 49, 60)}${seed(24, 52, -70)}${seed(28, 63, 40)}${seed(41, 66, -10)}${seed(57, 66, 20)}${seed(68, 61, -40)}${seed(48, 38.5, 80)}${seed(32, 47, 45)}`;
  },
};
