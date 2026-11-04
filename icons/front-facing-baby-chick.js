const k = require('../src/parts/critter');
// Head and round body as one silhouette, wings out at the sides, looking straight at you.
const body = 'M48 17 C60 17 66 25 66 35 C66 39 65 42 63 44 C72 49 77 57 77 66 C77 77 64 83 48 83 C32 83 19 77 19 66 C19 57 24 49 33 44 C31 42 30 39 30 35 C30 25 36 17 48 17 Z';
module.exports = {
  id: 'front-facing-baby-chick',
  name: 'Front-Facing Baby Chick',
  emoji: '🐥',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['chick', 'baby', 'bird', 'cute', 'hello'],
  tone: 'yellow',
  body,
  shine: [38, 25, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const ink = '#3D1A00';
    const wing = c.radial('wing', 'gold', 0.3, 0.2);
    const feet = c.radial('feet', 'orange', 0.4, 0.3);
    return `${k.legs('M45 17 C43 12 44 9 47 8 M49 17 C51 12 54 11 56 12', '#D9A400', 2.6)}
      ${k.part(c, 'M23 58 C15 58 10 63 9 70 C14 70 19 68 23 66 Z', wing, 'gold')}
      ${k.part(c, 'M73 58 C81 58 86 63 87 70 C82 70 77 68 73 66 Z', wing, 'gold')}
      <path d="${body}" fill="${c.radial('a', 'yellow', 0.35, 0.2)}"/>
      <path d="M33 70 C38 74 43 76 48 76 C53 76 58 74 63 70" stroke="#D9A400" stroke-opacity=".55" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      ${k.eye(41.5, 32, 2.9, ink)}${k.eye(54.5, 32, 2.9, ink)}
      ${k.part(c, 'M43 38.5 Q48 35.5 53 38.5 L48 44 Z', c.radial('beak', 'orange', 0.4, 0.2), 'orange')}
      ${k.part(c, 'M33 82 C33 79 36 78 40 78 C44 78 46 80 45 83 Z', feet, 'orange')}
      ${k.part(c, 'M63 82 C63 79 60 78 56 78 C52 78 50 80 51 83 Z', feet, 'orange')}`;
  },
};
