const k = require('../src/parts/critter');
// A turtle walking right: domed shell with plates is the body; head, legs and tail come out from under it.
const body = 'M16 64 C16 42 32 28 50 28 C68 28 82 42 82 64 C82 67 80 68 77 68 L19 68 C17 68 16 67 16 64 Z';
module.exports = {
  id: 'turtle',
  name: 'Turtle',
  emoji: '🐢',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['turtle', 'tortoise', 'slow', 'shell', 'reptile'],
  tone: 'green',
  body,
  shine: [30, 40, -45],
  draw(c) {
    const skin = c.radial('skin', 'olive', 0.3, 0.2);
    const ink = '#053A1A';
    return `${k.part(c, 'M74 60 C76 50 84 46 90 48 C95 50 96 58 92 62 C88 66 82 66 76 64 Z', skin, 'olive')}
      ${k.part(c, 'M18 64 L10 70 L20 68 Z', skin, 'olive')}
      ${k.part(c, 'M24 64 L37 64 C35 72 31 78 27 82 C23 85 16 85 17 80 C20 76 22 70 24 64 Z', skin, 'olive')}
      ${k.part(c, 'M60 64 L73 64 C75 70 78 76 81 80 C82 84 76 86 71 84 C67 78 63 72 60 64 Z', skin, 'olive')}
      <path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.25)}"/>
      <path d="M16 62 L82 62 C82 66 81 68 77 68 L19 68 C17 68 16 66 16 62 Z" fill="${c.radial('rim', 'lime', 0.4, 0.2)}"/>
      ${k.line('M41 38 L57 38 L63 50 L57 62 M41 38 L35 50 L41 62 M35 50 L19 50 M63 50 L79 50 M41 38 L36 31 M57 38 L62 31 M35 50 L41 62 L57 62', ink, 1.8, 0.55)}
      ${k.line('M26 62 L26 68 M38 62 L38 68 M50 62 L50 68 M62 62 L62 68 M74 62 L74 68', ink, 1.2, 0.4)}
      ${k.eye(86.5, 53.5, 2.4, '#1A2003')}
      ${k.line('M87 59.5 C89.5 60 91.5 59 92.5 57.5', '#1A2003', 1.4, 0.8)}`;
  },
};
