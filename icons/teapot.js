const g = require('../src/parts/glass');
const body = 'M48 32 C66 32 76 45 76 59 C76 71 68 78 60 80 L61 84 L35 84 L36 80 C28 78 20 71 20 59 C20 45 30 32 48 32 Z';
module.exports = {
  id: 'teapot',
  name: 'Teapot',
  emoji: '🫖',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['teapot', 'tea', 'kettle', 'brew', 'afternoon tea'],
  tone: 'blue',
  body,
  shine: [31, 44, -40],
  draw(c) {
    const pot = c.radial('a', 'blue', 0.32, 0.25);
    const spout = c.linear('spout', 'blue', [0, 0, 1, 1], 0, 2);
    const handle = c.linear('handle', 'blue', [0, 0, 1, 0], 1, 2);
    const lid = c.radial('lid', 'blue', 0.35, 0.2);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 0], 0, 2);
    const ink = '#001E4D';
    return `<g fill="none" stroke-linecap="round">
        <path d="M73 46 C88 44 88 70 71 70" stroke="${ink}" stroke-opacity=".5" stroke-width="8.6"/>
        <path d="M73 46 C88 44 88 70 71 70" stroke="${handle}" stroke-width="6"/>
      </g>
      <path d="M26 54 C20 52 17 44 14 36 Q13 33 10.5 32.5 Q9 30.5 11.5 29.5 L17 29.5 Q19 30 19 33 C21 41 25 45 32 47 Z" fill="${spout}" ${g.edge(ink, 1.2, 0.5)}/>
      <path d="${body}" fill="${pot}"/>
      <path d="M22 62 C30 67 66 67 74 62" fill="none" stroke="${gold}" stroke-width="2.4"/>
      <path d="M33 36 C33 27 63 27 63 36 C58 38.5 38 38.5 33 36 Z" fill="${lid}" ${g.edge(ink, 1.2, 0.5)}/>
      <ellipse cx="48" cy="25.5" rx="4.4" ry="3.6" fill="${gold}" ${g.edge('#5E3A00', 1, 0.55)}/>
      <ellipse cx="46.6" cy="24.4" rx="1.4" ry=".9" fill="#fff" opacity=".8"/>
      <path d="M38 31.5 C41 30 44 29.6 47 29.6" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>
      ${g.steam([[12, 25, 13]], 0.7, 2.6)}`;
  },
};
