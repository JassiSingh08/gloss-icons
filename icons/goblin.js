const f = require('../src/parts/face');

// A tengu mask: red face, long proud nose, bristling brows.
const body = 'M48 22 A30 30 0 1 1 47.99 22 Z';
const NOSE = 'M44 56.5 C56 56 70 52.5 81.5 48 Q87 46 86.5 51 C78 57 66 63.5 54 66.5 Q46 68.5 43.5 62.5 Z';
module.exports = {
  id: 'goblin',
  name: 'Goblin',
  emoji: '👺',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['goblin', 'tengu', 'mask', 'monster', 'japanese'],
  tone: 'red',
  body,
  shine: [32.5, 31.5, -45],
  shineSize: [5.5, 2.4],
  draw(c) {
    const ink = '#3D0003';
    const nose = c.linear('nose', 'red', [0, 0, 0.6, 1], 0, 2);
    const eye = c.radial('eye', 'gold', 0.4, 0.3);
    const brow = c.linear('brow', 'white', [0, 0, 0, 1], 0, 2);
    return `<path d="${body}" fill="${c.radial('a', 'red', 0.32, 0.25)}"/>
      <path d="M22 37 L30 32 L33 36 L38 31 L41 36 L46 35 L44 42 Q34 39 24 42 Z M74 37 L66 32 L63 36 L58 31 L55 36 L50 35 L52 42 Q62 39 72 42 Z" fill="${brow}" stroke="#6E61A8" stroke-opacity=".6" stroke-width="1" stroke-linejoin="round"/>
      <path d="M26 45 L42 47 Q41 53 34.5 53 Q27.5 53 26 45 Z M70 45 L54 47 Q55 53 61.5 53 Q68.5 53 70 45 Z" fill="${eye}" stroke="${ink}" stroke-width="1.6"/>
      <circle cx="35" cy="49.2" r="2.2" fill="${ink}"/><circle cx="61" cy="49.2" r="2.2" fill="${ink}"/>${f.glint(34.2, 48.3, 0.7)}${f.glint(60.2, 48.3, 0.7)}
      <path d="M32 73 Q38 68 44 71.5" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M26 69 Q30 78 40 79 M70 69 Q66 78 56 79" stroke="#1A0002" stroke-opacity=".5" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="${NOSE}" fill="${nose}" stroke="${ink}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M50 58.5 C61 57.5 71 54.5 80 50.5" stroke="#fff" stroke-opacity=".55" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  },
};
