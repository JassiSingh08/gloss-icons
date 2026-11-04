const k = require('../src/parts/critter');
// A deep-bodied reef fish facing left: sunny yellow with bold blue bands, fins edged in blue.
const body = 'M12 52 C20 40 32 26 50 24 C62 24 68 36 72 46 L84 36 C86 35 88 36 87 38 L82 52 L87 66 C88 68 86 69 84 68 L72 58 C68 68 62 80 50 80 C34 78 22 64 12 52 Z';
module.exports = {
  id: 'tropical-fish',
  name: 'Tropical Fish',
  emoji: '🐠',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['fish', 'tropical', 'reef', 'aquarium', 'colourful'],
  tone: 'gold',
  body,
  shine: [32, 36, -40],
  draw(c) {
    const blue = c.linear('band', 'blue', [0, 0, 1, 1], 1, 3);
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const ink = '#001E4D';
    return `${k.part(c, 'M40 26 C44 16 56 10 66 12 C62 18 62 26 64 34 Z', blue, 'blue')}
      ${k.part(c, 'M42 78 C46 86 56 88 64 84 C60 80 60 74 62 70 Z', blue, 'blue')}
      <path d="${body}" fill="${c.radial('a', 'gold', 0.35, 0.25)}"/>
      <g clip-path="url(#${c.id('in')})" fill="${blue}">
        <path d="M30 20 C36 34 36 64 30 84 L38 84 C44 64 44 34 38 20 Z"/>
        <path d="M54 20 C60 34 60 64 54 84 L61 84 C67 64 67 34 61 20 Z"/>
        <path d="M76 30 L82 52 L76 74 L90 74 L90 30 Z"/>
      </g>
      ${k.legs('M13.5 52.5 L18.5 53.5', ink, 1.6)}
      ${k.eye(23, 46, 2.8, ink)}`;
  },
};
