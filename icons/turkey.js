const k = require('../src/parts/critter');
// Fanned tail behind, plump body in front, bare red head facing left with a hanging snood.
const body = 'M26 36 C25 29 29 24 34 24 C40 24 43 29 42 35 C42 41 44 45 50 46 C64 46 74 55 74 64 C74 73 64 79 50 79 C36 79 26 73 26 64 C26 57 32 53 34 47 C33 43 28 41 26 36 Z';
const CX = 54, CY = 58;
module.exports = {
  id: 'turkey',
  name: 'Turkey',
  emoji: '🦃',
  group: 'Animals & Nature',
  subgroup: 'animal-bird',
  tags: ['turkey', 'thanksgiving', 'bird', 'feast', 'autumn'],
  tone: 'brown',
  body,
  shine: [40, 53, -30],
  draw(c) {
    const tip = c.radial('tip', 'cream', 0.5, 0.2);
    const band = c.radial('band', 'brown', 0.5, 0.9);
    const fan = [-165, -140, -115, -90, -65, -40, -15]
      .map((a) => {
        const t = (a * Math.PI) / 180;
        const at = (d) => [CX + d * Math.cos(t), CY + d * Math.sin(t)].map(k.n);
        const [x1, y1] = at(20), [x2, y2] = at(19);
        return k.part(c, k.ellipse(x1, y1, 16, 7.6, a), tip, 'cream') + `<path d="${k.ellipse(x2, y2, 13.5, 6.4, a)}" fill="${band}"/>`;
      })
      .join('');
    const red = c.radial('head', 'red', 0.3, 0.2);
    return `${fan}
      ${k.foot(42, 86, 77, -1, '#5E2E00')}${k.foot(56, 86, 77, -1, '#5E2E00')}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.35, 0.25)}"/>
      ${k.line('M50 62 C56 66 62 66 67 63 M48 68 C54 72 60 72 65 69', '#331805', 1.3, 0.5)}
      <path d="M26 36 C25 29 29 24 34 24 C40 24 43 29 42 35 C42 39 40 42 36 43 C31 43 27 40 26 36 Z" fill="${red}"/>
      ${k.part(c, 'M26.5 32 L19 35 L26.5 37.5 Z', c.radial('beak', 'gold', 0.3, 0.2), 'gold')}
      ${k.part(c, 'M27 38 C30 39 31 44 30 50 C29 54 25 54 25 50 C25 46 26 42 27 38 Z', red, 'red')}
      ${k.part(c, 'M27 30 C24 27 23 23 25 21 C27 23 28 26 28 29 Z', red, 'red')}
      ${k.eye(34, 31, 2.8, '#2A0003')}`;
  },
};
