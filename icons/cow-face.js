const a = require('../src/parts/animal');

const body = a.mirror([[48, 28], [38, 29], [30.5, 33], [27.5, 43], [29, 55], [31, 63], [48, 64]]);
const HORN = [[32, 33], [27, 30], [22, 24], [21, 15, 1], [26, 21], [33, 25], [38, 29]];
const EAR = [[30, 40], [22, 37], [13, 40], [12, 45], [20, 47], [29, 47]];
module.exports = {
  id: 'cow-face',
  name: 'Cow Face',
  emoji: '🐮',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['cow', 'moo', 'farm', 'dairy', 'cattle'],
  tone: 'white',
  // Head and muzzle as one outline: the muzzle is wider than the face above it.
  body: a.mirror([[48, 28], [38, 29], [30.5, 33], [27.5, 43], [29, 55], [30.5, 62], [25.5, 68], [26.5, 77], [34, 82.5], [48, 83.5]]),
  shine: [35, 35, -55],
  shineSize: [5.5, 2.6],
  draw(c) {
    const full = this.body;
    const ink = '#1A1430';
    return `${a.part(c, 'hornl', a.spline(HORN), 'cream')}${a.part(c, 'hornr', a.spline(a.flipX(HORN)), 'cream')}
      ${a.part(c, 'earl', a.spline(EAR), 'white')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'white')}
      <path d="M15 43 Q21 41 28 43.5 Q21 45.5 15 43 Z M81 43 Q75 41 68 43.5 Q75 45.5 81 43 Z" fill="${a.ROSE[2]}" opacity=".6"/>
      <path d="${full}" fill="${c.radial('a', 'white', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', full, `<path d="${a.spline([[50, 26], [62, 26], [70, 34], [68, 46], [60, 52], [53, 47], [52, 38]])}" fill="${c.radial('spot', 'black', 0.3, 0.2)}"/>
        <path d="${a.spline([[26, 52], [33, 49], [36, 55], [31, 60], [25, 59]])}" fill="${c.radial('spot2', 'black', 0.3, 0.2)}"/>
        <path d="${a.mirror([[48, 62.5], [38, 62.5], [29, 65], [24, 72], [27, 80], [36, 84], [48, 84.5]])}" fill="${a.custom(c, 'muzzle')}"/>`)}
      ${a.eye(37.5, 46, { rx: 3, ry: 3.2, lid: 0.35, tilt: 0.4, side: -1, ink })}
      <circle cx="58.5" cy="45" r="3" fill="${ink}" stroke="#8A8AA0" stroke-width=".9"/><circle cx="57.6" cy="44.1" r="1" fill="#fff"/>
      <ellipse cx="39.5" cy="72" rx="2.6" ry="3.6" fill="#6E2238" transform="rotate(20 39.5 72)"/><ellipse cx="56.5" cy="72" rx="2.6" ry="3.6" fill="#6E2238" transform="rotate(-20 56.5 72)"/>
      ${a.line('M41 79.5 Q48 82 55 79.5', '#6E2238', 1.8, ' opacity=".7"')}`;
  },
};
