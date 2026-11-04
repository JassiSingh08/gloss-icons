const s = require('../src/parts/sign');

module.exports = {
  id: 'prohibited',
  name: 'Prohibited',
  emoji: '🚫',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['prohibited', 'forbidden', 'not allowed', 'banned', 'no'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    return s.noSign(c, () => '');
  },
};
