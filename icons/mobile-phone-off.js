const av = require('../src/parts/av');
const slash = 'M30 67 L66 27';

module.exports = av.button({
  id: 'mobile-phone-off',
  name: 'Mobile Phone Off',
  emoji: '📴',
  group: 'Symbols',
  subgroup: 'av-symbol',
  tags: ['phone off', 'mobile', 'off', 'silent', 'no phone'],
}, (c) => {
  const gap = av.cut(c, slash, 11);
  return (k) => `<g mask="${gap}">${av.hole(av.phone(), k)}</g>${av.line(slash, k, 4.8)}`;
});
