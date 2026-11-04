const body = 'M15 18 Q12 18 12 21 L12 77 Q12 80 15 80 L81 80 Q84 80 84 77 L84 21 Q84 18 81 18 Z';
module.exports = {
  id: 'framed-picture',
  name: 'Framed Picture',
  emoji: '🖼️',
  group: 'Activities',
  subgroup: 'arts & crafts',
  tags: ['art', 'painting', 'picture', 'frame', 'gallery', 'museum'],
  tone: 'gold',
  body,
  shine: [18, 26, -60],
  shineSize: [6, 2],
  draw(c) {
    c.def(`<clipPath id="${c.id('pic')}"><rect x="21" y="27" width="54" height="44"/></clipPath>`);
    return `<path d="${body}" fill="${c.linear('a', 'gold', [0, 0, 1, 1], 0, 2)}"/>
      <path d="M12 18 L21 27 L75 27 L84 18 Z" fill="#FFF3A6" opacity=".5"/>
      <path d="M12 80 L21 71 L75 71 L84 80 Z M84 18 L75 27 L75 71 L84 80 Z" fill="#5E3A00" opacity=".3"/>
      <g clip-path="url(#${c.id('pic')})">
        <rect x="21" y="27" width="54" height="44" fill="${c.linear('sky', 'sky', [0, 0, 0, 1], 0, 1)}"/>
        <circle cx="62" cy="38" r="5.5" fill="${c.radial('sun', 'gold', 0.4, 0.4)}"/>
        <path d="M21 62 L35 44 L46 56 L54 48 L75 66 L75 71 L21 71 Z" fill="${c.linear('hill', 'teal', [0, 0, 0, 1], 1, 2)}"/>
        <path d="M35 44 L39.5 49.5 L36 48.5 L33 51 L30.6 50 Z" fill="#fff" opacity=".85"/>
        <path d="M21 66 C34 60 52 64 75 60 L75 71 L21 71 Z" fill="${c.linear('field', 'green', [0, 0, 0, 1], 0, 2)}"/>
      </g>
      <rect x="21" y="27" width="54" height="44" fill="none" stroke="#5E3A00" stroke-opacity=".55" stroke-width="1.4"/>`;
  },
};
