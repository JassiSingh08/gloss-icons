const g = require('../src/parts/glass');
const glass = 'M-17 -72 L17 -72 C18.5 -56 15 -44 2.2 -39 L2.2 -6 C7 -5 13 -4 13 -2 C13 0 7 0.6 0 0.6 C-7 0.6 -13 0 -13 -2 C-13 -4 -7 -5 -2.2 -6 L-2.2 -39 C-15 -44 -18.5 -56 -17 -72 Z';
const wine = 'M-17.7 -57 C-9 -55 9 -55 17.7 -57 C17 -48 12 -42 2.2 -39.4 L-2.2 -39.4 C-12 -42 -17 -48 -17.7 -57 Z';
const AT = [48, 83.5];
module.exports = {
  id: 'wine-glass',
  name: 'Wine Glass',
  emoji: '🍷',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['wine', 'red wine', 'glass', 'dinner', 'date'],
  tone: 'sky',
  body: g.place(glass, 0, AT),
  shine: [37, 22, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const red = c.radial('wine', 'red', 0.35, 0.2);
    return `<g transform="translate(${AT[0]} ${AT[1]})">
        ${g.pane(c, glass)}
        ${g.solid('M-2.2 -39.5 L2.2 -39.5 L2.2 -6 L-2.2 -6 Z M-13 -2 C-13 -4 -7 -5 0 -5 C7 -5 13 -4 13 -2 C13 0 7 0.6 0 0.6 C-7 0.6 -13 0 -13 -2 Z')}
        <path d="${wine}" fill="${red}"/>
        <path d="M-17.7 -57 C-9 -55 9 -55 17.7 -57" stroke="#FF7A62" stroke-width="1.3" fill="none"/>
        <path d="M-17 -72 L17 -72" stroke="#fff" stroke-opacity=".8" stroke-width="1.4"/>
        ${g.gleam(['M-12 -67 C-12.5 -58 -11 -50 -6 -45', 'M12.5 -66 C13 -62 13 -59 12.6 -56'], 1.7)}
      </g>`;
  },
};
