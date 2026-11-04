const a = require('../src/parts/animal');

const body = a.spline([
  [21, 25], [26, 28], [31, 36], [38, 41.5], [54, 43], [68, 42], [77, 43.5], [81, 49], [79.5, 57], [71, 61],
  [52, 62], [38, 61], [32, 56.5], [29, 49], [26, 43], [21, 40], [15, 40], [10, 38], [8, 34], [10.5, 29], [15.5, 25.5],
]);
module.exports = {
  id: 'goat',
  name: 'Goat',
  emoji: '🐐',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['goat', 'farm', 'beard', 'capricorn', 'kid'],
  tone: 'white',
  body,
  shine: [16, 30, -35],
  shineSize: [4.5, 2.1],
  draw(c) {
    const ink = '#1A1430';
    return `${a.part(c, 'horn', a.tube([[22, 27], [26, 19], [32, 14], [38, 15]], 2.6, 1), 'grey', { cx: 0.3, cy: 0.2 })}
      <path d="${a.spline([[78, 45], [82, 38], [85, 37], [83.5, 43], [81, 48]])}" fill="${c.radial('tail', 'white', 0.3, 0.3)}"${a.edge('white')}/>
      ${a.legs(c, 'white', [
        { x: 34, top: 56, w: 3.8, wf: 2.4, far: true },
        { x: 68, top: 56, w: 5.4, wf: 2.4, far: true, fx: 69, knee: [71, 3, 2.6] },
        { x: 39.5, top: 57, w: 4.2, wf: 2.6, fx: 39 },
        { x: 74, top: 55, w: 6, wf: 2.6, fx: 75, knee: [71, 3.5, 2.8] },
      ], { hoof: '#3A3450', ht: 3.5 })}
      <path d="${body}" fill="${c.radial('a', 'white', 0.25, 0.25)}"/>
      <path d="${a.spline([[13, 39], [18, 40], [17, 46], [14.5, 51, 1], [12.5, 45]])}" fill="${c.radial('beard', 'white', 0.4, 0.2)}"${a.edge('white')}/>
      ${a.part(c, 'ear', a.spline([[23, 31], [30, 31], [35, 34], [29, 35.5], [24, 34.5]]), 'white', { cx: 0.3, cy: 0.3 })}
      ${a.sideEye(17.5, 31, { r: 2.2, ink })}
      <ellipse cx="9.5" cy="33.5" rx="1" ry="1.4" fill="${ink}"/>
      ${a.line('M9 37 Q11.5 38.5 14.5 38', ink, 1.2, ' opacity=".6"')}`;
  },
};
