const body = 'M34 24 Q34 14 48 14 Q62 14 62 24 L59 24 L59 70 L62 70 L62 78 Q62 80 60 80 L58 80 L58 84 L38 84 L38 80 L36 80 Q34 80 34 78 L34 70 L37 70 L37 24 Z';
module.exports = {
  id: 'barber-pole',
  name: 'Barber Pole',
  emoji: '💈',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['barber', 'haircut', 'salon', 'shave', 'grooming'],
  tone: 'silver',
  body,
  shine: [40, 18.5, -25],
  shineSize: [4.5, 2],
  draw(c) {
    const chrome = c.linear('a', 'silver', [0, 0, 1, 0], 0, 3);
    const ball = c.radial('ball', 'silver', 0.35, 0.3);
    const red = c.ramp('red')[1];
    const blue = c.ramp('blue')[1];
    c.def(`<clipPath id="${c.id('glass')}"><rect x="37" y="24" width="22" height="46"/></clipPath>`);
    c.def(`<linearGradient id="${c.id('round')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".25"/><stop offset=".3" stop-color="#fff" stop-opacity=".55"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></linearGradient>`);
    let stripes = '';
    for (let i = 0; i < 9; i++) {
      const y = 20 + i * 7.5;
      stripes += `<path d="M36 ${y + 9} L60 ${y} L60 ${y + 4.6} L36 ${y + 13.6} Z" fill="${i % 2 ? blue : red}"/>`;
    }
    return `<circle cx="48" cy="11" r="3.2" fill="${ball}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <path d="${body}" fill="${chrome}"/>
      <rect x="37" y="24" width="22" height="46" fill="#F7F5FF"/>
      <g clip-path="url(#${c.id('glass')})">${stripes}</g>
      <rect x="37" y="24" width="22" height="46" fill="url(#${c.id('round')})"/>
      <path d="M34 24 L62 24 M34 70 L62 70" stroke="#3A3E52" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M36 80 L60 80" stroke="#3A3E52" stroke-opacity=".4" stroke-width="1"/>`;
  },
};
