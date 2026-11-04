const s = require('../src/parts/sign');
const body = `${s.bar(17, 29, 79, 45, 4)} ${s.bar(17, 55, 79, 71, 4)}`;
module.exports = {
  id: 'heavy-equals-sign',
  name: 'Heavy Equals Sign',
  emoji: '🟰',
  group: 'Symbols',
  subgroup: 'math',
  tags: ['equals', 'equal', 'math', 'same', 'result'],
  tone: 'blue',
  body,
  shine: [28, 33, -8],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'blue', 0.3, 0.22)}"/>`;
  },
};
