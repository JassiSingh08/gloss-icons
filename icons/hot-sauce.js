const body = 'M34 84 Q30 84 30 80 L30 50 C30 42 42 38 43 31 L43 25 L41 25 L41 18 Q41 14 45 14 L51 14 Q55 14 55 18 L55 25 L53 25 L53 31 C54 38 66 42 66 50 L66 80 Q66 84 62 84 Z';
module.exports = {
  id: 'hot-sauce',
  name: 'Hot sauce',
  group: 'Extras',
  tags: ['spicy', 'hot', 'food', 'sauce', 'kick'],
  tone: 'red',
  body,
  shine: [35, 49, -55],
  draw(c) {
    c.def(`<linearGradient id="${c.id('glass')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9A0A06"/><stop offset="0.28" stop-color="#FF5A42"/><stop offset="0.6" stop-color="#D90F0A"/><stop offset="1" stop-color="#4A0003"/></linearGradient>`);
    const cap = c.linear('cap', 'green', [0, 0, 1, 0], 0, 2);
    const label = c.linear('label', 'cream', [0, 0, 1, 0], 0, 2);
    const chili = c.radial('chili', 'red', 0.38, 0.22);
    return `<path d="M46 14 L47 9.5 Q48 8.5 49 9.5 L50 14 Z" fill="${cap}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="url(#${c.id('glass')})"/>
      <path d="M41 25 L41 18 Q41 14 45 14 L51 14 Q55 14 55 18 L55 25 Z" fill="${cap}"/>
      <path d="M41 21 L55 21" stroke="#053A1A" stroke-opacity=".4" stroke-width="1"/>
      <rect x="42.5" y="25" width="11" height="3" fill="#8A0006" opacity=".5"/>
      <path d="M30 53 L66 53 L66 75 L30 75 Z" fill="${label}"/>
      <path d="M30 55.5 L66 55.5 M30 72.5 L66 72.5" stroke="#E3120B" stroke-width="1.4"/>
      <path d="M56 60 C62 62 61 67 56 69.5 C51 72 45 72.5 40 71.5 C38 71 38 69.5 40 69.2 C45 68.5 48.5 66 49.5 63 C50.5 60 52 59 56 60 Z" fill="${chili}"/>
      <path d="M53.5 60 C53 57.5 54.5 56 56.5 55.6 M52 60.5 C54 58.5 57.5 58.5 59 60.5" stroke="#2FB85A" stroke-width="1.6" stroke-linecap="round" fill="none"/>`;
  },
};
