// Seven long tines rising from one bar, the handle below; drawn as one outline.
const TINES = 7, X0 = 20, X1 = 76, TW = 4.2, TOP = 12, BAR = 46;
const gap = (X1 - X0 - TW * TINES) / (TINES - 1);
let d = `M${X0} ${BAR + 6}`;
for (let i = 0; i < TINES; i++) {
  const l = X0 + i * (TW + gap);
  const r = l + TW;
  d += ` L${l.toFixed(2)} ${TOP + TW / 2} A${TW / 2} ${TW / 2} 0 0 1 ${r.toFixed(2)} ${TOP + TW / 2}`;
  if (i < TINES - 1) d += ` L${r.toFixed(2)} ${BAR} Q${(r + gap / 2).toFixed(2)} ${BAR - 2} ${(r + gap).toFixed(2)} ${BAR}`;
}
d += ` L${X1} ${BAR + 6} Q${X1} ${BAR + 11} ${X1 - 5} ${BAR + 11} L55 ${BAR + 11} L55 77 Q55 84 48 84 Q41 84 41 77 L41 ${BAR + 11} L${X0 + 5} ${BAR + 11} Q${X0} ${BAR + 11} ${X0} ${BAR + 6} Z`;
const body = d;

module.exports = {
  id: 'hair-pick',
  name: 'Hair Pick',
  emoji: '🪮',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['comb', 'hair pick', 'afro', 'hair', 'style'],
  tone: 'purple',
  body,
  shine: [22, 20, -85],
  shineSize: [4, 1.2],
  draw(c) {
    const plastic = c.radial('a', 'purple', 0.3, 0.2);
    const p = c.ramp('purple');
    return `<path d="${body}" fill="${plastic}"/>
      <path d="M${X0 + 1} ${BAR + 2} Q48 ${BAR + 4} ${X1 - 1} ${BAR + 2}" fill="none" stroke="${p[0]}" stroke-opacity=".5" stroke-width="1.2"/>
      <ellipse cx="48" cy="72" rx="3.2" ry="5" fill="${p[3]}" opacity=".7"/>
      <path d="M45 60 L51 60" stroke="${p[3]}" stroke-opacity=".5" stroke-width="1.4" stroke-linecap="round"/>`;
  },
};
