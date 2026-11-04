const a = require('../src/parts/animal');

const body = a.spline([
  [18, 10], [24, 12], [28, 18], [34, 28], [41, 36.5], [52, 40], [66, 43], [76, 46], [80.5, 52], [78, 58.5], [70, 61],
  [54, 60.5], [42, 58.5], [36, 54], [30.5, 44], [24.5, 32], [20, 24.5], [15.5, 22.5], [10, 22], [6.5, 19.5], [7, 15], [12, 11.5],
]);
module.exports = {
  id: 'giraffe',
  name: 'Giraffe',
  emoji: '🦒',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['giraffe', 'tall', 'safari', 'africa', 'neck'],
  tone: 'gold',
  body,
  shine: [13, 15, -25],
  shineSize: [4, 1.9],
  draw(c) {
    const ink = '#2A1400';
    c.def(`<pattern id="${c.id('patch')}" patternUnits="userSpaceOnUse" width="8" height="7.4" patternTransform="rotate(12)"><rect x=".8" y=".7" width="6.4" height="6" rx="1.8" fill="#8A4A10"/></pattern>`);
    const patch = `url(#${c.id('patch')})`;
    return `${a.rod(c, 'oss', 'M17.5 11 L16.5 5 M21.5 12 L21.5 6', 'gold', 1.8)}<circle cx="16.4" cy="4.6" r="1.7" fill="#5E3A00"/><circle cx="21.5" cy="5.6" r="1.7" fill="#5E3A00"/>
      ${a.line('M79.5 50 Q84 56 82.5 66', '#C98500', 1.6)}<path d="${a.spline([[82.5, 64], [84.5, 67], [83.5, 71, 1], [81, 68]])}" fill="#3A1A00"/>
      ${a.legs(c, 'gold', [
        { x: 41, top: 56, w: 3.2, wf: 2, far: true },
        { x: 68, top: 56, w: 4.4, wf: 2, far: true, fx: 69, knee: [72, 1.5, 2.2] },
        { x: 46, top: 57, w: 3.4, wf: 2.2, fx: 45.5 },
        { x: 74, top: 55, w: 4.8, wf: 2.2, fx: 75, knee: [72, 2, 2.4] },
      ], { hoof: '#3A1A00', ht: 3, over: patch })}
      <path d="${body}" fill="${c.radial('a', 'gold', 0.25, 0.2)}"/>
      ${a.clip(c, 'coat', body, `<path d="M0 22 L96 22 L96 96 L0 96 Z" fill="${patch}"/>
        <path d="M22 12 Q30 22 40 34 Q52 40 64 42" fill="none" stroke="#8A4A10" stroke-width="2.2" stroke-dasharray="2.4 1.6"/>`)}
      ${a.part(c, 'ear', a.spline([[22, 14], [27, 11.5], [30, 12], [27, 15.5]]), 'gold')}
      ${a.sideEye(15.5, 15.5, { r: 2, ink })}
      ${a.line('M7.5 17 L9 17.5 M7 20.5 Q9.5 22 12.5 21.5', ink, 1.1, ' opacity=".7"')}`;
  },
};
