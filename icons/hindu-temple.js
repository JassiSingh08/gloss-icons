const B = require('../src/parts/building');

const STONE = ['#FFE8C2', '#F2B470', '#C26A2A', '#5C2A0A'];
const body = 'M18 84 Q14 84 14 80 L14 60 Q14 56 18 56 L30 56 C30 44 37 32 43.5 24 L52.5 24 C59 32 66 44 66 56 L78 56 Q82 56 82 60 L82 80 Q82 84 78 84 Z';
// Width of the spire at height y, for the ribs that wrap round it.
const half = (y) => 18 * Math.pow((y - 24) / 32, 0.7) + 4.5;
module.exports = {
  id: 'hindu-temple',
  name: 'Hindu Temple',
  emoji: '🛕',
  group: 'Travel & Places',
  subgroup: 'place-religious',
  tags: ['mandir', 'hindu', 'temple', 'worship', 'prayer'],
  tone: 'orange',
  body,
  shine: [37, 40, -60],
  shineSize: [5.5, 2],
  draw(c) {
    const stone = B.grad(c, 'a', STONE.slice(0, 3), [0, 0, 1, 1]);
    const spire = B.rgrad(c, 'spire', STONE, 0.35, 0.3);
    const saffron = c.linear('flag', 'orange', [0, 0, 1, 1], 1, 2);
    const gold = c.radial('gold', 'gold', 0.35, 0.3);
    let ribs = '';
    for (let y = 30; y < 55; y += 5) ribs += `M${B.n(48 - half(y))} ${y} Q48 ${y + 2.4} ${B.n(48 + half(y))} ${y} `;
    const pillars = [20, 30, 62, 72].map((x) => `<rect x="${x}" y="64" width="4" height="20" rx="1" fill="${STONE[0]}" stroke="#5C2A0A" stroke-opacity=".35" stroke-width=".8"/>`).join('');
    return `<path d="M61 48 L66 10" stroke="#6E3A14" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M66 10 L80 14.5 L65.2 18.5 Z" fill="${saffron}" stroke="#6B0F00" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${stone}"/>
      <path d="M30 56 C30 44 37 32 43.5 24 L52.5 24 C59 32 66 44 66 56 Z" fill="${spire}"/>
      <path d="${ribs}" fill="none" stroke="#7A3A12" stroke-opacity=".45" stroke-width="1.3"/>
      <path d="M45 25 C38 34 35 45 35 56 M51 25 C58 34 61 45 61 56" fill="none" stroke="#7A3A12" stroke-opacity=".4" stroke-width="1.3"/>
      <path d="M45 25 C43 36 43 46 44 56 L52 56 C53 46 53 36 51 25 Z" fill="#FFE8C2" opacity=".5"/>
      <ellipse cx="48" cy="22.5" rx="7" ry="3" fill="${gold}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1"/>
      <path d="M43 22.5 L43 21 M45.5 22.5 L45.5 20.5 M48 22.5 L48 20 M50.5 22.5 L50.5 20.5 M53 22.5 L53 21" stroke="#C98500" stroke-width=".9"/>
      <path d="M48 19.5 C44.5 19.5 44.5 14.5 48 14.5 C51.5 14.5 51.5 19.5 48 19.5 Z M48 14.5 L48 10.5" fill="${gold}" stroke="#C98500" stroke-width="1.2"/>
      <path d="M14 56 L82 56 L82 63 L14 63 Z" fill="${c.linear('cornice', 'orange', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M14 63 L82 63" stroke="#5C2A0A" stroke-opacity=".4" stroke-width="1.2"/>
      ${pillars}
      <path d="M40 84 L40 72 Q40 66 48 64.5 Q56 66 56 72 L56 84 Z" fill="${B.glow(c)}" stroke="#5C2A0A" stroke-opacity=".55" stroke-width="1.1"/>
      <circle cx="48" cy="59.5" r="2" fill="#E3120B"/>`;
  },
};
