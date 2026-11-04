const a = require('../src/parts/animal');

const body = a.mirror([[48, 29], [36, 30], [27, 35], [22, 46], [22, 61], [28, 72], [38, 79], [48, 80.5]]);
const EAR = [[26, 38], [20, 30], [18.5, 20], [21, 16, 1], [30, 20], [38, 28], [37, 33]];
module.exports = {
  id: 'pig-face',
  name: 'Pig Face',
  emoji: '🐷',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['pig', 'oink', 'farm', 'hog', 'piggy'],
  tone: 'pink',
  body,
  shine: [32, 37, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#3D0A1C';
    const skin = a.custom(c, 'a', a.ROSE, 0.36, 0.22);
    const ear = (pts, nm) => `<path d="${a.spline(pts)}" fill="${a.custom(c, nm, a.ROSE, 0.4, 0.2)}"${a.edge('pink', 0.45)}/>`;
    return `${ear(EAR, 'earl')}${ear(a.flipX(EAR), 'earr')}
      <path d="M27 33 L22 21 L31 25 Z M69 33 L74 21 L65 25 Z" fill="${a.ROSE[2]}" opacity=".5"/>
      <path d="${body}" fill="${skin}"/>
      ${a.eyes(49, 11, { rx: 2.8, ry: 3, lid: 0.4, tilt: 0.5, ink })}
      ${a.line('M33 43.5 Q37.5 41.5 41.5 43.5 M63 43.5 Q58.5 41.5 54.5 43.5', ink, 2, ' opacity=".55"')}
      <ellipse cx="48" cy="63" rx="12" ry="8.5" fill="${a.custom(c, 'snout', ['#FFD0DA', '#F28CA3', '#C2506C', '#5E1A2E'], 0.4, 0.2)}"${a.edge('pink', 0.45)}/>
      <ellipse cx="43.5" cy="63.5" rx="2.4" ry="3.6" fill="${ink}"/><ellipse cx="52.5" cy="63.5" rx="2.4" ry="3.6" fill="${ink}"/>
      <ellipse cx="42" cy="58.6" rx="3.4" ry="1.3" fill="#fff" opacity=".6"/>
      ${a.line('M40 75 Q48 78 57 74', ink, 2, ' opacity=".7"')}`;
  },
};
