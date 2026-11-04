const s = require('../src/parts/sign');
const body = s.question(48, 12);
module.exports = {
  id: 'red-question-mark',
  name: 'Red Question Mark',
  emoji: '❓',
  group: 'Symbols',
  subgroup: 'punctuation',
  tags: ['question', 'help', 'what', 'punctuation'],
  tone: 'red',
  body,
  shine: [38.5, 26, -55],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.22)}"/>`;
  },
};
