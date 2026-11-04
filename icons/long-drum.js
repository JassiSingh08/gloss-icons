const body = 'M23 22 A25 7 0 0 1 73 22 C73 38 60 49 58.5 59 C57.5 66 62 75 64 81 Q64.5 84 61.5 84 L34.5 84 Q31.5 84 32 81 C34 75 38.5 66 37.5 59 C36 49 23 38 23 22 Z';

module.exports = {
  id: 'long-drum',
  name: 'Long Drum',
  emoji: '🪘',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['drum', 'djembe', 'rhythm', 'percussion', 'beat'],
  tone: 'brown',
  body,
  shine: [27, 33, -70],
  shineSize: [5, 2],
  draw(c) {
    const wood = c.linear('a', 'brown', [0, 0, 1, 0.2], 0, 3);
    const skin = c.radial('skin', 'sand', 0.4, 0.3);
    const band = c.linear('band', 'red', [0, 0, 1, 0], 0, 2);
    // Rope laced in a zigzag from the rim down to the waist band, following the bowl's curve.
    const half = (y) => (y < 56 ? 25 - ((y - 22) / 34) ** 1.6 * 14.5 : 11);
    let rope = '';
    for (let k = 0; k <= 8; k++) {
      const u = -1 + k / 4;
      const y = k % 2 ? 54 : 28;
      rope += `${k ? 'L' : 'M'}${(48 + u * half(y) * 0.92).toFixed(1)} ${y + (k % 2 ? 2 : 4) * Math.sqrt(1 - u * u)} `;
    }
    return `<path d="${body}" fill="${wood}"/>
      <path d="${rope}" fill="none" stroke="#FFE7B8" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M37.5 57 Q48 61 58.5 57 L58.3 61.5 Q48 65.5 37.7 61.5 Z" fill="${band}"/>
      <path d="M34 78 Q48 82 62 78" fill="none" stroke="#FFC21A" stroke-width="2"/>
      <path d="M23 22 A25 7 0 0 0 73 22 L73 26 A25 7 0 0 1 23 26 Z" fill="#331805" opacity=".7"/>
      <ellipse cx="48" cy="22" rx="25" ry="7" fill="${skin}" stroke="#5C4420" stroke-width="1"/>`;
  },
};
