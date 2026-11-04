const k = require('../src/parts/critter');
// A grey goose standing tall, neck up, orange bill, wings folded with pale edges.
const body = 'M28 22 C28 15 33 11 38 11 C44 11 47 16 46 22 C45 30 42 38 44 46 C50 46 60 44 72 46 L86 44 C84 52 80 58 76 60 C74 72 64 78 52 78 C40 78 32 72 32 62 C32 54 34 48 34 42 C34 36 34 30 32 26 C31 24 29 24 28 22 Z';
module.exports = {
  id: 'goose',
  name: 'Goose',
  emoji: '🪿',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['goose', 'honk', 'bird', 'farm', 'chaos'],
  tone: 'grey',
  body,
  shine: [34, 16, -40],
  shineSize: [4.5, 2.2],
  draw(c) {
    const leg = '#C25A00';
    return `${k.foot(48, 86, 76, -1, leg, 3.2)}${k.foot(60, 86, 76, -1, leg, 3.2)}
      <path d="${body}" fill="${c.radial('a', 'grey', 0.35, 0.2)}"/>
      <path d="M33 62 C35 72 42 78 52 78 C60 78 66 76 70 71 C60 72 48 70 38 65 C36 64 34 63 33 62 Z" fill="#fff" opacity=".7"/>
      <path d="M46 52 C58 47 74 48 84 46 C80 54 72 60 62 62 C54 63 48 60 46 56 Z" fill="${c.radial('w', 'slate', 0.4, 0.3)}" stroke="#1E2A3D" stroke-opacity=".5" stroke-width="1.1"/>
      ${k.line('M50 57 C58 57 66 55 76 51 M54 61 C60 60 66 58 72 56', '#F2F2F7', 1.3, 0.75)}
      ${k.part(c, 'M30 16 L17 19.5 C15.5 20 15.5 23 17 23.5 L31 24 Z', c.radial('bill', 'orange', 0.4, 0.3), 'orange')}
      ${k.line('M17 21.5 L29 21', '#6B0F00', 1, 0.6)}
      ${k.eye(37, 17, 2.4)}`;
  },
};
