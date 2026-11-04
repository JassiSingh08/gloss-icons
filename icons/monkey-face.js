const a = require('../src/parts/animal');

const body = a.mirror([[48, 28], [36, 29], [27, 35], [22.5, 46], [23, 61], [29, 73], [38, 79.5], [48, 81]]);
// The bare face: two eye sockets running into a wide muzzle.
const mask = a.mirror([[48, 43], [42, 38.5], [34.5, 38.5], [29.5, 44], [30, 52], [32.5, 57], [28.5, 65], [32, 74], [40, 78.5], [48, 79.5]]);
module.exports = {
  id: 'monkey-face',
  name: 'Monkey Face',
  emoji: '🐵',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['monkey', 'ape', 'primate', 'cheeky', 'animal'],
  tone: 'brown',
  body,
  shine: [32, 36, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#2A1004';
    const ear = (x, s) => `${a.part(c, 'ear', a.ellipse(x, 54, 9, 10), 'brown')}<ellipse cx="${x + s * 1.3}" cy="54.5" rx="5" ry="6" fill="${c.radial('earin', 'skin', 0.4, 0.3)}"/>`;
    return `${ear(19, 1)}${ear(77, -1)}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.22)}"/>
      <path d="M40 29.5 Q44 34 48 30 Q52 35 57 30" fill="none" stroke="#6E3A14" stroke-width="1.6" opacity=".7" stroke-linecap="round"/>
      <path d="${mask}" fill="${c.radial('mask', 'skin', 0.4, 0.2)}"/>
      ${a.line('M31.5 43 Q37 39.5 43 43.5 M64.5 43 Q59 39.5 53 43.5', '#8A4A20', 2.2, ' opacity=".8"')}
      ${a.eyes(48.5, 8.5, { rx: 3, ry: 3.4, lid: 0.35, tilt: 0.3, ink })}
      <ellipse cx="45" cy="61" rx="1.5" ry="1.1" fill="${ink}"/><ellipse cx="51" cy="61" rx="1.5" ry="1.1" fill="${ink}"/>
      ${a.line('M37.5 69 Q48 74.5 59.5 67.5', ink, 2.4)}${a.line('M58 66.4 L61 65.6', ink, 2)}`;
  },
};
