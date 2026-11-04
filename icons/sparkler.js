const star = require('../src/parts/star');
const n = (v) => +v.toFixed(2);
const CX = 58;
const CY = 34;
function spray(R, r, k, jitter) {
  const pts = [];
  for (let i = 0; i < k * 2; i++) {
    const a = (Math.PI / k) * i - Math.PI / 2;
    const d = i % 2 ? r : R * (1 - jitter * ((i * 7) % 5) / 5);
    pts.push(`${n(CX + d * Math.cos(a))} ${n(CY + d * Math.sin(a))}`);
  }
  return `M${pts.join(' L')} Z`;
}
const body = spray(27, 6, 14, 0.35);

module.exports = {
  id: 'sparkler',
  name: 'Sparkler',
  emoji: '🎇',
  group: 'Activities',
  subgroup: 'event',
  tags: ['sparkler', 'sparks', 'celebrate', 'bonfire night', 'diwali'],
  tone: 'gold',
  body,
  shine: [52, 27, -45],
  shineSize: [4, 1.8],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".3" stop-color="#FFF3A6"/><stop offset=".7" stop-color="#FFC21A"/><stop offset="1" stop-color="#E02A00"/></radialGradient>`);
    return `<path d="M${CX} ${CY} L16 84" stroke="#3A3E52" stroke-width="4.6" stroke-linecap="round"/>
      <path d="M${CX} ${CY} L16 84" stroke="${c.linear('wire', 'silver', [0, 0, 1, 1], 0, 2)}" stroke-width="3" stroke-linecap="round"/>
      <path d="M${CX - 1} ${CY + 1.2} L38 57.5" stroke="#3A3E52" stroke-width="5.6" stroke-linecap="round" opacity=".85"/>
      <path d="${body}" fill="url(#${c.id('a')})" stroke-linejoin="round"/>
      ${star.sparkle(CX, CY, 7, '#fff')}
      ${star.sparkle(26, 22, 5, '#FFF3A6')}${star.sparkle(84, 56, 4.5, '#FFF3A6')}${star.sparkle(82, 14, 3.4, '#fff')}${star.sparkle(30, 46, 3, '#fff', 0.85)}`;
  },
};
