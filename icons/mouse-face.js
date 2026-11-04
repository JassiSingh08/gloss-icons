const a = require('../src/parts/animal');

const body = a.mirror([[48, 34], [38, 35], [30, 40], [26, 50], [28, 61], [34, 71], [42, 78], [48, 79.5]]);
module.exports = {
  id: 'mouse-face',
  name: 'Mouse Face',
  emoji: '🐭',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['mouse', 'rodent', 'squeak', 'cheese', 'tiny'],
  tone: 'grey',
  body,
  shine: [35, 41, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const ink = '#15151F';
    const ear = (x, s) => `${a.part(c, 'ear', a.ellipse(x, 31, 14, 13.5), 'grey')}<ellipse cx="${x + s * 1.5}" cy="32" rx="9" ry="8.5" fill="${a.custom(c, 'in' + s, a.ROSE, 0.45, 0.35)}"/>`;
    return `${ear(24, 1)}${ear(72, -1)}
      <path d="${body}" fill="${c.radial('a', 'grey', 0.36, 0.22)}"/>
      <ellipse cx="48" cy="69" rx="10" ry="8" fill="#F2F2F7" opacity=".7"/>
      ${a.eyes(54, 9, { rx: 3, ry: 3.4, lid: 0.3, tilt: 0.6, ink })}
      <ellipse cx="48" cy="66.5" rx="3.6" ry="2.8" fill="${a.custom(c, 'nose')}" stroke="#6E2238" stroke-opacity=".5"/>
      ${a.line('M48 69 L48 71 Q45.5 73.5 43 72 M48 71 Q50.5 73.5 53 72', ink, 1.7)}
      ${a.whiskers(48, 69, 8, { len: 14, color: '#2E2E3A', o: 0.7, w: 0.9 })}`;
  },
};
