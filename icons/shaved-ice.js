const g = require('../src/parts/glass');
const body = 'M17.5 57 C16 39 30 17 48 16.5 C66 17 80 39 78.5 57 C77.5 68 68 75 58 77 L60 80 Q66 81 66 83 Q66 84.5 63 84.5 L33 84.5 Q30 84.5 30 83 Q30 81 36 80 L38 77 C28 75 18.5 68 17.5 57 Z';
module.exports = {
  id: 'shaved-ice',
  name: 'Shaved Ice',
  emoji: '🍧',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['shaved ice', 'kakigori', 'snow cone', 'summer', 'dessert'],
  tone: 'blue',
  body,
  shine: [27, 34, -45],
  shineSize: [5, 2.4],
  draw(c) {
    const bowl = c.radial('bowl', 'blue', 0.3, 0.1);
    const foot = c.linear('foot', 'blue', [0, 0, 1, 0], 0, 2);
    const ice = c.radial('a', 'white', 0.35, 0.25);
    const syrup = c.radial('syrup', 'pink', 0.35, 0.2);
    const cherry = c.radial('cherry', 'red', 0.35, 0.3);
    const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="1.1"/>`;
    return `<path d="M38 76 L58 76 L60 80 Q66 81 66 83 Q66 84.5 63 84.5 L33 84.5 Q30 84.5 30 83 Q30 81 36 80 Z" fill="${foot}"/>
      <path d="M17.5 57 L78.5 57 C77.5 68 68 75 58 77 L38 77 C28 75 18.5 68 17.5 57 Z" fill="${bowl}"/>
      <path d="M22 66 C30 63 34 69 42 66 C50 63 54 69 62 66 C68 64 71 66 74 65" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>
      <path d="M17.5 57 C16 39 30 17 48 16.5 C66 17 80 39 78.5 57 C60 61.5 36 61.5 17.5 57 Z" fill="${ice}"/>
      <g fill="#BDB2E8" opacity=".7">${dot(26, 52)}${dot(33, 55)}${dot(40, 51)}${dot(55, 53)}${dot(63, 56)}${dot(70, 51)}${dot(47, 56)}${dot(30, 47)}</g>
      <path d="M23.5 39 C29 25 39 18.5 48 18.5 C57 18.5 67 25 72.5 39 C71 42 69 40 68 44 C67 48 63 48 62 44 C61 40 58 41 55 42 C52 43 52 50 49 50 C46 50 46 42 42 42 C38 42 37 47 34 47 C31 47 31 41 28 41 C26 41 24.5 41 23.5 39 Z" fill="${syrup}"/>
      <path d="M35 25 C39 22 44 21 48 21" fill="none" stroke="#FFD0DC" stroke-opacity=".9" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M48 17 C50 11 54 8 59 7" fill="none" stroke="#2FB85A" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="48" cy="17" r="5.4" fill="${cherry}" ${g.edge('#3D0003', 1.1, 0.55)}/>
      <ellipse cx="46.2" cy="15.2" rx="1.6" ry="1" fill="#fff" opacity=".8" transform="rotate(-35 46.2 15.2)"/>`;
  },
};
