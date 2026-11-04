const s = require('../src/parts/sign');

module.exports = {
  id: 'no-bicycles',
  name: 'No Bicycles',
  emoji: '🚳',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['no bicycles', 'no cycling', 'bike', 'forbidden'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const bike = (k) => `<g fill="none" stroke="${k}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="35.5" cy="57" r="8.4"/><circle cx="60.5" cy="57" r="8.4"/>
      <path d="M35.5 57 L46.5 57 L42.6 45 M35.5 57 L42.6 45 L56.6 45 L46.5 57 M60.5 57 L55.6 41.4 L60 40.4 M39.6 43.8 L45.6 43.8"/></g>`;
    return s.noSign(c, bike);
  },
};
