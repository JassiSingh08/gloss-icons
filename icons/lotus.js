const L = require('../src/parts/leaf');
// Pointed petals rising in tiers from a lily pad, pale at the tips, deepening to pink at the base.
const body = 'M48 76 C33 76 17 67 12 49 C18 48.5 23 49 27.5 51 C24.5 42 24.5 32 26.5 22.5 C32 25.5 37 30 40.5 35 C42.5 26 45 18 48 9 C51 18 53.5 26 55.5 35 C59 30 64 25.5 69.5 22.5 C71.5 32 71.5 42 68.5 51 C73 49 78 48.5 84 49 C79 67 63 76 48 76 Z';
module.exports = {
  id: 'lotus',
  name: 'Lotus',
  emoji: '🪷',
  group: 'Animals & Nature',
  subgroup: 'plant-flower',
  tags: ['lotus', 'yoga', 'calm', 'flower', 'zen'],
  tone: 'pink',
  body,
  shine: [30, 33, -70],
  shineSize: [5, 2.2],
  draw(c) {
    c.def(`<linearGradient id="${c.id('a')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF0F5"/><stop offset=".45" stop-color="#FFA8C8"/><stop offset="1" stop-color="#D23A76"/></linearGradient>`);
    c.def(`<linearGradient id="${c.id('b')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC4D8"/><stop offset="1" stop-color="#B0285E"/></linearGradient>`);
    const pad = c.radial('pad', 'green', 0.4, 0.2);
    const a = `url(#${c.id('a')})`;
    const b = `url(#${c.id('b')})`;
    const edge = '#8A1A48';
    const petal = (d, f) => `<path d="${d}" fill="${f}" stroke="${edge}" stroke-opacity=".45" stroke-width="1.1"/>`;
    return `<path d="M10 80 C10 74 26 70.5 48 70.5 C70 70.5 86 74 86 80 C86 84 70 86.5 48 86.5 C26 86.5 10 84 10 80 Z" fill="${pad}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M48 78.5 L62 72" stroke="#053A1A" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="${body}" fill="${b}"/>
      ${petal('M48 76 C33 76 17 67 12 49 C26 50 40 58 48 76 Z', b)}
      ${petal('M48 76 C63 76 79 67 84 49 C70 50 56 58 48 76 Z', b)}
      ${petal('M48 74 C34 66 24 46 26.5 22.5 C38 30 48 48 48 74 Z', a)}
      ${petal('M48 74 C62 66 72 46 69.5 22.5 C58 30 48 48 48 74 Z', a)}
      ${petal('M48 74 C39 60 38 34 48 9 C58 34 57 60 48 74 Z', a)}
      ${petal('M48 77 C38 74 28 66 24 56 C34 56 44 62 48 77 Z', b)}
      ${petal('M48 77 C58 74 68 66 72 56 C62 56 52 62 48 77 Z', b)}`;
  },
};
