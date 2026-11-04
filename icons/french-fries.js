// A red carton with golden fries standing up behind its scooped front.
const body = 'M19 40 C30 49 66 49 77 40 L70.5 80 Q70 84 66 84 L30 84 Q26 84 25.5 80 Z';
module.exports = {
  id: 'french-fries',
  name: 'French Fries',
  emoji: '🍟',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['fries', 'chips', 'fast food', 'takeaway', 'snack'],
  tone: 'red',
  body,
  shine: [27, 52, -75],
  shineSize: [6, 2.6],
  draw(c) {
    const box = c.linear('a', 'red', [0, 0, 1, 0], 0, 2);
    const back = c.linear('back', 'red', [0, 0, 0, 1], 2, 3);
    const fry = c.linear('fry', 'gold', [0, 0, 1, 0], 0, 2);
    const f = (x, top, a) => `<rect x="${x - 3.4}" y="${top}" width="6.8" height="${48 - top}" rx="2" fill="${fry}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.1" transform="rotate(${a} ${x} 48)"/>`;
    return `<path d="M21 32 L75 32 L77 46 L19 46 Z" fill="${back}"/>
      ${f(27, 22, -14)}${f(36, 14, -6)}${f(60, 13, 8)}${f(69, 22, 14)}${f(45, 10, -2)}${f(53, 16, 4)}${f(32, 26, -2)}${f(64, 26, 3)}${f(49, 24, -9)}
      <path d="${body}" fill="${box}"/>
      <path d="M21.5 43 C32 51 64 51 74.5 43" stroke="#FFB0A0" stroke-opacity=".7" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M38 63 C42 59 46 66 50 62 C54 58 57 64 59 61" stroke="#FFC21A" stroke-width="3" stroke-linecap="round" fill="none"/>`;
  },
};
