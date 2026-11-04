const canopy = 'M9 40 C9 20 26 8 48 8 C70 8 87 20 87 40 Q80.5 35 74 40 Q67.5 35 61 40 Q54.5 35 48 40 Q41.5 35 35 40 Q28.5 35 22 40 Q15.5 35 9 40 Z';
const X = [9, 22, 35, 48, 61, 74, 87];
module.exports = {
  id: 'parachute',
  name: 'Parachute',
  emoji: '🪂',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['skydiving', 'jump', 'adventure', 'extreme', 'freefall'],
  tone: 'purple',
  body: canopy,
  shine: [26, 19, -35],
  shineSize: [6, 2.4],
  draw(c) {
    c.def(`<clipPath id="${c.id('k')}"><path d="${canopy}"/></clipPath>`);
    const colours = ['red', 'orange', 'gold', 'green', 'blue', 'purple'];
    const gore = (i) => {
      const a = X[i], b = X[i + 1];
      const top = (x) => 48 + (x - 48) * 0.25;
      return `<path d="M${top(a)} 4 Q${a + (top(a) - a) * 0.2} 20 ${a} 42 L${b} 42 Q${b + (top(b) - b) * 0.2} 20 ${top(b)} 4 Z" fill="${c.linear(`g${i}`, colours[i], [0, 0, 1, 1], 0, 2)}"/>`;
    };
    const lines = X.map((x) => `M${x} 39.5 L${x < 48 ? 45 : x > 48 ? 51 : 48} 66`).join(' ');
    const head = c.radial('head', 'amber', 0.35, 0.3);
    const suit = c.linear('suit', 'navy', [0, 0, 1, 1], 0, 2);
    return `<path d="${lines}" stroke="#3A3E52" stroke-width="1.1" stroke-opacity=".85"/>
      <path d="${canopy}" fill="#7A1FE0"/>
      <g clip-path="url(#${c.id('k')})">${[0, 1, 2, 3, 4, 5].map(gore).join('')}</g>
      <path d="M44 67 Q44 64 48 64 Q52 64 52 67 L53 77 L43 77 Z" fill="${suit}" stroke="#080C3D" stroke-opacity=".5" stroke-width="1"/>
      <path d="M45 76 L43 84 M51 76 L53 84" stroke="#1A238A" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M44 66 L41 59 M52 66 L55 59" stroke="#1A238A" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="48" cy="59.5" r="4.4" fill="${head}" stroke="#5E2E00" stroke-opacity=".5" stroke-width="1"/>
      <path d="M43.8 58.5 Q44 54.8 48 54.8 Q52 54.8 52.2 58.5 Z" fill="#E3120B"/>`;
  },
};
