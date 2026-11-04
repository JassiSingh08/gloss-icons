// A roast with the bone through it, knobs out at both ends; drawn level and laid on a diagonal.
const d = require('../src/parts/dish');
const ANGLE = -32;
const AT = [48, 50];
const S = 0.95;
const meat = 'M-28 2 C-30 -12 -18 -21 -2 -21 C16 -21 29 -13 28 0 C27 13 15 21 -1 21 C-17 21 -26 14 -28 2 Z';
module.exports = {
  id: 'meat-on-bone',
  name: 'Meat on Bone',
  emoji: '🍖',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['meat', 'bone', 'roast', 'feast', 'bbq'],
  tone: 'ember',
  body: d.place(meat, ANGLE, AT, S),
  shine: [...d.placePt(-17, -12, ANGLE, AT, S), ANGLE - 30],
  draw(c) {
    c.def(`<radialGradient id="${c.id('roast')}" cx="0.3" cy="0.22" r="0.95"><stop offset="0" stop-color="#FFA676"/><stop offset="0.35" stop-color="#C24A1E"/><stop offset="0.75" stop-color="#6E1C06"/><stop offset="1" stop-color="#2E0802"/></radialGradient>`);
    const boneFill = c.linear('bone', 'ivory', [0, 0, 0, 1], 0, 2);
    const knob = (x) => `<circle cx="${x}" cy="-4.6" r="5.6"/><circle cx="${x}" cy="4.6" r="5.6"/>`;
    const bone = `<rect x="-40" y="-3.8" width="80" height="7.6"/>${knob(-41)}${knob(41)}`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})">
        <g fill="none" stroke="#6E61A8" stroke-opacity=".6" stroke-width="2.4">${bone}</g>
        <g fill="${boneFill}">${bone}</g>
        <path d="M-44 -7 C-42 -9 -39 -9.5 -37 -8.5 M37 -8.5 C39 -9.5 42 -9 44 -7" stroke="#fff" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      </g>
      <path d="${d.place(meat, ANGLE, AT, S)}" fill="url(#${c.id('roast')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S})" fill="none" stroke-linecap="round">
        <path d="M-14 12 C-4 16 10 15 19 9" stroke="#FFC9A0" stroke-opacity=".5" stroke-width="2.2"/>
        <path d="M-8 -6 C-2 -9 6 -9 12 -6 M-2 3 C4 1 10 2 15 4" stroke="#3D0A02" stroke-opacity=".45" stroke-width="1.8"/>
      </g>`;
  },
};
