const body = 'M12 32 Q12 25 17.5 25 Q23 25 23 32 L23 62 L75 62 L75 51 Q75 46 79.5 46 Q84 46 84 51 L84 84 L78 84 L78 75 L18 75 L18 84 L12 84 Z';
module.exports = {
  id: 'bed',
  name: 'Bed',
  emoji: '🛏️',
  group: 'Objects',
  subgroup: 'household',
  tags: ['bed', 'sleep', 'hotel', 'bedroom', 'rest'],
  tone: 'brown',
  body,
  shine: [16, 33, -80],
  shineSize: [4, 1.6],
  draw(c) {
    const wood = c.linear('a', 'brown', [0, 0, 1, 1], 0, 2);
    const sheet = c.linear('s', 'white', [0, 0, 0, 1], 0, 2);
    const blanket = c.linear('b', 'blue', [0, 0, 0, 1], 0, 2);
    const pillow = c.radial('p', 'white', 0.3, 0.25);
    return `<path d="${body}" fill="${wood}"/>
      <path d="M23 54 Q23 51 26 51 L72 51 Q76 51 76 54 L76 64 L23 64 Z" fill="${sheet}"/>
      <path d="M24 46 C24 40 38 40 40 45 C41 49 39 53 36 53 L27 53 C25 53 24 50 24 46 Z" fill="${pillow}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M41 48 Q41 45 44 45 L73 45 Q77 45 77 49 L77 66 Q77 69 74 69 L44 69 Q41 69 41 66 Z" fill="${blanket}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M44 48.5 L73 48.5" stroke="#fff" stroke-opacity=".55" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M23 70 L75 70" stroke="#331805" stroke-opacity=".35" stroke-width="1.2"/>`;
  },
};
