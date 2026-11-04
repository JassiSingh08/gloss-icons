const s = require('../src/parts/sign');
const body = `${s.bar(17, 41.5, 79, 58.5, 4)} ${s.dot(48, 27.5, 8)} ${s.dot(48, 72.5, 8)}`;
module.exports = {
  id: 'divide',
  name: 'Divide',
  emoji: '➗',
  group: 'Symbols',
  subgroup: 'math',
  tags: ['divide', 'division', 'math', 'split'],
  tone: 'blue',
  body,
  shine: [28, 46, -8],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
