const body = 'M18 12 L78 12 Q82 12 82 16 L82 74 L86 76 Q87 80 84 80 L12 80 Q9 80 10 76 L14 74 L14 16 Q14 12 18 12 Z';
module.exports = {
  id: 'window',
  name: 'Window',
  emoji: '🪟',
  group: 'Objects',
  subgroup: 'household',
  tags: ['window', 'view', 'glass', 'home', 'fresh air'],
  tone: 'white',
  body,
  shine: [19, 18, -40],
  shineSize: [4.5, 1.8],
  draw(c) {
    const frame = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const sky = c.linear('s', 'sky', [0, 0, 0.6, 1], 0, 2);
    const pane = (x, y) => `<rect x="${x}" y="${y}" width="27" height="25" rx="1.5" fill="${sky}"/><path d="M${x + 4} ${y + 14} L${x + 16} ${y + 2} M${x + 8} ${y + 19} L${x + 23} ${y + 4}" stroke="#fff" stroke-opacity=".55" stroke-width="2.4" stroke-linecap="round"/>`;
    return `<path d="${body}" fill="${frame}"/>
      ${pane(19, 17)}${pane(50, 17)}${pane(19, 45)}${pane(50, 45)}
      <path d="M14 74 L82 74" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M19 17 L46 17 M50 17 L77 17 M19 45 L46 45 M50 45 L77 45" stroke="#0A3A6B" stroke-opacity=".4" stroke-width="1.2"/>`;
  },
};
