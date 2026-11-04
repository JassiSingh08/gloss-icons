// Drawn level and laid on a diagonal with place(); the pale slashes are what make it a baguette.
const d = require('../src/parts/dish');
const ANGLE = -40;
const AT = [48, 50];
const loaf = 'M-45 1 C-45 -7 -39 -11 -30 -11.5 L28 -12 C38 -12 45 -7 45 0 C45 7 39 11 30 11.5 L-30 12 C-39 12 -45 8 -45 1 Z';
module.exports = {
  id: 'baguette-bread',
  name: 'Baguette Bread',
  emoji: '🥖',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['baguette', 'bread', 'french', 'bakery', 'loaf'],
  tone: 'amber',
  body: d.place(loaf, ANGLE, AT),
  shine: [...d.placePt(-30, -6, ANGLE, AT), ANGLE - 5],
  draw(c) {
    c.def(`<radialGradient id="${c.id('crust')}" cx="0.3" cy="0.25" r="0.9"><stop offset="0" stop-color="#FFE3A0"/><stop offset="0.35" stop-color="#F0A33C"/><stop offset="0.75" stop-color="#B05A10"/><stop offset="1" stop-color="#4E2200"/></radialGradient>`);
    const cut = c.linear('cut', 'cream', [0, 0, 0, 1], 0, 2);
    const slash = (x) => `<path d="M${x - 8} 3 C${x - 4} -3 ${x + 2} -6.5 ${x + 8} -6 C${x + 5} -1 ${x - 1} 2.5 ${x - 8} 3 Z" fill="${cut}"/>
      <path d="M${x - 8} 3 C${x - 4} -3 ${x + 2} -6.5 ${x + 8} -6" stroke="#8A3E00" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round" fill="none"/>`;
    return `<path d="${d.place(loaf, ANGLE, AT)}" fill="url(#${c.id('crust')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">${slash(-26)}${slash(-8)}${slash(10)}${slash(28)}</g>`;
  },
};
