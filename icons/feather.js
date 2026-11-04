const k = require('../src/parts/critter');
// A long tail feather laid on the diagonal, the vane split twice, the quill running through it.
const body = 'M28 74 C26 56 36 34 56 22 C64 17 74 13 80 12 C80 20 76 32 70 42 L63 44 L67 48 C61 58 52 68 40 72 L35 70 L37 75 C34 76 31 76 28 74 Z';
module.exports = {
  id: 'feather',
  name: 'Feather',
  emoji: '🪶',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['feather', 'light', 'quill', 'plume', 'soft'],
  tone: 'teal',
  body,
  shine: [38, 44, -55],
  draw(c) {
    const quill = c.linear('quill', 'cream', [0, 1, 1, 0], 0, 2);
    return `<path d="${body}" fill="${c.radial('a', 'teal', 0.3, 0.3)}"/>
      ${k.line('M40 58 L33 50 M47 48 L41 38 M55 38 L50 28 M63 29 L60 21 M47 62 L55 60 M54 52 L64 49 M62 42 L70 38', '#003A33', 1.2, 0.4)}
      ${k.legs('M17 86 C30 66 50 38 79 13', '#5E3A00', 3.4)}
      ${k.legs('M17 86 C30 66 50 38 79 13', quill, 2)}
      ${k.line('M26 78 C22 76 21 72 22 69 M29 76 C27 80 24 81 21 81', '#00796B', 1.2, 0.8)}`;
  },
};
