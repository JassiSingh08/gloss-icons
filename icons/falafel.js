// Five fried balls in a heap; the front one is broken open to show the green herb inside. The
// body fill shows through the small gaps between balls as shadow.
const d = require('../src/parts/dish');
const R = 13.5;
const T1 = [35.5, 43, R];
const T2 = [60.5, 43, R];
const B1 = [23, 66, R];
const B2 = [48, 67, R];
const B3 = [73, 66, R];
const body = d.balls([T1, T2, B3, B2, B1]);
module.exports = {
  id: 'falafel',
  name: 'Falafel',
  emoji: '🧆',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['falafel', 'chickpea', 'vegan', 'middle eastern', 'snack'],
  tone: 'brown',
  body,
  shine: [27, 36, -45],
  shineSize: [5.5, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('crust')}" cx="0.32" cy="0.28" r="0.9"><stop offset="0" stop-color="#E7A660"/><stop offset="0.4" stop-color="#9A4E16"/><stop offset="0.8" stop-color="#4E2206"/><stop offset="1" stop-color="#1E0A00"/></radialGradient>`);
    const inside = c.radial('inside', 'olive', 0.4, 0.3);
    const leaf = c.radial('leaf', 'green', 0.3, 0.2);
    const ball = ([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${c.id('crust')})" stroke="#1E0A00" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="${x - 5}" cy="${y - 4}" r="1.1" fill="#F2C17E" opacity=".6"/><circle cx="${x + 3}" cy="${y - 7}" r=".9" fill="#F2C17E" opacity=".6"/><circle cx="${x + 5}" cy="${y + 2}" r="1" fill="#F2C17E" opacity=".5"/><circle cx="${x - 2}" cy="${y + 5}" r=".9" fill="#F2C17E" opacity=".5"/>`;
    return `<path d="${body}" fill="#2E1003"/>
      ${ball(T1)}${ball(T2)}${ball(B1)}${ball(B3)}${ball(B2)}
      <ellipse cx="47.5" cy="62" rx="10.4" ry="7" fill="#6A2E08" transform="rotate(-12 47.5 62)"/>
      <ellipse cx="47.8" cy="62.6" rx="8.6" ry="5.6" fill="${inside}" transform="rotate(-12 47.5 62)"/>
      <circle cx="44" cy="62" r="1.2" fill="#2E5A0A"/><circle cx="50" cy="60.5" r="1" fill="#2E5A0A"/><circle cx="49" cy="65" r="1.1" fill="#2E5A0A"/><circle cx="53" cy="62.5" r=".8" fill="#E3EFA0"/><circle cx="45" cy="65.4" r=".8" fill="#E3EFA0"/>
      <path d="M48 31 C46 24 50 19 56 18 C56 24 53 29 48 31 Z M48 31 C43 27 37 27 34 30 C38 33 44 33 48 31 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
