const m = require('../src/parts/metal');
const A = [66, 18];
const B = [32, 74];
const body = m.bar(A, B, 18, 9);
module.exports = {
  id: 'test-tube',
  name: 'Test Tube',
  emoji: '🧪',
  group: 'Objects',
  subgroup: 'science',
  tags: ['test tube', 'experiment', 'lab', 'science', 'chemistry'],
  tone: 'sky',
  body,
  shine: [55, 26, -59],
  shineSize: [6, 2],
  draw(c) {
    const glass = m.cyl(c, 'a', 'sky', A, B, 18);
    const brew = c.radial('l', 'green', 0.35, 0.2);
    c.def(`<clipPath id="${c.id('t')}"><path d="${body}"/></clipPath>`);
    const lip = m.cyl(c, 'p', 'sky', A, B, 24);
    return `<path d="${body}" fill="${glass}" opacity=".45"/>
      <g clip-path="url(#${c.id('t')})">
        <path d="M0 52 L96 47 L96 96 L0 96 Z" fill="${brew}"/>
        <path d="M0 52 L96 47" stroke="#E8FF9B" stroke-width="2" stroke-opacity=".7"/>
        <circle cx="38" cy="70" r="2.2" fill="#fff" opacity=".65"/><circle cx="46" cy="61" r="1.6" fill="#fff" opacity=".65"/><circle cx="40" cy="60" r="1.1" fill="#fff" opacity=".6"/>
      </g>
      ${m.part(m.bar([A[0] + 2.2, A[1] - 3.4], [A[0] - 1.1, A[1] + 1.7], 24, 2), lip, 'sky', 'opacity=".9"')}
      <path d="M56 28 L44 47" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>`;
  },
};
