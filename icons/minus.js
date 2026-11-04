const s = require('../src/parts/sign');
const body = s.bar(17, 41, 79, 59, 4);
module.exports = {
  id: 'minus',
  name: 'Minus',
  emoji: '➖',
  group: 'Symbols',
  subgroup: 'math',
  tags: ['minus', 'subtract', 'math', 'negative'],
  tone: 'blue',
  body,
  shine: [28, 45, -8],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
