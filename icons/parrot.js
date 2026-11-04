const k = require('../src/parts/critter');
// A scarlet macaw perched facing left: big ivory hook of a beak, white face, yellow-and-blue wing, long tail.
const body = 'M28 36 C27 26 33 19 42 19 C51 19 57 25 57 34 C61 42 64 50 64 58 L74 84 L62 84 L54 70 C46 70 38 64 36 56 C34 50 32 46 30 42 C29 40 28 38 28 36 Z';
module.exports = {
  id: 'parrot',
  name: 'Parrot',
  emoji: '🦜',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['parrot', 'macaw', 'tropical', 'bird', 'talk'],
  tone: 'red',
  body,
  shine: [36, 24, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const blue = c.radial('blue', 'blue', 0.3, 0.2);
    return `${k.legs('M18 75 C34 72 52 72 76 74', '#331805', 5.4)}
      ${k.legs('M18 75 C34 72 52 72 76 74', c.linear('branch', 'brown', [0, 0, 0, 1], 0, 2), 3.6)}
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.25)}"/>
      <path d="M58 64 L74 84 L62 84 L55 71 Z" fill="${blue}"/>
      <path d="M46 40 C54 40 60 48 62 58 L68 76 C60 72 52 64 48 56 C45 50 44 44 46 40 Z" fill="${blue}" stroke="#001E4D" stroke-opacity=".45" stroke-width="1.1"/>
      <path d="M46 40 C52 40 56 43 58 48 C54 49 49 48 45 45.5 Z" fill="${c.radial('band', 'gold', 0.3, 0.2)}"/>
      ${k.line('M50 54 L62 70 M53 50 L60 60', '#001E4D', 1.2, 0.5)}
      <path d="${k.ellipse(38.5, 30, 6.5, 5.5)}" fill="#FFF4EE"/>
      ${k.line('M34 33 L39 32.5 M35 35.5 L40 35', '#E3120B', 0.9, 0.6)}
      ${k.part(c, 'M30 37 C26 38 23 40 23 43 C26 44.5 29.5 42.5 32 41 Z', '#2E2E3D', 'black')}
      ${k.part(c, 'M31 26 C22 24 15 30 15 38 C15 43 18 45 19 42 C20 37 24 35 32 37 Z', c.radial('beak', 'cream', 0.3, 0.2), 'cream')}
      ${k.eye(39.5, 29, 2.5)}
      ${k.legs('M44 70 L42 74 M50 71 L48 74.5', '#2E2E3A', 2.6)}`;
  },
};
