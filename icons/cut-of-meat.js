// A raw steak lying flat: a cream rim of fat, pale marbling and a round of bone.
const d = require('../src/parts/dish');
const ANGLE = -12;
const AT = [48, 50];
const S = 1.08;
const top = 'M-34 -4 C-36 -16 -20 -22 -4 -19 C10 -17 18 -24 30 -18 C40 -12 38 2 32 8 C24 16 6 20 -10 18 C-26 16 -33 8 -34 -4 Z';
const slab = 'M-34 -4 C-36 -16 -20 -22 -4 -19 C10 -17 18 -24 30 -18 C40 -12 38 2 36 7 L35 11 C27 20 6 24 -10 22 C-26 20 -33 12 -34 1 Z';
module.exports = {
  id: 'cut-of-meat',
  name: 'Cut of Meat',
  emoji: '🥩',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['steak', 'meat', 'beef', 'bbq', 'raw'],
  tone: 'red',
  body: d.place(slab, ANGLE, AT, S),
  shine: [...d.placePt(-26, -12, ANGLE, AT, S), ANGLE - 30],
  draw(c) {
    c.def(`<radialGradient id="${c.id('raw')}" cx="0.32" cy="0.25" r="0.9"><stop offset="0" stop-color="#FF9A8A"/><stop offset="0.35" stop-color="#E2303C"/><stop offset="0.75" stop-color="#900A1E"/><stop offset="1" stop-color="#3D0008"/></radialGradient>`);
    const bone = c.radial('bone', 'ivory', 0.35, 0.3);
    return `<path d="${d.place(slab, ANGLE, AT, S)}" fill="#7A0614"/>
      <path d="${d.place(top, ANGLE, AT, S)}" fill="url(#${c.id('raw')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})" fill="none" stroke-linecap="round">
        <path d="M-4 -19 C10 -17 18 -24 30 -18 C40 -12 38 2 32 8" stroke="#FFF1E4" stroke-width="5"/>
        <path d="M-2 -16.5 C10 -14.5 18 -21 28 -15.5 C36 -10 34 1 29.5 6" stroke="#F7C6B8" stroke-opacity=".9" stroke-width="1.2"/>
        <path d="M-24 -2 C-16 -6 -10 0 -2 -4 C4 -7 8 -2 14 -5 M-18 8 C-10 5 -4 10 4 6 C10 3 14 7 20 4 M-6 -12 C-2 -10 2 -12 6 -10" stroke="#FFD2C8" stroke-opacity=".7" stroke-width="1.3"/>
        <circle cx="-20" cy="-9" r="5.6" fill="${bone}" stroke="#6E61A8" stroke-opacity=".5" stroke-width="1"/>
        <circle cx="-20" cy="-9" r="2.2" fill="#E8A0A0"/>
      </g>`;
  },
};
