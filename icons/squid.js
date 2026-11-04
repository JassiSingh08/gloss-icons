const k = require('../src/parts/critter');
// A squid nose up: torpedo mantle with side fins, big eyes, arms and two long clubbed tentacles below.
const body = 'M48 9 C56 17 62 29 62 43 L62 54 C62 58 58 60 48 60 C38 60 34 58 34 54 L34 43 C34 29 40 17 48 9 Z';
module.exports = {
  id: 'squid',
  name: 'Squid',
  emoji: '🦑',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['squid', 'calamari', 'tentacles', 'ocean', 'ink'],
  tone: 'pink',
  body,
  shine: [42, 26, -65],
  shineSize: [5, 2],
  draw(c) {
    const fin = c.radial('fin', 'pink', 0.4, 0.3);
    const arm = c.linear('arm', 'pink', [0, 0, 0, 1], 1, 2);
    const arms = 'M38 58 C34 66 36 72 32 78 M43 59 C42 68 40 74 41 80 M48 59 L48 80 M53 59 C54 68 56 74 55 80 M58 58 C62 66 60 72 64 78';
    const tent = 'M40 58 C30 64 24 72 18 80 M56 58 C66 64 72 72 78 80';
    return `${k.part(c, 'M40 20 L22 32 C26 36 32 38 36 38 Z', fin, 'pink')}${k.part(c, 'M56 20 L74 32 C70 36 64 38 60 38 Z', fin, 'pink')}
      ${k.legs(tent, '#4A0016', 3.2)}${k.legs(tent, '#C80A42', 1.8)}
      ${k.part(c, k.ellipse(17, 81, 4, 2.6, -40), fin, 'pink')}${k.part(c, k.ellipse(79, 81, 4, 2.6, 40), fin, 'pink')}
      <path d="${arms}" stroke="#4A0016" stroke-opacity=".55" stroke-width="6.6" fill="none" stroke-linecap="round"/>
      <path d="${arms}" stroke="${arm}" stroke-width="4.8" fill="none" stroke-linecap="round"/>
      <path d="${body}" fill="${c.radial('a', 'pink', 0.35, 0.25)}"/>
      ${[[52, 24], [44, 34], [55, 38], [42, 44]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#9E0030" opacity=".45"/>`).join('')}
      <circle cx="40.5" cy="51" r="4.6" fill="#fff"/><circle cx="55.5" cy="51" r="4.6" fill="#fff"/>
      ${k.eye(41, 51.5, 2.8, '#2A000D')}${k.eye(55, 51.5, 2.8, '#2A000D')}
      ${k.lid(40.5, 51, 4.6, '#C80A42', 0.8)}${k.lid(55.5, 51, 4.6, '#C80A42', -0.8)}`;
  },
};
