const g = require('../src/parts/glass');
// Three scoops in a footed metal coupe; the scoops' top edge and the cup make one outline.
const L = [34.5, 44, 12];
const T = [48, 32, 12.5];
const R = [61.5, 44, 12];
const body = `${g.crown([L, T, R], 52)} L78 52 C77 63 64 70 52 71 L52 77 Q64 78 64 81.5 Q64 84 58 84 L38 84 Q32 84 32 81.5 Q32 78 44 77 L44 71 C32 70 19 63 18 52 Z`;
module.exports = {
  id: 'ice-cream',
  name: 'Ice Cream',
  emoji: '🍨',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['ice cream', 'sundae', 'scoops', 'dessert', 'treat'],
  tone: 'silver',
  body,
  shine: [26, 39, -40],
  shineSize: [5, 2.4],
  draw(c) {
    const cup = c.linear('a', 'silver', [0, 0, 1, 0], 0, 2);
    const foot = c.linear('foot', 'silver', [0, 0, 1, 0], 1, 3);
    const scoop = (p, pal, k) => `<circle cx="${p[0]}" cy="${p[1]}" r="${p[2]}" fill="${c.radial(k, pal, 0.35, 0.25)}"/>`;
    const wafer = c.linear('wafer', 'amber', [0, 0, 1, 0], 0, 2);
    const cherry = c.radial('cherry', 'red', 0.35, 0.3);
    return `<path d="M60 30 L72 13 Q74 11 75.5 12.5 Q77 14 75.5 16 L64 32 Z" fill="${wafer}" ${g.edge('#5E2E00', 1.1, 0.55)}/>
      <path d="M66 26 L71 19 M63 24 L69 16" stroke="#B85F00" stroke-width="1" opacity=".6"/>
      ${scoop(T, 'cream', 'van')}${scoop(L, 'pink', 'straw')}${scoop(R, 'brown', 'choc')}
      <path d="M38 34 C40 31 43 29 46 28.5" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M44 31 C38 25 38 18 41 15" fill="none" stroke="#2FB85A" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="45.5" cy="21" r="4.6" fill="${cherry}" ${g.edge('#3D0003', 1, 0.55)}/>
      <ellipse cx="44" cy="19.5" rx="1.4" ry=".9" fill="#fff" opacity=".8" transform="rotate(-35 44 19.5)"/>
      <path d="M44 70 L52 70 L52 77 Q64 78 64 81.5 Q64 84 58 84 L38 84 Q32 84 32 81.5 Q32 78 44 77 Z" fill="${foot}"/>
      <path d="M18 52 L78 52 C77 63 64 70 52 71 L44 71 C32 70 19 63 18 52 Z" fill="${cup}"/>
      <path d="${g.ellipse(48, 52.5, 30, 3.6)}" fill="#F4F5FA"/>
      <path d="M23 57 C27 62 33 65 40 66.5" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" stroke-linecap="round"/>`;
  },
};
