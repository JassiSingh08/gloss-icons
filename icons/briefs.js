const body = 'M13 25 Q48 29 83 25 L83 35 Q71 41 62 58 Q57 71 48 71 Q39 71 34 58 Q25 41 13 35 Z';

module.exports = {
  id: 'briefs',
  name: 'Briefs',
  emoji: '🩲',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['briefs', 'underwear', 'swimsuit', 'pants', 'laundry'],
  tone: 'navy',
  body,
  shine: [22, 37, -20],
  shineSize: [5.5, 2],
  draw(c) {
    const cloth = c.radial('a', 'navy', 0.3, 0.2);
    const band = c.linear('band', 'white', [0, 0, 0, 1], 0, 2);
    const n = c.ramp('navy');
    return `<path d="${body}" fill="${cloth}"/>
      <path d="M13 25 Q48 29 83 25 L83 33 Q48 37 13 33 Z" fill="${band}"/>
      <path d="M13 29 Q48 33 83 29" stroke="${n[1]}" stroke-width="1.6" fill="none"/>
      <path d="M13 33 Q48 37 83 33" stroke="${n[3]}" stroke-opacity=".5" stroke-width="1.2" fill="none"/>
      <path d="M38 37 Q48 44 58 37 Q56 54 48 62 Q40 54 38 37 Z" fill="${n[2]}" opacity=".45"/>
      <path d="M17 37.5 Q28 44 35 57 M79 37.5 Q68 44 61 57" fill="none" stroke="${n[0]}" stroke-opacity=".45" stroke-width="1.2" stroke-dasharray="2 1.8"/>`;
  },
};
