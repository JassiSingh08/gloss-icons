const k = require('../src/parts/critter');
// A seal hauled out, head raised and looking at you: dark wet eyes, whiskers, flippers tucked.
const body = 'M16 40 C16 30 24 24 32 24 C40 24 46 30 46 38 C50 50 62 60 76 66 L86 62 C90 60 92 64 90 68 L86 76 C84 80 80 80 78 78 C70 82 56 84 42 84 C28 84 20 76 20 64 C20 56 22 50 20 46 C18 44 16 42 16 40 Z';
module.exports = {
  id: 'seal',
  name: 'Seal',
  emoji: '🦭',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['seal', 'sea lion', 'ocean', 'arctic', 'blubber'],
  tone: 'grey',
  body,
  shine: [26, 30, -40],
  shineSize: [6, 2.6],
  draw(c) {
    const ink = '#1A1A24';
    return `<path d="${body}" fill="${c.radial('a', 'grey', 0.3, 0.2)}"/>
      ${[[50, 60, 2], [58, 66, 1.6], [44, 70, 1.8], [64, 72, 1.4], [36, 56, 1.4]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#6E6E80" opacity=".5"/>`).join('')}
      <path d="${k.ellipse(23, 41, 7.5, 5.5, -10)}" fill="#F2F2F7" opacity=".55"/>
      ${k.part(c, 'M32 72 C38 74 44 80 46 85 C38 85 32 80 32 72 Z', c.radial('fl', 'grey', 0.5, 0.3), 'grey')}
      <path d="M16 38.5 C16 36.5 19 36 20 37.5 C21 39 19 40.5 17 40 Z" fill="${ink}"/>
      ${k.line('M22 42 L11 41 M22 43.5 L12 46 M24 44 L16 50', ink, 0.9, 0.6)}
      ${k.legs('M18.5 44 C20 45.5 22 45.5 24 44.5', ink, 1.4)}
      ${k.eye(30.5, 33, 3.4, ink)}`;
  },
};
