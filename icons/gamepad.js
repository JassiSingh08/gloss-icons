const body =
  'M28 38 C34 36 40 39 48 39 C56 39 62 36 68 38 C77 40 82 48 84 60 C85.5 71 84 81 77 82.5 C71 83.5 68 77 64 71 C61 67 58 65 54 65 L42 65 C38 65 35 67 32 71 C28 77 25 83.5 19 82.5 C12 81 10.5 71 12 60 C14 48 19 40 28 38 Z';

module.exports = {
  id: 'gamepad',
  name: 'Game Controller',
  tags: ['game', 'gaming', 'play', 'video games', 'controller'],
  tone: 'white',
  body,
  shine: [25, 45, -45],
  shineSize: [6, 2.8],
  draw(c) {
    const shell = c.radial('a', 'white', 0.35, 0.2);
    const ink = '#12002E';
    const btn = (x, y, pal) => `<circle cx="${x}" cy="${y}" r="3.6" fill="${c.radial('b' + pal, pal, 0.3, 0.25)}"/><circle cx="${x - 1.2}" cy="${y - 1.4}" r="1.1" fill="#fff" opacity=".85"/>`;
    return `<path d="${body}" fill="${shell}"/>
      <path d="M27.5 47 Q27.5 45.5 29 45.5 L32 45.5 Q33.5 45.5 33.5 47 L33.5 50 L36.5 50 Q38 50 38 51.5 L38 54.5 Q38 56 36.5 56 L33.5 56 L33.5 59 Q33.5 60.5 32 60.5 L29 60.5 Q27.5 60.5 27.5 59 L27.5 56 L24.5 56 Q23 56 23 54.5 L23 51.5 Q23 50 24.5 50 L27.5 50 Z" fill="${ink}" opacity=".85"/>
      <rect x="40.5" y="51.5" width="6" height="2.8" rx="1.4" fill="${ink}" opacity=".45"/>
      <rect x="49.5" y="51.5" width="6" height="2.8" rx="1.4" fill="${ink}" opacity=".45"/>
      ${btn(66, 46.5, 'green')}${btn(72.5, 53, 'red')}${btn(59.5, 53, 'blue')}${btn(66, 59.5, 'gold')}`;
  },
};
