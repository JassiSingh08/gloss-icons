const B = require('../src/parts/building');

const body = 'M26 84 Q22 84 22 80 L22 54 L29 54 L29 49 L31 49 C31 40 38 31 46 25 Q48 23.5 50 25 C58 31 65 40 65 49 L67 49 L67 54 L74 54 L74 80 Q74 84 70 84 Z';
const minaret = (x) => `M${x} 84 L${x} 41 L${x - 1.5} 41 L${x - 1.5} 37.5 L${x} 37.5 L${x} 30 L${x + 3.5} 17 Q${x + 4} 15.5 ${x + 4.5} 17 L${x + 8} 30 L${x + 8} 37.5 L${x + 9.5} 37.5 L${x + 9.5} 41 L${x + 8} 41 L${x + 8} 84 Z`;
const arch = (x, y, w, h) => `M${x} ${y + h} L${x} ${y + w * 0.6} Q${x} ${y + w * 0.15} ${x + w / 2} ${y} Q${x + w} ${y + w * 0.15} ${x + w} ${y + w * 0.6} L${x + w} ${y + h} Z`;
module.exports = {
  id: 'mosque',
  name: 'Mosque',
  emoji: '🕌',
  group: 'Travel & Places',
  subgroup: 'place-religious',
  tags: ['islam', 'muslim', 'prayer', 'worship', 'masjid'],
  tone: 'ivory',
  body,
  shine: [38, 34, -45],
  draw(c) {
    const wall = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const dome = c.radial('dome', 'gold', 0.33, 0.25);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    const mwall = c.linear('mw', 'white', [0, 0, 1, 0], 0, 2);
    const cap = c.radial('cap', 'gold', 0.3, 0.2);
    const edge = 'stroke="#6E61A8" stroke-opacity=".55" stroke-width="1.1"';
    const tower = (x) => `<path d="${minaret(x)}" fill="${mwall}" ${edge}/>
      <path d="M${x} 30 L${x + 3.5} 17 Q${x + 4} 15.5 ${x + 4.5} 17 L${x + 8} 30 Z" fill="${cap}"/>
      <path d="M${x - 1.5} 37.5 L${x + 9.5} 37.5 L${x + 9.5} 41 L${x - 1.5} 41 Z" fill="#D8D2EE"/>
      <path d="${arch(x + 2, 31.5, 4, 5)} ${arch(x + 2, 50, 4, 7)}" fill="#3A2F7A" opacity=".75"/>`;
    return `${tower(12)}${tower(76)}
      <path d="M48 24 L48 16" stroke="#C98500" stroke-width="1.6"/>
      <circle cx="48" cy="18.5" r="1.8" fill="${gold}"/>
      <path d="M45.2 10.8 A4 4 0 1 0 51.6 13.4 A3.2 3.2 0 1 1 45.2 10.8 Z" fill="${gold}" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".8"/>
      <path d="${body}" fill="${wall}"/>
      <path d="M31 49 C31 40 38 31 46 25 Q48 23.5 50 25 C58 31 65 40 65 49 Z" fill="${dome}"/>
      <path d="M29 49 L67 49 L67 54 L29 54 Z" fill="#D8D2EE"/>
      ${B.eave(22, 54, 52, 3, '#6E61A8', 0.3)}
      <path d="${arch(26, 62, 8, 12)} ${arch(62, 62, 8, 12)}" fill="${B.glow(c)}" ${edge}/>
      <path d="${arch(40, 61, 16, 23)}" fill="${c.radial('door', 'navy', 0.4, 0.3)}" ${edge}/>
      <path d="${arch(37.5, 58.5, 21, 25.5)}" fill="none" stroke="#C98500" stroke-width="1.4"/>`;
  },
};
