const p = require('../src/parts/paper');
const R = 32;
const body = 'M25.2 70 A32 32 0 0 1 64.8 20 L69.8 24 A32 32 0 0 1 30.2 74 Z';
module.exports = {
  id: 'coin',
  name: 'Coin',
  emoji: '🪙',
  group: 'Objects',
  subgroup: 'money',
  tags: ['coin', 'money', 'gold', 'currency', 'change'],
  tone: 'gold',
  body,
  shine: [26, 34, -55],
  draw(c) {
    const g = c.ramp('gold');
    let reeds = '';
    for (let a = 10; a <= 120; a += 9) {
      const t = (a * Math.PI) / 180;
      const x = 45 + R * Math.cos(t);
      const y = 45 + R * Math.sin(t);
      reeds += `M${p.n(x)} ${p.n(y)} L${p.n(x + 5)} ${p.n(y + 4)} `;
    }
    const star = 'M45 27 L50.3 38.6 L63 40 L53.5 48.6 L56.1 61 L45 54.7 L33.9 61 L36.5 48.6 L27 40 L39.7 38.6 Z';
    return `<path d="${body}" fill="${g[2]}"/>
      ${p.line(reeds, g[3], 1.2, 0.5)}
      <circle cx="45" cy="45" r="${R}" fill="${c.radial('a', 'gold', 0.32, 0.25)}"/>
      <circle cx="45" cy="45" r="25.5" fill="${c.radial('in', 'gold', 0.7, 0.75)}" stroke="${g[2]}" stroke-width="1.6"/>
      <path d="${star}" fill="${g[3]}" opacity=".5" transform="translate(1.2 1.6)"/>
      <path d="${star}" fill="${c.linear('star', 'gold', [0, 0, 1, 1], 0, 2)}"/>
      ${p.line('M38 40.5 L45 30 L48.5 38', '#fff', 1.2, 0.6)}`;
  },
};
