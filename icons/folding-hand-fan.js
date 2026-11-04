// Twelve paper pleats on an arc around the rivet, alternately lit and in shade so the folds read.
const CX = 48, CY = 79, RO = 58, RI = 22;
const A0 = -52, A1 = 52, N = 12;
const pt = (r, a) => {
  const t = (a * Math.PI) / 180;
  return [CX + r * Math.sin(t), CY - r * Math.cos(t)];
};
const f = (p) => p.map((v) => v.toFixed(2)).join(' ');
const step = (A1 - A0) / N;
let outer = '';
for (let i = 0; i < N; i++) {
  const a = A0 + i * step;
  const ctl = pt(RO + 5, a + step / 2);
  const end = pt(RO, a + step);
  outer += ` Q${f(ctl)} ${f(end)}`;
}
const body = `M${f(pt(RI, A0))} L${f(pt(RO, A0))}${outer} L${f(pt(RI, A1))} A${RI} ${RI} 0 0 0 ${f(pt(RI, A0))} Z`;

module.exports = {
  id: 'folding-hand-fan',
  name: 'Folding Hand Fan',
  emoji: '🪭',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['fan', 'hot', 'summer', 'elegant', 'flirt'],
  tone: 'pink',
  body,
  shine: [27, 37, -45],
  shineSize: [5, 1.8],
  draw(c) {
    const lit = c.radial('a', 'pink', 0.3, 0.2);
    c.def(`<radialGradient id="${c.id('shade')}" gradientUnits="userSpaceOnUse" cx="34" cy="30" r="64"><stop offset="0" stop-color="#F0124F"/><stop offset="0.6" stop-color="#9E0030"/><stop offset="1" stop-color="#4A0016"/></radialGradient>`);
    const stick = c.linear('stick', 'brown', [0, 0, 1, 1], 0, 2);
    const gold = c.linear('gold', 'gold', [0, 0, 1, 1], 0, 2);
    let pleats = '';
    for (let i = 0; i < N; i++) {
      const a = A0 + i * step;
      const ctl = pt(RO + 5, a + step / 2);
      pleats += `<path d="M${f(pt(RI, a))} L${f(pt(RO, a))} Q${f(ctl)} ${f(pt(RO, a + step))} L${f(pt(RI, a + step))} Z" fill="${i % 2 ? `url(#${c.id('shade')})` : lit}" opacity="${i % 2 ? 0.55 : 1}"/>`;
    }
    let sticks = '';
    for (let i = 0; i <= N; i++) {
      const a = A0 + i * step;
      const w = i === 0 || i === N ? 3.2 : 1.8;
      sticks += `<path d="M${CX} ${CY} L${f(pt(RI + 2, a))}" stroke="#331805" stroke-opacity=".7" stroke-width="${w + 1.2}" stroke-linecap="round"/><path d="M${CX} ${CY} L${f(pt(RI + 2, a))}" stroke="${stick}" stroke-width="${w}" stroke-linecap="round"/>`;
    }
    return `${sticks}
      <path d="${body}" fill="${lit}"/>
      ${pleats}
      <path d="M${f(pt(RO - 7, A0))} A${RO - 7} ${RO - 7} 0 0 1 ${f(pt(RO - 7, A1))}" fill="none" stroke="${gold}" stroke-width="1.6" opacity=".9"/>
      <path d="M${f(pt(RI + 3, A0))} A${RI + 3} ${RI + 3} 0 0 1 ${f(pt(RI + 3, A1))}" fill="none" stroke="${gold}" stroke-width="1.4" opacity=".9"/>
      <circle cx="${CX}" cy="${CY}" r="3.4" fill="${gold}" stroke="#5E3A00" stroke-opacity=".6" stroke-width="1"/>`;
  },
};
