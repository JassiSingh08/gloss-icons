const k = require('../src/parts/critter');
// A mallard drake sitting, facing left: green head, white collar, chestnut breast, a flash of blue on the wing.
const body = 'M24 34 C24 25 30 20 37 20 C45 20 50 26 49 34 C49 40 46 44 46 48 C52 50 60 48 70 44 L82 40 C84 46 82 52 78 56 C78 70 68 80 52 80 C36 80 26 72 26 62 C26 56 30 52 32 48 C27 44 24 40 24 34 Z';
module.exports = {
  id: 'duck',
  name: 'Duck',
  emoji: '🦆',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['duck', 'mallard', 'pond', 'bird', 'quack'],
  tone: 'grey',
  body,
  shine: [30, 26, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'grey', 0.4, 0.3)}"/>
      <path d="M32 49 C37 51 42 51 46.5 49 C47 56 46 63 43 70 C40 76 34 76 30 72 C27 68 26 64 26 60 C26 56 29 52 32 49 Z" fill="${c.radial('chest', 'brown', 0.4, 0.2)}"/>
      <path d="M24 34 C24 25 30 20 37 20 C45 20 50 26 49 34 C49 40 46 44 46 47 C42 49 36 49 32 47 C27 44 24 40 24 34 Z" fill="${c.radial('head', 'green', 0.35, 0.25)}"/>
      ${k.legs('M32 48.5 C37 50.5 42 50.5 46.5 48.5', '#fff', 2.4)}
      <path d="M48 57 C58 51 72 51 78 57 C74 67 62 71 50 69 C47 65 46 61 48 57 Z" fill="${c.radial('w', 'slate', 0.4, 0.3)}" stroke="#1E2A3D" stroke-opacity=".45" stroke-width="1.1"/>
      <path d="M60 62 L72 59.5 L70 64.5 L58 66.5 Z" fill="${c.linear('spec', 'blue', [0, 0, 1, 1], 0, 2)}"/>
      ${k.legs('M78 44 C81 41 83 43 81 45', '#14141F', 2.2)}
      ${k.part(c, 'M27 30 C21 30 15 32 13 35 C13 38 17 39 27 38 Z', c.radial('bill', 'yellow', 0.3, 0.2), 'yellow')}
      ${k.eye(36, 29, 2.8, '#0A1F10')}`;
  },
};
