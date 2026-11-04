const L = require('../src/parts/leaf');
// The cob is drawn upright and tipped as a whole; the husk peels back from the bottom.
const ROT = { rotate: 22, cx: 48, cy: 50 };
const cob = 'M48 9 C56 9 61 18 61.5 32 C62 48 58 62 48 72 C38 62 34 48 34.5 32 C35 18 40 9 48 9 Z';
const body = L.xform(cob, ROT);
module.exports = {
  id: 'ear-of-corn',
  name: 'Ear of Corn',
  emoji: '🌽',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['corn', 'maize', 'cob', 'harvest', 'vegetable'],
  tone: 'gold',
  body,
  shine: [41, 26, -65],
  shineSize: [6, 2.6],
  draw(c) {
    const k = L.kit(c);
    c.def(`<clipPath id="${c.id('cob')}"><path d="${cob}"/></clipPath>`);
    let grid = '';
    for (let y = 15; y < 72; y += 6.2) grid += `M30 ${y} Q48 ${y + 3} 66 ${y} `;
    for (const x of [40, 45, 50.5, 56]) grid += `M${x} 8 Q${x + (x - 48) * 0.35} 40 ${48 + (x - 48) * 0.3} 74 `;
    const husk = (d) => k.paint(d);
    return `<g transform="rotate(22 48 50)">
      <path d="${cob}" fill="${c.radial('a', 'gold', 0.3, 0.2)}"/>
      <g clip-path="url(#${c.id('cob')})"><path d="${grid}" stroke="#A86A00" stroke-opacity=".55" stroke-width="1.3" fill="none"/></g>
      ${husk('M47 88 C36 84 27 74 26 60 C25.5 52 27 45 30 40 C33 52 38 62 46 70 C48 76 48.5 82 47 88 Z')}
      ${husk('M49 88 C60 84 69 74 70 60 C70.5 52 69 45 66 40 C63 52 58 62 50 70 C48 76 47.5 82 49 88 Z')}
      ${husk('M48 88 C42 80 40 70 42 58 C44 64 46 68 48 70 C50 68 52 64 54 58 C56 70 54 80 48 88 Z')}
      <path d="M30 44 C32 56 38 66 45 72 M66 44 C64 56 58 66 51 72" stroke="${k.light}" stroke-opacity=".6" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      </g>`;
  },
};
