const body = 'M48 14 A34 34 0 1 1 47.99 14 Z M48 32 A16 16 0 1 0 48.01 32 Z';
module.exports = {
  id: 'ring-buoy',
  name: 'Ring Buoy',
  emoji: '🛟',
  group: 'Travel & Places',
  subgroup: 'transport-water',
  tags: ['lifebuoy', 'rescue', 'safety', 'lifeguard', 'help'],
  tone: 'red',
  body,
  shine: [26, 31, -45],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="48" cy="48" r="34" gradientUnits="userSpaceOnUse"><stop offset=".47" stop-color="#3D0003"/><stop offset=".6" stop-color="#E3120B"/><stop offset=".74" stop-color="#FF7A62"/><stop offset=".9" stop-color="#E3120B"/><stop offset="1" stop-color="#8A0006"/></radialGradient>
      <radialGradient id="${c.id('w')}" cx="48" cy="48" r="34" gradientUnits="userSpaceOnUse"><stop offset=".47" stop-color="#8C83AD"/><stop offset=".6" stop-color="#F7F5FF"/><stop offset=".74" stop-color="#FFFFFF"/><stop offset=".9" stop-color="#E4E0F2"/><stop offset="1" stop-color="#A9A2C6"/></radialGradient>
      <linearGradient id="${c.id('sh')}" x1="0" y1="0" x2="1" y2="1"><stop offset=".3" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient>
      <clipPath id="${c.id('k')}"><path d="${body}" fill-rule="evenodd"/></clipPath>`);
    const wedge = (deg) => `<path d="M48 48 L${(48 + 60 * Math.cos(((deg - 22) * Math.PI) / 180)).toFixed(1)} ${(48 + 60 * Math.sin(((deg - 22) * Math.PI) / 180)).toFixed(1)} L${(48 + 60 * Math.cos(((deg + 22) * Math.PI) / 180)).toFixed(1)} ${(48 + 60 * Math.sin(((deg + 22) * Math.PI) / 180)).toFixed(1)} Z"/>`;
    const rope = (deg) => `<g transform="rotate(${deg} 48 48)"><rect x="73" y="44.5" width="12" height="7" rx="3" fill="#E0B472" stroke="#8A5A1E" stroke-opacity=".7" stroke-width="1"/><path d="M76 45 L75 51 M79.5 45 L78.5 51 M83 45 L82 51" stroke="#8A5A1E" stroke-opacity=".6" stroke-width="1"/></g>`;
    return `<path d="${body}" fill="url(#${c.id('a')})" fill-rule="evenodd"/>
      <g clip-path="url(#${c.id('k')})">
        <g fill="url(#${c.id('w')})">${wedge(-45)}${wedge(45)}${wedge(135)}${wedge(225)}</g>
        <rect x="0" y="0" width="96" height="96" fill="url(#${c.id('sh')})"/>
      </g>
      ${rope(0)}${rope(90)}${rope(180)}${rope(270)}`;
  },
};
