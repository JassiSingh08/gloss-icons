const g = require('../src/parts/glass');
const body = 'M16 30 L80 30 L75.5 78 Q75 84 69 84 L27 84 Q21 84 20.5 78 Z';
module.exports = {
  id: 'tumbler-glass',
  name: 'Tumbler Glass',
  emoji: '🥃',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['whisky', 'rocks', 'tumbler', 'bar', 'drinks'],
  tone: 'sky',
  body,
  shine: [22, 38, -85],
  shineSize: [5, 1.8],
  draw(c) {
    const whisky = c.linear('whisky', 'amber', [0, 0, 1, 1], 1, 3);
    const ice = c.linear('ice', 'sky', [0, 0, 1, 1], 0, 1);
    return `${g.pane(c, body, 0.38)}
      <path d="M18.6 50 L77.4 50 L75.9 72 L20.1 72 Z" fill="${whisky}"/>
      <path d="${g.ellipse(48, 50, 29.4, 3.6)}" fill="#FFC14D"/>
      <g transform="rotate(-14 38 50)"><rect x="27" y="38" width="20" height="20" rx="4" fill="${ice}" fill-opacity=".85" ${g.edge('#1F7FD1', 1.1, 0.6)}/><path d="M31 42 L42 42" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></g>
      <g transform="rotate(12 61 44)"><rect x="52" y="35" width="18" height="18" rx="4" fill="${ice}" fill-opacity=".85" ${g.edge('#1F7FD1', 1.1, 0.6)}/><path d="M56 39 L65 39" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></g>
      <path d="M18.6 50 C30 54 66 54 77.4 50" fill="none" stroke="#FFE9A0" stroke-opacity=".5" stroke-width="1"/>
      ${g.solid('M20.1 72 L75.9 72 L75.5 78 Q75 84 69 84 L27 84 Q21 84 20.5 78 Z', 0.6)}
      <path d="${g.ellipse(48, 30, 32, 3.8)}" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.4"/>
      ${g.gleam(['M21.5 37 L24 66', 'M73 36 L72 46'], 1.8)}`;
  },
};
