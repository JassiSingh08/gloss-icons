// A porcelain shaker with a pierced steel cap, a few grains spilt at its foot.
const body = 'M30 84 Q26 84 26 80 L26 47 C26 42 29 39 32 37.5 C32 22 38 14 48 14 C58 14 64 22 64 37.5 C67 39 70 42 70 47 L70 80 Q70 84 66 84 Z';
module.exports = {
  id: 'salt',
  name: 'Salt',
  emoji: '🧂',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['salt', 'shaker', 'seasoning', 'kitchen', 'salty'],
  tone: 'white',
  body,
  shine: [32, 56, -80],
  shineSize: [6, 2.6],
  draw(c) {
    const pot = c.linear('a', 'white', [0, 0, 1, 0], 0, 3);
    const cap = c.radial('cap', 'silver', 0.35, 0.25);
    const band = c.linear('band', 'blue', [0, 0, 1, 0], 0, 2);
    const hole = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="1.5" ry="1.2" fill="#3A3E52"/>`;
    const grain = (x, y, a) => `<rect x="${x - 1.5}" y="${y - 1.5}" width="3" height="3" rx=".6" fill="#FFFFFF" stroke="#8C83AD" stroke-opacity=".6" stroke-width=".6" transform="rotate(${a} ${x} ${y})"/>`;
    return `<path d="${body}" fill="${pot}"/>
      <path d="M32 37.5 C32 22 38 14 48 14 C58 14 64 22 64 37.5 Z" fill="${cap}"/>
      <path d="M30.5 37 L65.5 37 Q67 37 67 39 L67 41 Q67 43 65.5 43 L30.5 43 Q29 43 29 41 L29 39 Q29 37 30.5 37 Z" fill="#8E93AD" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1"/>
      ${hole(48, 20)}${hole(42, 23)}${hole(54, 23)}${hole(48, 27)}${hole(39, 29)}${hole(57, 29)}${hole(44, 31)}${hole(52, 31)}
      <path d="M26 58 L70 58 L70 66 L26 66 Z" fill="${band}"/>
      <path d="M26 59.5 L70 59.5" stroke="#8CD8FF" stroke-width="1"/>
      ${grain(18, 82, 20)}${grain(14, 79, -15)}${grain(21, 77.5, 40)}${grain(78, 82, 10)}`;
  },
};
