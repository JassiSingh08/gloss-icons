const body = 'M24 13 Q24 10 27 10 L69 10 Q72 10 72 13 L72 84 L24 84 Z';
module.exports = {
  id: 'door',
  name: 'Door',
  emoji: '🚪',
  group: 'Objects',
  subgroup: 'household',
  tags: ['door', 'exit', 'enter', 'home', 'leave'],
  tone: 'brown',
  body,
  shine: [30, 17, -30],
  shineSize: [5, 2],
  draw(c) {
    const wood = c.linear('a', 'brown', [0, 0, 1, 1], 0, 2);
    const panel = c.linear('p', 'brown', [0, 0, 1, 1], 1, 3);
    const knob = c.radial('k', 'gold', 0.3, 0.25);
    const inset = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${panel}" opacity=".55"/><path d="M${x + w} ${y} L${x + w} ${y + h} L${x} ${y + h}" stroke="#FFE2C4" stroke-opacity=".45" stroke-width="1.2" fill="none"/><path d="M${x} ${y + h} L${x} ${y} L${x + w} ${y}" stroke="#331805" stroke-opacity=".5" stroke-width="1.2" fill="none"/>`;
    return `<path d="${body}" fill="${wood}"/>
      ${inset(30, 16, 15, 26)}${inset(51, 16, 15, 26)}${inset(30, 50, 15, 28)}${inset(51, 50, 15, 28)}
      <circle cx="65" cy="47" r="3.6" fill="${knob}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>
      <path d="M26 84 L26 12" stroke="#FFE2C4" stroke-opacity=".35" stroke-width="1.2"/>`;
  },
};
