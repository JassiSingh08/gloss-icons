const a = require('../src/parts/animal');

const body = a.mirror([[48, 30], [37, 31], [28, 35.5], [22, 45], [19, 57], [21, 68], [28.5, 77], [38.5, 81], [48, 82]]);
module.exports = {
  id: 'hamster',
  name: 'Hamster',
  emoji: '🐹',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['hamster', 'pet', 'rodent', 'cheeks', 'chubby'],
  tone: 'amber',
  body,
  shine: [31, 38, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#2A1200';
    const ear = (x, s) => `${a.part(c, 'ear', a.ellipse(x, 33, 7.5, 7), 'amber')}<circle cx="${x + s}" cy="34" r="4" fill="${a.custom(c, 'in' + s)}"/>`;
    const cheeks = a.mirror([[48, 55], [40, 54.5], [30, 57], [21, 63], [24, 73], [32, 79.5], [40, 82], [48, 82.5]]);
    return `${ear(29, 1)}${ear(67, -1)}
      <path d="${body}" fill="${c.radial('a', 'amber', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<path d="${cheeks}" fill="${c.radial('w', 'cream', 0.45, 0.2)}"/>
        <path d="M48 31 Q44 38 45.5 47 L50.5 47 Q52 38 48 31 Z" fill="#FFE9A0" opacity=".6"/>`)}
      ${a.eyes(50, 11.5, { rx: 3, ry: 3.3, lid: 0.25, tilt: 0.3, ink })}
      <ellipse cx="48" cy="59" rx="3.2" ry="2.4" fill="${a.custom(c, 'nose')}" stroke="#6E2238" stroke-opacity=".5"/>
      ${a.line('M48 61.4 L48 63 Q45.5 65.5 43 64 M48 63 Q50.5 65.5 53 64', ink, 1.7)}
      <path d="M46 64.6 L46 67.5 L50 67.5 L50 64.6 Z" fill="#FFF8EC" stroke="${ink}" stroke-opacity=".4" stroke-width=".8"/>`;
  },
};
