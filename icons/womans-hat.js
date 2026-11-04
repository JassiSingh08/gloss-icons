const body = 'M11 63 C11 56 21 51.5 30.5 50.5 C30 36 37.5 27 48 27 C58.5 27 66 36 65.5 50.5 C75 51.5 85 56 85 63 C85 72.5 68 78.5 48 78.5 C28 78.5 11 72.5 11 63 Z';

module.exports = {
  id: 'womans-hat',
  name: 'Woman’s Hat',
  emoji: '👒',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['hat', 'sun hat', 'summer', 'straw', 'garden party'],
  tone: 'sand',
  body,
  shine: [22, 58, -15],
  shineSize: [6, 2.2],
  draw(c) {
    const straw = c.radial('a', 'sand', 0.3, 0.2);
    const crown = c.radial('crown', 'sand', 0.3, 0.15);
    const ribbon = c.linear('ribbon', 'pink', [0, 0, 0, 1], 0, 2);
    const bow = c.radial('bow', 'pink', 0.35, 0.3);
    const s = c.ramp('sand');
    return `<path d="${body}" fill="${straw}"/>
      <path d="M30.5 50.5 C30 36 37.5 27 48 27 C58.5 27 66 36 65.5 50.5 Q48 57 30.5 50.5 Z" fill="${crown}"/>
      <path d="M30.5 50.5 Q48 57 65.5 50.5" fill="none" stroke="${s[3]}" stroke-opacity=".5" stroke-width="1.4"/>
      <path d="M30.6 42 Q48 48 65.4 42 L65.5 50.5 Q48 57 30.5 50.5 Z" fill="${ribbon}"/>
      <path d="M17 66 C24 72 40 74 48 74 C60 74 74 71 79 66" fill="none" stroke="${s[2]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M64 50 Q70 60 66.5 68 L62.5 66 Q65 59 61 51.5 Z" fill="${ribbon}" stroke="#4A0016" stroke-opacity=".45" stroke-width="1"/>
      <path d="M62 47 C68 40 76 42 74 48 C72 53 66 51 62 48 Z M62 47 C55 41 50 46 53 50 C56 54 60 50 62 48 Z" fill="${bow}" stroke="#4A0016" stroke-opacity=".5" stroke-width="1"/>
      <ellipse cx="62" cy="47.6" rx="2.6" ry="2.4" fill="${ribbon}" stroke="#4A0016" stroke-opacity=".5" stroke-width="1"/>`;
  },
};
