const body = 'M19 54 C19 28 31 13 48 13 C65 13 77 28 77 54 Q77 60 71 60 L25 60 Q19 60 19 54 Z';
module.exports = {
  id: 'wind-chime',
  name: 'Wind Chime',
  emoji: '🎐',
  group: 'Activities',
  subgroup: 'event',
  tags: ['furin', 'wind chime', 'summer', 'breeze', 'japan'],
  tone: 'sky',
  body,
  shine: [29, 27, -55],
  draw(c) {
    c.def(`<clipPath id="${c.id('bell')}"><path d="${body}"/></clipPath>`);
    const glass = c.radial('a', 'sky', 0.3, 0.2);
    return `<path d="M48 4 L48 14" stroke="#B8B8C7" stroke-width="1.4"/>
      <path d="M48 54 L48 64" stroke="#B8B8C7" stroke-width="1.2"/>
      <path d="${body}" fill="${glass}" opacity=".95"/>
      <g clip-path="url(#${c.id('bell')})">
        <path d="M19 47 C31 42 38 51 48 47 C58 42 65 51 77 47 L77 61 L19 61 Z" fill="#0C8CF0" opacity=".45"/>
        <g transform="translate(60 33) scale(1.4) translate(-57 -31)"><path d="M54 30 C58 26 64 28 64 32 C64 36 58 37 54 34 L50 37 L50 27 Z" fill="#E3120B"/>
        <circle cx="61" cy="31" r=".9" fill="#fff"/></g>
      </g>
      <ellipse cx="48" cy="59" rx="27" ry="3.6" fill="#0A3A6B" opacity=".55"/>
      <rect x="45.5" y="53" width="5" height="9" rx="2" fill="${c.linear('clap', 'gold', [0, 0, 1, 0], 0, 2)}"/>
      <path d="M40 64 L56 64 L55 86 L41 86 Z" fill="${c.linear('slip', 'cream', [0, 0, 1, 1], 0, 2)}" stroke="#8A5A1E" stroke-opacity=".45" stroke-width="1" transform="rotate(6 48 64)"/>
      <path d="M44 70 L52 70 M44 74.5 L51 74.5 M44 79 L52 79" stroke="#E3120B" stroke-opacity=".6" stroke-width="1.2" transform="rotate(6 48 64)"/>`;
  },
};
