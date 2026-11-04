const body = 'M32.35 62 A27 27 0 1 1 63.65 62 L68 72 L74 72 Q77 72 77 75 L77 81 Q77 84 74 84 L22 84 Q19 84 19 81 L19 75 Q19 72 22 72 L28 72 Z';
const ball = 'M48 13 A27 27 0 1 1 47.99 13 Z';
module.exports = {
  id: 'crystal-ball',
  name: 'Crystal ball',
  emoji: '🔮',
  group: 'Activities',
  subgroup: 'game',
  tags: ['future', 'fortune', 'mystery', 'deep questions', 'predict', 'magic'],
  tone: 'purple',
  body,
  shine: [35, 26, -40],
  draw(c) {
    const glass = c.radial('a', 'purple', 0.35, 0.28);
    const gold = c.linear('gold', 'gold', [0, 0, 0, 1], 0, 2);
    const wood = c.linear('wood', 'brown', [0, 0, 0, 1], 1, 3);
    c.def(`<clipPath id="${c.id('ball')}"><path d="${ball}"/></clipPath>`);
    const star = (x, y, s) => `<path d="M${x} ${y - s} Q${x + s * 0.2} ${y - s * 0.2} ${x + s} ${y} Q${x + s * 0.2} ${y + s * 0.2} ${x} ${y + s} Q${x - s * 0.2} ${y + s * 0.2} ${x - s} ${y} Q${x - s * 0.2} ${y - s * 0.2} ${x} ${y - s} Z" fill="#fff"/>`;
    return `<path d="${ball}" fill="${glass}"/>
      <g clip-path="url(#${c.id('ball')})">
        <path d="M24 50 C30 40 44 38 52 44 C58 49 66 46 70 40 C72 52 62 60 50 56 C42 53 34 56 28 62 C24 58 23 54 24 50 Z" fill="#FF9BEA" opacity=".45" filter="url(#${c.id('b2')})"/>
        <path d="M30 56 C36 50 46 50 54 53 C60 55 66 54 72 50" stroke="#FFD0F5" stroke-opacity=".5" stroke-width="2" fill="none" stroke-linecap="round"/>
      </g>
      ${star(58, 30, 3.6)}${star(40, 46, 2.4)}${star(62, 50, 1.8)}
      <path d="M30.5 60 C36 68 60 68 65.5 60 L70 72 L26 72 Z" fill="${gold}"/>
      <path d="M19 75 Q19 72 22 72 L74 72 Q77 72 77 75 L77 81 Q77 84 74 84 L22 84 Q19 84 19 81 Z" fill="${wood}"/>
      <path d="M22 72.8 L74 72.8" stroke="#FFC21A" stroke-width="1.6"/>`;
  },
};
