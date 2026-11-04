const k = require('../src/parts/critter');
// A crab front on, claws up: wide red shell, eyes on stalks, legs splayed to the ground.
const body = 'M16 60 C16 48 30 42 48 42 C66 42 80 48 80 60 C80 71 66 77 48 77 C30 77 16 71 16 60 Z';
const clawL = 'M9 31 C6 21 13 13 22 16 L19 23.5 L27 22 C27 30 21 36 15 36 C12 36 9.5 34 9 31 Z';
const mirror = (d) => d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (m, x, y) => `${k.n(96 - x)} ${y}`);
module.exports = {
  id: 'crab',
  name: 'Crab',
  emoji: '🦀',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['crab', 'beach', 'claws', 'sideways', 'cancer'],
  tone: 'red',
  body,
  shine: [30, 49, -20],
  draw(c) {
    const claw = c.radial('claw', 'red', 0.3, 0.2);
    const deep = '#8A0006';
    const legs = 'M22 66 L12 70 L8 80 M24 70 L16 76 L14 84 M72 70 L80 76 L82 84 M74 66 L84 70 L88 80';
    return `${k.legs(legs, '#3D0003', 5)}${k.legs(legs, deep, 3)}
      ${k.legs('M26 54 L20 44 L17 35 M70 54 L76 44 L79 35', '#3D0003', 6)}${k.legs('M26 54 L20 44 L17 35 M70 54 L76 44 L79 35', '#C40E0A', 4)}
      ${k.part(c, clawL, claw, 'red')}${k.part(c, mirror(clawL), claw, 'red')}
      ${k.legs('M40 44 L38 34 M56 44 L58 34', '#3D0003', 2.8)}
      <circle cx="38" cy="32" r="4.4" fill="#fff" stroke="#3D0003" stroke-width="1.1"/><circle cx="58" cy="32" r="4.4" fill="#fff" stroke="#3D0003" stroke-width="1.1"/>
      ${k.eye(38.8, 32.6, 2.2, '#2A0003')}${k.eye(57.2, 32.6, 2.2, '#2A0003')}
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.25)}"/>
      ${k.legs('M41 63 Q48 67 56 61.5', '#3D0003', 2.2)}
      ${[[32, 54], [64, 54], [48, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#FF7A62" opacity=".7"/>`).join('')}`;
  },
};
