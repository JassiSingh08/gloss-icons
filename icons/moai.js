const body = 'M31 16 Q31 9 39 9 L59 9 Q67 9 67 16 L69 50 C69.5 60 68 69 65 76 L65 84 L31 84 L31 76 C28 69 26.5 60 27 50 Z';
module.exports = {
  id: 'moai',
  name: 'Moai',
  emoji: '🗿',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['moai', 'statue', 'stone face', 'easter island', 'deadpan'],
  tone: 'grey',
  body,
  shine: [36, 15, -15],
  shineSize: [5, 1.8],
  draw(c) {
    const stone = c.linear('a', 'grey', [0, 0, 1, 1], 0, 2);
    const shade = '#2E2E3A';
    const ear = c.linear('e', 'grey', [0, 0, 1, 0], 1, 3);
    return `<path d="M27 32 Q22 33 22 40 L23 58 Q24 62 28 61 Z M69 32 Q74 33 74 40 L73 58 Q72 62 68 61 Z" fill="${ear}" stroke="${shade}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="${body}" fill="${stone}"/>
      <path d="M31 30 Q48 25 65 30 L65 34 Q48 29 31 34 Z" fill="${shade}" opacity=".35"/>
      <path d="M33 37 Q38 34 44 37 Q39 40.5 33 37 Z M52 37 Q58 34 63 37 Q57 40.5 52 37 Z" fill="${shade}" opacity=".7"/>
      <path d="M45 33 L51 33 L56 56 Q56 60 52 60 L44 60 Q40 60 40 56 Z" fill="#F2F2F7" opacity=".28"/>
      <path d="M51 34 L56 56 Q56 60 52 60 L48 60" stroke="${shade}" stroke-opacity=".35" stroke-width="1.4" fill="none"/>
      <path d="M43 57.5 Q44.5 56 46 57.5 M50 57.5 Q51.5 56 53 57.5" stroke="${shade}" stroke-opacity=".55" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M38 67 Q48 64.5 58 67" stroke="${shade}" stroke-opacity=".6" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M40 72 Q48 74 56 72" stroke="${shade}" stroke-opacity=".25" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  },
};
