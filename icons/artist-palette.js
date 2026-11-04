const ball = require('../src/parts/ball');

// The thumb hole runs the other way round so it stays open under the clip's nonzero rule.
const board = 'M46 14 C68 13 86 26 85 44 C84 56 74 58 66 57 C59 56.5 56 61 59 67 C62 73 60 82 47 83 C26 85 10 70 11 50 C12 29 27 15 46 14 Z';
const hole = 'M33 63 C30 63 27.5 65.5 27.5 68.5 C27.5 71.5 30 74 33 74 C36 74 38.5 71.5 38.5 68.5 C38.5 65.5 36 63 33 63 Z';
const body = [board, hole];

module.exports = {
  id: 'artist-palette',
  name: 'Artist Palette',
  emoji: '🎨',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['art', 'paint', 'painting', 'creative', 'artist', 'colour'],
  tone: 'brown',
  body,
  shine: [26, 30, -50],
  draw(c) {
    const blob = (x, y, r, pal, k) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.85}" fill="${c.radial('p' + k, pal, 0.3, 0.25)}"/><ellipse cx="${x - r * 0.35}" cy="${y - r * 0.35}" rx="${r * 0.3}" ry="${r * 0.18}" fill="#fff" opacity=".8" transform="rotate(-30 ${x - r * 0.35} ${y - r * 0.35})"/>`;
    const brush = ball.band([[88, 86], [52, 46]], 4.4);
    return `<path d="${body.join(' ')}" fill="${c.radial('a', 'brown', 0.32, 0.22)}" fill-rule="evenodd"/>
      ${blob(30, 34, 6, 'red', 1)}${blob(48, 26, 6, 'gold', 2)}${blob(67, 31, 6, 'blue', 3)}${blob(72, 47, 5, 'green', 4)}${blob(23, 52, 5.4, 'white', 5)}${blob(48, 72, 5, 'purple', 6)}
      <path d="${brush}" fill="${c.linear('brush', 'black', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M52 46 L48 41 C44 36 45 32 47 31 C51 31 55 35 57 41 Z" fill="${c.radial('tip', 'blue', 0.3, 0.3)}"/>
      <path d="M50.5 44.5 L55 49 L57.5 46.5 L53 42 Z" fill="${c.linear('ferrule', 'silver', [0, 0, 1, 1], 0, 2)}"/>`;
  },
};
