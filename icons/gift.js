const body = 'M16 38 Q16 34 20 34 L76 34 Q80 34 80 38 L80 45 Q80 47 78 47 L76 47 L76 80 Q76 84 72 84 L24 84 Q20 84 20 80 L20 47 L18 47 Q16 47 16 45 Z';
module.exports = {
  id: 'gift',
  name: 'Gift',
  tags: ['present', 'birthday', 'surprise', 'celebrate', 'treat'],
  tone: 'red',
  body,
  shine: [26, 56, -20],
  draw(c) {
    const box = c.linear('a', 'red', [0, 0, 1, 1], 0, 2);
    const lid = c.linear('lid', 'red', [0, 0, 0, 1], 0, 1);
    const ribbon = c.linear('ribbon', 'gold', [0, 0, 1, 0], 0, 2);
    const bow = c.radial('bow', 'gold', 0.35, 0.25);
    return `<path d="M47 33 C38 31 26 22 29 15 C32 9 42 16 47 31 Z" fill="${bow}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M49 33 C58 31 70 22 67 15 C64 9 54 16 49 31 Z" fill="${bow}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.2"/>
      <path d="M45 29 C40 24 34 20 33 17 M51 29 C56 24 62 20 63 17" stroke="#C98500" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      <path d="${body}" fill="${box}"/>
      <path d="M16 38 Q16 34 20 34 L76 34 Q80 34 80 38 L80 45 Q80 47 78 47 L18 47 Q16 47 16 45 Z" fill="${lid}"/>
      <path d="M20 47 L76 47 L76 51 L20 51 Z" fill="#3D0003" opacity=".35"/>
      <path d="M42 34 L54 34 L54 84 L42 84 Z" fill="${ribbon}"/>
      <path d="M42 47 L54 47 L54 50 L42 50 Z" fill="#5E3A00" opacity=".3"/>
      <rect x="43.5" y="28" width="9" height="8" rx="3" fill="${bow}" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.2"/>`;
  },
};
