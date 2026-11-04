const a = require('../src/parts/animal');

const body = a.mirror([[48, 30], [37, 31], [28, 35.5], [23, 44], [20, 53], [13.5, 59, 1], [20.5, 62.5], [16, 69, 1], [25.5, 70.5], [34, 76.5], [42, 80], [48, 81]]);
const EAR = [[24, 43], [20, 28], [20, 14, 1], [31, 21], [40, 32]];
const INNER = [[26, 37], [23.5, 27], [23.5, 20, 1], [30, 25], [34, 31]];
module.exports = {
  id: 'wolf',
  name: 'Wolf',
  emoji: '🐺',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['wolf', 'howl', 'pack', 'wild', 'moon'],
  tone: 'grey',
  body,
  shine: [32, 38, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#13131C';
    const pale = c.radial('pale', 'white', 0.45, 0.1);
    const muzzle = a.mirror([[48, 52], [43.5, 54], [39, 60], [30, 64], [24, 69, 1], [33, 74], [41, 79], [48, 81]]);
    return `${a.part(c, 'earl', a.spline(EAR), 'grey')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'grey')}
      <path d="${a.spline(INNER)}" fill="#3A3A4A" opacity=".75"/><path d="${a.spline(a.flipX(INNER))}" fill="#3A3A4A" opacity=".75"/>
      <path d="${body}" fill="${c.radial('a', 'grey', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<path d="${muzzle}" fill="${pale}"/>
        <path d="M48 31 Q41 38 43 50 L48 54 L53 50 Q55 38 48 31 Z" fill="#4A4A5C" opacity=".45"/>`)}
      ${a.line('M32.5 46 L42.5 48.5 M63.5 46 L53.5 48.5', '#2E2E3A', 2.4, ' opacity=".75"')}
      ${a.eyes(52, 10.5, { rx: 3.8, ry: 3, lid: 0.45, tilt: 1.1, ink })}
      ${a.nose(48, 67, 5.6, ink)}
      ${a.line('M48 71 L48 73.5 Q45 76.5 42 75 M48 73.5 Q51 76.5 54 75', ink, 1.9)}`;
  },
};
