// A thick golden cake with a fluted rim and a pressed flower on top, seen from a little above.
const d = require('../src/parts/dish');
const CX = 48;
const CY = 45;
const RX = 34;
const RY = 22;
const T = 13;
const rim = (dy, s = 1) => Array.from({ length: 96 }, (_, i) => {
  const a = (i / 96) * Math.PI * 2;
  const b = 1 + 0.045 * Math.abs(Math.cos(a * 7));
  return [CX + Math.cos(a) * RX * b * s, CY + dy + Math.sin(a) * RY * b * s];
});
const body = d.poly([...rim(T).filter((p, i) => i <= 48), ...rim(0).filter((p, i) => i > 48)]);
module.exports = {
  id: 'moon-cake',
  name: 'Moon Cake',
  emoji: '🥮',
  group: 'Food & Drink',
  subgroup: 'food-asian',
  tags: ['mooncake', 'mid-autumn', 'festival', 'chinese', 'pastry'],
  tone: 'brown',
  body,
  shine: [24, 37, -35],
  draw(c) {
    c.def(`<radialGradient id="${c.id('top')}" cx="0.32" cy="0.22" r="0.95"><stop offset="0" stop-color="#FFE0A0"/><stop offset="0.35" stop-color="#E39A3E"/><stop offset="0.75" stop-color="#9A5214"/><stop offset="1" stop-color="#4A2206"/></radialGradient>`);
    const side = c.linear('side', 'brown', [0, 0, 1, 0], 0, 2);
    const petal = (a) => `<ellipse cx="${CX}" cy="${CY - 8}" rx="4.2" ry="7.5" transform="translate(0 0) rotate(${a} ${CX} ${CY}) "/>`;
    return `<path d="${body}" fill="${side}"/>
      <path d="${d.poly(rim(0))}" fill="url(#${c.id('top')})"/>
      <path d="${d.ellipse(CX, CY, RX - 7, RY - 5)}" fill="none" stroke="#7A3A08" stroke-opacity=".55" stroke-width="1.6"/>
      <path d="${d.ellipse(CX, CY + 0.8, RX - 7, RY - 5)}" fill="none" stroke="#FFE0A0" stroke-opacity=".55" stroke-width="1"/>
      <g transform="translate(${CX} ${CY}) scale(1 0.68) translate(${-CX} ${-CY})">
        <g fill="none" stroke="#7A3A08" stroke-opacity=".6" stroke-width="1.8">${[0, 60, 120, 180, 240, 300].map(petal).join('')}</g>
        <circle cx="${CX}" cy="${CY}" r="3.4" fill="#7A3A08" opacity=".55"/>
      </g>`;
  },
};
