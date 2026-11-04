const a = require('../src/parts/animal');

// The elephant figure, facing left, trunk part of the outline. The mammoth shares the legs.
const OUTLINE = [
  [26, 18], [38, 19], [52, 22], [66, 25], [76, 31], [82, 41], [83, 53], [79, 62], [68, 66], [50, 67], [34, 65], [27, 60],
  [22, 52], [17, 50.5], [14, 56], [13, 64], [11.5, 70], [7.5, 72.5], [4.5, 70], [6.5, 64.5], [7.5, 55], [7.5, 44], [9.5, 33], [14, 24.5], [19.5, 19.5],
];
const LEGS = [
  { x: 35, top: 58, w: 6, wf: 5.6, far: true, r: 2.6 },
  { x: 66, top: 58, w: 6.5, wf: 5.6, far: true, fx: 67, r: 2.6 },
  { x: 41, top: 59, w: 6.4, wf: 6, fx: 41, r: 2.6 },
  { x: 73, top: 58, w: 6.8, wf: 6, fx: 74, r: 2.6 },
];
const nails = (xs) => xs.map((x) => `<path d="M${x - 1.6} 84 Q${x - 1.6} 81.2 ${x} 81.2 Q${x + 1.6} 81.2 ${x + 1.6} 84 Z" fill="#FFF8EC" opacity=".85"/>`).join('');

module.exports = {
  LEGS, nails,
  id: 'elephant',
  name: 'Elephant',
  emoji: '🐘',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['elephant', 'trunk', 'safari', 'memory', 'big'],
  tone: 'grey',
  body: a.spline(OUTLINE),
  shine: [17, 25, -40],
  shineSize: [5, 2.3],
  draw(c) {
    const body = a.spline(OUTLINE);
    const ink = '#15151F';
    return `${a.line('M82 42 Q86 50 84.5 60', '#6E6E80', 1.8)}<path d="${a.spline([[84.5, 58], [86.3, 61], [85, 64, 1], [83, 61]])}" fill="#2E2E3A"/>
      ${a.legs(c, 'grey', LEGS)}${nails([39, 43, 72, 76])}
      <path d="${body}" fill="${c.radial('a', 'grey', 0.25, 0.2)}"/>
      ${a.line('M8.5 50 L11.5 50.5 M8 56 L11 56.5 M8 62 L10.8 62.5', '#6E6E80', 1.1, ' opacity=".7"')}
      <path d="${a.tube([[17, 48], [12, 52], [8.5, 54]], 1.7, 1)}" fill="#FFF8EC" stroke="#8A8270" stroke-width=".8"/>
      ${a.part(c, 'ear', a.spline([[25, 23], [35, 21], [42, 28], [42.5, 42], [38, 52], [31, 55], [26, 49], [23.5, 36]]), 'grey', { cx: 0.6, cy: 0.3 })}
      ${a.sideEye(18.5, 33, { r: 2.1, ink })}`;
  },
};
