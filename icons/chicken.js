const k = require('../src/parts/critter');
// A white hen in profile facing left: red comb and wattle, tail cocked up behind.
const body = 'M24 37 C22 27 28 19 36 19 C44 19 48 25 48 33 C50 41 56 43 63 39 L71 25 C75 22 80 25 79 31 C80 43 80 53 76 63 C72 73 61 78 49 78 C35 78 25 71 23 60 C22 52 25 45 24 37 Z';
module.exports = {
  id: 'chicken',
  name: 'Chicken',
  emoji: '🐔',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['chicken', 'hen', 'farm', 'poultry', 'egg'],
  tone: 'white',
  body,
  shine: [31, 25, -40],
  draw(c) {
    const red = c.radial('comb', 'red', 0.3, 0.2);
    const leg = '#8A4A00';
    return `${k.foot(42, 85, 76, -1, leg)}${k.foot(55, 85, 76, -1, leg)}
      ${k.part(c, 'M29 22 C26 15 31 11 34 15 C34 8 41 7 41 13 C43 8 50 10 47 17 C46 21 40 22 36 21 Z', red, 'red')}
      <path d="${body}" fill="${c.radial('a', 'white', 0.35, 0.25)}"/>
      <path d="M45 50 C55 44 68 48 70 58 C66 68 55 71 45 67 C42 61 42 55 45 50 Z" fill="${c.radial('w', 'white', 0.3, 0.2)}" stroke="#8C83AD" stroke-opacity=".45" stroke-width="1.1"/>
      ${k.line('M48 61 C54 63 60 62 65 59 M47 56 C53 57 58 56 63 53', '#8C83AD', 1.3, 0.5)}
      ${k.part(c, 'M24.5 31 L14 35 L24.5 39 Z', c.radial('beak', 'gold', 0.3, 0.2), 'gold')}
      ${k.part(c, 'M24 40 C27 40 29 43 28 48 C27 52 23 53 22 49 C21 46 22 42 24 40 Z', red, 'red')}
      ${k.eye(33, 29, 2.9)}`;
  },
};
