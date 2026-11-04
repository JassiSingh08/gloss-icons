const body = 'M27 38 L71 38 C79 38 84 47 84 58 C84 69 79 78 71 78 L27 78 A13 20 0 0 1 27 38 Z';
module.exports = {
  id: 'wood',
  name: 'Wood',
  emoji: '🪵',
  group: 'Travel & Places',
  subgroup: 'place-building',
  tags: ['log', 'timber', 'firewood', 'tree', 'lumber'],
  tone: 'brown',
  body,
  shine: [44, 43, -5],
  draw(c) {
    const bark = c.linear('a', 'brown', [0, 0, 0.3, 1], 0, 3);
    const end = c.radial('end', 'sand', 0.35, 0.3);
    const leaf = c.radial('leaf', 'green', 0.3, 0.2);
    return `<path d="M60 38 C60 30 62 25 66 22" fill="none" stroke="${c.ramp('brown')[2]}" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M66 22 C66 14 73 11 78 12 C78 19 73 23 66 22 Z" fill="${leaf}" stroke="#053A1A" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${bark}"/>
      <path d="M38 47 C50 45 60 48 76 46 M42 60 C54 58 62 62 80 59 M38 70 C50 69 58 72 74 70" fill="none" stroke="#331805" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round"/>
      <ellipse cx="27" cy="58" rx="13" ry="20" fill="${end}" stroke="#6E3A14" stroke-width="1.6"/>
      <ellipse cx="27" cy="58" rx="9" ry="14" fill="none" stroke="#B08A4E" stroke-width="1.3"/>
      <ellipse cx="27.5" cy="58.5" rx="5.2" ry="8.2" fill="none" stroke="#B08A4E" stroke-width="1.3"/>
      <ellipse cx="28" cy="59" rx="1.8" ry="2.8" fill="#8A5A1E"/>
      <path d="M27 58 L34 68" stroke="#8A5A1E" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
