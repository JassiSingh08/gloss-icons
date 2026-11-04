const body = 'M34 25 Q39 20 44 25 L44 63 C44 71 52.5 71 53 63 L55 44 C56 37 58 32 57.5 26 L83 32 C76 36 69 40 67 47 L64 66 C62 85 34 85 34 64 Z';

module.exports = {
  id: 'saxophone',
  name: 'Saxophone',
  emoji: '🎷',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['saxophone', 'jazz', 'sax', 'music', 'band'],
  tone: 'gold',
  body,
  shine: [37, 34, -85],
  shineSize: [5, 1.8],
  draw(c) {
    const brass = c.linear('a', 'gold', [0, 0, 1, 0.3], 0, 2);
    const crook = c.linear('crook', 'gold', [0, 0, 0, 1], 0, 2);
    const inside = c.radial('in', 'gold', 0.6, 0.7);
    const pearl = c.radial('pearl', 'cream', 0.35, 0.3);
    let keys = '';
    for (const y of [33, 41, 49, 57]) keys += `<circle cx="39" cy="${y}" r="2.9" fill="${pearl}" stroke="#C98500" stroke-width="1"/>`;
    return `<path d="M39 25 C39 14 32 11 24 13" fill="none" stroke="#5E3A00" stroke-width="6" stroke-linecap="round"/>
      <path d="M39 25 C39 14 32 11 24 13" fill="none" stroke="${crook}" stroke-width="4" stroke-linecap="round"/>
      <path d="M25 10.5 L16 12.5 Q14 13 14.5 15 Q15 17 17 16.5 L26 15.5 Z" fill="#1A0E05"/>
      <path d="${body}" fill="${brass}"/>
      <path d="M57.5 26 L83 32 C79 35 76 36.5 72.5 38 C67 37.5 61 35 57 31 Z" fill="${inside}"/>
      <path d="M57.5 26 L83 32" stroke="#FFF3A6" stroke-width="2" stroke-linecap="round"/>
      <path d="M44.5 30 L50 30 M44.5 55 L52 55 M60 52 L66 53" stroke="#C98500" stroke-width="1.6" stroke-linecap="round"/>
      ${keys}
      <circle cx="58" cy="60" r="2.6" fill="${pearl}" stroke="#C98500" stroke-width="1"/>`;
  },
};
