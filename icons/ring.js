// Band seen at an angle: an outer ellipse with the inner one cut out (drawn the other way round).
const band = 'M48 46 C63.5 46 75 54.5 75 64.5 C75 74.5 63.5 83 48 83 C32.5 83 21 74.5 21 64.5 C21 54.5 32.5 46 48 46 Z M48 53 C36.5 53 28.5 58.5 28.5 64.5 C28.5 70.5 36.5 76 48 76 C59.5 76 67.5 70.5 67.5 64.5 C67.5 58.5 59.5 53 48 53 Z';
module.exports = {
  id: 'ring',
  name: 'Ring',
  emoji: '💍',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['ring', 'engagement', 'proposal', 'marry', 'diamond'],
  tone: 'gold',
  body: band,
  shine: [29, 57, -42],
  shineSize: [5.5, 2],
  draw(c) {
    const gold = c.radial('a', 'gold', 0.3, 0.2);
    const prong = c.linear('prong', 'gold', [0, 0, 1, 1], 1, 3);
    const f = (name, from, to) => {
      c.def(`<linearGradient id="${c.id(name)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>`);
      return `url(#${c.id(name)})`;
    };
    const ice = '#0A3A6B';
    return `<path d="${band}" fill="${gold}" fill-rule="evenodd"/>
      <path d="M48 53 C36.5 53 28.5 58.5 28.5 64.5" stroke="#5E3A00" stroke-opacity=".45" stroke-width="1.6" fill="none"/>
      <path d="M38 43 L41.5 51 L54.5 51 L58 43 Z" fill="${prong}"/>
      <path d="M31 26 L65 26 L48 47 Z" fill="${f('pav', '#E8F7FF', '#3F97DB')}"/>
      <path d="M31 26 L48 26 L48 47 Z" fill="${f('pavL', '#FFFFFF', '#9ED8FF')}"/>
      <path d="M39.5 26 L48 47 L56.5 26" stroke="${ice}" stroke-opacity=".3" stroke-width=".9" fill="none"/>
      <path d="M38 14 L58 14 L65 26 L31 26 Z" fill="${f('crown', '#FFFFFF', '#7CC6F5')}"/>
      <path d="M38 14 L48 26 L58 14 M31 26 L43 14 M65 26 L53 14" stroke="${ice}" stroke-opacity=".3" stroke-width=".9" fill="none"/>
      <path d="M38 14 L58 14 L65 26 L48 47 L31 26 Z" fill="none" stroke="${ice}" stroke-opacity=".6" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M40.5 16.5 L46 16.5 L42.5 23.5 L35.5 23.5 Z" fill="#fff" opacity=".9"/>
      <path d="M35.5 41.5 L39.5 46.5 M60.5 41.5 L56.5 46.5" stroke="#C98500" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M73 15 L74.2 19.8 L79 21 L74.2 22.2 L73 27 L71.8 22.2 L67 21 L71.8 19.8 Z" fill="#fff"/>`;
  },
};
