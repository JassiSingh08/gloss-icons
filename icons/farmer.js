const p = require('../src/parts/person');

const P = p.pose({ cx: 45, cy: 45, r: 21, sy: 65, crown: 'M19 44 L20 38 C6 37 2 34 2 30 C2 25 14 22 27 21 C28 9 36 3 48 3 C60 3 68 9 69 21 C82 22 94 25 94 30 C94 34 90 37 76 38 L77 44' });
module.exports = {
  id: 'farmer',
  name: 'Farmer',
  emoji: '🧑‍🌾',
  group: 'People & Body',
  subgroup: 'person-role',
  tags: ['farmer', 'farm', 'harvest', 'wheat', 'gardener'],
  tone: 'blue',
  body: P.body,
  shine: [...P.pt(36, 12), -25],
  shineSize: [5, 2],
  draw(c) {
    const straw = c.radial('straw', 'cream', 0.35, 0.2);
    const st = c.ramp('cream');
    const hat = P.at(`<ellipse cx="48" cy="30" rx="46" ry="8.5" fill="${straw}" stroke="${st[3]}" stroke-opacity=".7" stroke-width="1.8"/>
      <path d="M27 30 C27 12 35 4 48 4 C61 4 69 12 69 30 Z" fill="${straw}" stroke="${st[3]}" stroke-opacity=".7" stroke-width="1.8"/>
      <path d="M27.3 23 Q48 28 68.7 23 L69 29 Q48 34 27 29 Z" fill="${c.linear('band', 'red', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M8 30 Q48 40 88 30 M34 12 Q48 9 62 12" stroke="${st[2]}" stroke-width="1.4" fill="none"/>`);
    const bib = `<path d="M30 68 L66 68 L67 84 L29 84 Z" fill="${c.linear('bib', 'blue', [0, 0, 1, 1], 1, 2)}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M32 69 L26 58 M64 69 L68 58" stroke="#0049A8" stroke-width="3.4" stroke-linecap="round"/>
      <circle cx="33" cy="70.5" r="1.8" fill="#FFC21A"/><circle cx="63" cy="70.5" r="1.8" fill="#FFC21A"/>
      <rect x="41" y="73" width="14" height="7" rx="1.5" fill="none" stroke="#001E4D" stroke-opacity=".45" stroke-width="1.2"/>`;
    const grain = c.radial('grain', 'gold', 0.4, 0.3);
    const ear = (x, y, r) => {
      const seeds = [0, 1, 2, 3].map((i) => `<ellipse cx="${-2}" cy="${-i * 4}" rx="1.9" ry="3" fill="${grain}" transform="rotate(-25 -2 ${-i * 4})"/><ellipse cx="2" cy="${-i * 4 - 1.5}" rx="1.9" ry="3" fill="${grain}" transform="rotate(25 2 ${-i * 4 - 1.5})"/>`).join('');
      return `<g transform="translate(${x} ${y}) rotate(${r})">${seeds}</g>`;
    };
    const wheat = `<path d="M74 80 L74 46 M74 80 L68 48 M74 80 L81 48" stroke="#C98500" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${ear(74, 44, 0)}${ear(67, 46, -12)}${ear(81.5, 46, 12)}`;
    return p.bust(c, P, { garment: 'red', neck: 'shirt', hair: 'crop', color: 'brown', under: bib, face: p.face.calm(), over: hat })
      + p.sleeve(c, P, [[76, 63], [81, 78], [74.5, 80.5]], 10) + wheat + p.hand(c, 74, 72, { rot: 0, pose: 'fist' });
  },
};
