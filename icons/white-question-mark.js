const s = require('../src/parts/sign');
const body = s.question(48, 12);
module.exports = {
  id: 'white-question-mark',
  name: 'White Question Mark',
  emoji: '❔',
  group: 'Symbols',
  subgroup: 'punctuation',
  tags: ['question', 'outline', 'what', 'punctuation'],
  tone: 'white',
  body,
  shine: [38.5, 26, -55],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.22)}"/>`;
  },
};
