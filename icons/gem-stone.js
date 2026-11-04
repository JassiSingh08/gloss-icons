const body = 'M30 21 L66 21 L84 40 L48 83 L12 40 Z';

module.exports = {
  id: 'gem-stone',
  name: 'Gem Stone',
  emoji: '💎',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['diamond', 'gem', 'jewel', 'precious', 'luxury'],
  tone: 'blue',
  body,
  shine: [33, 25, -10],
  shineSize: [5, 1.8],
  draw(c) {
    const f = (name, a, b) => {
      c.def(`<linearGradient id="${c.id(name)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`);
      return `url(#${c.id(name)})`;
    };
    const ink = '#001E4D';
    return `<path d="${body}" fill="${f('base', '#8CD8FF', '#0049A8')}"/>
      <path d="M12 40 L30 21 L39 40 Z" fill="${f('c1', '#FFFFFF', '#8CD8FF')}"/>
      <path d="M30 21 L48 21 L39 40 Z" fill="${f('c2', '#E8F7FF', '#5BC2FF')}"/>
      <path d="M48 21 L66 21 L57 40 Z" fill="${f('c3', '#C9ECFF', '#3FA4EE')}"/>
      <path d="M39 40 L48 21 L57 40 Z" fill="${f('c4', '#FFFFFF', '#9ED8FF')}"/>
      <path d="M57 40 L66 21 L84 40 Z" fill="${f('c5', '#8CD8FF', '#0C6FD0')}"/>
      <path d="M12 40 L39 40 L48 83 Z" fill="${f('p1', '#BFE8FF', '#2B8CE0')}"/>
      <path d="M39 40 L57 40 L48 83 Z" fill="${f('p2', '#7CC6F5', '#0C5CC0')}"/>
      <path d="M57 40 L84 40 L48 83 Z" fill="${f('p3', '#3FA4EE', '#00327A')}"/>
      <path d="M12 40 L84 40 M30 21 L39 40 L48 21 L57 40 L66 21 M39 40 L48 83 L57 40" fill="none" stroke="${ink}" stroke-opacity=".3" stroke-width="1" stroke-linejoin="round"/>
      <path d="M22 42.5 L34 42.5 L44 70 Z" fill="#fff" opacity=".45"/>
      <path d="M77 13 L78.3 18.2 L83.5 19.5 L78.3 20.8 L77 26 L75.7 20.8 L70.5 19.5 L75.7 18.2 Z" fill="#fff"/>`;
  },
};
