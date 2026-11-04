const body = 'M37 10 L59 10 Q69 10 69 20 L69 74 Q69 84 59 84 L37 84 Q27 84 27 74 L27 20 Q27 10 37 10 Z';
const screen = 'M38 15.5 L58 15.5 Q63.5 15.5 63.5 21 L63.5 73 Q63.5 78.5 58 78.5 L38 78.5 Q32.5 78.5 32.5 73 L32.5 21 Q32.5 15.5 38 15.5 Z';
const heart = 'M48 60 C38 53 33.5 47.5 34.5 42 C35.5 36.5 42.5 34.5 48 40 C53.5 34.5 60.5 36.5 61.5 42 C62.5 47.5 58 53 48 60 Z';

module.exports = {
  id: 'phone',
  name: 'Phone',
  emoji: '📱',
  group: 'Objects',
  subgroup: 'phone',
  tags: ['phone', 'call', 'text', 'long distance', 'love', 'message'],
  tone: 'navy',
  body,
  shine: [31.5, 24, -80],
  shineSize: [5.5, 2],
  draw(c) {
    const frame = c.linear('a', 'navy', [0, 0, 1, 1], 0, 2);
    c.def(`<linearGradient id="${c.id('scr')}" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#3B2A8F"/><stop offset="1" stop-color="#12002E"/></linearGradient>`);
    const love = c.radial('love', 'pink', 0.32, 0.22);
    return `<path d="${body}" fill="${frame}"/>
      <path d="${screen}" fill="url(#${c.id('scr')})"/>
      <rect x="43" y="18.5" width="10" height="3.2" rx="1.6" fill="#12002E"/>
      <path d="${heart}" fill="${love}"/>
      <ellipse cx="40.5" cy="42" rx="3.2" ry="1.7" fill="#fff" opacity=".8" transform="rotate(-40 40.5 42)"/>
      <path d="M38 67 L58 67" stroke="#9AA8FF" stroke-opacity=".45" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M41.5 72.5 L54.5 72.5" stroke="#9AA8FF" stroke-opacity=".3" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M66.5 27 L66.5 36" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
