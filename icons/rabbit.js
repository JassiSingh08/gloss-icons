const a = require('../src/parts/animal');

// Sitting up, facing left, ears laid back along the shoulders.
const body = a.spline([
  [28, 30], [35, 32.5], [40, 40], [52, 43], [66, 48], [75, 58], [77, 69], [72, 78], [62, 83], [44, 84], [34, 82.5],
  [30, 76], [27, 66], [24.5, 57], [18, 54.5], [12, 52], [8.5, 47.5], [10.5, 41], [16.5, 34.5], [22, 31],
]);
module.exports = {
  id: 'rabbit',
  name: 'Rabbit',
  emoji: '🐇',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['rabbit', 'bunny', 'hare', 'hop', 'easter'],
  tone: 'sand',
  body,
  shine: [18, 39, -40],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#2A1A08';
    const ear = (pts, nm) => a.part(c, nm, a.tube(pts, 3.6, 3), 'sand', { cx: 0.3, cy: 0.2 });
    return `${ear([[29, 34], [36, 22], [44, 13], [51, 9]], 'ear2')}
      <path d="${a.ellipse(78, 66, 5.5, 5.2)}" fill="${c.radial('tail', 'white', 0.35, 0.3)}"${a.edge('white')}/>
      <path d="${body}" fill="${c.radial('a', 'sand', 0.25, 0.25)}"/>
      ${a.clip(c, 'belly', body, `<ellipse cx="30" cy="72" rx="8" ry="14" fill="#FFF4D6" opacity=".7"/>`)}
      <path d="${a.spline([[42, 78], [64, 78.5], [72, 82], [70, 85], [44, 85], [40, 82]])}" fill="${c.linear('foot', 'sand', [0, 0, 0, 1], 1, 2)}"${a.edge('sand')}/>
      <ellipse cx="34" cy="82.4" rx="5.4" ry="2.6" fill="${c.linear('paw', 'sand', [0, 0, 0, 1], 0, 1)}"${a.edge('sand')}/>
      ${ear([[25, 33], [30, 20], [37, 10], [43, 5]], 'ear')}
      <path d="${a.tube([[27, 30], [31, 21], [37, 13], [41.5, 9]], 1.5, 1.3)}" fill="${a.custom(c, 'earin', a.ROSE, 0.4, 0.3)}" opacity=".75"/>
      ${a.sideEye(19.5, 41.5, { r: 2.3, ink })}
      <path d="M8.3 46 Q10 44 11 46.5 Q10 48 8.3 46 Z" fill="#C2436A"/>
      ${a.line('M10 48.5 Q11 51 14 51', ink, 1.1, ' opacity=".6"')}
      ${a.whiskers(11, 48, 1, { len: 9, color: '#5C4420', o: 0.45, w: 0.7 })}`;
  },
};
