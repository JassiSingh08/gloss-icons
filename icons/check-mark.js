const g = require('../src/parts/glyph');

const body = g.band([[18, 48], [37, 68], [79, 22]], 15);
module.exports = {
  id: 'check-mark',
  name: 'Check Mark',
  emoji: '✔️',
  group: 'Symbols',
  subgroup: 'other-symbol',
  tags: ['check', 'tick', 'done', 'yes', 'correct'],
  tone: 'green',
  body,
  shine: [22, 47, 45],
  shineSize: [5, 2.2],
  draw(c) {
    return `<path d="${body}" fill="${c.linear('a', 'green', [0, 0, 1, 1], 0, 2)}"/>`;
  },
};
