const body = 'M24 20 Q24 13 48 13 Q72 13 72 20 L72 78 Q72 84 48 84 Q24 84 24 78 Z';
module.exports = {
  id: 'oil-drum',
  name: 'Oil Drum',
  emoji: '🛢️',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['barrel', 'oil', 'fuel', 'industry', 'petrol'],
  tone: 'blue',
  body,
  shine: [29, 26, -80],
  shineSize: [5, 2],
  draw(c) {
    c.def(`<linearGradient id="${c.id('a')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0C8CF0"/><stop offset=".22" stop-color="#8CD8FF"/><stop offset=".5" stop-color="#0C8CF0"/><stop offset=".85" stop-color="#0049A8"/><stop offset="1" stop-color="#001E4D"/></linearGradient>`);
    const lid = c.linear('lid', 'blue', [0, 0, 1, 1], 0, 2);
    const drop = c.radial('drop', 'black', 0.35, 0.3);
    const rib = (y) => `<path d="M24 ${y} Q24 ${y + 5} 48 ${y + 5} Q72 ${y + 5} 72 ${y}" stroke="#001E4D" stroke-opacity=".55" stroke-width="3" fill="none"/>
      <path d="M24 ${y - 1.6} Q24 ${y + 3.4} 48 ${y + 3.4} Q72 ${y + 3.4} 72 ${y - 1.6}" stroke="#C8EBFF" stroke-opacity=".7" stroke-width="1.4" fill="none"/>`;
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <ellipse cx="48" cy="20" rx="23" ry="6" fill="${lid}" stroke="#001E4D" stroke-opacity=".5" stroke-width="1.2"/>
      <ellipse cx="38" cy="19.5" rx="3.6" ry="1.6" fill="#001E4D" opacity=".7"/>
      <ellipse cx="58" cy="20.5" rx="2.4" ry="1.1" fill="#001E4D" opacity=".7"/>
      ${rib(38)}${rib(62)}
      <path d="M48 44 C52 49 55 52 55 55.5 C55 59.5 52 62 48 62 C44 62 41 59.5 41 55.5 C41 52 44 49 48 44 Z" fill="${drop}" stroke="#F7F5FF" stroke-width="1.6"/>`;
  },
};
