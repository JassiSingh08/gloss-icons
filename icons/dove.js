const k = require('../src/parts/critter');
// A dove in flight facing left, near wing raised as part of the silhouette, an olive sprig in its beak.
const raw = 'M18 52 C18 45 23 41 29 41 C34 41 37 44 39 47 C42 42 44 34 50 26 C56 19 66 16 80 15 C77 21 74 26 70 30 C75 30 79 32 82 34 C77 38 72 40 68 42 C73 43 77 45 80 48 C73 52 67 54 62 56 L82 60 C86 63 88 68 86 72 C76 72 68 70 62 70 C52 76 40 76 32 70 C26 66 22 60 22 56 C20 55 18 54 18 52 Z';
const body = k.move(raw, 0, 8);
module.exports = {
  id: 'dove',
  name: 'Dove',
  emoji: '🕊️',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['dove', 'peace', 'bird', 'hope', 'wedding'],
  tone: 'ivory',
  body,
  shine: [26, 54, -30],
  shineSize: [5, 2.4],
  draw(c) {
    const leaf = c.radial('leaf', 'olive', 0.3, 0.2);
    const edge = '#6E61A8';
    return `<g transform="translate(0 8)">${k.part(c, 'M44 42 C46 32 52 24 61 19 C60 27 57 34 52 42 Z', c.radial('far', 'ivory', 0.6, 0.6), 'ivory')}
      <path d="${raw}" fill="${c.radial('a', 'ivory', 0.3, 0.3)}"/>
      ${k.line('M45 52 L70 30.5 M50 54 L68 42.5 M56 58 L80 48.5', edge, 1.2, 0.5)}
      ${k.line('M64 64 L84 66', edge, 1.2, 0.45)}
      ${k.legs('M16 53 C12 58 12 64 15 70', '#5A6B14', 1.8)}
      ${k.part(c, k.ellipse(11.5, 61, 4.4, 2, 70), leaf, 'olive')}
      ${k.part(c, k.ellipse(19, 64, 4.4, 2, -60), leaf, 'olive')}
      ${k.part(c, k.ellipse(12.5, 69, 4, 1.9, 60), leaf, 'olive')}
      ${k.part(c, 'M19.5 48.5 L11 51.5 L19.5 54.5 Z', c.radial('beak', 'gold', 0.3, 0.2), 'gold')}
      ${k.eye(28, 47, 2.6, '#1A0F3D')}</g>`;
  },
};
