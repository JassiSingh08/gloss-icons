const a = require('../src/parts/animal');

const body = a.mirror([[48, 31], [37, 32], [28, 36], [23, 44], [20.5, 53], [14.5, 61, 1], [24, 64], [33, 71], [42, 78.5], [48, 80.5]]);
const EAR = [[24, 44], [20.5, 27], [21.5, 11, 1], [32, 20], [41, 32]];
const TIP = [[19, 22], [21.5, 11, 1], [28, 16.5]];
module.exports = {
  id: 'fox',
  name: 'Fox',
  emoji: '🦊',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['fox', 'sly', 'clever', 'wild', 'forest'],
  tone: 'orange',
  body,
  shine: [33, 38, -35],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#240800';
    const ear = (pts, nm) => a.part(c, nm, a.spline(pts), 'ember');
    const tipD = `M18 26 L21.5 11 L30 18 Q24 18 18 26 Z`;
    const inner = a.spline([[26, 38], [24.5, 27], [25, 19, 1], [31, 25], [35, 32]]);
    const cheeks = a.mirror([[48, 66], [40, 62], [31, 57.5], [17, 61, 1], [26, 66], [35, 73], [43, 79], [48, 81]]);
    return `${ear(EAR, 'earl')}${ear(a.flipX(EAR), 'earr')}
      ${a.clip(c, 'el', a.spline(EAR), `<path d="M8 0 L45 0 L32 16 L16 24 L8 24 Z" fill="#2A0A00"/>`)}${a.clip(c, 'er', a.spline(a.flipX(EAR)), `<path d="M88 0 L51 0 L64 16 L80 24 L88 24 Z" fill="#2A0A00"/>`)}
      <path d="${inner}" fill="#FFE7B8" opacity=".8"/><path d="${a.spline(a.flipX([[26, 38], [24.5, 27], [25, 19, 1], [31, 25], [35, 32]]))}" fill="#FFE7B8" opacity=".8"/>
      <path d="${body}" fill="${c.radial('a', 'orange', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<path d="${cheeks}" fill="${c.radial('w', 'white', 0.45, 0.1)}"/>`)}
      ${a.eyes(52, 11, { rx: 4, ry: 3.2, lid: 0.4, tilt: 1.4, ink })}
      ${a.nose(48, 73.5, 4.6, ink)}
      ${a.line('M48 77.5 L48 79', ink, 1.8)}`;
  },
};
