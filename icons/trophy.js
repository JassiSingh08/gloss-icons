const body = 'M26 15 A22 4.5 0 0 1 70 15 C70 36 63 48 53 53 L53 61 C53 64 59 66 62 70 L64 70 L64 84 L32 84 L32 70 L34 70 C37 66 43 64 43 61 L43 53 C33 48 26 36 26 15 Z';
module.exports = {
  id: 'trophy',
  name: 'Trophy',
  emoji: '🏆',
  group: 'Activities',
  subgroup: 'award-medal',
  tags: ['win', 'champion', 'award', 'best', 'first place'],
  tone: 'gold',
  body,
  shine: [33, 24, -70],
  draw(c) {
    const cup = c.radial('a', 'gold', 0.3, 0.2);
    const deep = c.linear('deep', 'gold', [0, 0, 0, 1], 2, 3);
    const wood = c.linear('wood', 'brown', [0, 0, 0, 1], 1, 3);
    const plate = c.linear('plate', 'gold', [0, 0, 1, 1], 0, 2);
    return `<g fill="none" stroke-linecap="round">
        <path d="M28 21 C15 18 13 38 34 44" stroke="#5E3A00" stroke-opacity=".6" stroke-width="7"/>
        <path d="M68 21 C81 18 83 38 62 44" stroke="#5E3A00" stroke-opacity=".6" stroke-width="7"/>
        <path d="M28 21 C15 18 13 38 34 44" stroke="${deep}" stroke-width="4.6"/>
        <path d="M68 21 C81 18 83 38 62 44" stroke="${deep}" stroke-width="4.6"/>
      </g>
      <path d="${body}" fill="${cup}"/>
      <ellipse cx="48" cy="15" rx="19.5" ry="3" fill="${deep}"/>
      <path d="M41 56 L55 56" stroke="#C98500" stroke-width="2" stroke-linecap="round"/>
      <path d="M32 70 L64 70 L64 84 L32 84 Z" fill="${wood}"/>
      <path d="M32 70.6 L64 70.6" stroke="#E8B98A" stroke-opacity=".5" stroke-width="1.2"/>
      <rect x="40" y="74" width="16" height="6" rx="1.4" fill="${plate}"/>
      <path d="M48 23.5 L50.2 28.3 L55.3 28.8 L51.5 32.2 L52.6 37.3 L48 34.7 L43.4 37.3 L44.5 32.2 L40.7 28.8 L45.8 28.3 Z" fill="#FFF3A6" fill-opacity=".85"/>`;
  },
};
