const body = 'M12 60 C12 49 27 43 48 43 C69 43 84 49 84 60 L84 70 C84 78 69 84 48 84 C27 84 12 78 12 70 Z';
module.exports = {
  id: 'curling-stone',
  name: 'Curling Stone',
  emoji: '🥌',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['curling', 'stone', 'ice', 'winter', 'olympics'],
  tone: 'grey',
  body,
  shine: [24, 52, -18],
  shineSize: [6, 2],
  draw(c) {
    const granite = c.radial('a', 'grey', 0.3, 0.15);
    const red = c.radial('handle', 'red', 0.3, 0.2);
    const top = c.radial('top', 'grey', 0.4, 0.3);
    return `<path d="${body}" fill="${granite}"/>
      <path d="M12 63 C12 71 27 77 48 77 C69 77 84 71 84 63 L84 67 C84 75 69 81 48 81 C27 81 12 75 12 67 Z" fill="#2E2E3A" opacity=".35"/>
      <ellipse cx="48" cy="56" rx="27" ry="8.5" fill="${top}" opacity=".85"/>
      <path d="M38 56 L38 50 Q38 44 44 43 L66 39 Q74 38 75 44 L75.5 47 L69 48 L68.5 46 Q68 44.5 66 45 L48 48 L48 56 Q43 58 38 56 Z" fill="${red}" stroke="#3D0003" stroke-opacity=".55" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M41 49 Q42 46 46 45.4 L64 42" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>
      <ellipse cx="43" cy="56.5" rx="5.6" ry="1.9" fill="#3D0003" opacity=".35"/>`;
  },
};
