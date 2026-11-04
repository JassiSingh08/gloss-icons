const body = 'M48 18 A32 32 0 1 1 47.99 18 Z';
module.exports = {
  id: 'badge-18',
  name: '18+',
  tags: ['18+', 'adults only', 'mature', 'nsfw', 'age'],
  tone: 'red',
  body,
  shine: [32, 30, -38],
  draw(c) {
    const face = c.radial('a', 'red', 0.32, 0.25);
    const inset = c.radial('in', 'red', 0.5, 0.55);
    const W = '#FFF6F2';
    const glyph = 'stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"';
    return `<path d="${body}" fill="${face}"/>
      <circle cx="48" cy="50" r="25.5" fill="${inset}"/>
      <circle cx="48" cy="50" r="25.5" fill="none" stroke="#3D0003" stroke-opacity=".45" stroke-width="1.6"/>
      <circle cx="48" cy="50" r="27" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1"/>
      <g transform="translate(0 1)">
        <path d="M24 44 L30 40.5 L30 60" stroke="#3D0003" stroke-opacity=".4" ${glyph} transform="translate(.8 1.2)"/>
        <path d="M24 44 L30 40.5 L30 60" stroke="${W}" ${glyph}/>
        <g transform="translate(.8 1.2)" stroke="#3D0003" stroke-opacity=".4" ${glyph}><ellipse cx="45.5" cy="44.5" rx="5" ry="4.5"/><ellipse cx="45.5" cy="55.2" rx="6.2" ry="5.5"/></g>
        <ellipse cx="45.5" cy="44.5" rx="5" ry="4.5" stroke="${W}" ${glyph}/>
        <ellipse cx="45.5" cy="55.2" rx="6.2" ry="5.5" stroke="${W}" ${glyph}/>
        <path d="M65 42.5 L65 56.5 M58 49.5 L72 49.5" stroke="#3D0003" stroke-opacity=".4" ${glyph} transform="translate(.8 1.2)"/>
        <path d="M65 42.5 L65 56.5 M58 49.5 L72 49.5" stroke="${W}" ${glyph}/>
      </g>`;
  },
};
