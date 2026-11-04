const a = require('../src/parts/animal');

const body = a.mirror([[48, 30], [36, 31], [27, 37], [22.5, 49], [23.5, 63], [30, 74], [39, 80], [48, 81.5]]);
module.exports = {
  id: 'koala',
  name: 'Koala',
  emoji: '🐨',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['koala', 'australia', 'eucalyptus', 'marsupial', 'sleepy'],
  tone: 'grey',
  body,
  shine: [33, 38, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#15151F';
    const fluff = c.radial('fluff', 'white', 0.5, 0.4);
    const ear = (x, s) => `${a.part(c, 'ear', a.ellipse(x, 39, 13.5, 13), 'grey')}
      <path d="${a.spline([[x + s * 5, 30], [x - s * 2, 33], [x - s * 7, 39], [x - s * 5, 46], [x + s * 4, 48], [x + s * 8, 42]])}" fill="${fluff}"/>`;
    return `${ear(21, 1)}${ear(75, -1)}
      <path d="${body}" fill="${c.radial('a', 'grey', 0.36, 0.22)}"/>
      ${a.eyes(52, 12.5, { rx: 2.7, ry: 3, lid: 0.4, tilt: 0.3, ink })}
      <path d="${a.spline([[48, 51], [53.5, 53], [55.5, 61], [53.5, 69], [48, 71], [42.5, 69], [40.5, 61], [42.5, 53]])}" fill="${c.radial('nose', 'black', 0.35, 0.2)}"/>
      <ellipse cx="45" cy="56" rx="2" ry="3.2" fill="#fff" opacity=".45" transform="rotate(15 45 56)"/>
      ${a.line('M42 75 Q48 78 54 75', ink, 2, ' opacity=".7"')}`;
  },
};
