const k = require('../src/parts/critter');
// A dolphin mid-leap, arcing left: beak nose, curved dorsal fin, pale belly along the inside of the arc.
const body = 'M12 50 L22 46 C28 31 46 23 62 27 C74 30 82 41 84 55 L90 61 C92 63 90 65 88 64 L82 63 L78 71 C77 73 74 73 74 70 L76 61 C74 47 64 39 52 39 C42 39 34 45 28 51 C24 53 18 53 13 52 C11 51.5 11 50.5 12 50 Z';
module.exports = {
  id: 'dolphin',
  name: 'Dolphin',
  emoji: '🐬',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['dolphin', 'ocean', 'smart', 'jump', 'flipper'],
  tone: 'sky',
  body: k.move(body, 0, 6),
  shine: [36, 37, -35],
  shineSize: [6, 2.6],
  draw(c) {
    const fin = c.radial('fin', 'sky', 0.4, 0.4);
    const ink = '#0A3A6B';
    return `<g transform="translate(0 6)">
      ${k.part(c, 'M54 27 C56 20 62 15 69 14 C66 19 66 24 67 29 Z', fin, 'sky')}
      <path d="${body}" fill="${c.radial('a', 'sky', 0.3, 0.2)}"/>
      <path d="M13 51.8 C19 52.6 24 52.5 28 51 C34 45 42 39 52 39 C64 39 74 47 76 61 L75.5 64 C72 52 64 44 54 43 C42 42 34 48 28 53 C22 55 17 54 13 51.8 Z" fill="#fff" opacity=".7"/>
      ${k.part(c, 'M42 44 C40 50 36 55 31 58 C38 58 44 54 46 48 Z', fin, 'sky')}
      ${k.legs('M14 50 C17 50 21 49 23 48', ink, 1.6)}
      ${k.eye(30, 41, 2.4, ink)}</g>`;
  },
};
