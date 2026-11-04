const CX = 48;
const CY = 47;
const body = `M${CX} ${CY - 21.5} A21.5 21.5 0 1 1 ${CX - 0.01} ${CY - 21.5} Z`;

function rays() {
  const f = (v) => v.toFixed(2);
  let d = '';
  for (let k = 0; k < 12; k++) {
    const t = (k * Math.PI) / 6;
    const len = k % 2 ? 31 : 35.5;
    const half = k % 2 ? 0.2 : 0.24;
    const pt = (r, dt) => `${f(CX + r * Math.sin(t + dt))} ${f(CY - r * Math.cos(t + dt))}`;
    d += `M${pt(22, -half)} L${pt(len, -0.035)} Q${pt(len + 2.2, 0)} ${pt(len, 0.035)} L${pt(22, half)} Z `;
  }
  return d;
}

module.exports = {
  id: 'sun',
  name: 'Sun',
  emoji: '☀️',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['summer', 'sunny', 'hot', 'weather', 'day', 'bright'],
  tone: 'gold',
  body,
  shine: [38, 35, -40],
  draw(c) {
    const ray = c.radial('ray', 'orange', 0.5, 0.5);
    const disc = c.radial('a', 'gold', 0.35, 0.25);
    return `<path d="${rays()}" fill="${ray}" stroke="${c.ramp('orange')[3]}" stroke-opacity=".45" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="${body}" fill="${disc}"/>`;
  },
};
