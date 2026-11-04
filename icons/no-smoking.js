const s = require('../src/parts/sign');

module.exports = {
  id: 'no-smoking',
  name: 'No Smoking',
  emoji: '🚭',
  group: 'Symbols',
  subgroup: 'warning',
  tags: ['no smoking', 'cigarette', 'smoke', 'forbidden'],
  tone: 'red',
  body: s.DISC,
  shine: [32, 30, -38],
  draw(c) {
    const cig = (k) => `<rect x="25" y="51" width="34" height="7.6" rx="1.4" fill="${k}"/>
      <rect x="61.2" y="51" width="6.4" height="7.6" rx="1.4" fill="${k}"/>
      <path d="M64.4 46.5 C61 42.5 67.4 40 64 35.5 C61.4 32 64.6 30 63.4 27.6" stroke="${k}" ${s.ST(2.6)}/>`;
    return s.noSign(c, cig);
  },
};
