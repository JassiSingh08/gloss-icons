const m = require('../src/parts/metal');
const A = [24, 70];
const B = [72, 24];
const body = m.bar(A, B, 28);
module.exports = {
  id: 'pill',
  name: 'Pill',
  emoji: '💊',
  group: 'Objects',
  subgroup: 'medical',
  tags: ['pill', 'medicine', 'capsule', 'pharmacy', 'health'],
  tone: 'red',
  body,
  shine: [62, 21, -44],
  shineSize: [6, 2.6],
  draw(c) {
    const red = m.cyl(c, 'a', 'red', A, B, 28);
    const white = m.cyl(c, 'w', 'white', A, B, 28);
    c.def(`<clipPath id="${c.id('h')}"><path d="M-10 -11 L106 105 L-10 105 Z"/></clipPath>`);
    return `<path d="${body}" fill="${red}"/>
      <path d="${body}" fill="${white}" clip-path="url(#${c.id('h')})"/>
      <path d="M38.1 37.1 L57.9 56.9" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.6"/>
      <path d="M38.1 37.1 L57.9 56.9" stroke="#fff" stroke-opacity=".6" stroke-width="1" transform="translate(-1.2 1.2)"/>`;
  },
};
