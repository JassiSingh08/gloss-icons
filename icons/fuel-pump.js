const v = require('../src/parts/vehicle');
const body = v.rr(18, 13, 42, 66, [9, 9, 2, 2]);
module.exports = {
  id: 'fuel-pump',
  name: 'Fuel Pump',
  emoji: '⛽',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['petrol', 'gas station', 'fuel', 'fill up', 'road trip'],
  tone: 'red',
  body,
  shine: [24, 19, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const paint = c.linear('a', 'red', [0, 0, 0.6, 1], 0, 2);
    const panel = c.linear('panel', 'white', [0, 0, 0, 1], 0, 2);
    const base = c.linear('base', 'grey', [0, 0, 0, 1], 1, 3);
    const nozzle = c.linear('noz', 'black', [0, 0, 1, 1], 0, 2);
    return `<path d="M60 64 C70 64 74 74 78 66 C81 60 78 46 76 38" stroke="#141420" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M60 64 C70 64 74 74 78 66 C81 60 78 46 76 38" stroke="#4A4A5C" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M59 26 L66 26 Q68 26 68 28 L68 42 L62 42 L59 38 Z" fill="#8A0006"/>
      <path d="M69 27 L77 25 Q80 25 80 28 L80 38 Q80 40 77.5 40 L72 40 Q70 40 70 38 Z" fill="${nozzle}" stroke="#05050A" stroke-opacity=".5" stroke-width="1"/>
      <path d="M71 27 L64 24" stroke="#2E2E3D" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${v.rr(14, 78, 50, 6, 2)}" fill="${base}"/>
      <path d="${body}" fill="${paint}"/>
      <path d="${v.rr(24, 20, 30, 18, 3)}" fill="#141420"/>
      <path d="M28 25.5 L44 25.5 M28 31.5 L38 31.5" stroke="#FFC21A" stroke-width="2.6" stroke-linecap="round"/>
      <path d="${v.rr(24, 44, 30, 28, 3)}" fill="${panel}"/>
      <path d="M33 52 C35 55 37 57.5 37 60 C37 62.5 35.5 64 33.5 64 C31.5 64 30 62.5 30 60 C30 57.5 31.5 55 33 52 Z" fill="#E3120B"/>
      <path d="M41 55 L48 55 M41 60 L48 60" stroke="#8C83AD" stroke-width="2" stroke-linecap="round"/>`;
  },
};
