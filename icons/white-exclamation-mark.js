const s = require('../src/parts/sign');
const body = s.bang(48, 8.6, 13);
module.exports = {
  id: 'white-exclamation-mark',
  name: 'White Exclamation Mark',
  emoji: '❕',
  group: 'Symbols',
  subgroup: 'punctuation',
  tags: ['exclamation', 'outline', 'alert', 'punctuation'],
  tone: 'white',
  body,
  shine: [44.5, 20, -70],
  shineSize: [5.5, 2.4],
  draw(c) {
    return `<path d="${body}" fill="${c.radial('a', 'white', 0.3, 0.22)}"/>`;
  },
};
