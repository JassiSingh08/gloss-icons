// The classic stack: seeded bun, lettuce frill, melting cheese, patty, bottom bun.
const body = 'M14 46 C14 26 30 15 48 15 C66 15 82 26 82 46 L84.5 50 L83.5 54 L83.5 64 L82 67 L80.5 77 C79.5 81 75.5 83.5 70 83.5 L26 83.5 C20.5 83.5 16.5 81 15.5 77 L14 67 L12.5 64 L12.5 54 L11.5 50 Z';
module.exports = {
  id: 'hamburger',
  name: 'Hamburger',
  emoji: '🍔',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['burger', 'fast food', 'takeaway', 'cheeseburger', 'lunch'],
  tone: 'amber',
  body,
  shine: [27, 26, -40],
  draw(c) {
    const bun = c.radial('a', 'amber', 0.35, 0.2);
    const base = c.linear('base', 'amber', [0, 0, 0, 1], 1, 2);
    const lettuce = c.linear('lettuce', 'lime', [0, 0, 0, 1], 0, 2);
    const cheese = c.linear('cheese', 'yellow', [0, 0, 0, 1], 1, 2);
    c.def(`<linearGradient id="${c.id('patty')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9A4A22"/><stop offset="0.5" stop-color="#5E2410"/><stop offset="1" stop-color="#2E0F04"/></linearGradient>`);
    const seed = (x, y, a) => `<ellipse cx="${x}" cy="${y}" rx="2" ry="1.1" fill="#FFF4D6" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="M13 64 L83 64 L82 67 L80.5 77 C79.5 81 75.5 83.5 70 83.5 L26 83.5 C20.5 83.5 16.5 81 15.5 77 L14 67 Z" fill="${base}"/>
      <path d="M12.5 56 C12.5 53 15 52 18 52 L78 52 C81 52 83.5 53 83.5 56 L83.5 62 C83.5 65 81 66 78 66 L18 66 C15 66 12.5 65 12.5 62 Z" fill="url(#${c.id('patty')})"/>
      <path d="M17 56.5 C30 55 66 55 79 56.5" stroke="#C26A3A" stroke-opacity=".7" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="M14 50 L82 50 L80 54 L72 54 L68 61 L64 54 L40 54 L35 60 L30 54 L16 54 Z" fill="${cheese}"/>
      <path d="M11.5 50 C14 46 17 52 21 48 C25 45 28 52 32 48 C36 45 39 52 43 48 C47 45 50 52 54 48 C58 45 61 52 65 48 C69 45 72 52 76 48 C79 45.5 82 49 84.5 50 C82 53 78 51 75 53 C71 55 68 50 64 53 C60 55 57 50 53 53 C49 55 46 50 42 53 C38 55 35 50 31 53 C27 55 24 50 20 53 C17 55 13 53 11.5 50 Z" fill="${lettuce}"/>
      <path d="M14 46 C14 26 30 15 48 15 C66 15 82 26 82 46 C82 48.5 80 49.5 77 49.5 L19 49.5 C16 49.5 14 48.5 14 46 Z" fill="${bun}"/>
      ${seed(36, 24, -20)}${seed(48, 21, 0)}${seed(60, 24, 20)}${seed(28, 33, -40)}${seed(42, 30, -10)}${seed(55, 31, 15)}${seed(68, 33, 40)}${seed(35, 40, -20)}${seed(62, 40, 25)}`;
  },
};
