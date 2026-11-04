const a = require('../src/parts/animal');

const body = a.mirror([[48, 32], [39.5, 33], [34, 38], [34, 48], [36, 58], [35, 65], [30.5, 72], [31.5, 80], [39, 84], [48, 84.5]]);
// A broad palm of an antler with tines along its top edge.
const ANTLER = [[37, 37], [29, 37], [19, 37], [12, 32], [9.5, 24, 1], [15, 26.5], [14, 16, 1], [19.5, 23], [21, 12, 1], [25.5, 21], [29.5, 13, 1], [31.5, 23], [36, 18, 1], [36.5, 27], [41, 33]];
const EAR = [[35, 43], [27, 42], [21, 45], [23, 49], [30, 49], [35.5, 48]];
module.exports = {
  id: 'moose',
  name: 'Moose',
  emoji: '🫎',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['moose', 'antlers', 'elk', 'canada', 'forest'],
  tone: 'brown',
  body,
  shine: [39, 38, -60],
  shineSize: [5, 2.4],
  draw(c) {
    const ink = '#1F0C02';
    return `${a.part(c, 'antl', a.spline(ANTLER), 'sand')}${a.part(c, 'antr', a.spline(a.flipX(ANTLER)), 'sand')}
      ${a.part(c, 'earl', a.spline(EAR), 'brown')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'brown')}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<ellipse cx="48" cy="79" rx="17" ry="11" fill="#6E3A14" opacity=".55"/>`)}
      ${a.eye(38.5, 52, { rx: 2.8, ry: 2.8, lid: 0.45, tilt: 0.6, side: -1, ink })}${a.eye(57.5, 52, { rx: 2.8, ry: 2.8, lid: 0.45, tilt: 0.6, side: 1, ink })}
      <ellipse cx="41" cy="75.5" rx="2.4" ry="3.5" fill="${ink}" transform="rotate(20 41 75.5)"/><ellipse cx="55" cy="75.5" rx="2.4" ry="3.5" fill="${ink}" transform="rotate(-20 55 75.5)"/>
      ${a.line('M41.5 81.5 Q48 83.5 54.5 81.5', ink, 1.6, ' opacity=".6"')}`;
  },
};
