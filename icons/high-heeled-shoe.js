const body = 'M10 79 Q9 72 16.5 69 Q30 64.5 43 58.5 Q50 55 56 50 L73 38 Q79.5 34 83.5 37.5 Q87 41 84.5 47 L80.5 55 L78.5 84 L74.5 84 L71 63 Q62 67 53 74 Q44 81.5 31 83.5 L16 84 Q10 84 10 79 Z';

module.exports = {
  id: 'high-heeled-shoe',
  name: 'High-Heeled Shoe',
  emoji: '👠',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['heels', 'stiletto', 'shoe', 'fashion', 'date night'],
  tone: 'red',
  body,
  shine: [20, 70, -22],
  shineSize: [6, 2],
  draw(c) {
    const patent = c.radial('a', 'red', 0.3, 0.2);
    const inside = c.linear('in', 'red', [0, 0, 1, 1], 2, 3);
    const insole = c.linear('sole', 'pink', [0, 0, 1, 1], 0, 1);
    const r = c.ramp('red');
    return `<path d="${body}" fill="${patent}"/>
      <path d="M44 58 Q57 53 73 40.5 Q79 36.5 82 40 Q83 43 80 48 Q66 56 53 66 Q47 62 44 58 Z" fill="${inside}"/>
      <path d="M58 58 Q68 51 79 47 L80.5 50 Q70 55 60 62 Z" fill="${insole}" opacity=".85"/>
      <path d="M74.5 84 L78.5 84 L78.8 79.5 L74 79.5 Z" fill="#141420"/>
      <path d="M71 63 Q62 67 53 74 Q44 81.5 31 83.5" fill="none" stroke="${r[3]}" stroke-opacity=".7" stroke-width="1.6"/>
      <path d="M18 72 Q30 67 42 62" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.3" stroke-linecap="round"/>`;
  },
};
