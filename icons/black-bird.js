const k = require('../src/parts/critter');
// A crow in profile facing left: black lacquer, heavy beak, a pale eye so it doesn't vanish.
const body = 'M24 36 C24 26 31 20 40 20 C48 20 53 26 54 33 C62 38 72 46 78 55 L90 68 C88 71 84 71 82 70 L72 68 C66 76 56 80 46 78 C36 76 30 68 30 58 C30 51 30 47 28 43 C26 41 24 39 24 36 Z';
module.exports = {
  id: 'black-bird',
  name: 'Black Bird',
  emoji: '🐦‍⬛',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['crow', 'raven', 'blackbird', 'bird', 'goth'],
  tone: 'black',
  body,
  shine: [34, 26, -35],
  draw(c) {
    const leg = '#4A4A5E';
    return `${k.foot(46, 86, 76, -1, leg)}${k.foot(56, 86, 76, -1, leg)}
      <path d="${body}" fill="${c.radial('a', 'black', 0.3, 0.2)}"/>
      <path d="M42 50 C54 44 68 48 76 58 C70 66 58 70 44 68 C40 62 39 55 42 50 Z" fill="${c.radial('w', 'black', 0.6, 0.6)}" stroke="#8C8CA8" stroke-opacity=".35" stroke-width="1.1"/>
      ${k.line('M47 62 C56 64 64 63 71 60 M45 56 C53 57 60 56 66 53', '#9A9AB8', 1.2, 0.4)}
      ${k.part(c, 'M27 29 C20 30 14 33 10 37 C16 38 22 39 28 41 Z', c.linear('beak', 'black', [0, 0, 0, 1], 0, 2), 'black')}
      ${k.line('M12 37 L26 36', '#05050A', 1, 0.6)}
      ${k.irisEye(38, 29, 3.4, '#C9CCE0', '#05050A', 0.6)}
      ${k.line('M33.5 25 L42 26.5', '#05050A', 2.2, 0.9)}`;
  },
};
