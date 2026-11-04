const body = 'M24 12 L72 12 Q77 12 77 17 L77 79 Q77 84 72 84 L24 84 Q19 84 19 79 L19 17 Q19 12 24 12 Z';
module.exports = {
  id: 'red-envelope',
  name: 'Red Envelope',
  emoji: '🧧',
  group: 'Activities',
  subgroup: 'event',
  tags: ['hongbao', 'lunar new year', 'lucky money', 'gift', 'red packet'],
  tone: 'red',
  body,
  shine: [25, 22, -60],
  shineSize: [6, 2.4],
  draw(c) {
    const paper = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const flap = c.linear('flap', 'red', [0, 0, 0, 1], 1, 2);
    const gold = c.radial('gold', 'gold', 0.35, 0.3);
    return `<path d="${body}" fill="${paper}"/>
      <path d="M19 17 Q19 12 24 12 L72 12 Q77 12 77 17 L77 32 C66 44 58 47 48 47 C38 47 30 44 19 32 Z" fill="${flap}"/>
      <path d="M19 32 C30 44 38 47 48 47 C58 47 66 44 77 32" fill="none" stroke="#3D0003" stroke-opacity=".45" stroke-width="1.8"/>
      <path d="M19 31 C30 43 38 46 48 46 C58 46 66 43 77 31" fill="none" stroke="#FFC21A" stroke-width="1.6"/>
      <circle cx="48" cy="47" r="9.5" fill="${gold}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.1"/>
      <rect x="44.5" y="43.5" width="7" height="7" rx="1" fill="none" stroke="#8A0006" stroke-width="1.8" transform="rotate(45 48 47)"/>
      <path d="M26 70 L70 70 M26 75 L70 75" stroke="#FFC21A" stroke-opacity=".75" stroke-width="1.4"/>`;
  },
};
