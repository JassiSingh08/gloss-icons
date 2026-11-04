const a = require('../src/parts/animal');

// A barrel of a body with a huge square muzzle; eyes, ears and nostrils ride on top of the head.
const body = a.spline([
  [17, 30], [23, 28.5], [29, 31], [40, 33], [58, 33.5], [73, 36.5], [81, 44.5], [82, 55], [77, 63], [64, 66.5], [46, 67.5],
  [32, 66.5], [25, 62.5], [16, 62.5], [9, 60.5], [5.5, 54], [6, 45], [9, 39.5], [13, 36],
]);
const HIDE = ['#D9CADF', '#9C87A8', '#5E4A6E', '#2A1E36'];
module.exports = {
  id: 'hippopotamus',
  name: 'Hippopotamus',
  emoji: '🦛',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['hippo', 'hippopotamus', 'river', 'africa', 'heavy'],
  tone: 'purple',
  body,
  shine: [34, 37, -10],
  shineSize: [7, 2.8],
  draw(c) {
    const ink = '#1A0E26';
    return `${a.legs(c, 'purple', [
        { x: 32, top: 62, w: 5.4, wf: 5, far: true },
        { x: 66, top: 61, w: 6, wf: 5, far: true, fx: 67 },
        { x: 38, top: 63, w: 5.8, wf: 5.2, fx: 37.5 },
        { x: 72, top: 61, w: 6.4, wf: 5.2, fx: 73 },
      ], { paint: a.legPaint(c, HIDE) })}
      <path d="${body}" fill="${a.custom(c, 'a', HIDE, 0.25, 0.25)}"/>
      ${a.clip(c, 'belly', body, `<ellipse cx="14" cy="58" rx="12" ry="7" fill="${a.ROSE[1]}" opacity=".45"/>`)}
      <circle cx="10" cy="40" r="2.4" fill="${a.custom(c, 'nb', HIDE, 0.35, 0.3)}"/><ellipse cx="9.4" cy="40.6" rx=".8" ry="1" fill="${ink}"/>
      ${a.part(c, 'ear', a.ellipse(25.5, 28, 2.4, 3), 'purple', { fill: a.custom(c, 'ear', HIDE, 0.35, 0.3) })}
      ${a.sideEye(19.5, 32.5, { r: 2, ink })}
      ${a.line('M7 55 Q16 58 24 54', ink, 1.4, ' opacity=".6"')}
      <path d="M9.5 55.6 L10.5 59 L12 56.2 Z" fill="#FFF8EC"/>`;
  },
};
