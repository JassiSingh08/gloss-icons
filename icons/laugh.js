const body = 'M48 22 A30 30 0 1 1 47.99 22 Z';
// A tear drop with its round end at (0,0) and its tip pointing up; placed with a transform.
const drop = 'M0 -10 C2.5 -5.5 5.5 -2.5 5.5 1 A5.5 5.5 0 0 1 -5.5 1 C-5.5 -2.5 -2.5 -5.5 0 -10 Z';
module.exports = {
  id: 'laugh',
  name: 'Laughing',
  emoji: '😂',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['laugh', 'tears of joy', 'funny', 'lol', 'hilarious'],
  tone: 'yellow',
  body,
  shine: [36, 35, -35],
  draw(c) {
    const ink = '#3D1A00';
    const tear = c.radial('tear', 'sky', 0.35, 0.3);
    c.def(`<clipPath id="${c.id('mouth')}"><path d="M28 54 Q48 58.5 68 54 Q66 77 48 78 Q30 77 28 54 Z"/></clipPath>`);
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.32, 0.25)}"/>
      <path d="M28 41 Q34 35 41 40" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M68 41 Q62 35 55 40" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M30 49 L39 45.5 L31 43" stroke="${ink}" stroke-width="3.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M66 49 L57 45.5 L65 43" stroke="${ink}" stroke-width="3.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28 54 Q48 58.5 68 54 Q66 77 48 78 Q30 77 28 54 Z" fill="#4A0E14"/>
      <g clip-path="url(#${c.id('mouth')})">
        <path d="M26 52 Q48 57 70 52 L70 61 Q48 64 26 61 Z" fill="#FFF8EC"/>
        <ellipse cx="50" cy="80" rx="14" ry="9" fill="#F0506A"/>
      </g>
      <path d="M33 49 Q24 52 20 60" stroke="${tear}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M63 49 Q72 52 76 60" stroke="${tear}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="${drop}" fill="${tear}" transform="translate(18 64) rotate(25) scale(1.2)"/>
      <path d="${drop}" fill="${tear}" transform="translate(78 64) rotate(-25) scale(1.2)"/>
      <ellipse cx="16.5" cy="63" rx="1.5" ry="2.6" fill="#fff" opacity=".85" transform="rotate(25 16.5 63)"/>
      <ellipse cx="76.5" cy="63" rx="1.5" ry="2.6" fill="#fff" opacity=".85" transform="rotate(-25 76.5 63)"/>`;
  },
};
