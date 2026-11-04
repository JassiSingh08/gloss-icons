// Right corner sits a little higher than the left: a half smile.
const body = 'M13 59 C20 52 28 38.5 38 37.5 C42 37 45 39 48 41.5 C51 39 54 37 58 37.5 C68 38.5 77 49 83 55 C77 68 65 79 48 79 C31 79 19 70 13 59 Z';
const parting = 'M14.5 59 C23 60 31 58 39 59.5 Q48 61.5 57 59 C65 57 73 57.5 81.5 55.2';
module.exports = {
  id: 'lips',
  name: 'Lips',
  tags: ['lips', 'kiss', 'flirty', 'mouth', 'sexy'],
  tone: 'red',
  body,
  shine: [31, 46, -38],
  shineSize: [6, 2.6],
  draw(c) {
    const lower = c.radial('a', 'red', 0.45, 0.3);
    const upper = c.radial('up', 'red', 0.4, 0.15);
    const upperLip = `M13 59 C20 52 28 38.5 38 37.5 C42 37 45 39 48 41.5 C51 39 54 37 58 37.5 C68 38.5 77 49 83 55 C73 57.5 65 57 57 59 Q48 61.5 39 59.5 C31 58 23 60 13 59 Z`;
    return `<path d="${body}" fill="${lower}"/>
      <path d="${upperLip}" fill="${upper}"/>
      <path d="${upperLip}" fill="#3D0003" opacity=".18"/>
      <path d="${parting}" stroke="#3D0003" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M33 64 Q48 62.5 63 63.5" stroke="#3D0003" stroke-opacity=".25" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="52" cy="70" rx="10" ry="3.4" fill="#fff" opacity=".75" transform="rotate(-4 52 70)"/>
      <ellipse cx="65" cy="45.5" rx="4" ry="1.6" fill="#fff" opacity=".55" transform="rotate(28 65 45.5)"/>
      <path d="M44 42.5 Q48 45.5 52 42.5" stroke="#3D0003" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
