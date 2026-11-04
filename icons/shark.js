const k = require('../src/parts/critter');
// A shark cruising left with a thin, toothy grin; tall dorsal fin, pale belly, gill slits.
const raw = 'M8 56 C14 46 28 40 44 40 C60 40 72 44 80 50 L88 38 C90 36 93 37 92 40 L88 56 L92 68 C93 70 90 71 89 69 L80 60 C70 66 56 70 42 70 C26 70 14 64 8 56 Z';
module.exports = {
  id: 'shark',
  name: 'Shark',
  emoji: '🦈',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['shark', 'ocean', 'jaws', 'predator', 'fin'],
  tone: 'slate',
  body: k.move(raw, 0, 6),
  shine: [26, 50, -20],
  shineSize: [6, 2.4],
  draw(c) {
    const fin = c.radial('fin', 'slate', 0.4, 0.3);
    const ink = '#1E2A3D';
    return `<g transform="translate(0 6)">
      ${k.part(c, 'M42 42 C46 34 50 25 58 20 C58 29 58 36 62 42 Z', fin, 'slate')}
      <path d="${raw}" fill="${c.radial('a', 'slate', 0.3, 0.25)}"/>
      <path d="M9 57.5 C18 64 30 69 42 69 C56 69 68 65 76 60 C60 62 30 62 9 57.5 Z" fill="#fff" opacity=".8"/>
      ${k.line('M42 48 C40 52 40 56 42 59 M46 48 C44 52 44 56 46 59 M50 48 C48 52 48 56 50 59', ink, 1.4, 0.55)}
      ${k.part(c, 'M40 64 C36 70 32 76 26 80 C36 80 44 74 48 66 Z', fin, 'slate')}
      <path d="M15 59.5 L16.5 62.5 L18 60.2 Z M20 60.8 L21.5 63.6 L23 61.2 Z M25 61.4 L26.5 64 L28 61.5 Z" fill="#fff"/>
      ${k.legs('M12 58 C18 61 26 62.5 33 60', ink, 1.8)}
      ${k.eye(25, 51, 2.3, ink)}
      ${k.legs('M21 48 L29 49.5', ink, 1.8)}</g>`;
  },
};
