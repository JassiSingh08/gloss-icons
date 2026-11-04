// Wooden caps top and bottom, a glass waist between, two turned posts. The glass is tinted and
// see-through; the sand is either running (top half emptying) or all run through.
const GLASS = 'M26 19 C26 34 44 42 45 48 C44 54 26 62 26 77 L70 77 C70 62 52 54 51 48 C52 42 70 34 70 19 Z';
const body = 'M22 10 L74 10 Q78 10 78 14 L78 15.5 Q78 19 74 19 L70 19 C70 34 52 42 51 48 C52 54 70 62 70 77 L74 77 Q78 77 78 80.5 Q78 84 74 84 L22 84 Q18 84 18 80.5 Q18 77 22 77 L26 77 C26 62 44 54 45 48 C44 42 26 34 26 19 L22 19 Q18 19 18 15.5 L18 14 Q18 10 22 10 Z';

function hourglass(done) {
  return {
    tone: 'brown',
    body,
    shine: [30, 26, -60],
    shineSize: [5, 2],
    draw(c) {
      const wood = c.linear('wood', 'brown', [0, 0, 0, 1], 0, 2);
      const post = c.linear('post', 'brown', [0, 0, 1, 0], 0, 3);
      const sand = c.radial('sand', 'gold', 0.4, 0.2);
      c.def(`<linearGradient id="${c.id('glass')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#C9ECFF" stop-opacity=".55"/><stop offset=".5" stop-color="#5BC2FF" stop-opacity=".22"/><stop offset="1" stop-color="#1F7FD1" stop-opacity=".45"/></linearGradient>`);
      c.def(`<clipPath id="${c.id('in')}"><path d="${GLASS}"/></clipPath>`);
      const grains = done
        ? `<path d="M20 60 Q48 52 76 60 L76 80 L20 80 Z" fill="${sand}"/>`
        : `<path d="M20 31 Q48 35 76 31 L76 50 L20 50 Z" fill="${sand}"/>
          <path d="M47 46 L49 46 L48.8 72 L47.2 72 Z" fill="#FFC21A"/>
          <path d="M30 78 Q40 70 48 64 Q56 70 66 78 Z" fill="${sand}"/>`;
      const caps = (y) => `<path d="M22 ${y} L74 ${y} Q78 ${y} 78 ${y + 4} L78 ${y + 5.5} Q78 ${y + 9} 74 ${y + 9} L22 ${y + 9} Q18 ${y + 9} 18 ${y + 5.5} L18 ${y + 4} Q18 ${y} 22 ${y} Z" fill="${wood}"/>
        <path d="M22 ${y + 1.6} L74 ${y + 1.6}" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/>`;
      const posts = [21.5, 74.5].map((x) => `<rect x="${x - 2.2}" y="18" width="4.4" height="60" rx="2" fill="${post}" stroke="#331805" stroke-opacity=".55" stroke-width="1"/>`).join('');
      return `<path d="${GLASS}" fill="url(#${c.id('glass')})"/>
        <g clip-path="url(#${c.id('in')})">${grains}</g>
        <path d="M31 24 C32 32 38 37 42 41 M31 72 C32 66 36 61 40 58" stroke="#fff" stroke-opacity=".6" stroke-width="2" fill="none" stroke-linecap="round"/>
        ${caps(10)}${caps(76)}${posts}`;
    },
  };
}

module.exports = {
  ...hourglass(false),
  id: 'hourglass-not-done',
  name: 'Hourglass Not Done',
  emoji: '⏳',
  group: 'Travel & Places',
  subgroup: 'time',
  tags: ['hourglass', 'waiting', 'sand', 'timer', 'loading'],
  hourglass,
};
