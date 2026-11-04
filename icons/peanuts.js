const L = require('../src/parts/leaf');
// One fat two-seed shell on the diagonal, waisted in the middle and pitted all over.
const ROT = { rotate: -38, cx: 48, cy: 52 };
const local = 'M10 52 C10 41 19 35 29 36 C37 37 42 42 48 42 C54 42 59 37 67 36 C77 35 86 41 86 52 C86 63 77 69 67 68 C59 67 54 62 48 62 C42 62 37 67 29 68 C19 69 10 63 10 52 Z';
const body = L.xform(local, ROT);
module.exports = {
  id: 'peanuts',
  name: 'Peanuts',
  emoji: '🥜',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['peanut', 'nuts', 'snack', 'legume', 'allergy'],
  tone: 'sand',
  body,
  shine: [26, 52, -70],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#FFF2CC"/><stop offset="0.35" stop-color="#E2B670"/><stop offset="0.75" stop-color="#A8783A"/><stop offset="1" stop-color="#4E3412"/></radialGradient>`);
    let pits = '';
    for (const [x0, x1] of [[16, 42], [54, 82]]) for (let x = x0; x <= x1; x += 6.5) for (let y = 43; y <= 61; y += 6) {
      pits += `<circle cx="${x + ((y - 43) % 12 ? 3.2 : 0)}" cy="${y}" r="1.3"/>`;
    }
    return `<g transform="rotate(-38 48 52)">
      <path d="${local}" fill="url(#${c.id('a')})"/>
      <path d="M14 46 C30 44 40 47 48 47 C56 47 66 44 82 46 M14 58 C30 60 40 57 48 57 C56 57 66 60 82 58" stroke="#8A5A22" stroke-opacity=".35" stroke-width="1.4" fill="none"/>
      <g fill="#8A5A22" opacity=".35">${pits}</g>
      <path d="M48 42.5 C46.5 47 46.5 57 48 61.5" stroke="#6E4410" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      </g>`;
  },
};
