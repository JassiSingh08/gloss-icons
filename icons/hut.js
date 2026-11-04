const body = 'M44.5 13.5 Q48 10.5 51.5 13.5 C61 23 76 39 84 53 Q85.5 58 80 58 L74 58 L74 80 Q74 84 70 84 L26 84 Q22 84 22 80 L22 58 L16 58 Q10.5 58 12 53 C20 39 35 23 44.5 13.5 Z';
module.exports = {
  id: 'hut',
  name: 'Hut',
  emoji: '🛖',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['thatch', 'village', 'shelter', 'rustic', 'home'],
  tone: 'sand',
  body,
  shine: [32, 36, -50],
  draw(c) {
    const wall = c.linear('wall', 'brown', [0, 0, 1, 1], 0, 2);
    const thatch = c.radial('a', 'sand', 0.35, 0.2);
    const door = c.radial('door', 'black', 0.4, 0.3);
    return `<path d="${body}" fill="${wall}"/>
      <path d="M22 66 Q48 70 74 66 M22 75 Q48 79 74 75" fill="none" stroke="#6E3A14" stroke-opacity=".45" stroke-width="1.3"/>
      <path d="M38 84 L38 72 Q38 63 48 63 Q58 63 58 72 L58 84 Z" fill="${door}" stroke="#331805" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M44.5 13.5 Q48 10.5 51.5 13.5 C61 23 76 39 84 53 Q85.5 58 80 58 L16 58 Q10.5 58 12 53 C20 39 35 23 44.5 13.5 Z" fill="${thatch}"/>
      <path d="M12.5 56 L16 61 L20 56.5 L24 62 L28 57 L32 62.5 L36 57 L40 62.5 L44 57 L48 63 L52 57 L56 62.5 L60 57 L64 62.5 L68 57 L72 62 L76 56.5 L80 61 L83.5 56 Z" fill="${c.linear('hem', 'sand', [0, 0, 0, 1], 1, 2)}" stroke="#5C4420" stroke-opacity=".5" stroke-width="1"/>
      <path d="M36 28 C30 36 25 44 21 52 M44 26 C41 35 38 44 36 53 M53 26 C56 35 59 44 61 53 M61 30 C66 37 71 44 75 52" fill="none" stroke="#B08A4E" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M38 23 Q48 27 58 23" fill="none" stroke="#6E3A14" stroke-width="2.6" stroke-linecap="round"/>`;
  },
};
