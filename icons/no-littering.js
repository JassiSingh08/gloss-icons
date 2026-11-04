const s = require('../src/parts/sign');

module.exports = {
  id: 'no-littering',
  name: 'No Littering',
  emoji: '🚯',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['no littering', 'litter', 'trash', 'forbidden'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const fig = (k) => `<circle cx="42" cy="30.5" r="4.6" fill="${k}"/>
      <path d="M42 38.5 L40.8 53.5 L36 69 M40.8 53.5 L46 69 M42 41 L51 46.5 M42 41 L36.5 50" stroke="${k}" ${s.ST(4.8)}/>
      <rect x="55.2" y="43.7" width="4.6" height="4.6" rx="1" fill="${k}" transform="rotate(25 57.5 46)"/>
      <rect x="61" y="56" width="4" height="4" rx="1" fill="${k}" transform="rotate(-20 63 58)"/>`;
    return s.noSign(c, fig);
  },
};
