const k = require('../src/parts/critter');
// A T-Rex striding left: big head with a toothy grin, tiny arms, heavy legs, tail held out behind.
const body = 'M14 30 C14 22 20 16 30 16 L42 16 C48 16 52 20 52 26 C52 30 54 34 58 38 C68 42 76 48 84 56 L94 64 C86 67 78 66 72 64 C70 68 68 71 66 74 L68 84 L56 84 L56 77 C50 76 46 72 44 66 C42 60 42 54 44 48 C40 46 36 44 34 42 L20 42 C16 42 14 40 14 38 Z';
module.exports = {
  id: 't-rex',
  name: 'T-Rex',
  emoji: '🦖',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['dinosaur', 't-rex', 'tyrannosaurus', 'roar', 'prehistoric'],
  tone: 'green',
  body,
  shine: [24, 21, -25],
  shineSize: [6, 2.4],
  draw(c) {
    const ink = '#053A1A';
    return `<path d="M62 68 L74 66 L80 84 L70 84 Z" fill="${c.linear('far', 'green', [0, 0, 0, 1], 2, 3)}"/>
      <path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.25)}"/>
      <path d="M20 42 L34 42 C36 44 40 46 44 48 C42 54 42 60 44 66 C38 62 34 54 30 48 C26 46 22 45 20 42 Z" fill="${c.ramp('lime')[0]}" opacity=".35"/>
      ${k.legs('M14.5 35 L35 35 C38 35 40 37 41 39', ink, 2)}
      <path d="M18 35 L19.5 38.5 L21 35 Z M24 35 L25.5 38.5 L27 35 Z M30 35 L31.5 38.2 L33 35 Z M20 35 L21.5 32 L23 35 Z M27 35 L28.5 32 L30 35 Z" fill="#FFF8EC"/>
      ${k.legs('M50 52 L44 56 L44 59', ink, 3.2)}
      <circle cx="18" cy="23" r="1.2" fill="${ink}"/>
      ${k.irisEye(38, 25, 3, '#FFC21A', ink, 0.5)}
      ${k.legs('M33 20.5 L43 22.5', ink, 2.6)}
      ${k.line('M58 72 L58 84 M62 73 L62 84', ink, 1.2, 0.5)}`;
  },
};
