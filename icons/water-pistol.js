const body = 'M30 30 Q30 26 34 26 L70 26 Q74 26 74 30 L74 34 L82 34 Q86 34 86 38 L86 42 Q86 45 82 45 L60 45 L56 54 L48 54 L46 50 L44 50 L36 80 Q35 84 31 84 L20 84 Q15 84 17 79 L25 50 Q26 47 25 45 L14 45 Q10 45 10 41 L10 38 Q10 34 14 34 L30 34 Z';
module.exports = {
  id: 'water-pistol',
  name: 'Water Pistol',
  emoji: '🔫',
  group: 'Activities',
  subgroup: 'game',
  tags: ['water gun', 'squirt', 'summer', 'toy', 'splash'],
  tone: 'lime',
  body,
  shine: [20, 37, -10],
  shineSize: [6, 1.8],
  draw(c) {
    const drop = (x, y, s) => `<path d="M${x} ${y - 3 * s} C${x + 2.4 * s} ${y} ${x + 2.4 * s} ${y + 2.4 * s} ${x} ${y + 2.4 * s} C${x - 2.4 * s} ${y + 2.4 * s} ${x - 2.4 * s} ${y} ${x} ${y - 3 * s} Z" fill="${c.radial('drop' + x, 'sky', 0.35, 0.3)}" transform="rotate(-70 ${x} ${y})"/>`;
    return `<path d="${body}" fill="${c.linear('a', 'lime', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M30 26 L70 26 Q74 26 74 30 L74 34 L30 34 Z" fill="${c.linear('tank', 'orange', [0, 0, 0, 1], 1, 2)}"/>
      <path d="M44 50 L46 50 L48 54 L56 54 L60 45 L56 45 L52 50" fill="none" stroke="#203D00" stroke-opacity=".55" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M22 58 L32 60 M20 66 L30 68 M18 74 L28 76" stroke="#203D00" stroke-opacity=".3" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="84" y="36.5" width="3.5" height="6" rx="1" fill="#E02A00"/>
      ${drop(91, 39.5, 0.9)}`;
  },
};
