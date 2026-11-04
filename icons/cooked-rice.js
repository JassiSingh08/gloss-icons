// A navy bowl with a high dome of white rice: the bowl is what keeps it apart from the rice ball.
const d = require('../src/parts/dish');
const heap = 'C15 44 20 40 24 38 C24 25 36 17 48 17 C60 17 72 25 72 38 C76 40 81 44 81 50';
const B = { cx: 48, y: 50, rx: 33, ry: 8, depth: 29, foot: 4.5 };
const body = d.bowl({ ...B, top: heap });
const front = d.bowl({ ...B, top: d.nearHalf(48, 50, 33, 7).replace(/^M[\d.]+ [\d.]+ /, '') });
module.exports = {
  id: 'cooked-rice',
  name: 'Cooked Rice',
  emoji: '🍚',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['rice', 'bowl', 'steamed rice', 'dinner', 'asian'],
  tone: 'navy',
  body,
  shine: [32, 27, -38],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('rice')}" cx="0.36" cy="0.25" r="0.9"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.45" stop-color="#F7F5FF"/><stop offset="0.8" stop-color="#D8D2EE"/><stop offset="1" stop-color="#9A92BC"/></radialGradient>`);
    const bowl = c.radial('a', 'navy', 0.3, 0.2);
    return `<path d="M15 50 ${heap} Z" fill="url(#${c.id('rice')})"/>
      ${d.grains([[40, 24, 20], [52, 22, -30], [34, 32, 60], [46, 31, 0], [58, 30, 40], [66, 37, -20], [28, 41, -50], [40, 40, 30], [54, 40, -10], [70, 46, 20], [22, 47, 10]], '#C9C2E2', 2.8, 1.6)}
      <path d="${front}" fill="${bowl}"/>
      <path d="M22 62 C26 59 30 65 34 62 C38 59 42 65 46 62 C50 59 54 65 58 62 C62 59 66 65 70 62 C72 60.5 74 61 75 62" stroke="#C9D2FF" stroke-opacity=".75" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="${d.nearHalf(48, 50, 33, 7)}" stroke="#9AA8FF" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  },
};
