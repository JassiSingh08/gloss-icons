// A purple-skinned sweet potato broken open at one end, golden inside and steaming.
const d = require('../src/parts/dish');
const ANGLE = -30;
const AT = [42, 56];
const S = 1.1;
const tuber = 'M-38 3 C-34 -7 -18 -14 0 -14 C12 -14 20 -12 24 -9 C25.5 -3 25.5 5 24 11 C20 14 12 16 0 16 C-18 16 -34 11 -38 3 Z';
module.exports = {
  id: 'roasted-sweet-potato',
  name: 'Roasted Sweet Potato',
  emoji: '🍠',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['sweet potato', 'yam', 'roasted', 'autumn', 'snack'],
  tone: 'magenta',
  body: d.place(tuber, ANGLE, AT, S),
  shine: [...d.placePt(-12, -9, ANGLE, AT, S), ANGLE - 5],
  draw(c) {
    c.def(`<radialGradient id="${c.id('skin')}" cx="0.3" cy="0.22" r="0.95"><stop offset="0" stop-color="#F08AAA"/><stop offset="0.35" stop-color="#B02A58"/><stop offset="0.75" stop-color="#5E0A2C"/><stop offset="1" stop-color="#2A0012"/></radialGradient>`);
    const flesh = c.radial('flesh', 'gold', 0.4, 0.35);
    return `<path d="${d.place(tuber, ANGLE, AT, S)}" fill="url(#${c.id('skin')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})">
        <path d="M-26 -4 C-20 -6 -14 -5 -8 -7 M-14 8 C-6 6 2 8 8 6 M2 -9 C6 -8 10 -9 14 -8" stroke="#3D0018" stroke-opacity=".5" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M20 -11.5 L25 -8 L21.5 -4 L26.5 0 L22 4.5 L26.5 8.5 L21 12.5 C30 15 37 9 37 1 C37 -8 30 -14 20 -11.5 Z" fill="#8A2448"/>
        <path d="M21 -10.8 L25.8 -7.6 L22.4 -3.8 L27.4 0 L22.8 4.4 L27.4 8.4 L22 12 C30 13.6 36 8 36 1 C36 -7 30 -12.5 21 -10.8 Z" fill="${flesh}"/>
        <ellipse cx="31" cy="-3" rx="2" ry="4" fill="#FFF7A8" opacity=".8"/>
      </g>
      ${d.steam([[70, 24, 14], [79, 27, 13]], 0.7, 2.6)}`;
  },
};
