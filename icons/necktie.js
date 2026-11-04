const g = require('../src/parts/garment');

const body = 'M14 33 Q14 24 23 20.5 L37 15 L59 15 L73 20.5 Q82 24 82 33 L82 80 Q82 83 79 83 L17 83 Q14 83 14 80 Z';

module.exports = {
  id: 'necktie',
  name: 'Necktie',
  emoji: '👔',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['tie', 'shirt', 'office', 'formal', 'business'],
  tone: 'sky',
  body,
  shine: [21, 31, -50],
  shineSize: [5.5, 2],
  draw(c) {
    const shirt = c.radial('a', 'sky', 0.3, 0.2);
    const collar = c.linear('collar', 'white', [0, 0, 1, 1], 0, 2);
    const tie = c.linear('tie', 'red', [0, 0, 1, 0.4], 0, 2);
    const knot = c.radial('knot', 'red', 0.3, 0.25);
    const s = c.ramp('sky');
    return `<path d="${body}" fill="${shirt}"/>
      <path d="M37 15 L59 15 L57 22 L39 22 Z" fill="${s[2]}" opacity=".7"/>
      <path d="M43.5 31 L52.5 31 L57 70 L48 80 L39 70 Z" fill="${tie}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1" stroke-linejoin="round"/>
      <path d="M42.4 40 L54 47 M41.4 49 L55 57 M40.4 58 L56 67" stroke="#8A0006" stroke-opacity=".55" stroke-width="2.2"/>
      <path d="M42 22 L54 22 L52.5 31.5 L43.5 31.5 Z" fill="${knot}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1" stroke-linejoin="round"/>
      <path d="M37 15 L48 22.5 L41 37 L31 26 Z M59 15 L48 22.5 L55 37 L65 26 Z" fill="${collar}" stroke="${s[3]}" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>
      ${g.fold('M14.5 50 Q22 52 26 60 M81.5 50 Q74 52 70 60', s[3], 0.35, 1.3)}`;
  },
};
