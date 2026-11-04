// The cheese runs over both cut edges, so the drips are part of the silhouette.
const body = 'M13 25 C28 11 66 8 83 21 C85 23 85 26 83 28 L73.9 45 C77 47 79.5 55 77 58.5 C74.5 61 71.5 58 70.1 52 L54 82 C52 86 47 86 45 82 L30.4 58 C29 62 24 66 21.5 63 C19 60 22 54 25.5 50 L14 31 C12 29 12 27 13 25 Z';
module.exports = {
  id: 'pizza',
  name: 'Pizza',
  emoji: '🍕',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['food', 'slice', 'party', 'takeaway', 'night in'],
  tone: 'yellow',
  body,
  shine: [30, 32, -30],
  draw(c) {
    const cheese = c.radial('a', 'yellow', 0.4, 0.3);
    const crust = c.linear('crust', 'brown', [0, 0, 0, 1], 0, 1);
    const pep = c.radial('pep', 'red', 0.35, 0.3);
    const slice = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${pep}"/>
      <circle cx="${x + r * 0.25}" cy="${y + r * 0.3}" r="${r * 0.18}" fill="#5A0004" opacity=".45"/>
      <circle cx="${x - r * 0.35}" cy="${y + r * 0.1}" r="${r * 0.13}" fill="#5A0004" opacity=".45"/>`;
    return `<path d="${body}" fill="${cheese}"/>
      <path d="M13 25 C28 11 66 8 83 21 C85 23 85 26 83 28 C66 18 30 20 15 31 C13 30 12 27 13 25 Z" fill="${crust}"/>
      <path d="M15 31 C30 20 66 18 83 28 L81 31.5 C78 30 77 35 74 34 C71 33 70 29 66 29 C62 29 63 36 59 36 C55 36 56 28.5 51 28.5 C46 28.5 47 33 43 33 C39 33 39 29.5 35 30 C31 30.5 31 36 27 36 C24 36 24 33 21 34 C19 35 18 35.5 17.2 34.5 Z" fill="${cheese}"/>
      ${slice(37, 44, 6.5)}${slice(61, 41, 6.5)}${slice(48, 61, 5.8)}`;
  },
};
