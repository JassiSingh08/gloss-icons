const h = require('../src/parts/heart');
const body = h.HEART;
module.exports = {
  id: 'mending-heart',
  name: 'Mending Heart',
  emoji: '❤️‍🩹',
  group: 'Smileys & Emotion',
  subgroup: 'heart',
  tags: ['healing', 'recovery', 'bandage', 'better', 'mending'],
  tone: 'pink',
  body,
  shine: h.SHINE,
  draw(c) {
    c.def(`<clipPath id="${c.id('in')}"><path d="${body}"/></clipPath>`);
    const strip = c.linear('strip', 'cream', [0, 0, 0, 1], 0, 2);
    const pad = c.linear('pad', 'sand', [0, 0, 0, 1], 0, 1);
    const holes = [29, 33.5, 62.5, 67].flatMap((x) => [47.5, 52.5].map((y) => `<circle cx="${x}" cy="${y}" r=".9" fill="#8A5A1E" opacity=".55"/>`)).join('');
    return `<path d="${body}" fill="${h.paint(c, 'a', 'pink')}"/>
      <path d="M48 28.5 L43.5 36 L49 42 M47 61 L52 67.5 L47.5 75" stroke="#4A0016" stroke-opacity=".75" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <g clip-path="url(#${c.id('in')})" transform="rotate(-36 48 50)">
        <rect x="24" y="43.5" width="48" height="13" rx="5" fill="#3D0003" opacity=".25" transform="translate(.8 2)"/>
        <rect x="24" y="43.5" width="48" height="13" rx="5" fill="${strip}" stroke="#8A5A1E" stroke-opacity=".55" stroke-width="1"/>
        <rect x="40" y="45" width="16" height="10" rx="2" fill="${pad}" stroke="#8A5A1E" stroke-opacity=".35" stroke-width=".8"/>
        ${holes}
      </g>`;
  },
};
