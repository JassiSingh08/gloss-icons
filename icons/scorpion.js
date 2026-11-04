const k = require('../src/parts/critter');
// A scorpion in profile facing left: pincers forward, segmented tail arched over its back to the sting.
const body = 'M26 66 C26 60 34 56 46 56 C58 56 68 58 72 63 C74 67 70 71 62 72 L40 72 C32 72 26 70 26 66 Z';
const tail = [[71, 61, 6.4], [78, 51, 6], [79, 39, 5.6], [73, 29, 5.2], [63, 24, 4.8]];
module.exports = {
  id: 'scorpion',
  name: 'Scorpion',
  emoji: '🦂',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['scorpion', 'sting', 'desert', 'scorpio', 'danger'],
  tone: 'amber',
  body,
  shine: [36, 60, -10],
  shineSize: [6, 2],
  draw(c) {
    const ink = '#3D1A00';
    const seg = c.radial('seg', 'amber', 0.3, 0.25);
    const claw = 'M14 52 C10 48 12 42 18 42 L20 46 L24 43 C28 46 28 52 24 55 C21 57 17 56 14 52 Z';
    return `${k.legs('M40 70 L34 78 L30 85 M47 71 L44 79 L42 85 M54 71 L56 79 L56 85 M61 71 L66 78 L70 85', '#8A4A00', 3)}
      ${k.legs('M30 62 L24 54 M32 66 L22 66 L18 62', '#B85F00', 4.4)}
      ${k.part(c, claw, seg, 'amber')}
      ${k.part(c, 'M10 66 C6 62 8 56 14 56 L16 60 L20 57 C24 60 24 66 20 69 C17 71 13 70 10 66 Z', seg, 'amber')}
      ${tail.map(([x, y, r]) => k.part(c, k.circle(x, y, r), seg, 'amber')).join('')}
      ${k.part(c, 'M60 22 C54 22 50 26 51 33 C53 30 55 28 59 28 Z', c.radial('sting', 'ember', 0.3, 0.2), 'ember')}
      <path d="${body}" fill="${c.radial('a', 'amber', 0.35, 0.25)}"/>
      ${k.line('M44 57 L44 71 M52 57 L52 71 M60 58 L60 71', ink, 1.3, 0.5)}
      ${k.eye(31, 61, 1.8, ink)}${k.eye(35, 60, 1.8, ink)}`;
  },
};
