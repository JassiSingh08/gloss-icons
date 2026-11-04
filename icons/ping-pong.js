// The paddle is drawn upright about its face centre (0, 0) and turned so the handle points down left.
const A = (42 * Math.PI) / 180;
const CX = 52;
const CY = 38;
const R = 25;
const p = (x, y) => `${+(CX + x * Math.cos(A) - y * Math.sin(A)).toFixed(2)} ${+(CY + x * Math.sin(A) + y * Math.cos(A)).toFixed(2)}`;
const neck = Math.sqrt(R * R - 36);
const body = `M${p(-6, neck)} A${R} ${R} 0 1 1 ${p(6, neck)} L${p(6, 49)} Q${p(6, 53)} ${p(2, 53)} L${p(-2, 53)} Q${p(-6, 53)} ${p(-6, 49)} Z`;
const face = `M${p(-6, neck)} A${R} ${R} 0 1 1 ${p(6, neck)} Z`;

module.exports = {
  id: 'ping-pong',
  name: 'Ping Pong',
  emoji: '🏓',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['table tennis', 'ping pong', 'paddle', 'bat', 'sport'],
  tone: 'red',
  body,
  shine: [41, 22, -40],
  draw(c) {
    const wood = c.linear('wood', 'brown', [0, 0, 1, 0], 0, 2);
    return `<path d="${body}" fill="${wood}"/>
      <path d="${face}" fill="${c.radial('a', 'red', 0.3, 0.2)}"/>
      <path d="M${p(-6, 36)} L${p(6, 36)} M${p(-6, 41)} L${p(6, 41)}" stroke="#331805" stroke-opacity=".45" stroke-width="1.4"/>
      <circle cx="76" cy="72" r="7.5" fill="${c.radial('ball', 'white', 0.3, 0.25)}" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1"/>
      <ellipse cx="73.4" cy="69.2" rx="2.2" ry="1.2" fill="#fff" transform="rotate(-40 73.4 69.2)"/>`;
  },
};
