const s = require('../src/parts/sign');
const body = `${s.bang(35, 7.4, 13)} ${s.bang(61, 7.4, 13)}`;
module.exports = {
  id: 'double-exclamation-mark',
  name: 'Double Exclamation Mark',
  emoji: '‼️',
  group: 'Symbols',
  subgroup: 'punctuation',
  tags: ['exclamation', 'double', 'alert', 'bangbang', 'punctuation'],
  tone: 'red',
  body,
  shine: [32.5, 19.5, -70],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.22)}"/>`;
  },
};
