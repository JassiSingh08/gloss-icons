const s = require('../src/parts/sign');
const body = `${s.bang(31, 7.4, 13)} ${s.question(59, 12, 0.98, 5.8)}`;
module.exports = {
  id: 'exclamation-question-mark',
  name: 'Exclamation Question Mark',
  emoji: '⁉️',
  group: 'Symbols',
  subgroup: 'punctuation',
  tags: ['interrobang', 'exclamation', 'question', 'surprise', 'punctuation'],
  tone: 'red',
  body,
  shine: [28.5, 19.5, -70],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.22)}"/>`;
  },
};
