const a = require('../src/parts/animal');

const body = a.mirror([[48, 29], [36, 30], [26, 36], [21.5, 48], [22.5, 62], [29, 73], [38, 79.5], [48, 81]]);
module.exports = {
  id: 'panda',
  name: 'Panda',
  emoji: '🐼',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['panda', 'bamboo', 'china', 'bear', 'cute'],
  tone: 'white',
  body,
  shine: [33, 36, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const ink = '#0E0E18';
    const blk = c.radial('blk', 'black', 0.3, 0.2);
    const ear = (x) => `<path d="${a.ellipse(x, 33, 9.5, 9)}" fill="${blk}"${a.edge('black')}/>`;
    const patch = (x, s) => `<ellipse cx="${x}" cy="51" rx="6.8" ry="9" fill="${c.radial('patch', 'black', 0.35, 0.25)}" transform="rotate(${s * 32} ${x} 51)"/>`;
    const eye = (x) => `<circle cx="${x}" cy="49.5" r="2.9" fill="${ink}" stroke="#8A8AA0" stroke-width=".9"/><circle cx="${x - 0.9}" cy="48.6" r="1" fill="#fff"/>`;
    return `${ear(26)}${ear(70)}
      <path d="${body}" fill="${c.radial('a', 'white', 0.36, 0.22)}"/>
      ${patch(37, 1)}${patch(59, -1)}${eye(38)}${eye(58)}
      <ellipse cx="48" cy="67" rx="11" ry="8.5" fill="#fff" opacity=".7"/>
      ${a.nose(48, 62, 4.8, ink)}
      ${a.line('M48 65.5 L48 68.5 Q44.5 72 41 70 M48 68.5 Q51.5 72 55 70', ink, 2.1)}`;
  },
};
