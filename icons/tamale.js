// A husk parcel tied at both ends, the ends flaring like a sweet wrapper, with the husk peeled
// back in the middle so the masa and its red filling show.
const d = require('../src/parts/dish');
const ANGLE = -18;
const AT = [48, 50];
const S = 0.96;
// drawn at 1:1 then stretched to 1.25 tall so the parcel reads plump at 64 px
const husk = 'M-28 -9 C-20 -18 20 -18 28 -9 L43 -13 C40.5 -5 40.5 5 43 13 L28 9 C20 18 -20 18 -28 9 L-43 13 C-40.5 5 -40.5 -5 -43 -13 Z'.replace(/(-?[\d.]+) (-?[\d.]+)/g, (_, x, y) => `${x} ${+(y * 1.25).toFixed(2)}`);
module.exports = {
  id: 'tamale',
  name: 'Tamale',
  emoji: '🫔',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['tamale', 'mexican', 'corn', 'husk', 'masa'],
  tone: 'olive',
  body: d.place(husk, ANGLE, AT, S),
  shine: [...d.placePt(-16, -15, ANGLE, AT, S), ANGLE - 5],
  shineSize: [5.5, 2.4],
  draw(c) {
    c.def(`<radialGradient id="${c.id('husk')}" cx="0.4" cy="0.2" r="0.95"><stop offset="0" stop-color="#F6EDB8"/><stop offset="0.35" stop-color="#D2BE72"/><stop offset="0.75" stop-color="#8E7C34"/><stop offset="1" stop-color="#3A320C"/></radialGradient>`);
    const masa = c.radial('masa', 'yellow', 0.35, 0.3);
    const flap = c.linear('flap', 'olive', [0, 0, 0, 1], 0, 1);
    const tie = (x) => `<path d="M${x - 2} -11 C${x - 0.5} -4 ${x - 0.5} 4 ${x - 2} 11 L${x + 2} 11 C${x + 3.5} 4 ${x + 3.5} -4 ${x + 2} -11 Z" fill="#6E5A1E" stroke="#3A320C" stroke-opacity=".5" stroke-width="1"/>`;
    return `<path d="${d.place(husk, ANGLE, AT, S)}" fill="url(#${c.id('husk')})"/>
      <g transform="translate(${AT[0]} ${AT[1]}) rotate(${ANGLE}) scale(${S} ${S * 1.25})">
        <path d="M-38 -8.5 L-31 -6 M-38 8.5 L-31 6 M-39 0 L-31 0 M38 -8.5 L31 -6 M38 8.5 L31 6 M39 0 L31 0" stroke="#8A7A30" stroke-opacity=".7" stroke-width="1.1" stroke-linecap="round"/>
        <path d="M-20 -6 C-22 -16 -8 -21 0 -21 C8 -21 22 -16 20 -6 C12 -10 -12 -10 -20 -6 Z" fill="${flap}" stroke="#5C4420" stroke-opacity=".55" stroke-width="1.1"/>
        <path d="M-21 -2 C-21 -9 -10 -11 0 -11 C10 -11 21 -9 21 -2 C21 5 10 7 0 7 C-10 7 -21 5 -21 -2 Z" fill="${masa}" stroke="#6B4A00" stroke-opacity=".5" stroke-width="1"/>
        <path d="M-13 -3 C-6 -6 6 -6 13 -3" stroke="#E3120B" stroke-width="3.2" stroke-linecap="round" fill="none"/>
        <path d="M-25 0 C-14 6 14 6 25 0 C22 10 12 16 0 16 C-12 16 -22 10 -25 0 Z" fill="${flap}" stroke="#5C4420" stroke-opacity=".55" stroke-width="1.1"/>
        <path d="M-16 8 C-6 11 6 11 16 8 M-12 12.5 C-4 14 4 14 12 12.5" stroke="#8A7A30" stroke-opacity=".55" stroke-width="1" fill="none" stroke-linecap="round"/>
        ${tie(-28)}${tie(28)}
      </g>`;
  },
};
