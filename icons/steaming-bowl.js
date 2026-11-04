// Ramen: a red bowl of noodles with half an egg, chopsticks lifting a few strands, steam rising.
const d = require('../src/parts/dish');
const B = { cx: 46, y: 48, rx: 34, ry: 9, depth: 30, foot: 4 };
const body = d.bowl(B);
module.exports = {
  id: 'steaming-bowl',
  name: 'Steaming Bowl',
  emoji: '🍜',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['ramen', 'noodles', 'soup', 'japanese', 'hot'],
  tone: 'red',
  body,
  shine: [19, 58, -70],
  draw(c) {
    const bowl = c.radial('a', 'red', 0.3, 0.2);
    const rim = c.linear('rim', 'red', [0, 0, 1, 0], 0, 2);
    const broth = c.radial('broth', 'gold', 0.4, 0.3);
    const white = c.radial('white', 'white', 0.35, 0.3);
    const yolk = c.radial('yolk', 'orange', 0.35, 0.3);
    return `${d.steam([[24, 36, 16], [34, 32, 18]])}
      <path d="${body}" fill="${bowl}"/>
      <path d="${d.ellipse(46, 48, 34, 9)}" fill="${rim}"/>
      <path d="${d.ellipse(46, 48.8, 30.5, 7)}" fill="${broth}"/>
      <path d="M20 48 C24 44 28 52 32 48 C36 44 40 52 44 48 C48 44 52 52 56 48 C60 44 64 52 68 48 M22 51.5 C26 48 30 55 34 51.5 C38 48 42 55 46 51.5 C50 48 54 55 58 51.5 C62 48 66 55 70 51.5" stroke="#FFE36E" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <ellipse cx="30" cy="47" rx="7" ry="4.4" fill="${white}" stroke="#8C83AD" stroke-opacity=".5" stroke-width=".9"/>
      <ellipse cx="30.5" cy="47.3" rx="3.6" ry="2.4" fill="${yolk}"/>
      <path d="M38 45 L43 44 M40 50 L45 49.5 M70 46 L66 47" stroke="#2FB85A" stroke-width="2" stroke-linecap="round"/>
      <path d="M58 46 C55 40 61 36 58 30 M62 46 C59 40 65 36 62 30" stroke="#FFE36E" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      ${d.chopsticks(c, [56, 30, 82, 10], [4.5, 1.6], 'brown', 3)}
      <path d="M12.5 50 C14 56 30 60 46 60 C62 60 78 56 79.5 50" stroke="#FF7A62" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M22 64 C30 69 62 69 70 64" stroke="#FFC21A" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  },
};
