const b = require('../src/parts/face-b');

// An arcade critter moulded from chunky pixels with rounded corners: antennae, a heavy brow,
// glowing slit eyes and splayed feet, on an 11×9 grid.
const GRID = [
  '..#.....#..',
  '..#.....#..',
  '..#######..',
  '.#########.',
  '###########',
  '###########',
  '###########',
  '.##.###.##.',
  '##.......##',
];
const S = 7;
const X0 = 9.5;
const Y0 = 20;
const body = b.pixels(GRID, S, X0, Y0, 2.7);
const cell = (k, row) => [X0 + k * S, Y0 + row * S];
module.exports = {
  id: 'alien-monster',
  name: 'Alien Monster',
  emoji: '👾',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['space invader', 'arcade', 'retro', 'gaming', 'alien'],
  tone: 'purple',
  body,
  shine: [31, 37.5, -12],
  shineSize: [6, 2],
  draw(c) {
    const ink = '#12002E';
    const fill = c.radial('a', 'purple', 0.3, 0.22);
    const eye = c.linear('eye', 'teal', [0, 0, 0, 1], 0, 1);
    const eyes = [2, 7].map((k) => {
      const [x, y] = cell(k, 4);
      return `<rect x="${x + 0.6}" y="${y - 0.6}" width="${2 * S - 1.2}" height="${S + 1.2}" rx="3" fill="${ink}"/>
        <path d="M${x + 2.4} ${y + 2.2} L${x + 2 * S - 2.4} ${y + (k === 2 ? 1.2 : 2.2)} L${x + 2 * S - 2.4} ${y + 5} Q${x + 2 * S - 2.4} ${y + 6.8} ${x + 2 * S - 4} ${y + 6.8} L${x + 4} ${y + 6.8} Q${x + 2.4} ${y + 6.8} ${x + 2.4} ${y + 5} Z" fill="${eye}"/>
        <circle cx="${x + 4.4}" cy="${y + 4.3}" r="0.9" fill="#fff" opacity=".9"/>`;
    }).join('');
    const [mx, my] = cell(3.5, 6);
    return `<path d="${body}" fill="${fill}"/>
      <path d="M${X0 + 2 * S + 1} ${Y0 + 4 * S - 0.8} L${X0 + 9 * S - 1} ${Y0 + 4 * S - 0.8}" stroke="${ink}" stroke-opacity=".25" stroke-width="1.4" stroke-linecap="round"/>
      ${eyes}
      <rect x="${mx}" y="${my + 1}" width="${4 * S}" height="${S - 2.4}" rx="2.3" fill="${ink}"/>
      <path d="M${mx + 4} ${my + 1} L${mx + 6} ${my + 4} L${mx + 8} ${my + 1} Z M${mx + 4 * S - 4} ${my + 1} L${mx + 4 * S - 6} ${my + 4} L${mx + 4 * S - 8} ${my + 1} Z" fill="#FFF8EC"/>
      <circle cx="${X0 + 2.5 * S}" cy="${Y0 + 0.5 * S}" r="1.4" fill="#fff" opacity=".55"/><circle cx="${X0 + 8.5 * S}" cy="${Y0 + 0.5 * S}" r="1.4" fill="#fff" opacity=".4"/>`;
  },
};
