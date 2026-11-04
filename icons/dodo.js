const k = require('../src/parts/critter');
// The dodo: big slate body, a heavy hooked beak, a stub of a wing and a curly white tail.
const body = 'M28 26 C28 18 34 14 40 14 C48 14 52 20 52 28 C52 32 52 34 54 34 C68 34 80 44 80 58 C80 70 70 78 56 78 C44 78 34 72 32 62 C30 54 32 46 30 40 C28 36 28 32 28 26 Z';
module.exports = {
  id: 'dodo',
  name: 'Dodo',
  emoji: '🦤',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['dodo', 'extinct', 'bird', 'mauritius', 'flightless'],
  tone: 'slate',
  body,
  shine: [35, 20, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const plume = c.radial('plume', 'white', 0.3, 0.2);
    const leg = '#B08A00';
    return `${k.part(c, k.ellipse(80, 45, 7, 4.5, -35), plume, 'white')}
      ${k.part(c, k.ellipse(84, 52, 6, 4, 5), plume, 'white')}
      ${k.foot(50, 85, 76, -1, leg, 3.2)}${k.foot(62, 85, 76, -1, leg, 3.2)}
      <path d="${body}" fill="${c.radial('a', 'slate', 0.35, 0.25)}"/>
      <path d="M54 46 C62 44 69 49 69 56 C65 61 58 60 55 56 C53 53 52 49 54 46 Z" fill="${c.radial('w', 'slate', 0.7, 0.7)}" stroke="#1E2A3D" stroke-opacity=".5" stroke-width="1.1"/>
      ${k.part(c, 'M31 21 C23 19 13 23 11 31 C10 37 13 39 15 36 C17 31 23 31 31 33 Z', c.radial('beak', 'sand', 0.3, 0.2), 'sand')}
      <path d="M11.5 32 C11 37 13 39 15 36 C15.5 34.5 16 33.5 17 32.5 C15 31.5 13 31.5 11.5 32 Z" fill="#5C4420"/>
      ${k.line('M16 33.5 C21 32 26 32.5 30 33', '#5C4420', 1.1, 0.7)}
      ${k.eye(39.5, 23, 2.9, '#0E1626')}
      ${k.line('M35 18.5 L43 20', '#0E1626', 2, 0.8)}`;
  },
};
