// Symmetric open hand with a thumb either side and an eye at the centre of the palm.
const half = [
  'M48 84 C35 84 24 78 20.5 67 C18.5 60 18.5 53 20 47 L20 39.5 Q20 34 24.5 34 Q29 34 29 39.5 L29 50',
  'C30.5 50 32 49 32 46 L32 29 Q32 23.5 37 23.5 Q42 23.5 42 29 L42 31.5 L43 31.5 L43 22 Q43 16.5 48 16.5',
];
// The right side is the left side mirrored and walked back down.
const leftPts = `${half[0]} ${half[1]}`;
const right = 'Q53 16.5 53 22 L53 31.5 L54 31.5 L54 29 Q54 23.5 59 23.5 Q64 23.5 64 29 L64 46 C64 49 65.5 50 67 50 L67 39.5 Q67 34 71.5 34 Q76 34 76 39.5 L76 47 C77.5 53 77.5 60 75.5 67 C72 78 61 84 48 84 Z';
const body = `${leftPts} ${right}`;
module.exports = {
  id: 'hamsa',
  name: 'Hamsa',
  emoji: '🪬',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['hamsa', 'protection', 'amulet', 'blessing', 'luck'],
  tone: 'blue',
  body,
  shine: [23, 44, -80],
  shineSize: [5, 1.8],
  draw(c) {
    const enamel = c.radial('a', 'blue', 0.35, 0.3);
    const gold = '#FFC21A';
    const iris = c.radial('i', 'sky', 0.3, 0.3);
    return `<path d="${body}" fill="${enamel}"/>
      <path d="M30 58 C36 50 60 50 66 58 C60 68 36 68 30 58 Z" fill="#F7F5FF" stroke="${gold}" stroke-width="1.8"/>
      <circle cx="48" cy="58.5" r="6" fill="${iris}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="48" cy="58.5" r="2.8" fill="#080C3D"/>
      <circle cx="46.5" cy="57" r="1.1" fill="#fff"/>
      <path d="M26 72 C32 79 40 81 48 81 C56 81 64 79 70 72" stroke="${gold}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="48" cy="40" r="2.2" fill="${gold}"/><circle cx="37" cy="44" r="1.6" fill="${gold}"/><circle cx="59" cy="44" r="1.6" fill="${gold}"/>`;
  },
};
