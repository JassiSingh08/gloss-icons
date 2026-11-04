const a = require('../src/parts/animal');

// Upright on big hind feet, facing left, leaning on its tail.
const body = a.spline([
  [20, 15], [25, 16], [28, 21], [30, 29], [36, 35], [46, 43], [56, 53], [62, 63], [63, 73], [59, 80], [52, 83],
  [34, 84], [30, 81.5], [36, 78.5], [42, 75], [40.5, 66], [34, 58], [29, 50], [26.5, 41], [24.5, 33], [19, 30],
  [12.5, 28.5], [8.5, 26], [9.5, 21.5], [14.5, 18],
]);
module.exports = {
  id: 'kangaroo',
  name: 'Kangaroo',
  emoji: '🦘',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['kangaroo', 'australia', 'hop', 'pouch', 'joey'],
  tone: 'amber',
  body,
  shine: [17, 21, -35],
  shineSize: [4.5, 2.1],
  draw(c) {
    const ink = '#2A1200';
    const ear = (pts, nm) => a.part(c, nm, a.tube(pts, 2.6, 1.6), 'amber', { cx: 0.3, cy: 0.2 });
    return `${ear([[24, 17], [26, 10], [28.5, 5]], 'ear2')}
      ${a.part(c, 'tail', a.tube([[58, 72], [68, 78], [78, 81.5], [87, 82]], 5.5, 2), 'amber', { cx: 0.3, cy: 0.2 })}
      <path d="${body}" fill="${c.radial('a', 'amber', 0.3, 0.2)}"/>
      ${a.clip(c, 'belly', body, `<path d="${a.spline([[29, 40], [36, 46], [42, 58], [44, 70], [40, 76], [34, 66], [30, 54]])}" fill="#FFE9A0" opacity=".7"/>`)}
      ${a.line('M36 60 Q41 64 45 61', '#B85F00', 1.4, ' opacity=".7"')}
      ${a.part(c, 'arm', a.tube([[31, 42], [28, 48], [24, 50]], 2.4, 1.8), 'amber', { cx: 0.3, cy: 0.2 })}
      ${a.part(c, 'thigh', a.spline([[46, 56], [56, 58], [61, 68], [58, 77], [48, 78], [42, 70], [42, 62]]), 'amber', { cx: 0.35, cy: 0.25 })}
      ${ear([[21, 17], [21.5, 10], [23, 4]], 'ear')}
      ${a.sideEye(17.5, 22.5, { r: 2.1, ink })}
      <ellipse cx="9.4" cy="23.5" rx="1.6" ry="1.4" fill="${ink}"/>
      ${a.line('M10 27 Q12 28.2 14.5 27.8', ink, 1.1, ' opacity=".6"')}`;
  },
};
