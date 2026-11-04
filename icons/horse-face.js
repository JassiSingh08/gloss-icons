const a = require('../src/parts/animal');

const HALF = [[48, 24], [38, 25], [31, 31], [30, 42], [33, 54], [35, 63], [32, 71], [33.5, 79], [40.5, 83], [48, 83.5]];
const EAR = [[31, 30], [29.5, 19], [33, 9, 1], [38, 17], [41, 26]];
module.exports = {
  HALF, EAR,
  id: 'horse-face',
  name: 'Horse Face',
  emoji: '🐴',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['horse', 'pony', 'stable', 'ride', 'equestrian'],
  tone: 'brown',
  body: a.mirror(HALF),
  shine: [36, 33, -60],
  shineSize: [5.5, 2.6],
  draw(c) {
    const body = a.mirror(HALF);
    const ink = '#1F0C02';
    const lock = a.spline([[40, 25], [48, 21], [57, 26], [55, 33], [51, 31], [49, 40, 1], [46, 32], [42, 36, 1], [42, 29]]);
    return `${a.part(c, 'earl', a.spline(EAR), 'brown')}${a.part(c, 'earr', a.spline(a.flipX(EAR)), 'brown')}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<ellipse cx="48" cy="80" rx="18" ry="12.5" fill="${c.radial('m', 'sand', 0.4, 0.2)}"/>
        <path d="${a.taper(48, 38, 48, 68, 3.4)}" fill="#FFF4D6" opacity=".9"/>`)}
      <path d="${lock}" fill="${a.custom(c, 'lock', ['#9A5A2A', '#5A2A0C', '#331805', '#1A0A02'], 0.4, 0.2)}"${a.edge('brown', 0.6)}/>
      ${a.eye(35, 47, { rx: 3.4, ry: 3, lid: 0.4, tilt: 0.8, side: -1, ink })}${a.eye(61, 47, { rx: 3.4, ry: 3, lid: 0.4, tilt: 0.8, side: 1, ink })}
      <ellipse cx="41" cy="75" rx="2.4" ry="3.6" fill="${ink}" transform="rotate(15 41 75)"/><ellipse cx="55" cy="75" rx="2.4" ry="3.6" fill="${ink}" transform="rotate(-15 55 75)"/>
      ${a.line('M42.5 81 Q48 83 53.5 81', ink, 1.6, ' opacity=".6"')}`;
  },
};
