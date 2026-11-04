const a = require('../src/parts/animal');

const body = a.mirror([[48, 36], [38, 37], [30, 42], [26, 52], [27, 63], [32, 72], [40, 78], [48, 80]]);
const EAR = [[37, 40], [31, 30], [29, 16], [33, 6], [39, 12], [42, 26], [44, 38]];
const INNER = [[37.5, 34], [33.5, 24], [33.5, 13], [36, 10], [38.5, 16], [40, 27], [40.5, 34]];
module.exports = {
  id: 'rabbit-face',
  name: 'Rabbit Face',
  emoji: '🐰',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['rabbit', 'bunny', 'easter', 'hop', 'ears'],
  tone: 'white',
  body,
  shine: [35, 43, -40],
  shineSize: [5.5, 2.6],
  draw(c) {
    const ink = '#1E1238';
    const inner = a.custom(c, 'inner', a.ROSE, 0.5, 0.3);
    return `${a.part(c, 'earl', a.spline(EAR), 'white')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'white')}
      <path d="${a.spline(INNER)}" fill="${inner}"/><path d="${a.spline(a.flipX(INNER))}" fill="${inner}"/>
      <path d="${body}" fill="${c.radial('a', 'white', 0.36, 0.22)}"/>
      ${a.eyes(56, 9.5, { rx: 3, ry: 3.4, lid: 0.3, tilt: 0.5, ink })}
      <path d="M44.5 64 L51.5 64 Q51 67 48 68.5 Q45 67 44.5 64 Z" fill="#D2667F"/>
      ${a.line('M48 68.5 L48 70 Q45.5 72.5 43 71 M48 70 Q50.5 72.5 53 71', ink, 1.7)}
      <path d="M45.6 71.4 L45.6 75 L50.4 75 L50.4 71.4 Z" fill="#FFF8EC" stroke="${ink}" stroke-opacity=".45" stroke-width=".8"/>
      ${a.whiskers(48, 69, 9, { len: 13, color: '#6E61A8', o: 0.6, w: 0.9 })}`;
  },
};
