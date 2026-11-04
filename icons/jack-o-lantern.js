const body = 'M48 27 C56 23 64 23 70 26 C80 28 86 40 86 54 C86 71 77 82 65 82 C60 84 54 84.5 48 83.5 C42 84.5 36 84 31 82 C19 82 10 71 10 54 C10 40 16 28 26 26 C32 23 40 23 48 27 Z';
module.exports = {
  id: 'jack-o-lantern',
  name: 'Jack-O-Lantern',
  emoji: '🎃',
  group: 'Activities',
  subgroup: 'event',
  tags: ['halloween', 'pumpkin', 'spooky', 'october', 'trick or treat'],
  tone: 'orange',
  body,
  shine: [24, 37, -50],
  draw(c) {
    const skin = c.radial('a', 'orange', 0.32, 0.22);
    const glow = c.radial('glow', 'flame', 0.5, 0.35);
    const rib = '#8A2A00';
    return `<path d="M45 28 C45 20 44 14 40 10 L45 8 C50 12 51 20 51 28 Z" fill="${c.linear('stem', 'olive', [0, 0, 1, 0], 1, 3)}"/>
      <path d="${body}" fill="${skin}"/>
      <path d="M31 27 C22 38 21 70 31 82 M65 27 C74 38 75 70 65 82 M48 27 C44 42 44 68 48 83" fill="none" stroke="${rib}" stroke-opacity=".4" stroke-width="1.8"/>
      <path d="M27 50 L35 38 L42 50 Z M54 50 L61 38 L69 50 Z" fill="${glow}" stroke="#6B0F00" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M44 58 L48 52 L52 58 Z" fill="${glow}" stroke="#6B0F00" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M24 62 C34 66 62 66 72 62 C70 72 60 77 48 77 C36 77 26 72 24 62 Z M33 64.5 L33 69.5 L38 69.5 L38 65.3 Z M58 65.3 L58 69.5 L63 69.5 L63 64.5 Z M45 66 L45 70.5 L51 70.5 L51 66 Z" fill="${glow}" fill-rule="evenodd" stroke="#6B0F00" stroke-width="1.2" stroke-linejoin="round"/>`;
  },
};
