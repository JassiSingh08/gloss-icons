const a = require('../src/parts/animal');

// Sitting, front on, hands on knees, tail curling up at the side.
const body = a.mirror([[48, 11], [40, 12], [33.5, 17], [31.5, 25], [33.5, 33], [38, 38], [35, 43], [30.5, 52], [28.5, 64], [29.5, 75], [34.5, 82], [42, 84], [48, 84]]);
const mask = a.mirror([[48, 22.5], [44, 19], [39, 19], [35.5, 22.5], [36, 27.5], [37.5, 30], [35.5, 34], [38, 38.5], [43, 40.5], [48, 41]]);
module.exports = {
  id: 'monkey',
  name: 'Monkey',
  emoji: '🐒',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['monkey', 'primate', 'tail', 'jungle', 'cheeky'],
  tone: 'brown',
  body,
  shine: [37, 18, -40],
  shineSize: [4.5, 2.1],
  draw(c) {
    const ink = '#2A1004';
    const skin = c.radial('skin', 'skin', 0.4, 0.2);
    const ear = (x, s) => `${a.part(c, 'ear' + s, a.ellipse(x, 27, 5, 5.5), 'brown')}<ellipse cx="${x + s * 0.8}" cy="27.4" rx="2.8" ry="3.3" fill="${skin}"/>`;
    const arm = (pts, nm) => a.part(c, nm, a.tube(pts, 3.6, 3), 'brown', { cx: 0.3, cy: 0.2 });
    return `${a.part(c, 'tail', a.tube([[62, 80], [74, 80], [82, 72], [83, 60], [78, 53], [72, 55], [73, 61]], 2.6, 1.8), 'brown', { cx: 0.3, cy: 0.2 })}
      ${ear(30.5, 1)}${ear(65.5, -1)}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.18)}"/>
      ${a.clip(c, 'belly', body, `<ellipse cx="48" cy="66" rx="12" ry="15" fill="${skin}" opacity=".75"/>`)}
      <path d="${mask}" fill="${skin}"/>
      ${a.eyes(26, 4.8, { rx: 2, ry: 2.3, lid: 0.35, tilt: 0.3, ink })}
      <circle cx="46.6" cy="33" r=".9" fill="${ink}"/><circle cx="49.4" cy="33" r=".9" fill="${ink}"/>
      ${a.line('M42 37 Q48 40 54.5 36', ink, 1.6)}
      <ellipse cx="38" cy="81.5" rx="6" ry="3" fill="${skin}"${a.edge('skin')}/><ellipse cx="58" cy="81.5" rx="6" ry="3" fill="${skin}"${a.edge('skin')}/>
      ${arm([[35, 45], [31, 57], [36, 68], [42, 72]], 'arml')}${arm([[61, 45], [65, 57], [60, 68], [54, 72]], 'armr')}
      <ellipse cx="43" cy="72.5" rx="4" ry="3.2" fill="${skin}"${a.edge('skin')}/><ellipse cx="53" cy="72.5" rx="4" ry="3.2" fill="${skin}"${a.edge('skin')}/>`;
  },
};
