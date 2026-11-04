// The real organ, kept clean and glossy: a rounded muscle tipped to the lower left, the aortic
// arch over the top, the vena cava and pulmonary trunk in blue, one coronary vessel on the front.
const body = 'M38 34 C50 29 66 32 73 42 C80 53 76 67 63 77 C57 82 51 84.5 46 83 C33 78 21 67 19.5 54 C18.5 43 26 37 38 34 Z';
module.exports = {
  id: 'anatomical-heart',
  name: 'Anatomical Heart',
  emoji: '🫀',
  group: 'People & Body',
  subgroup: 'body-parts',
  tags: ['heart', 'organ', 'anatomy', 'cardiology', 'pulse'],
  tone: 'red',
  body,
  shine: [29, 43, -35],
  shineSize: [6, 2.6],
  draw(c) {
    const tube = (d, w, paint, edge) => `<path d="${d}" stroke="${edge}" stroke-width="${w + 2.2}" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${paint}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
    const red = c.linear('aorta', 'red', [0, 0, 1, 0], 0, 2);
    const blue = c.linear('vein', 'blue', [0, 0, 1, 0], 0, 2);
    return `${tube('M33 38 L32 13', 9, blue, '#001E4D')}
      ${tube('M49 36 C49 24 50 17 58 16 C66 15 68 22 68 30', 10, red, '#3D0003')}
      ${tube('M53 16 L52 9 M60 15.5 L62 9.5', 4, red, '#3D0003')}
      ${tube('M58 40 C62 33 70 32 78 34', 8, blue, '#001E4D')}
      <path d="${body}" fill="${c.radial('a', 'red', 0.3, 0.25)}"/>
      <path d="M55 38 C52 48 50 58 44 70 M51 52 C56 56 60 60 61 66" stroke="#3D0003" stroke-opacity=".35" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M55 38 C52 48 50 58 44 70 M51 52 C56 56 60 60 61 66" stroke="#FF7A62" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  },
};
