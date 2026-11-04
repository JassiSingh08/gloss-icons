const L = require('../src/parts/leaf');
// One fat crescent hanging from its stem, with brown at both ends.
const body = 'M59.5 21 C64 18.5 69.5 19.5 71 24 C78 45 73 67 57 78 C45 86 28 85 16 78 C13 76 13.5 71 17.5 71 C29 71.5 39 66 46 57 C53 48 56 37 56 27 C56 24.5 57 22 59.5 21 Z';
module.exports = {
  id: 'banana',
  name: 'Banana',
  emoji: '🍌',
  group: 'Food & Drink',
  subgroup: 'food-fruit',
  tags: ['banana', 'fruit', 'potassium', 'monkey', 'yellow'],
  tone: 'yellow',
  body,
  shine: [64, 38, -80],
  shineSize: [6, 2.4],
  draw(c) {
    return `<path d="M58.5 23 L57 12 C56.8 10.5 58 9.5 59.5 9.5 L64 9.5 C65.5 9.5 66.3 10.5 66 12 L69 22.5 Z" fill="#8A6A1E" stroke="#4A3405" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="${body}" fill="${c.radial('a', 'yellow', 0.35, 0.2)}"/>
      <path d="M65.5 28 C70 45 66 61 55 71 C46 78 34 80 22 78" stroke="#B88A00" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" fill="none"/>
      <path d="M60.5 30 C61 44 57 55 50 63" stroke="#FFFBD0" stroke-opacity=".6" stroke-width="1.6" stroke-linecap="round" fill="none"/>
      <path d="M16 78 C13 76 13.5 71 17.5 71 C19 71.1 20.5 71.1 22 71 C21 73.5 21 76 22.5 79 C20 78.8 18 78.5 16 78 Z" fill="#5A3A0A"/>`;
  },
};
