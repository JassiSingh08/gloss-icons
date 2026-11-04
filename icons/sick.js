// Puffed cheeks push slightly past the round head, so they are part of the silhouette.
const body = 'M48 22 C65 22 78 35 78 50 C78 53 79.5 55.5 80.5 58.5 C82 64.5 79.5 70.5 74.5 72.5 C69 79 59 83 48 83 C37 83 27 79 21.5 72.5 C16.5 70.5 14 64.5 15.5 58.5 C16.5 55.5 18 53 18 50 C18 35 31 22 48 22 Z';
module.exports = {
  id: 'sick',
  name: 'Queasy',
  emoji: '🤢',
  group: 'Smileys & Emotion',
  subgroup: 'face-unwell',
  tags: ['sick', 'nauseated', 'queasy', 'gross', 'ill'],
  tone: 'green',
  body,
  shine: [35, 34, -35],
  draw(c) {
    const ink = '#06280F';
    const sweat = c.radial('sweat', 'sky', 0.35, 0.3);
    const cheek = c.radial('cheek', 'lime', 0.4, 0.3);
    return `<path d="${body}" fill="${c.radial('a', 'green', 0.34, 0.22)}"/>
      <ellipse cx="26" cy="62" rx="9.5" ry="8" fill="${cheek}" opacity=".55"/>
      <ellipse cx="70" cy="62" rx="9.5" ry="8" fill="${cheek}" opacity=".55"/>
      <path d="M18.5 66 Q24 72 33 69" stroke="#0E6E33" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M77.5 66 Q72 72 63 69" stroke="#0E6E33" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M28 40 L40 35.5" stroke="${ink}" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M68 40 L56 35.5" stroke="${ink}" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M29 47 Q35 44.5 41 48" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M67 47 Q61 44.5 55 48" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M38.5 63.5 Q41.5 60 44.5 63 Q47.5 66 50.5 63 Q53.5 60 57.5 63.5" stroke="${ink}" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M72 25 C74 29 76.5 31.5 76.5 34.5 A4.5 4.5 0 0 1 67.5 34.5 C67.5 31.5 70 29 72 25 Z" fill="${sweat}"/>
      <ellipse cx="70.6" cy="34" rx="1.2" ry="2" fill="#fff" opacity=".8"/>`;
  },
};
