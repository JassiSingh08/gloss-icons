const body = 'M17 80 C12 72 13 60 20 52 C23 40 33 29 47 27 C60 25 71 33 75 44 C83 51 86 66 81 78 Q79 84 72 84 L23 84 Q19 84 17 80 Z';
module.exports = {
  id: 'rock',
  name: 'Rock',
  emoji: '🪨',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['stone', 'boulder', 'solid', 'heavy', 'nature'],
  tone: 'grey',
  body,
  shine: [33, 37, -40],
  draw(c) {
    const base = c.radial('a', 'grey', 0.3, 0.2);
    const lit = c.linear('lit', 'grey', [0, 0, 1, 1], 0, 1);
    const dark = c.linear('dark', 'grey', [0, 0, 1, 1], 2, 3);
    const mid = c.linear('mid', 'grey', [0, 0, 1, 1], 1, 2);
    return `<path d="${body}" fill="${base}"/>
      <path d="M20 52 C23 40 33 29 47 27 C52 26 57 27 61 29 L52 47 L30 57 Z" fill="${lit}"/>
      <path d="M61 29 C67 32 72 37 75 44 C83 51 86 66 81 78 L64 66 L52 47 Z" fill="${mid}"/>
      <path d="M64 66 L81 78 Q79 84 72 84 L50 84 Z" fill="${dark}"/>
      <path d="M30 57 L52 47 L64 66 L50 84 L23 84 Q19 84 17 80 C13 72 13 64 17 57 Z" fill="${mid}" opacity=".55"/>
      <path d="M30 57 L52 47 L64 66 L50 84 M52 47 L61 29" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M38 66 L44 71 L42 77 M68 52 L72 58" fill="none" stroke="#2E2E3A" stroke-opacity=".45" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
