const k = require('../src/parts/critter');
// A shrimp curled into a C: segmented back, fan tail tucked in, long feelers sweeping out.
const body = 'M72 30 C64 20 44 18 30 28 C18 38 16 58 26 70 C32 76 38 78 44 78 L52 72 C50 68 46 66 44 64 C36 58 34 46 40 38 C48 32 60 34 66 40 C70 38 72 34 72 30 Z';
module.exports = {
  id: 'shrimp',
  name: 'Shrimp',
  emoji: '🦐',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['shrimp', 'prawn', 'seafood', 'tempura', 'ocean'],
  tone: 'orange',
  body,
  shine: [36, 26, -30],
  draw(c) {
    const ink = '#6B0F00';
    const fan = c.radial('fan', 'orange', 0.3, 0.3);
    return `${k.legs('M70 31 C78 24 86 22 92 24 M70 34 C78 32 86 34 90 40', ink, 1.6)}
      ${k.part(c, 'M46 70 L54 82 C58 84 64 82 64 78 C62 74 58 72 52 70 Z', fan, 'orange')}
      ${k.part(c, 'M46 72 L38 84 C34 86 30 82 32 78 C36 74 40 72 46 70 Z', fan, 'orange')}
      ${k.legs('M44 44 L50 48 M41 50 L48 53 M41 56 L47 58 M44 61 L49 62', ink, 2.2)}
      <path d="${body}" fill="${c.radial('a', 'orange', 0.35, 0.25)}"/>
      ${k.line('M52 21 L52 33 M40 24 L44 35 M30 31 L38 39 M23 42 L35 46 M21 54 L34 53 M24 65 L36 60 M33 73 L41 65', '#E02A00', 1.6, 0.65)}
      ${k.legs('M68 38 L74 40', ink, 1.6)}
      ${k.eye(66, 30, 2.6, '#2A0600')}`;
  },
};
