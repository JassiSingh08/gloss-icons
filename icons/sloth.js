const a = require('../src/parts/animal');

// Hanging from a branch by long arms, face turned to us.
const body = a.spline([[48, 40], [62, 43], [70, 54], [69, 68], [61, 79], [48, 83], [35, 79], [27, 68], [26, 54], [34, 43]]);
module.exports = {
  id: 'sloth',
  name: 'Sloth',
  emoji: '🦥',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['sloth', 'slow', 'lazy', 'hang', 'chill'],
  tone: 'sand',
  body,
  shine: [35, 50, -40],
  shineSize: [5, 2.3],
  draw(c) {
    const ink = '#1F1206';
    const arm = (pts, nm) => a.part(c, nm, a.tube(pts, 4.6, 3.6), 'sand', { cx: 0.3, cy: 0.2 });
    const claws = (x) => a.line(`M${x - 3} 21 Q${x - 2} 28 ${x - 4} 30 M${x} 21 Q${x + 1} 28 ${x - 1} 30.5 M${x + 3} 21.5 Q${x + 4} 28 ${x + 2} 30`, '#3E2A14', 1.4);
    return `<path d="${a.tube([[8, 26], [30, 23.5], [60, 24.5], [88, 21]], 3.6, 3)}" fill="${c.linear('branch', 'brown', [0, 0, 0, 1], 1, 3)}"${a.edge('brown')}/>
      ${a.line('M70 23.5 Q76 16 82 14', '#6E3A14', 2)}<path d="M80 9 Q88 9 87 15 Q81 16 80 9 Z" fill="${c.radial('leaf', 'green', 0.3, 0.3)}"/>
      ${arm([[34, 50], [31, 38], [33, 26]], 'arml')}${arm([[62, 50], [65, 38], [63, 26]], 'armr')}
      ${claws(33)}${claws(63)}
      <path d="${body}" fill="${c.radial('a', 'sand', 0.35, 0.2)}"/>
      ${a.clip(c, 'fur', body, `<path d="${[[38, 64, 40, 78], [48, 66, 48, 80], [58, 64, 56, 78]].map((s) => a.taper(...s, 1.4)).join(' ')}" fill="#8A6A3A" opacity=".35"/>`)}
      <ellipse cx="48" cy="56" rx="13.5" ry="10" fill="${c.radial('mask', 'cream', 0.4, 0.2)}"/>
      <path d="M35 55 Q40 49 46 54 Q42 59 37 58.5 Z M61 55 Q56 49 50 54 Q54 59 59 58.5 Z" fill="#5C4420"/>
      ${a.eyes(54.5, 6.5, { rx: 2.2, ry: 2.2, lid: 0.5, tilt: 0.3, ink })}
      <ellipse cx="48" cy="59" rx="2.6" ry="1.9" fill="${ink}"/>
      ${a.line('M43.5 62 Q48 65.5 52.5 62', ink, 1.5)}`;
  },
};
