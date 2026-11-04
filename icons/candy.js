const g = require('../src/parts/glass');
// A wrapped sweet: the round middle and both twisted ends are one outline, drawn level and tipped.
const ANGLE = -28;
const AT = [48, 50];
const S = 1.1;
const wrap = 'M-17 -6 C-14.5 -13.5 -8 -17.5 0 -17.5 C8 -17.5 14.5 -13.5 17 -6 C22 -6 28 -12 34 -16 C32 -10 35 -6 33 -2 C36 1 34 5 36 9 C33 10 30 12 34 16 C28 12 22 6 17 6 C14.5 13.5 8 17.5 0 17.5 C-8 17.5 -14.5 13.5 -17 6 C-22 6 -28 12 -34 16 C-30 12 -33 10 -36 9 C-34 5 -36 1 -33 -2 C-35 -6 -32 -10 -34 -16 C-28 -12 -22 -6 -17 -6 Z';
const end = 'M-12 -6 L-17 -6 C-22 -6 -28 -12 -34 -16 C-32 -10 -35 -6 -33 -2 C-36 1 -34 5 -36 9 C-33 10 -30 12 -34 16 C-28 12 -22 6 -17 6 L-12 6 Z';
module.exports = {
  id: 'candy',
  name: 'Candy',
  emoji: '🍬',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['candy', 'sweet', 'wrapper', 'treat', 'halloween'],
  tone: 'red',
  body: g.place(wrap, ANGLE, AT, S),
  shine: [...g.placePt(-8, -10, ANGLE, AT, S), ANGLE - 30],
  shineSize: [5, 2.2],
  draw(c) {
    const sweet = c.radial('a', 'red', 0.35, 0.25);
    const foil = c.linear('foil', 'gold', [0, 0, 1, 1], 0, 2);
    c.def(`<clipPath id="${c.id('ball')}"><circle cx="0" cy="0" r="17"/></clipPath>`);
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})">
        <path d="${end}" fill="${foil}"/>
        <path d="${end}" fill="${foil}" transform="scale(-1 1)"/>
        <g fill="none" stroke="#5E3A00" stroke-opacity=".45" stroke-width="1.1" stroke-linecap="round">
          <path d="M-19 -2 L-31 -10 M-19 0 L-33 3 M-19 2 L-31 12 M19 -2 L31 -10 M19 0 L33 3 M19 2 L31 12"/>
        </g>
        <circle cx="0" cy="0" r="17.5" fill="${sweet}"/>
        <g clip-path="url(#${c.id('ball')})" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="3.4">
          <path d="M-12 -16 C-17 -4 -12 9 -3 17"/><path d="M-1 -17 C-7 -4 -2 10 9 16"/><path d="M10 -16 C5 -5 9 6 18 12"/>
        </g>
      </g>`;
  },
};
