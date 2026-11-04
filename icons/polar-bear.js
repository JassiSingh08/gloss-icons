const a = require('../src/parts/animal');

const body = a.mirror([[48, 29], [36, 30], [26, 36], [22, 48], [23, 62], [29, 73], [38, 79.5], [48, 81.5]]);
module.exports = {
  id: 'polar-bear',
  name: 'Polar Bear',
  emoji: '🐻‍❄️',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['polar bear', 'arctic', 'snow', 'ice', 'bear'],
  tone: 'white',
  body,
  shine: [32, 37, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#161230';
    const ear = (x) => `${a.part(c, 'ear', a.ellipse(x, 35, 7.5, 7), 'white')}<circle cx="${x + (x < 48 ? 1 : -1)}" cy="36" r="3.6" fill="#BDB2E8"/>`;
    return `${ear(26)}${ear(70)}
      <path d="${body}" fill="${c.radial('a', 'white', 0.36, 0.22)}"/>
      <ellipse cx="48" cy="66" rx="12.5" ry="10.5" fill="${c.radial('snout', 'white', 0.45, 0.15)}" stroke="#8C83AD" stroke-opacity=".35"/>
      ${a.line('M33 43.5 Q38 41.5 42.5 44.5', '#6E61A8', 2.2, ' opacity=".55"')}${a.line('M63 43.5 Q58 41.5 53.5 44.5', '#6E61A8', 2.2, ' opacity=".55"')}
      ${a.eyes(49.5, 10, { rx: 2.6, ry: 3, lid: 0.35, tilt: 0.4, ink })}
      ${a.nose(48, 60, 6, ink)}
      ${a.line('M48 64 L48 67.5 Q44 71.5 40 69 M48 67.5 Q52 71.5 56 69', ink, 2.2)}`;
  },
};
