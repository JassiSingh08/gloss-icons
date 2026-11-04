const left = 'M30 44 C38 44 43 48 45 56 L47.5 81 Q47.7 84 45 84 L15 84 Q12.3 84 12.5 81 L15 56 C17 48 22 44 30 44 Z';
const right = 'M66 44 C74 44 79 48 81 56 L83.5 81 Q83.7 84 81 84 L51 84 Q48.3 84 48.5 81 L51 56 C53 48 58 44 66 44 Z';
module.exports = {
  id: 'japanese-dolls',
  name: 'Japanese Dolls',
  emoji: '🎎',
  group: 'Activities',
  subgroup: 'event',
  tags: ['hina dolls', 'hinamatsuri', 'girls day', 'japan', 'dolls'],
  tone: 'red',
  body: [left, right],
  shine: [62, 50, -45],
  shineSize: [5, 1.8],
  draw(c) {
    const face = c.radial('face', 'ivory', 0.35, 0.3);
    const hair = '#141420';
    const ink = '#2E2E3D';
    const head = (x) => `<circle cx="${x}" cy="35" r="9.5" fill="${face}" stroke="#6E61A8" stroke-opacity=".35" stroke-width="1"/>
      <path d="M${x - 5} 36 Q${x - 3.2} 37.4 ${x - 1.6} 36 M${x + 1.6} 36 Q${x + 3.2} 37.4 ${x + 5} 36" fill="none" stroke="${ink}" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="${x}" cy="41" r="1" fill="#E3120B"/>`;
    return `<path d="${left}" fill="${c.linear('robe1', 'navy', [0, 0, 1, 1], 0, 2)}"/>
      <path d="${right}" fill="${c.linear('a', 'red', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M22 46 L30 60 L38 46 Z" fill="#FFF9EC"/><path d="M24.5 46 L30 56 L35.5 46 Z" fill="#2FB85A"/>
      <path d="M58 46 L66 60 L74 46 Z" fill="#FFF9EC"/><path d="M60.5 46 L66 56 L71.5 46 Z" fill="#FFC21A"/>
      <path d="M17 70 L43 70 M53 70 L79 70" stroke="#FFC21A" stroke-opacity=".7" stroke-width="1.6"/>
      <path d="M29 62 L31.5 62 L32.5 78 L28 78 Z" fill="#E0B472"/>
      <path d="M60 58 L72 58 L74 70 L58 70 Z" fill="${c.linear('fan', 'gold', [0, 0, 1, 1], 0, 2)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
      ${head(30)}${head(66)}
      <path d="M21 33 C21 24 39 24 39 33 C36 29 24 29 21 33 Z" fill="${hair}"/>
      <path d="M26 27 L27 12 Q30 10 33 12 L34 27 Z" fill="${hair}"/>
      <path d="M56 37 C54 22 78 22 76 37 C74 30 58 30 56 37 Z M55 36 L55 47 L58 47 L58 36 Z M77 36 L77 47 L74 47 L74 36 Z" fill="${hair}"/>
      <path d="M59 25 L62 19 L66 23 L70 19 L73 25 Z" fill="${c.linear('crown', 'gold', [0, 0, 1, 1], 0, 2)}"/>`;
  },
};
