const L = require('../src/parts/leaf');
// An open pod tipped up to the right, a row of bright peas resting in it.
const ROT = { rotate: -24, cx: 48, cy: 56 };
const pod = 'M8 54 C18 42 34 38 48 38 C62 38 78 42 88 54 C80 67 66 73 48 73 C30 73 16 67 8 54 Z';
const body = L.xform(pod, ROT);
const PEAS = [[24, 52], [36, 50], [48, 49.5], [60, 50], [72, 52]];
module.exports = {
  id: 'pea-pod',
  name: 'Pea Pod',
  emoji: '🫛',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['peas', 'pod', 'vegetable', 'green', 'garden'],
  tone: 'green',
  body,
  shine: [22, 56, -40],
  shineSize: [5, 2.2],
  draw(c) {
    const k = L.kit(c);
    const pea = c.radial('pea', 'lime', 0.32, 0.25);
    const peas = PEAS.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.6" fill="${pea}" stroke="#203D00" stroke-opacity=".45" stroke-width="1.1"/><ellipse cx="${x - 2.2}" cy="${y - 2.6}" rx="1.9" ry="1" fill="#fff" opacity=".75" transform="rotate(-30 ${x - 2.2} ${y - 2.6})"/>`).join('');
    return `<g transform="rotate(-24 48 56)">
      ${k.stem('M88 54 C92 50 92 45 89 42', 2.6)}
      <path d="${pod}" fill="${c.radial('a', 'green', 0.4, 0.2)}"/>
      <path d="M14 53 C24 45 36 43 48 43 C60 43 72 45 82 53 C72 56 60 57 48 57 C36 57 24 56 14 53 Z" fill="#0E6E33"/>
      ${peas}
      <path d="M8 54 C22 61 34 63.5 48 63.5 C62 63.5 74 61 88 54 C80 67 66 73 48 73 C30 73 16 67 8 54 Z" fill="${c.radial('lip', 'green', 0.4, 0.1)}"/>
      <path d="M14 58 C26 63 38 65 48 65 C58 65 70 63 82 58" stroke="#A6F07A" stroke-opacity=".55" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      </g>`;
  },
};
