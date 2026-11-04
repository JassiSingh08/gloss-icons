const k = require('../src/parts/critter');
// Frog face front on: eye bumps in the silhouette, heavy lids, a wide knowing smirk.
const body = 'M18 58 C18 47 23 41 28 38 C26 34 26 30 28 26 C30 18 40 17 43 24 C45 24 51 24 53 24 C56 17 66 18 68 26 C70 30 70 34 68 38 C73 41 78 47 78 58 C78 74 64 82 48 82 C32 82 18 74 18 58 Z';
module.exports = {
  id: 'frog',
  name: 'Frog',
  emoji: '🐸',
  group: 'Animals & Nature',
  subgroup: 'animal-amphibian',
  tags: ['frog', 'toad', 'pond', 'croak', 'amphibian'],
  tone: 'green',
  body,
  shine: [26, 46, -50],
  shineSize: [5.5, 2.6],
  draw(c) {
    const ink = '#053A1A';
    const white = c.radial('white', 'white', 0.35, 0.3);
    const lidFill = '#2FB85A';
    const eyeball = (x, s) => `<circle cx="${x}" cy="29.5" r="7" fill="${white}"/>
      <ellipse cx="${x + s * 0.8}" cy="31" rx="3.6" ry="2.5" fill="${ink}"/><circle cx="${x + s * 0.8 - 1.3}" cy="30.2" r=".9" fill="#fff"/>
      ${k.lid(x, 29.5, 7, lidFill, s * 1.6)}
      ${k.line(`M${x - 7.4} ${k.n(28.4 - s * 1.6)} L${x + 7.4} ${k.n(28.4 + s * 1.6)}`, ink, 1.8, 0.8)}`;
    return `<path d="${body}" fill="${c.radial('a', 'green', 0.35, 0.25)}"/>
      <path d="M24 61 C30 72 40 78 48 78 C58 78 66 72 72 61 C62 67 34 67 24 61 Z" fill="${c.radial('jaw', 'lime', 0.5, 0.3)}" opacity=".9"/>
      ${eyeball(35.5, -1)}${eyeball(60.5, 1)}
      <circle cx="44.5" cy="46" r="1.3" fill="${ink}"/><circle cx="51.5" cy="46" r="1.3" fill="${ink}"/>
      ${k.legs('M25 57 C34 64.5 56 66 70.5 54.5', ink, 3)}
      ${k.legs('M70.5 54.5 L72 51.5', ink, 2.4)}`;
  },
};
