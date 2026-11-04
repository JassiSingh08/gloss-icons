const a = require('../src/parts/animal');

const body = a.mirror([[48, 28], [37, 29], [28, 34.5], [24, 45], [25, 58], [30, 70], [38, 78], [48, 80.5]]);
const EAR = [[34, 30], [24, 30], [17, 37], [14, 51], [16, 63], [22, 65], [27, 56], [30, 43]];
module.exports = {
  id: 'dog-face',
  name: 'Dog Face',
  emoji: '🐶',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['dog', 'puppy', 'pet', 'loyal', 'animal'],
  tone: 'sand',
  body,
  shine: [34, 34, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#1F0E04';
    const ear = (pts, nm) => a.part(c, nm, a.spline(pts), 'brown', { cx: 0.4, cy: 0.2 });
    return `<path d="${body}" fill="${c.radial('a', 'sand', 0.36, 0.22)}"/>
      <path d="M48 30 Q43 40 44 50 L52 50 Q53 40 48 30 Z" fill="#FFF4D6" opacity=".55"/>
      ${ear(EAR, 'earl')}${ear(a.flipX(EAR), 'earr')}
      <ellipse cx="48" cy="66" rx="13" ry="10.5" fill="${c.radial('snout', 'cream', 0.4, 0.2)}"/>
      ${a.line('M34 41.5 Q38 39.5 42 41.5', '#5C4420', 2.4, ' opacity=".8"')}${a.line('M54 40 Q58 37.5 62 40', '#5C4420', 2.4, ' opacity=".8"')}
      ${a.eyes(47.5, 9.5, { rx: 3, ry: 3.5, lid: 0.25, ink })}
      <path d="M50 70 L57 70 L57 75 A3.5 3.5 0 0 1 50 75 Z" fill="${c.radial('tongue', 'pink', 0.4, 0.2)}"/>
      ${a.nose(48, 60, 6.5, ink)}
      ${a.line('M48 64.5 L48 67.5 Q44 71.5 40 69 M48 67.5 Q53 71.5 58 68', ink, 2.2)}`;
  },
};
