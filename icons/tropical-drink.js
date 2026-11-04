const g = require('../src/parts/glass');
const body = 'M28 24 L68 24 C68 34 63 40 63 46 C63 52 71 58 70 64 C69 72 58 75 52 76 L52 79 Q63 80 63 82.5 Q63 84.5 56 84.5 L40 84.5 Q33 84.5 33 82.5 Q33 80 44 79 L44 76 C38 75 27 72 26 64 C25 58 33 52 33 46 C33 40 28 34 28 24 Z';
module.exports = {
  id: 'tropical-drink',
  name: 'Tropical Drink',
  emoji: '🍹',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['cocktail', 'tropical', 'holiday', 'beach', 'umbrella'],
  tone: 'sky',
  body,
  shine: [31, 32, -80],
  shineSize: [5, 1.8],
  draw(c) {
    c.def(`<linearGradient id="${c.id('sun')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE35C"/><stop offset="0.45" stop-color="#FF8C00"/><stop offset="1" stop-color="#E3120B"/></linearGradient>`);
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const canopy = c.radial('canopy', 'magenta', 0.4, 0.3);
    const lime = c.radial('lime', 'lime', 0.4, 0.4);
    const straw = c.linear('straw', 'teal', [0, 0, 1, 0], 0, 2);
    return `<path d="M54 46 L62 8 L67 8" fill="none" stroke="${c.ramp('teal')[3]}" stroke-opacity=".5" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M54 46 L62 8 L67 8" fill="none" stroke="${straw}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      ${g.pane(c, body)}
      <g clip-path="url(#${c.id('in')})"><path d="M20 30.5 C36 33 60 33 76 30.5 L76 75 L20 75 Z" fill="url(#${c.id('sun')})" transform="translate(48 52) scale(.94) translate(-48 -52)"/></g>
      ${g.solid('M44 76 L52 76 L52 79 Q63 80 63 82.5 Q63 84.5 56 84.5 L40 84.5 Q33 84.5 33 82.5 Q33 80 44 79 Z')}
      <path d="${g.ellipse(48, 24, 20, 2.6)}" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.3"/>
      ${g.gleam(['M31 30 C32.5 36 35 41 35 46', 'M30.5 58 C29.5 62 30 67 33 70'], 1.7)}
      <path d="M41 40 L34 15" stroke="#E8B98A" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M17 22 C18 12 28 6 37 8 C45 10 50 17 49 24 C46 21 42 21 39 23 C36 20 31 19 28 21 C25 19 20 19 17 22 Z" fill="${canopy}" ${g.edge('#3D0033', 1.1, 0.55)}/>
      <path d="M28 21 C29 15 32 10 36 8.5 M39 23 C39 17 38 12 36 8.5" fill="none" stroke="#8E0078" stroke-opacity=".6" stroke-width="1.1"/>
      <circle cx="69" cy="24" r="8" fill="#4E8E00"/>
      <circle cx="69" cy="24" r="6.6" fill="${lime}"/>
      <path d="M69 18 L69 30 M63.3 24 L74.7 24 M65 20 L73 28 M73 20 L65 28" stroke="#F4FFD0" stroke-width=".9" opacity=".85"/>`;
  },
};
