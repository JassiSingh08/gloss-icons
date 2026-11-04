// Dish faces up and to the right. Rim: ellipse rx 25, ry 9.5 turned 45° about (40,46); the
// silhouette is the far half of the rim plus a deeper bowl behind it.
const body = 'M22.32 28.32 A25 9.5 45 0 1 57.68 63.68 A25 19 45 0 1 22.32 28.32 Z';
const rim = 'M22.32 28.32 A25 9.5 45 0 1 57.68 63.68 A25 9.5 45 0 1 22.32 28.32 Z';
module.exports = {
  id: 'satellite',
  name: 'Satellite Dish',
  emoji: '📡',
  group: 'Objects',
  subgroup: 'science',
  tags: ['long distance', 'apart', 'remote', 'online', 'signal'],
  tone: 'silver',
  body,
  shine: [24, 42, -50],
  shineSize: [6, 2.6],
  draw(c) {
    const shell = c.linear('a', 'silver', [0, 0, 1, 1], 1, 3);
    const face = c.radial('face', 'silver', 0.68, 0.62);
    const stand = c.linear('stand', 'purple', [0, 0, 1, 0], 1, 3);
    const foot = c.linear('foot', 'purple', [0, 0, 0, 1], 0, 2);
    const knob = c.radial('knob', 'magenta', 0.35, 0.3);
    const wave = '#5BC2FF';
    const arc = (r) => `M${(54 + r * Math.cos(-1.35)).toFixed(2)} ${(32 + r * Math.sin(-1.35)).toFixed(2)} A${r} ${r} 0 0 1 ${(54 + r * Math.cos(-0.22)).toFixed(2)} ${(32 + r * Math.sin(-0.22)).toFixed(2)}`;
    return `<path d="M33 56 L37 75" stroke="#1A0040" stroke-width="7.4" stroke-linecap="round"/>
      <path d="M33 56 L37 75" stroke="${stand}" stroke-width="5.4" stroke-linecap="round"/>
      <path d="M26 84 Q24.5 84 25.2 82.5 L29 75.5 Q30 74 32 74 L43 74 Q45 74 46 75.5 L49.8 82.5 Q50.5 84 49 84 Z" fill="${foot}"/>
      <path d="${body}" fill="${shell}"/>
      <path d="${rim}" fill="${face}"/>
      <path d="${rim}" fill="none" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1.4"/>
      <path d="M33 39 L54 32 M47 53 L54 32" stroke="#6E61A8" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M40 46 L54 32" stroke="#3A3E52" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="40" cy="46" r="2.6" fill="#8E93AD"/>
      <circle cx="54.5" cy="31.5" r="4" fill="${knob}"/>
      <circle cx="53.4" cy="30.2" r="1.2" fill="#fff" opacity=".8"/>
      <path d="${arc(9)}" stroke="${wave}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="${arc(15)}" stroke="${wave}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".8"/>
      <path d="${arc(21)}" stroke="${wave}" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".6"/>`;
  },
};
