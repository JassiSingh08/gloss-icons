// A triangle half seen on its cut face, so the layers stack up in plain view.
const d = require('../src/parts/dish');
const A = [13, 40];
const B = [54, 18];
const C = [83, 44];
const H = 34;
const body = 'M13 42 Q12 38 16 37 L51 19 Q54 17 57 19.5 L81 41 Q84 44 83.5 47 L83.5 76 Q83.5 79 80 79.5 L17 76.5 Q13 76 13 73 Z';
// a band of the cut face between depths t0 and t1 below the top edge A–C
const band = (t0, t1, inset = 0) => `M${A[0] - inset} ${A[1] + t0} L${C[0] + inset} ${C[1] + t0} L${C[0] + inset} ${C[1] + t1} L${A[0] - inset} ${A[1] + t1} Z`;
module.exports = {
  id: 'sandwich',
  name: 'Sandwich',
  emoji: '🥪',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['sandwich', 'lunch', 'picnic', 'deli', 'bread'],
  tone: 'cream',
  body,
  shine: [26, 37, -28],
  shineSize: [6, 2.6],
  draw(c) {
    const top = c.linear('a', 'cream', [0, 0, 1, 1], 0, 1);
    const crumb = c.linear('crumb', 'cream', [0, 0, 0, 1], 1, 2);
    const lettuce = c.linear('lettuce', 'lime', [0, 0, 0, 1], 0, 2);
    const tomato = c.linear('tomato', 'red', [0, 0, 0, 1], 0, 1);
    const cheese = c.linear('cheese', 'yellow', [0, 0, 0, 1], 1, 2);
    const ham = c.linear('ham', 'pink', [0, 0, 0, 1], 0, 1);
    const wavy = (t) => {
      let s = `M${A[0] - 2} ${A[1] + t}`;
      for (let i = 0; i < 7; i++) {
        const x0 = A[0] - 2 + (i * 74) / 7;
        const x1 = A[0] - 2 + ((i + 1) * 74) / 7;
        const y0 = A[1] + t + ((x0 - A[0]) * (C[1] - A[1])) / (C[0] - A[0]);
        const y1 = A[1] + t + ((x1 - A[0]) * (C[1] - A[1])) / (C[0] - A[0]);
        s += ` Q${(x0 + x1) / 2} ${(y0 + y1) / 2 + 3.5} ${x1} ${y1}`;
      }
      return s;
    };
    return `<path d="${body}" fill="${crumb}"/>
      <path d="${band(16, 19.5)}" fill="${ham}"/>
      <path d="${band(19.5, 23.5, 1.2)}" fill="${cheese}"/>
      <path d="${band(12.5, 16, 0.6)}" fill="${tomato}"/>
      <path d="${wavy(9)} L${C[0] + 1} ${C[1] + 13} L${A[0] - 1} ${A[1] + 13} Z" fill="${lettuce}"/>
      <path d="${band(23.5, 25)}" fill="#C9814F" opacity=".5"/>
      <path d="M16 37 L51 19 Q54 17 57 19.5 L81 41 Q84 44 82 44.5 L15 40.5 Q12 39.5 16 37 Z" fill="${top}"/>
      <path d="M16 37 L51 19 Q54 17 57 19.5 L81 41" stroke="#C9814F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M15 41 L82.5 44.8" stroke="#C9814F" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M13.6 72.5 L83 75.5" stroke="#C9814F" stroke-width="2.6" stroke-linecap="round"/>`;
  },
};
