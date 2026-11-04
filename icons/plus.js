const s = require('../src/parts/sign');
const body = s.cross(48, 50, 31, 9);
module.exports = {
  id: 'plus',
  name: 'Plus',
  emoji: '➕',
  group: 'Symbols',
  subgroup: 'math',
  tags: ['plus', 'add', 'math', 'positive'],
  tone: 'blue',
  body,
  shine: [41.5, 25, -70],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
