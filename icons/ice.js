const g = require('../src/parts/glass');
module.exports = {
  id: 'ice',
  name: 'Ice',
  emoji: '🧊',
  group: 'Food & Drink',
  subgroup: 'drink',
  tags: ['ice', 'ice cube', 'cold', 'frozen', 'chill'],
  tone: 'sky',
  body: 'M48 15 Q51 15 54 16.5 L77 28 Q81 30 81 34 L81 61 Q81 65 77 67 L54 79.5 Q51 81.5 48 81.5 Q45 81.5 42 79.5 L19 67 Q15 65 15 61 L15 34 Q15 30 19 28 L42 16.5 Q45 15 48 15 Z',
  shine: [36, 25, -26],
  draw(c) {
    const top = c.linear('top', 'sky', [0, 0, 1, 1], 0, 1);
    const left = c.linear('left', 'sky', [0, 0, 0, 1], 1, 2);
    const right = c.linear('right', 'sky', [0, 0, 1, 1], 2, 3);
    return `<path d="M48 16 L79 30.5 L48 45 L17 30.5 Z" fill="${top}"/>
      <path d="M17 30.5 L48 45 L48 81 L17 64 Z" fill="${left}"/>
      <path d="M79 30.5 L48 45 L48 81 L79 64 Z" fill="${right}"/>
      <path d="M17 30.5 L48 45 L79 30.5 M48 45 L48 81" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="1.6"/>
      <path d="M23 38 L23 58 M28 41 L28 51" stroke="#fff" stroke-opacity=".55" stroke-width="2" stroke-linecap="round"/>
      <path d="M38 24 L52 19" stroke="#fff" stroke-opacity=".8" stroke-width="1.8" stroke-linecap="round"/>
      ${g.bubbles([[60, 58, 1.4], [66, 52, 1], [55, 66, 1.1], [36, 60, 1.2]], 0.6)}
      <path d="M70 46 L74 44" stroke="#C9ECFF" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
