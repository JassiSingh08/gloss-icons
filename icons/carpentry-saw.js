const m = require('../src/parts/metal');
const F = m.frame({ at: [44, 50], deg: -24, s: 1.05 });
// Blade with its teeth along the lower edge, from the handle out to a squared tip.
const teeth = [];
for (let x = 20; x > -38; x -= 4.4) teeth.push(`L${x.toFixed(1)} ${(13 - (20 - x) * 0.2).toFixed(2)} L${(x - 2.2).toFixed(1)} ${(16.2 - (20 - x + 2.2) * 0.2).toFixed(2)}`);
const blade = `M-40 -6 L22 -16 L22 13 ${teeth.join(' ')} L-40 4.4 Z`;
const grip = 'M18 -19 Q18 -24 24 -24 L36 -24 C46 -24 48 -14 46 -4 L42 15 Q41 20 35 20 L22 20 Q17 20 17 15 Z M27 -15 L27 3 Q27 6 30 6 L34 6 Q37 6 38 3 L39.5 -9 Q40 -15 35 -15 L30 -15 Q27 -15 27 -15 Z';
module.exports = {
  id: 'carpentry-saw',
  name: 'Carpentry Saw',
  emoji: '🪚',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['saw', 'cut', 'wood', 'carpentry', 'diy'],
  tone: 'silver',
  body: F.d(blade),
  shine: [20, 50, -24],
  shineSize: [6, 1.8],
  draw(c) {
    const steel = m.band(c, 'a', 'steel', F.p([0, -14]), F.p([0, 14]));
    const wood = c.radial('w', 'brown', 0.3, 0.25);
    const rivet = (x, y) => { const p = F.p([x, y]); return `<circle cx="${p[0].toFixed(2)}" cy="${p[1].toFixed(2)}" r="1.7" fill="#D9DCE8" stroke="#3A3E52" stroke-opacity=".6" stroke-width=".8"/>`; };
    return `<path d="${F.d(blade)}" fill="${steel}"/>
      <path d="${F.d('M-36 -3.4 L18 -12')}" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round"/>
      ${m.part(F.d(grip), wood, 'brown', 'fill-rule="evenodd"')}
      ${rivet(21, -16)}${rivet(21, 12)}
      <path d="${F.d('M21 -19 Q21 -21 24 -21 L35 -21')}" stroke="#FFE2C4" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  },
};
