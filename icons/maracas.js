const d = require('../src/parts/device');

const L = { at: [30, 31], rot: -28 };
const R = { at: [66, 31], rot: 28 };
const head = d.ell(0, 0, 14, 17.5);
const body = [d.turn(head, L.rot, L.at), d.turn(head, R.rot, R.at)];

module.exports = {
  id: 'maracas',
  name: 'Maracas',
  emoji: '🪇',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['maracas', 'shake', 'fiesta', 'rhythm', 'party'],
  tone: 'red',
  body,
  shine: [...d.pt(-7, -10, L.rot, L.at), -55],
  shineSize: [5, 2.2],
  draw(c) {
    const shell = c.radial('a', 'red', 0.32, 0.25);
    const stick = c.linear('stick', 'sand', [0, 0, 1, 0], 0, 2);
    c.def(`<clipPath id="${c.id('h')}"><path d="${head}"/></clipPath>`);
    const handle = (m) => `<g transform="${d.tf(m.rot, m.at)}">
        <path d="M0 16 L0 52" stroke="#5C4420" stroke-width="7.4" stroke-linecap="round"/>
        <path d="M0 16 L0 52" stroke="${stick}" stroke-width="5.4" stroke-linecap="round"/>
        <path d="M-3.6 21 L3.6 21" stroke="#5C4420" stroke-width="1.4"/>
      </g>`;
    const deco = (m) => `<g transform="${d.tf(m.rot, m.at)}"><g clip-path="url(#${c.id('h')})">
        <path d="M-16 -1 L-11 -6 L-6 -1 L-1 -6 L4 -1 L9 -6 L14 -1 L19 -6" fill="none" stroke="#FFD82E" stroke-width="3" stroke-linejoin="round"/>
        <path d="M-16 6 L16 6" stroke="#2FB85A" stroke-width="2.4"/>
        <circle cx="-6" cy="-12" r="1.8" fill="#FFD82E"/><circle cx="2" cy="-14" r="1.8" fill="#2FB85A"/><circle cx="9" cy="-10" r="1.8" fill="#FFD82E"/>
      </g></g>`;
    return `${handle(R)}${handle(L)}
      <path d="${body[1]}" fill="${shell}"/>${deco(R)}
      <path d="${body[0]}" fill="${shell}"/>${deco(L)}`;
  },
};
