const g = require('../src/parts/glass');
const CX = 46;
const CY = 36;
const R = 25;
const body = `M${CX} ${CY - R} A${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z`;
// An Archimedean spiral from the middle out, as a polyline; two of them half a turn apart.
const spiral = (phase) => {
  const pts = [];
  const turns = 3.2;
  const a = (R + 4) / (turns * 2 * Math.PI);
  for (let i = 0; i <= 140; i++) {
    const t = (i / 140) * turns * 2 * Math.PI;
    const r = a * t;
    pts.push(`${g.n(CX + r * Math.cos(t + phase))} ${g.n(CY + r * Math.sin(t + phase))}`);
  }
  return `M${pts.join(' L')}`;
};
module.exports = {
  id: 'lollipop',
  name: 'Lollipop',
  emoji: '🍭',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['lollipop', 'candy', 'swirl', 'sweet', 'treat'],
  tone: 'magenta',
  body,
  shine: [33, 24, -40],
  draw(c) {
    const disc = c.radial('a', 'white', 0.35, 0.25);
    const pink = c.radial('pink', 'magenta', 0.35, 0.25);
    const blue = c.radial('blue', 'sky', 0.35, 0.25);
    c.def(`<clipPath id="${c.id('d')}"><path d="${body}"/></clipPath>`);
    return `<path d="M49 58 L57 83" stroke="#6E61A8" stroke-opacity=".6" stroke-width="6.4" stroke-linecap="round"/>
      <path d="M49 58 L57 83" stroke="#F4F0FF" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M50 64 L54.5 78" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>
      <path d="${body}" fill="${disc}"/>
      <g clip-path="url(#${c.id('d')})" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="${spiral(0)}" stroke="${pink}" stroke-width="4.6"/>
        <path d="${spiral(Math.PI)}" stroke="${blue}" stroke-width="3.4"/>
      </g>`;
  },
};
