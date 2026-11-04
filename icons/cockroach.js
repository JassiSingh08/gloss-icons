const k = require('../src/parts/critter');
// A cockroach from above: flat glossy brown wings, a pale shield behind the head, spiny legs, very long feelers.
const body = 'M48 26 C56 26 62 29 63 34 C67 42 68 54 66 65 C64 77 57 84 48 84 C39 84 32 77 30 65 C28 54 29 42 33 34 C34 29 40 26 48 26 Z';
module.exports = {
  id: 'cockroach',
  name: 'Cockroach',
  emoji: '🪳',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['cockroach', 'roach', 'pest', 'insect', 'gross'],
  tone: 'brown',
  body,
  shine: [37, 48, -70],
  draw(c) {
    const ink = '#1F0E02';
    const legs = 'M33 42 L22 36 L14 26 M31 56 L18 58 L8 66 M33 70 L22 78 L16 88 M63 42 L74 36 L82 26 M65 56 L78 58 L88 66 M63 70 L74 78 L80 88';
    return `${k.legs(legs, '#6E3A14', 3)}
      ${k.legs('M45 22 C38 12 26 8 10 10 M51 22 C58 12 70 8 86 10', '#8A4A1E', 1.8)}
      <path d="${k.ellipse(48, 25, 6, 4.5)}" fill="${c.radial('head', 'black', 0.3, 0.3)}"/>
      <path d="${body}" fill="${c.radial('a', 'brown', 0.35, 0.25)}"/>
      <path d="M33 34 C34 29 40 26 48 26 C56 26 62 29 63 34 C60 40 54 42 48 42 C42 42 36 40 33 34 Z" fill="${c.radial('shield', 'sand', 0.35, 0.25)}"/>
      <path d="M44 32 C46 30 50 30 52 32 C52 36 50 38 48 38 C46 38 44 36 44 32 Z" fill="#331805" opacity=".6"/>
      ${k.line('M48 43 C47 58 46 72 44 83', ink, 1.6, 0.6)}`;
  },
};
