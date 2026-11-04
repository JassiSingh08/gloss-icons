const a = require('../src/parts/animal');

const body = a.spline([
  [22, 31], [30, 30], [42, 33], [58, 33], [72, 35], [80, 42], [82, 53], [78, 62], [66, 66], [48, 67], [34, 65],
  [28, 60], [24, 54], [18, 53], [12, 52], [8, 49], [6.5, 44], [9, 38.5], [15, 33.5],
]);
module.exports = {
  id: 'rhinoceros',
  name: 'Rhinoceros',
  emoji: '🦏',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['rhino', 'rhinoceros', 'horn', 'safari', 'armour'],
  tone: 'slate',
  body,
  shine: [26, 34, -12],
  shineSize: [6, 2.6],
  draw(c) {
    const ink = '#0E1420';
    return `${a.line('M81 44 Q85 50 84 58', '#4D5F7A', 1.8)}
      ${a.legs(c, 'slate', [
        { x: 33, top: 60, w: 5.4, wf: 4.8, far: true },
        { x: 66, top: 60, w: 6, wf: 4.8, far: true, fx: 67 },
        { x: 39, top: 61, w: 5.8, wf: 5, fx: 38.5 },
        { x: 73, top: 60, w: 6.4, wf: 5, fx: 74 },
      ], { hoof: '#1E2A3D', ht: 3 })}
      ${a.part(c, 'horn', 'M6 43 Q3 33 6 22 Q10 32 14.5 40 Z', 'sand', { cx: 0.3, cy: 0.2 })}
      ${a.part(c, 'horn2', 'M15 36 Q15 31 17 27 Q19 32 21 34.5 Z', 'sand', { cx: 0.3, cy: 0.2 })}
      <path d="${body}" fill="${c.radial('a', 'slate', 0.25, 0.25)}"/>
      ${a.line('M31 34 Q35 48 32 63 M60 34 Q57 48 60 65', '#1E2A3D', 1.4, ' opacity=".35"')}
      ${a.part(c, 'ear', a.spline([[25, 32], [27, 25], [31, 23, 1], [31, 29], [28, 33]]), 'slate')}
      ${a.sideEye(19.5, 41.5, { r: 2, ink })}
      ${a.line('M8 49 Q11 50.5 14 50', ink, 1.2, ' opacity=".6"')}`;
  },
};
