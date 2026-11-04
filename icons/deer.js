const a = require('../src/parts/animal');

const body = a.spline([
  [21, 25], [26, 27], [30, 33], [36, 41.5], [52, 43.5], [67, 42.5], [77, 44], [81, 49.5], [79.5, 57], [71, 61],
  [52, 62], [38, 61], [32, 56], [29, 48], [25.5, 41], [22, 37], [16.5, 38.5], [10.5, 38.5], [7.5, 35.5], [9.5, 31.5], [15, 27],
]);
module.exports = {
  id: 'deer',
  name: 'Deer',
  emoji: '🦌',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['deer', 'stag', 'antlers', 'forest', 'reindeer'],
  tone: 'brown',
  body,
  shine: [15, 31, -35],
  shineSize: [4.5, 2.1],
  draw(c) {
    const ink = '#1F0C02';
    const antler = 'M19 25 Q15 16 19 8 Q21 4 26 3 M17.6 17 Q12 14 11 9 M18.6 11 Q23 9 24 4.5 M22 26 Q24 17 31 12 Q34 10 37 10 M25.5 19 Q30 17 31 12 M28 15 Q28.5 10 31.5 7';
    return `${a.rod(c, 'ant', antler, 'sand', 2.4)}
      <path d="${a.spline([[80, 46], [84, 43], [85.5, 46.5], [82, 50]])}" fill="#FFF4D6"${a.edge('brown')}/>
      ${a.legs(c, 'brown', [
        { x: 34, top: 56, w: 3.8, wf: 2.2, far: true, knee: [72, 0.5, 2.4] },
        { x: 68, top: 56, w: 5.6, wf: 2.2, far: true, fx: 69, knee: [71, 3.5, 2.4] },
        { x: 39.5, top: 57, w: 4.2, wf: 2.4, fx: 39, knee: [72, -0.5, 2.6] },
        { x: 74, top: 55, w: 6.5, wf: 2.4, fx: 75, knee: [71, 4, 2.6] },
      ], { hoof: '#241208', ht: 3.5 })}
      ${a.part(c, 'ear', a.spline([[23, 28], [28, 22], [34, 20.5], [31, 26], [26, 30]]), 'brown', { cx: 0.3, cy: 0.3 })}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.25, 0.25)}"/>
      ${a.clip(c, 'belly', body, `<ellipse cx="54" cy="63" rx="20" ry="5" fill="#FFF4D6" opacity=".7"/><ellipse cx="25" cy="42" rx="4" ry="6" fill="#FFF4D6" opacity=".55"/>
        <circle cx="50" cy="48" r="1.4" fill="#FFF4D6" opacity=".7"/><circle cx="57" cy="50" r="1.4" fill="#FFF4D6" opacity=".7"/><circle cx="64" cy="48" r="1.4" fill="#FFF4D6" opacity=".7"/><circle cx="70" cy="51" r="1.4" fill="#FFF4D6" opacity=".7"/>`)}
      ${a.sideEye(17, 31.5, { r: 2.2, ink })}
      <ellipse cx="8.4" cy="34" rx="1.8" ry="1.6" fill="${ink}"/>`;
  },
};
