const a = require('../src/parts/animal');

// Standing up, front on, paws together, tail out along the ground.
const body = a.mirror([[48, 15], [40, 16], [34.5, 21], [32.5, 28.5], [34.5, 35.5], [33.5, 43], [30.5, 53], [29.5, 65], [31.5, 75], [36.5, 81.5], [42, 84], [48, 84.5]]);
module.exports = {
  id: 'otter',
  name: 'Otter',
  emoji: '🦦',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['otter', 'river', 'playful', 'swim', 'sea otter'],
  tone: 'brown',
  body,
  shine: [37, 22, -40],
  shineSize: [4.5, 2.1],
  draw(c) {
    const ink = '#1A0A02';
    const tail = a.tube([[58, 80], [68, 82], [78, 81.5], [86, 78]], 4.4, 2);
    return `${a.part(c, 'tail', tail, 'brown', { cx: 0.3, cy: 0.2 })}
      ${a.part(c, 'earl', a.ellipse(35, 21, 3.2, 3), 'brown')}${a.part(c, 'earr', a.ellipse(61, 21, 3.2, 3), 'brown')}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.2)}"/>
      ${a.clip(c, 'chest', body, `<path d="${a.mirror([[48, 26], [41, 27], [36, 31], [35.5, 38], [38, 46], [37, 58], [38, 70], [42, 76], [48, 77]])}" fill="${c.radial('chest', 'cream', 0.4, 0.15)}"/>`)}
      ${a.eyes(26.5, 7.2, { rx: 2.2, ry: 2.4, lid: 0.3, tilt: 0.3, ink })}
      ${a.nose(48, 32, 2.8, ink)}
      ${a.line('M48 34.5 L48 35.5 Q46 37.5 44 36.5 M48 35.5 Q50 37.5 52 36.5', ink, 1.3)}
      ${a.whiskers(48, 35, 5, { len: 9, color: '#fff', o: 0.6, w: 0.8 })}
      ${a.part(c, 'pawl', a.spline([[39, 46], [45, 44], [48, 48], [44, 52], [38.5, 51]]), 'brown')}${a.part(c, 'pawr', a.spline([[57, 46], [51, 44], [48, 48], [52, 52], [57.5, 51]]), 'brown')}
      <ellipse cx="40.5" cy="83" rx="5" ry="2.4" fill="${c.linear('foot', 'brown', [0, 0, 0, 1], 1, 2)}"${a.edge('brown')}/><ellipse cx="55.5" cy="83" rx="5" ry="2.4" fill="${c.linear('foot', 'brown', [0, 0, 0, 1], 1, 2)}"${a.edge('brown')}/>`;
  },
};
