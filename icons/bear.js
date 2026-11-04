const a = require('../src/parts/animal');

const body = a.mirror([[48, 28], [36, 29], [26, 35], [21.5, 47], [22, 62], [28, 73], [38, 79.5], [48, 81]]);
module.exports = {
  id: 'bear',
  name: 'Bear',
  emoji: '🐻',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['bear', 'grizzly', 'wild', 'forest', 'animal'],
  tone: 'brown',
  body,
  shine: [32, 36, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#1F0C02';
    const ear = (x) => `${a.part(c, 'ear', a.ellipse(x, 32, 9.5, 9), 'brown')}<circle cx="${x + (x < 48 ? 1 : -1)}" cy="33" r="4.8" fill="#6E3A14"/>`;
    return `${ear(27)}${ear(69)}
      <path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.22)}"/>
      <ellipse cx="48" cy="65" rx="13.5" ry="11" fill="${c.radial('snout', 'sand', 0.4, 0.2)}"/>
      ${a.line('M33 42 Q38 40 42.5 43', '#331805', 2.4, ' opacity=".7"')}${a.line('M63 42 Q58 40 53.5 43', '#331805', 2.4, ' opacity=".7"')}
      ${a.eyes(48, 10, { rx: 2.8, ry: 3.2, lid: 0.35, tilt: 0.4, ink })}
      ${a.nose(48, 59, 6, ink)}
      ${a.line('M48 63 L48 66.5 Q44 70.5 40 68 M48 66.5 Q52 70.5 56 68', ink, 2.2)}`;
  },
};
