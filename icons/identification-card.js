const body = 'M17 22 L79 22 Q86 22 86 29 L86 71 Q86 78 79 78 L17 78 Q10 78 10 71 L10 29 Q10 22 17 22 Z';
module.exports = {
  id: 'identification-card',
  name: 'Identification Card',
  emoji: '🪪',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['id card', 'identity', 'badge', 'license', 'verify'],
  tone: 'sky',
  body,
  shine: [18, 28, -25],
  shineSize: [5.5, 2],
  draw(c) {
    const card = c.linear('a', 'white', [0, 0, 1, 1], 0, 2);
    const band = c.linear('b', 'blue', [0, 0, 1, 0], 0, 2);
    const photo = c.linear('p', 'sky', [0, 0, 1, 1], 0, 1);
    const person = c.radial('h', 'blue', 0.35, 0.3);
    c.def(`<clipPath id="${c.id('c')}"><path d="${body}"/></clipPath><clipPath id="${c.id('f')}"><rect x="18" y="40" width="24" height="29" rx="3"/></clipPath>`);
    return `<path d="${body}" fill="${card}"/>
      <rect x="0" y="22" width="96" height="11" fill="${band}" clip-path="url(#${c.id('c')})"/>
      <rect x="18" y="40" width="24" height="29" rx="3" fill="${photo}"/>
      <g clip-path="url(#${c.id('f')})"><circle cx="30" cy="51" r="5.5" fill="${person}"/><path d="M19 70 C19 60 24 58 30 58 C36 58 41 60 41 70 Z" fill="${person}"/></g>
      <path d="M49 44 L77 44 M49 52 L72 52 M49 60 L76 60 M49 68 L66 68" stroke="#6E61A8" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/>
      <circle cx="78" cy="27.5" r="2" fill="#fff" opacity=".8"/>`;
  },
};
