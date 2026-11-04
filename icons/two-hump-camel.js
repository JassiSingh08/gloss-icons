const a = require('../src/parts/animal');
const { camelid, TWO } = require('./camel');

module.exports = camelid({
  id: 'two-hump-camel',
  name: 'Two-Hump Camel',
  emoji: '🐫',
  tags: ['bactrian', 'camel', 'humps', 'desert', 'mongolia'],
  coat: 'brown',
  outline: TWO,
  // Shaggier, darker hair on the humps and the throat.
  shaggy: () => `<path d="M36 34 Q45 22 52 34 Z M58 34 Q66 23 73 34 Z" fill="#331805" opacity=".35"/><path d="${a.spline([[17, 37], [22, 42], [27, 49], [30, 56], [24, 55], [18, 47]])}" fill="#331805" opacity=".35"/>`,
});
