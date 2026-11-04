const body = 'M17.5 80 L14 35 Q14 31 17 33.5 L32 50 L45.5 22.5 Q48 18 50.5 22.5 L64 50 L79 33.5 Q82 31 82 35 L78.5 80 Q48 86 17.5 80 Z';

module.exports = {
  id: 'crown',
  name: 'Crown',
  emoji: '👑',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['crown', 'king', 'queen', 'royal', 'winner'],
  tone: 'gold',
  body,
  shine: [24, 52, -70],
  shineSize: [6, 2.4],
  draw(c) {
    const gold = c.radial('a', 'gold', 0.3, 0.2);
    const band = c.linear('band', 'gold', [0, 0, 0, 1], 1, 2);
    const ruby = c.radial('ruby', 'red', 0.35, 0.3);
    const blue = c.radial('blue', 'blue', 0.35, 0.3);
    const pearl = c.radial('pearl', 'ivory', 0.35, 0.3);
    const d = c.ramp('gold')[3];
    const ball = (x, y) => `<circle cx="${x}" cy="${y}" r="4.3" fill="${pearl}" stroke="#6E61A8" stroke-opacity=".5" stroke-width="1"/>`;
    return `${ball(15, 31)}${ball(48, 18.5)}${ball(81, 31)}
      <path d="${body}" fill="${gold}"/>
      <path d="M16.6 66 Q48 72 79.4 66 L78.5 80 Q48 86 17.5 80 Z" fill="${band}"/>
      <path d="M16.6 66 Q48 72 79.4 66" fill="none" stroke="${d}" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M17 69 Q48 75 79 69" fill="none" stroke="#FFF3A6" stroke-opacity=".5" stroke-width="1"/>
      <ellipse cx="48" cy="75.5" rx="5.6" ry="4.6" fill="${ruby}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <ellipse cx="30" cy="73.5" rx="3.8" ry="3.4" fill="${blue}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1"/>
      <ellipse cx="66" cy="73.5" rx="3.8" ry="3.4" fill="${blue}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1"/>
      <path d="M48 36 L52 43 L48 50 L44 43 Z" fill="${ruby}" stroke="#3D0003" stroke-opacity=".5" stroke-width="1"/>
      <path d="M46.5 74 Q47 72.5 48.8 72.4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" fill="none" opacity=".8"/>`;
  },
};
