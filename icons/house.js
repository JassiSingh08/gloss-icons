const body = 'M45.5 13.5 Q48 11.5 50.5 13.5 L82 44 Q84.5 47 81 49.5 L76 49.5 L76 80 Q76 84 72 84 L24 84 Q20 84 20 80 L20 49.5 L15 49.5 Q11.5 47 14 44 Z';
module.exports = {
  id: 'house',
  name: 'House',
  tags: ['home', 'cosy', 'stay in', 'family', 'move in'],
  tone: 'cream',
  body,
  shine: [28, 56, -20],
  draw(c) {
    const wall = c.linear('a', 'cream', [0, 0, 1, 1], 0, 2);
    const roof = c.radial('roof', 'red', 0.35, 0.2);
    const brick = c.linear('brick', 'ember', [0, 0, 1, 0], 1, 2);
    const door = c.radial('door', 'brown', 0.3, 0.2);
    const glow = c.radial('glow', 'flame', 0.4, 0.4);
    return `<path d="M62 30 L62 17 Q62 15.5 63.5 15.5 L69.5 15.5 Q71 15.5 71 17 L71 38 Z" fill="${brick}" stroke="#3D0700" stroke-opacity=".5" stroke-width="1.3"/>
      <rect x="60.5" y="14" width="12" height="4" rx="1.5" fill="${c.linear('cap', 'ember', [0, 0, 0, 1], 0, 2)}"/>
      <path d="${body}" fill="${wall}"/>
      <path d="M45.5 13.5 Q48 11.5 50.5 13.5 L82 44 Q84.5 47 81 49.5 L15 49.5 Q11.5 47 14 44 Z" fill="${roof}"/>
      <path d="M20 49.5 L76 49.5 L76 53.5 L20 53.5 Z" fill="#8A5A1E" opacity=".35"/>
      <path d="M50 84 L50 67 Q50 60 57 60 Q64 60 64 67 L64 84 Z" fill="${door}"/>
      <circle cx="60.5" cy="73" r="1.4" fill="#FFD24A"/>
      <rect x="27" y="59" width="15" height="14" rx="2" fill="${glow}"/>
      <path d="M34.5 59 L34.5 73 M27 66 L42 66" stroke="#E0B472" stroke-width="2"/>
      <rect x="27" y="59" width="15" height="14" rx="2" fill="none" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1.2"/>
      <circle cx="48" cy="33" r="4" fill="${glow}" stroke="#8A0006" stroke-opacity=".6" stroke-width="1.2"/>`;
  },
};
