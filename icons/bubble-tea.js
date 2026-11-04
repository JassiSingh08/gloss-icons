const g = require('../src/parts/glass');
const body = 'M21 31 C21 17 75 17 75 31 L68.4 80 Q67.9 84 63.4 84 L32.6 84 Q28.1 84 27.6 80 Z';
const cup = 'M21 31 L75 31 L68.4 80 Q67.9 84 63.4 84 L32.6 84 Q28.1 84 27.6 80 Z';
module.exports = {
  id: 'bubble-tea',
  name: 'Bubble Tea',
  emoji: '🧋',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['boba', 'bubble tea', 'milk tea', 'tapioca', 'drink'],
  tone: 'sand',
  body,
  shine: [28, 26, -20],
  shineSize: [5, 1.8],
  draw(c) {
    const tea = c.linear('tea', 'sand', [0, 0, 1, 0], 0, 2);
    const straw = c.linear('straw', 'pink', [0, 0, 1, 0], 0, 2);
    c.def(`<radialGradient id="${c.id('pearl')}" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#6A4A3A"/><stop offset="1" stop-color="#1A0D08"/></radialGradient>`);
    const pearls = [[34, 77], [41, 79], [48, 78], [55, 79], [62, 77], [37, 71], [44, 72], [51, 71.5], [58, 72], [41, 65.5], [55, 66]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="url(#${c.id('pearl')})"/><circle cx="${x - 1.2}" cy="${y - 1.2}" r=".9" fill="#fff" opacity=".6"/>`).join('');
    return `${g.pane(c, cup)}
      <path d="M22.4 38 L73.6 38 L68.4 80 Q67.9 84 63.4 84 L32.6 84 Q28.1 84 27.6 80 Z" fill="${tea}"/>
      <path d="M47 4 L52 76" stroke="#4A0016" stroke-opacity=".5" stroke-width="8.2" stroke-linecap="round"/>
      <path d="M47 4 L52 76" stroke="${straw}" stroke-width="6.4" stroke-linecap="round"/>
      ${pearls}
      <path d="M21 31 C21 17 75 17 75 31 Z" fill="${c.linear('lid', 'white', [0, 0, 1, 0], 0, 2)}" fill-opacity=".75"/>
      <path d="M21 31 L75 31" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M45.6 4 L48 38" stroke="#FFD0DC" stroke-opacity=".8" stroke-width="1.3" stroke-linecap="round"/>
      ${g.gleam(['M26 36 L31 74'], 1.8, 0.65)}`;
  },
};
