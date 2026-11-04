const { turn } = require('../src/parts/ball');

// A square piece with a tab on top and right, a slot on the left and bottom.
const body = turn('M20 28 L39 28 C42 28 42 25 40 23 C35 18 39 11 48 11 C57 11 61 18 56 23 C54 25 54 28 57 28 L76 28 L76 47 C76 50 79 50 81 48 C86 43 91 47 91 56 C91 65 86 69 81 64 C79 62 76 62 76 65 L76 84 L57 84 C54 84 54 81 56 79 C61 74 57 67 48 67 C39 67 35 74 40 79 C42 81 42 84 39 84 L20 84 L20 65 C20 62 23 62 25 64 C30 69 35 65 35 56 C35 47 30 43 25 48 C23 50 20 50 20 47 Z', { s: 0.95, ox: 55, oy: 48, x: 51, y: 49 });
module.exports = {
  id: 'puzzle-piece',
  name: 'Puzzle Piece',
  emoji: '🧩',
  group: 'Activities',
  subgroup: 'game',
  tags: ['puzzle', 'jigsaw', 'piece', 'solve', 'fit'],
  tone: 'green',
  body,
  shine: [36, 21, -25],
  shineSize: [6, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.linear('a', 'green', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${body}" fill="none" stroke="#A6F07A" stroke-opacity=".5" stroke-width="1.6" transform="translate(.8 1)"/>`;
  },
};
