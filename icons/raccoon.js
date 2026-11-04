const a = require('../src/parts/animal');

const body = a.mirror([[48, 30], [37, 31], [28, 36], [22, 45], [19.5, 55], [14, 61, 1], [22, 64], [30, 72], [40, 78.5], [48, 80.5]]);
const EAR = [[24, 42], [21, 30], [25, 19], [33, 23], [39, 33]];
const INNER = [[26.5, 36], [25, 28], [27.5, 23], [32, 26], [34.5, 32]];
module.exports = {
  id: 'raccoon',
  name: 'Raccoon',
  emoji: '🦝',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['raccoon', 'bandit', 'mask', 'trash panda', 'sneaky'],
  tone: 'grey',
  body,
  shine: [32, 38, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#0E0E16';
    const mask = a.mirror([[48, 47], [41, 44], [31, 44], [22, 48.5], [15, 56, 1], [25, 58], [35, 59], [43, 57], [48, 58]]);
    const muzzle = a.mirror([[48, 57], [42, 58], [36, 62], [32.5, 69], [37, 76.5], [48, 80.5]]);
    const eye = (x) => `<circle cx="${x}" cy="51" r="3" fill="${ink}" stroke="#8A8AA0" stroke-width=".9"/><circle cx="${x - 0.9}" cy="50" r="1" fill="#fff"/>`;
    return `${a.part(c, 'earl', a.spline(EAR), 'grey')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'grey')}
      <path d="${a.spline(INNER)} ${a.spline(a.flipX(INNER))}" fill="#2E2E3A"/>
      <path d="${body}" fill="${c.radial('a', 'grey', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<path d="${muzzle}" fill="${c.radial('w', 'white', 0.45, 0.15)}"/>
        <path d="M30 41 Q38 35 45 40 Q38 40.5 31 43.5 Z M66 41 Q58 35 51 40 Q58 40.5 65 43.5 Z" fill="#fff" opacity=".9"/>
        <path d="M48 31 Q44 38 45.5 46 L50.5 46 Q52 38 48 31 Z" fill="#3A3A4A" opacity=".55"/>
        <path d="${mask}" fill="${c.radial('mask', 'black', 0.35, 0.2)}"/>`)}
      ${eye(37.5)}${eye(58.5)}
      ${a.nose(48, 65, 4.8, ink)}
      ${a.line('M48 68.5 L48 71 Q45 74 42 72.5 M48 71 Q51 74 54 72.5', ink, 1.9)}`;
  },
};
