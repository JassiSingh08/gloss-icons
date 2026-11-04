const body = 'M41 33 C24 40 15 56 17 70 C19 80 30 84 48 84 C66 84 77 80 79 70 C81 56 72 40 55 33 C59 28 62 22 63 15 C58 17 55 16 52 12 C50 15 46 15 44 12 C41 16 38 17 33 15 C34 22 37 28 41 33 Z';
module.exports = {
  id: 'money-bag',
  name: 'Money bag',
  emoji: '💰',
  group: 'Objects',
  subgroup: 'money',
  tags: ['money', 'cash', 'rich', 'win', 'jackpot', 'dollar'],
  tone: 'cream',
  body,
  shine: [30, 52, -50],
  draw(c) {
    const sack = c.radial('a', 'cream', 0.34, 0.3);
    const cord = c.linear('cord', 'brown', [0, 0, 0, 1], 1, 2);
    const ink = '#0B4A24';
    return `<path d="${body}" fill="${sack}"/>
      <path d="M40 34 C44 30 47 30 48 28 M56 34 C52 30 49 30 48 28" stroke="#8A5A1E" stroke-opacity=".35" stroke-width="1.4" fill="none"/>
      <path d="M38 31.5 C44 35 52 35 58 31.5 L59 35.5 C52 39.5 44 39.5 37 35.5 Z" fill="${cord}"/>
      <path d="M47 36 C45 42 41 45 38 46 M49 36 C51 41 54 43 57 43" stroke="${cord}" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      <g fill="none" stroke="${ink}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M57 53 C54 49 41 48.5 41 55.5 C41 62.5 56 60.5 56 68 C56 75.5 42 75 38.5 70" stroke-width="5"/>
        <path d="M48 46 L48 78" stroke-width="4"/>
      </g>`;
  },
};
