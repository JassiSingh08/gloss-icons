// A fried drumstick: round meaty end low, the bone and its knob up to the right.
const d = require('../src/parts/dish');
const ANGLE = -40;
const AT = [44, 54];
const meat = 'M-31 0 C-31 -16 -17 -23 -3 -20 C7 -18 13 -10 21 -6.5 C23 -5.5 23 5.5 21 6.5 C13 10 7 18 -3 20 C-17 23 -31 16 -31 0 Z';
module.exports = {
  id: 'poultry-leg',
  name: 'Poultry Leg',
  emoji: '🍗',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['chicken', 'drumstick', 'fried', 'leg', 'feast'],
  tone: 'amber',
  body: d.place(meat, ANGLE, AT),
  shine: [...d.placePt(-20, -13, ANGLE, AT), ANGLE - 30],
  draw(c) {
    c.def(`<radialGradient id="${c.id('skin')}" cx="0.3" cy="0.22" r="0.95"><stop offset="0" stop-color="#FFE3A0"/><stop offset="0.35" stop-color="#E8902C"/><stop offset="0.75" stop-color="#9A4508"/><stop offset="1" stop-color="#3D1500"/></radialGradient>`);
    const boneFill = c.linear('bone', 'ivory', [0, 0, 0, 1], 0, 2);
    const bone = `<rect x="16" y="-3.4" width="22" height="6.8"/><circle cx="39" cy="-4.4" r="5.4"/><circle cx="39" cy="4.4" r="5.4"/>`;
    const crumb = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFE3A0" opacity=".55"/>`;
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        <g fill="none" stroke="#6E61A8" stroke-opacity=".6" stroke-width="2.4">${bone}</g>
        <g fill="${boneFill}">${bone}</g>
        <path d="M35 -8 C37 -9.5 40 -10 42 -9" stroke="#fff" stroke-width="1.4" stroke-linecap="round" fill="none"/>
      </g>
      <path d="${d.place(meat, ANGLE, AT)}" fill="url(#${c.id('skin')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE})">
        ${crumb(-12, -8, 1.6)}${crumb(-2, -12, 1.2)}${crumb(6, -6, 1.4)}${crumb(-18, 6, 1.2)}${crumb(-6, 4, 1.5)}${crumb(8, 6, 1.1)}${crumb(-22, -4, 1.1)}
        <path d="M-20 12 C-12 16 -2 15 8 10" stroke="#5E2300" stroke-opacity=".35" stroke-width="2" stroke-linecap="round" fill="none"/>
      </g>`;
  },
};
