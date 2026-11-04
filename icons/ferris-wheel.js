const n = (v) => +v.toFixed(2);
const CX = 48, CY = 40, R = 27, r = 23;
const body = `M${CX} ${CY - R} A${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z M${CX} ${CY - r} A${r} ${r} 0 1 0 ${CX + 0.01} ${CY - r} Z`;
module.exports = {
  id: 'ferris-wheel',
  name: 'Ferris Wheel',
  emoji: '🎡',
  group: 'Travel & Places',
  subgroup: 'place-other',
  tags: ['fair', 'funfair', 'ride', 'amusement park', 'view'],
  tone: 'pink',
  body,
  shine: [31, 22, -45],
  shineSize: [6, 2],
  draw(c) {
    const rim = c.radial('a', 'pink', 0.3, 0.2);
    const steel = c.linear('steel', 'silver', [0, 0, 1, 0], 0, 2);
    const pals = ['gold', 'teal', 'sky', 'orange'];
    let spokes = '';
    let cars = '';
    for (let k = 0; k < 8; k++) {
      const a = (k * Math.PI) / 4 + Math.PI / 8;
      const x = CX + R * Math.cos(a), y = CY + R * Math.sin(a);
      spokes += `M${CX} ${CY} L${n(CX + r * Math.cos(a))} ${n(CY + r * Math.sin(a))} `;
      cars += `<path d="M${n(x)} ${n(y)} L${n(x)} ${n(y + 2.5)}" stroke="#3A3E52" stroke-width="1.2"/>
        <rect x="${n(x - 4.5)}" y="${n(y + 2.5)}" width="9" height="7.5" rx="2.5" fill="${c.linear(`car${k}`, pals[k % 4], [0, 0, 1, 1], 0, 2)}" stroke="#1E2A3D" stroke-opacity=".55" stroke-width="1"/>
        <rect x="${n(x - 3)}" y="${n(y + 4)}" width="6" height="2.6" rx=".8" fill="#E4F6FF" opacity=".85"/>`;
    }
    return `<path d="M48 40 L28 82 M48 40 L68 82" stroke="#3A3E52" stroke-width="5" stroke-linecap="round"/>
      <path d="M48 40 L28 82 M48 40 L68 82" stroke="${steel}" stroke-width="3" stroke-linecap="round"/>
      <path d="${spokes}" stroke="#8E93AD" stroke-width="1.3"/>
      <path d="M${CX} ${CY - 12} A12 12 0 1 1 ${CX - 0.01} ${CY - 12} Z" fill="none" stroke="#8E93AD" stroke-width="1"/>
      <path d="${body}" fill="${rim}" fill-rule="evenodd"/>
      <circle cx="${CX}" cy="${CY}" r="4" fill="${c.radial('hub', 'gold', 0.35, 0.3)}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
      ${cars}
      <rect x="22" y="80" width="52" height="4" rx="2" fill="${steel}" stroke="#3A3E52" stroke-opacity=".55" stroke-width="1"/>`;
  },
};
