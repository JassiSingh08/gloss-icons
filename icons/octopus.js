const k = require('../src/parts/critter');
// An octopus front on: domed mantle with half-lidded eyes; six arms curling out along the ground.
const body = 'M48 12 C64 12 74 24 74 40 C74 52 68 60 60 62 L36 62 C28 60 22 52 22 40 C22 24 32 12 48 12 Z';
const arms = [
  'M30 57 C22 64 14 66 12 74 C11 79 16 81 18 77',
  'M38 60 C36 70 28 76 28 82 C28 86 33 86 33 83',
  'M45 61 C44 70 42 76 44 83',
  'M51 61 C52 70 54 76 52 83',
  'M58 60 C60 70 68 76 68 82 C68 86 63 86 63 83',
  'M66 57 C74 64 82 66 84 74 C85 79 80 81 78 77',
];
module.exports = {
  id: 'octopus',
  name: 'Octopus',
  emoji: '🐙',
  group: 'Animals & Nature',
  subgroup: 'animal-marine',
  tags: ['octopus', 'tentacles', 'ocean', 'clever', 'ink'],
  tone: 'purple',
  body,
  shine: [34, 23, -40],
  draw(c) {
    const arm = c.linear('arm', 'purple', [0, 0, 1, 1], 1, 2);
    const ink = '#1A0040';
    const d = arms.join(' ');
    return `<path d="${d}" stroke="#1A0040" stroke-opacity=".55" stroke-width="9.4" fill="none" stroke-linecap="round"/>
      <path d="${d}" stroke="${arm}" stroke-width="7.2" fill="none" stroke-linecap="round"/>
      ${[[16, 70], [22, 66], [31, 72], [65, 72], [74, 66], [80, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#F4D9FF" opacity=".8"/>`).join('')}
      <path d="${body}" fill="${c.radial('a', 'purple', 0.35, 0.25)}"/>
      ${[[58, 24, 2.4], [64, 32, 1.8], [30, 38, 1.6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#C58BFF" opacity=".5"/>`).join('')}
      ${k.eye(39, 46, 3.6, ink)}${k.eye(57, 46, 3.6, ink)}
      ${k.lid(39, 46, 3.6, '#5E14B8', 0.6)}${k.lid(57, 46, 3.6, '#5E14B8', -0.6)}
      ${k.legs('M44.5 54.5 Q48 56.5 51.5 54', ink, 2)}`;
  },
};
