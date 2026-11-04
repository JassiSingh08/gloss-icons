const f = require('../src/parts/face');

// A chip knocked out of the top right, and a crack running from it, under a smile that holds.
const body = 'M58.26 23.81 L61.2 29.6 L65.4 28.2 L67.6 34.4 L70.98 32.72 A30 30 0 1 1 58.26 23.81 Z';
module.exports = {
  ...f.spec(),
  id: 'cracking-face',
  name: 'Cracking Face',
  emoji: '🫫',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['crack', 'breaking', 'pressure', 'fragile', 'coping'],
  body,
  draw(c) {
    const ink = f.INK;
    const crack = (d, w = 2.2) => `<path d="${d}" stroke="#FFF7A8" stroke-width="${w * 0.7}" fill="none" stroke-linejoin="round" stroke-linecap="round" transform="translate(0.8 1)" opacity=".85"/>${f.stroke(d, w, ink)}`;
    return `<path d="${body}" fill="${c.radial('a', 'yellow', 0.32, 0.25)}"/>
      <path d="M62.5 35.5 L65.4 28.2 L67.6 34.4 Z" fill="#D9A400" opacity=".5"/>
      ${crack('M64 33 L55.5 34 L56.5 37.5 L48 38.5 L49 42 L42.5 44')}
      ${crack('M55.8 34 L53 28.5', 1.6)}
      <path d="M72.5 14.5 L79.5 17 L74.5 22.5 Z" fill="${c.radial('chip', 'yellow', 0.3, 0.3)}" stroke="#6B4A00" stroke-opacity=".5" stroke-width="1.1" stroke-linejoin="round"/>
      ${f.eyes.oval({ y: 47 })}
      ${f.mouth.smile({ w: 12 })}`;
  },
};
