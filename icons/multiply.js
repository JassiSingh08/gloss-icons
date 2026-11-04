const s = require('../src/parts/sign');
const body = s.cross(48, 50, 30, 8.6, 45);
module.exports = {
  id: 'multiply',
  name: 'Multiply',
  emoji: '✖️',
  group: 'Symbols',
  subgroup: 'math',
  tags: ['multiply', 'times', 'cross', 'math', 'cancel'],
  tone: 'blue',
  body,
  shine: [30, 33, 45],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
