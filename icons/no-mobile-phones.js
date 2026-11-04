const s = require('../src/parts/sign');

module.exports = {
  id: 'no-mobile-phones',
  name: 'No Mobile Phones',
  emoji: '📵',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['no phones', 'mobile', 'silent', 'forbidden', 'cell'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const ph = (k) => `<rect x="38.5" y="28" width="19" height="44" rx="4" fill="${k}"/>
      <rect x="41.4" y="33.4" width="13.2" height="28.6" rx="1.2" fill="#F7F5FF"/>
      <circle cx="48" cy="66.8" r="1.8" fill="#F7F5FF"/>`;
    return s.noSign(c, ph);
  },
};
