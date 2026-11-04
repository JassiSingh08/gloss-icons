const body = 'M48 11 C55 26 71 33 73 54 C75 72 63 85 48 85 C33 85 21 74 23 56 C24 46 29 39 34 33 C36 43 40 47 44 47 C40 35 42 21 48 11 Z';
module.exports = {
  id: 'flame',
  name: 'Flame',
  emoji: '🔥',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['fire', 'hot', 'heat', 'streak', 'dirty'],
  tone: 'orange',
  body,
  shine: [38, 44, -60],
  draw(c) {
    const core = c.radial('core', 'flame', 0.5, 0.85);
    return `<path d="${body}" fill="${c.radial('a', 'orange', 0.45, 0.8)}"/>
      <path d="M48 44 C55 53 63 59 61 70 C59 79 53 83 48 83 C41 83 35 77 36 68 C37 61 41 57 43 52 C45 59 47.5 59 50 57 C47.5 53 46.5 48 48 44 Z" fill="${core}"/>
      <path d="M48 66 C51 70 53 73 52 77 C51 80 49.5 81 48 81 C46 81 44.5 79 45 76 C45.5 73 47 71 48 66 Z" fill="#fff" fill-opacity=".85"/>`;
  },
};
