const a = require('../src/parts/animal');

const body = a.spline([
  [17, 16], [22, 17.5], [25.5, 23], [27, 33], [29, 41], [36, 44], [56, 44.5], [72, 44], [79, 47.5], [81.5, 55], [77, 62],
  [62, 63], [44, 63], [34, 62], [25, 58.5], [19.5, 51], [16.5, 40], [15.5, 30], [12, 28], [6.5, 27], [4.5, 23.5], [7.5, 19.5], [12, 17],
]);
module.exports = {
  id: 'llama',
  name: 'Llama',
  emoji: '🦙',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['llama', 'alpaca', 'wool', 'andes', 'peru'],
  tone: 'cream',
  body,
  shine: [11, 21, -25],
  shineSize: [4, 1.9],
  draw(c) {
    const ink = '#2A1A08';
    const ear = (pts, nm) => a.part(c, nm, a.spline(pts), 'cream', { cx: 0.3, cy: 0.3 });
    return `${ear([[17, 18], [16, 10], [18.5, 4, 1], [21, 11], [20.5, 18]], 'ear2')}
      <path d="${a.spline([[78, 47], [84, 45], [86, 50], [82, 54]])}" fill="${c.radial('tail', 'cream', 0.3, 0.3)}"${a.edge('cream')}/>
      ${a.legs(c, 'cream', [
        { x: 35, top: 58, w: 3.6, wf: 2.6, far: true },
        { x: 68, top: 58, w: 4.6, wf: 2.6, far: true, fx: 69, knee: [72, 2, 2.8] },
        { x: 41, top: 59, w: 3.8, wf: 2.8, fx: 40.5 },
        { x: 74, top: 57, w: 5, wf: 2.8, fx: 75, knee: [72, 2.5, 3] },
      ], { hoof: '#5C4420', ht: 3 })}
      <path d="${body}" fill="${c.radial('a', 'cream', 0.25, 0.2)}"/>
      ${a.clip(c, 'fleece', body, `<path d="${a.wool(55, 54, 27, 10, 12, 0.18)} ${a.wool(22, 42, 6, 14, 6, 0.2)}" fill="none" stroke="#B08A4E" stroke-opacity=".35" stroke-width="1.3"/>
        <path d="M30 44 L72 44 L72 56 L30 56 Z" fill="${c.linear('blanket', 'red', [0, 0, 0, 1], 1, 2)}" opacity=".95"/>
        <path d="M30 47.5 L72 47.5 M30 52.5 L72 52.5" stroke="#FFC21A" stroke-width="1.6"/>`)}
      ${ear([[21, 18], [22, 9], [25, 4, 1], [26, 12], [24, 19]], 'ear')}
      ${a.sideEye(13, 22, { r: 2, ink })}
      ${a.line('M5.5 23 L7 23.5 M5 26 Q7.5 27.5 10 27', ink, 1.1, ' opacity=".7"')}`;
  },
};
