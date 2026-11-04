const body = 'M48 16 A34 34 0 1 1 47.99 16 Z';
module.exports = {
  id: 'wheel',
  name: 'Wheel',
  emoji: '🛞',
  group: 'Travel & Places',
  subgroup: 'transport-ground',
  tags: ['tyre', 'tire', 'car', 'garage', 'spare'],
  tone: 'black',
  body,
  shine: [28, 30, -45],
  shineSize: [6, 2.6],
  draw(c) {
    const tyre = c.radial('a', 'black', 0.32, 0.25);
    const rim = c.radial('rim', 'silver', 0.32, 0.25);
    const dish = c.radial('dish', 'grey', 0.7, 0.7);
    const tread = Array.from({ length: 24 }, (_, i) => {
      const t = (i * Math.PI) / 12;
      const p = (r) => `${(48 + r * Math.cos(t)).toFixed(1)} ${(50 + r * Math.sin(t)).toFixed(1)}`;
      return `M${p(29)} L${p(34)}`;
    }).join(' ');
    const holes = Array.from({ length: 5 }, (_, i) => `<path d="M-3.5 -17 L3.5 -17 Q6 -16.5 5.5 -14 L2.5 -7.5 L-2.5 -7.5 L-5.5 -14 Q-6 -16.5 -3.5 -17 Z" fill="#141420" transform="translate(48 50) rotate(${i * 72})"/>`).join('');
    return `<path d="${body}" fill="${tyre}"/>
      <path d="${tread}" stroke="#05050A" stroke-width="2.2" stroke-opacity=".8"/>
      <circle cx="48" cy="50" r="21" fill="#141420"/>
      <circle cx="48" cy="50" r="20" fill="${rim}"/>
      <circle cx="48" cy="50" r="17.5" fill="${dish}" opacity=".55"/>
      ${holes}
      <circle cx="48" cy="50" r="6" fill="${rim}" stroke="#3A3E52" stroke-opacity=".7" stroke-width="1.2"/>
      ${Array.from({ length: 5 }, (_, i) => `<circle cx="48" cy="45.5" r="1.1" fill="#3A3E52" transform="rotate(${i * 72 + 36} 48 50)"/>`).join('')}`;
  },
};
