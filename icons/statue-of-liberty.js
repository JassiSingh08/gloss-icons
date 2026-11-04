const B = require('../src/parts/building');

const PATINA = ['#D2F5E6', '#73C9AE', '#2F8A73', '#0F3B33'];
const body = 'M30 84 Q28 84 28 82 L28 75 L32 72.5 L32 70 L35 70 C36 60 37 49 39 41 Q41 36.5 45 36 L51 36 Q55 36.5 57 41 C59 49 60 60 61 70 L64 70 L64 72.5 L68 75 L68 82 Q68 84 66 84 Z';
module.exports = {
  id: 'statue-of-liberty',
  name: 'Statue of Liberty',
  emoji: '🗽',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['new york', 'liberty', 'freedom', 'landmark', 'usa'],
  tone: 'teal',
  body,
  shine: [42, 45, -70],
  shineSize: [5, 1.8],
  draw(c) {
    const robe = B.grad(c, 'robe', PATINA.slice(0, 3), [0, 0, 1, 0.5]);
    const round = B.rgrad(c, 'head', PATINA);
    const ped = B.stone(c);
    const flame = c.radial('flame', 'flame', 0.5, 0.75);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 0], 0, 2);
    const edge = `stroke="#0F3B33" stroke-opacity=".55" stroke-width="1.1"`;
    let rays = '';
    for (let k = -3; k <= 3; k++) {
      const a = (k * 24 * Math.PI) / 180;
      const tip = [48 + 11 * Math.sin(a), 29 - 11 * Math.cos(a)];
      const l = [48 + 5 * Math.sin(a - 0.28), 29 - 5 * Math.cos(a - 0.28)];
      const r = [48 + 5 * Math.sin(a + 0.28), 29 - 5 * Math.cos(a + 0.28)];
      rays += `M${B.n(l[0])} ${B.n(l[1])} L${B.n(tip[0])} ${B.n(tip[1])} L${B.n(r[0])} ${B.n(r[1])} Z `;
    }
    return `<path d="${body}" fill="${robe}"/>
      <path d="M28 75 L68 75 L68 82 Q68 84 66 84 L30 84 Q28 84 28 82 Z M32 70 L64 70 L64 72.5 L32 72.5 Z" fill="${ped}"/>
      <path d="M41 48 C42 56 41 63 40 70 M48 44 C49 53 48 62 49 70 M55 50 C56 58 57 64 56 70" fill="none" stroke="#0F3B33" stroke-opacity=".35" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M41 38 Q48 46 57 40" fill="none" stroke="#0F3B33" stroke-opacity=".35" stroke-width="1.3"/>
      <path d="M37.5 44 L33 19.5 L38 18.5 L44 40 Z" fill="${robe}" ${edge}/>
      <path d="M31 14.5 L40 13 L38.5 19.5 L33 20.5 Z" fill="${gold}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
      <path d="M35.5 13.5 C31 11.5 32 7 35 4.5 C35 7.5 38 8 38.5 10.5 C39.5 12.5 38 13.8 35.5 13.5 Z" fill="${flame}" stroke="#E02A00" stroke-opacity=".6" stroke-width="1"/>
      <path d="${rays}" fill="${round}" ${edge}/>
      <circle cx="48" cy="30.5" r="5.6" fill="${round}" ${edge}/>
      <path d="M43 27 Q48 24.5 53 27" fill="none" stroke="#0F3B33" stroke-opacity=".55" stroke-width="1.4"/>
      <path d="M54 44 L63 42.5 L65 56 L56 57.5 Z" fill="${B.grad(c, 'tab', PATINA.slice(1), [0, 0, 1, 1])}" ${edge}/>
      <path d="M53 47 Q57 52 60 54" fill="none" stroke="#0F3B33" stroke-opacity=".4" stroke-width="2.4" stroke-linecap="round"/>`;
  },
};
