const k = require('../src/parts/critter');
// A puffed-up blowfish facing left: round as a ball, ringed with spines, lips pursed in a sulky O.
const R = 27, CX = 46, CY = 54;
const body = `M${CX} ${CY - R} A${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z`;
module.exports = {
  id: 'blowfish',
  name: 'Blowfish',
  emoji: '🐡',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['blowfish', 'puffer', 'fugu', 'spiky', 'ocean'],
  tone: 'sand',
  body,
  shine: [34, 38, -40],
  draw(c) {
    const spine = c.ramp('sand')[2];
    const spines = Array.from({ length: 14 }, (_, i) => {
      const a = (i / 14) * Math.PI * 2 + 0.2;
      const p = (r, da) => `${k.n(CX + r * Math.cos(a + da))} ${k.n(CY + r * Math.sin(a + da))}`;
      return `M${p(R - 2, -0.12)} L${p(R + 7, 0)} L${p(R - 2, 0.12)} Z`;
    }).join(' ');
    const fin = c.radial('fin', 'sand', 0.4, 0.3);
    const ink = '#3D2A0A';
    return `<path d="${spines}" fill="${spine}" stroke="#5C4420" stroke-opacity=".6" stroke-width="1" stroke-linejoin="round"/>
      ${k.part(c, 'M72 54 L86 44 C89 43 90 45 89 47 L86 54 L89 61 C90 63 89 65 86 64 Z', fin, 'sand')}
      <path d="${body}" fill="${c.radial('a', 'sand', 0.35, 0.25)}"/>
      <path d="M21 60 C26 74 38 81 48 81 C60 81 68 74 72 64 C58 72 36 70 21 60 Z" fill="#FFF8EC" opacity=".55"/>
      ${[[48, 40], [58, 46], [52, 52], [62, 56], [44, 48]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.9" fill="#8A6A2E" opacity=".55"/>`).join('')}
      ${k.part(c, 'M56 58 C62 58 66 62 64 68 C60 66 57 63 56 58 Z', fin, 'sand')}
      <ellipse cx="20.5" cy="58" rx="3.8" ry="4.4" fill="#E35A5A" stroke="${ink}" stroke-width="1.2"/>
      <ellipse cx="20.5" cy="58" rx="1.6" ry="2.2" fill="${ink}"/>
      ${k.eye(31, 48, 3.6, ink)}
      ${k.legs('M26 42.5 L35 44.5', ink, 2)}`;
  },
};
