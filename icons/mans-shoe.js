const g = require('../src/parts/garment');

const body = 'M9.5 75 Q9 63 20 59.5 L39 52 Q47 48.5 52 42 Q54 39.5 58 40.5 Q70 44 80 39.5 Q85.5 38 86 44 L86 81.5 Q86 84 83.5 84 L13 84 Q9.5 84 9.5 80 Z';

module.exports = {
  id: 'mans-shoe',
  name: 'Man’s Shoe',
  emoji: '👞',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['shoe', 'oxford', 'formal', 'leather', 'office'],
  tone: 'brown',
  body,
  shine: [20, 63, -25],
  shineSize: [6, 2.2],
  draw(c) {
    const leather = c.radial('a', 'brown', 0.3, 0.2);
    const sole = c.linear('sole', 'brown', [0, 0, 0, 1], 2, 3);
    const b = c.ramp('brown');
    return `<path d="${body}" fill="${leather}"/>
      <path d="M54.5 42 Q70 47 83 41.5 Q80 47.5 70 48.5 Q60 48.5 54.5 42 Z" fill="${b[3]}" opacity=".85"/>
      <path d="M9.6 75 L86 75 L86 81.5 Q86 84 83.5 84 L13 84 Q9.6 84 9.6 80 Z" fill="${sole}"/>
      <path d="M68 75 L68 84" stroke="#000" stroke-opacity=".3" stroke-width="1.2"/>
      ${g.stitch('M12 73 L85 73', b[0], 0.5)}
      ${g.fold('M27 57 Q22 64 25 75', b[3], 0.5, 1.4)}
      ${g.stitch('M29.5 56 Q25 64 27.5 74', b[0], 0.4)}
      ${g.fold('M37 54 Q48 60 52 74 M60 49 Q64 60 62 74', b[3], 0.45, 1.4)}
      <path d="M41 51 L50 48.5 M44 54.5 L53 51 M47 58 L56 54" stroke="${b[3]}" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M41 51 L50 48.5 M44 54.5 L53 51 M47 58 L56 54" stroke="${b[0]}" stroke-opacity=".6" stroke-width=".8" stroke-linecap="round"/>`;
  },
};
