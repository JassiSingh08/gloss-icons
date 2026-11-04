const body = 'M48 11 C58 17 69 18.5 81 17 L81 43 C81 63 67 76 48 85 C29 76 15 63 15 43 L15 17 C27 18.5 38 17 48 11 Z';
const field = 'M48 18 C57 22.5 66 24 75 23.3 L75 43 C75 59.5 64 70.5 48 78.3 C32 70.5 21 59.5 21 43 L21 23.3 C30 24 39 22.5 48 18 Z';
module.exports = {
  id: 'shield',
  name: 'Shield',
  emoji: '🛡️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['shield', 'protect', 'defence', 'security', 'safe'],
  tone: 'silver',
  body,
  shine: [24, 25, -15],
  shineSize: [6, 2.4],
  draw(c) {
    const rim = c.radial('a', 'silver', 0.3, 0.2);
    const blue = c.linear('b', 'blue', [0, 0, 1, 1], 0, 2);
    const right = c.linear('r', 'blue', [0, 0, 1, 1], 1, 3);
    const gold = c.radial('g', 'gold', 0.35, 0.3);
    c.def(`<clipPath id="${c.id('f')}"><path d="${field}"/></clipPath>`);
    return `<path d="${body}" fill="${rim}"/>
      <path d="${field}" fill="${blue}"/>
      <path d="M48 18 L75 18 L75 80 L48 80 Z" fill="${right}" clip-path="url(#${c.id('f')})"/>
      <path d="${field}" fill="none" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M21 41 L48 54 L75 41 L75 50 L48 63 L21 50 Z" fill="${gold}" clip-path="url(#${c.id('f')})"/>
      <path d="M21 41 L48 54 L75 41" stroke="#FFF3A6" stroke-width="1.1" fill="none" clip-path="url(#${c.id('f')})"/>`;
  },
};
