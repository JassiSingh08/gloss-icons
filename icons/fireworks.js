const n = (v) => +v.toFixed(2);
const CX = 48;
const CY = 44;

function burst(cx, cy, R, r, k, rot = 0) {
  const pts = [];
  for (let i = 0; i < k * 2; i++) {
    const a = (Math.PI / k) * i + rot - Math.PI / 2;
    const d = i % 2 ? r : R;
    pts.push(`${n(cx + d * Math.cos(a))} ${n(cy + d * Math.sin(a))}`);
  }
  return `M${pts.join(' L')} Z`;
}
const body = burst(CX, CY, 30, 9, 12);

module.exports = {
  id: 'fireworks',
  name: 'Fireworks',
  emoji: '🎆',
  group: 'Activities',
  subgroup: 'event',
  tags: ['fireworks', 'celebrate', 'new year', 'festival', 'night'],
  tone: 'magenta',
  body,
  shine: [38, 34, -45],
  shineSize: [4.5, 2],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".2" stop-color="#FFF3A6"/><stop offset=".45" stop-color="#FF9BEA"/><stop offset=".8" stop-color="#E21FC4"/><stop offset="1" stop-color="#8E0078"/></radialGradient>`);
    const dots = (cx, cy, R, k, r, fill, off = 0) => Array.from({ length: k }, (_, i) => {
      const a = ((Math.PI * 2) / k) * (i + off) - Math.PI / 2;
      return `<circle cx="${n(cx + R * Math.cos(a))}" cy="${n(cy + R * Math.sin(a))}" r="${r}" fill="${fill}"/>`;
    }).join('');
    return `${dots(CX, CY, 36, 12, 2.2, '#FFD82E', 0.5)}
      <path d="${burst(70, 70, 13, 4, 8, 0.2)}" fill="${c.radial('b', 'sky', 0.5, 0.5)}" stroke="#0A3A6B" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>
      ${dots(70, 70, 17, 8, 1.6, '#9BF5E6', 0.5)}
      <path d="${burst(22, 74, 9, 3, 7, 0.4)}" fill="${c.radial('g', 'lime', 0.5, 0.5)}" stroke="#203D00" stroke-opacity=".5" stroke-width="1" stroke-linejoin="round"/>
      <path d="${body}" fill="url(#${c.id('a')})" stroke-linejoin="round"/>
      <circle cx="${CX}" cy="${CY}" r="4" fill="#fff"/>`;
  },
};
