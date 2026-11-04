const f = require('../src/parts/face');

const body = 'M47 12 C52 19 59 22 58.5 29.5 C66 30.5 70.5 37 67.5 45 C76 46.5 80.5 53.5 76.5 61.5 C85 64 88.5 72 84.5 78 C82 82.5 76 84 68 84 L28 84 C20 84 14 82.5 11.5 78 C7.5 72 11 64 19.5 61.5 C15.5 53.5 20 46.5 28.5 45 C25.5 37 30 30.5 37.5 29.5 C40 24 45.5 21 47 12 Z';
module.exports = {
  id: 'pile-of-poo',
  name: 'Pile Of Poo',
  emoji: '💩',
  group: 'Smileys & Emotion',
  subgroup: 'face-costume',
  tags: ['poop', 'poo', 'crap', 'cheeky', 'silly'],
  tone: 'brown',
  body,
  shine: [33, 35, -30],
  shineSize: [5, 2.2],
  draw(c) {
    const ink = '#241003';
    const crease = 'stroke="#331805" stroke-opacity=".55" stroke-width="2" fill="none" stroke-linecap="round"';
    return `<path d="${body}" fill="${c.radial('a', 'brown', 0.36, 0.2)}"/>
      <path d="M38 30 Q48 36 58 30" ${crease}/>
      <path d="M29 45.5 Q48 52 67 45.5" ${crease}/>
      <path d="M20 62 Q48 70 76 62" ${crease}/>
      <path d="M33.5 49.5 L43 51.5 Q43 58 38 58 Q33 58 33.5 49.5 Z M62.5 49.5 L53 51.5 Q53 58 58 58 Q63 58 62.5 49.5 Z" fill="#FFF9EC"/>
      <circle cx="39.5" cy="54.2" r="2.6" fill="${ink}"/><circle cx="56.5" cy="54.2" r="2.6" fill="${ink}"/>${f.glint(38.6, 53.2, 0.8)}${f.glint(55.6, 53.2, 0.8)}
      <path d="M32.5 49 L43.5 51.5 M63.5 49 L52.5 51.5" stroke="${ink}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M36 70 Q47 77 61 67.5" stroke="${ink}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      <path d="M59.5 66.5 L63 65" stroke="${ink}" stroke-width="3" stroke-linecap="round"/>`;
  },
};
