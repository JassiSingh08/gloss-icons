const k = require('../src/parts/critter');
// A mosquito hovering, facing left: slim striped body, glassy wings, long needle and thread-thin legs.
const raw = 'M18 40 C18 35 23 32 28 33 C34 32 40 32 46 35 C52 38 56 42 60 44 C72 48 82 52 88 58 C90 63 86 65 80 63 C68 60 56 56 46 52 C40 52 34 49 30 46 C24 46 18 45 18 40 Z';
module.exports = {
  id: 'mosquito',
  name: 'Mosquito',
  emoji: '🦟',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['mosquito', 'bite', 'itch', 'insect', 'buzz'],
  tone: 'slate',
  body: raw,
  shine: [28, 36, -10],
  shineSize: [5, 1.8],
  draw(c) {
    const ink = '#0E1626';
    const leg = '#4D5F7A';
    const wing = c.radial('wing', 'sky', 0.3, 0.2);
    c.def(`<clipPath id="${c.id('in')}"><path d="${raw}"/></clipPath>`);
    return `${k.legs('M36 47 C28 56 20 62 12 84 M41 50 C38 62 34 72 32 85 M46 52 C54 60 60 70 64 85 M51 53 C62 58 74 68 84 84', leg, 2.6)}
      ${k.part(c, 'M40 36 C44 22 56 12 70 12 C78 14 76 24 66 30 C58 35 50 38 40 36 Z', wing, 'sky', ' opacity=".75"')}
      ${k.part(c, 'M46 38 C56 28 72 26 82 30 C86 36 80 40 70 42 C62 43 54 42 46 38 Z', wing, 'sky', ' opacity=".7"')}
      ${k.legs('M19 42 L4 54', leg, 2)}
      <path d="${raw}" fill="${c.radial('a', 'slate', 0.3, 0.25)}"/>
      <g clip-path="url(#${c.id('in')})">${k.line('M60 40 L55 52 M68 44 L63 56 M76 47 L71 59 M84 51 L79 63', '#F2F2F7', 2.4, 0.75)}</g>
      ${k.legs('M24 34 L16 22 M27 33 L24 21', leg, 1.6)}
      ${k.eye(24, 38.5, 2.8, ink)}`;
  },
};
