// Salmon nigiri: a pale block of rice under a striped slice of fish draped over the top.
const d = require('../src/parts/dish');
const ANGLE = -10;
const AT = [48, 52];
const S = 1.12;
const fish = 'M-35 -2 C-35 -13 -26 -17 -14 -17 L18 -17 C29 -17 37 -12 35 -2 C34 4 29 6 21 6 L-21 6 C-29 6 -35 4 -35 -2 Z';
const outline = 'M-35 -2 C-35 -13 -26 -17 -14 -17 L18 -17 C29 -17 37 -12 35 -2 C34.5 1 33 3 31 4.2 L31 6 C31 15 25 18 17 18 L-17 18 C-25 18 -31 15 -31 6 L-31 4.4 C-33.5 3 -35 1 -35 -2 Z';
const rice = 'M-31 2 L31 2 L31 6 C31 15 25 18 17 18 L-17 18 C-25 18 -31 15 -31 6 Z';
module.exports = {
  id: 'sushi',
  name: 'Sushi',
  emoji: '🍣',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['sushi', 'nigiri', 'salmon', 'japanese', 'date night'],
  tone: 'orange',
  body: d.place(outline, ANGLE, AT, S),
  shine: [...d.placePt(-24, -11, ANGLE, AT, S), ANGLE - 15],
  draw(c) {
    c.def(`<radialGradient id="${c.id('fish')}" cx="0.3" cy="0.2" r="0.95"><stop offset="0" stop-color="#FFD2B0"/><stop offset="0.35" stop-color="#FF8A50"/><stop offset="0.75" stop-color="#D9481A"/><stop offset="1" stop-color="#6B1800"/></radialGradient>`);
    const riceFill = c.linear('rice', 'white', [0, 0, 0, 1], 0, 2);
    return `<path d="${d.place(rice, ANGLE, AT, S)}" fill="${riceFill}"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})">
        ${d.grains([[-24, 11, 20], [-14, 14, -20], [-4, 10, 60], [8, 14, 0], [18, 11, -40], [25, 13, 30]], '#C9C2E2', 2.4, 1.4)}
      </g>
      <path d="${d.place(fish, ANGLE, AT, S)}" fill="url(#${c.id('fish')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})" fill="none" stroke="#FFEADC" stroke-width="2" stroke-linecap="round" stroke-opacity=".9">
        <path d="M-22 -15 C-18 -8 -20 -2 -24 4"/><path d="M-8 -16 C-4 -9 -6 -2 -10 5"/><path d="M6 -16 C10 -9 8 -2 4 5"/><path d="M20 -16 C24 -9 22 -2 18 5"/>
      </g>`;
  },
};
