const g = require('../src/parts/garment');

const body = 'M35 14 L61 14 L81 21.5 Q86 23.5 86 28 L86 51 Q86 55 82 55 L70 55 L70 80 Q70 83 67 83 L29 83 Q26 83 26 80 L26 55 L14 55 Q10 55 10 51 L10 28 Q10 23.5 15 21.5 Z';

module.exports = {
  id: 'kimono',
  name: 'Kimono',
  emoji: '👘',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['kimono', 'japan', 'robe', 'traditional', 'yukata'],
  tone: 'red',
  body,
  shine: [17, 27, -25],
  shineSize: [5, 2],
  draw(c) {
    const silk = c.radial('a', 'red', 0.3, 0.2);
    const obi = c.linear('obi', 'gold', [0, 0, 0, 1], 0, 2);
    const collar = c.linear('collar', 'ivory', [0, 0, 1, 1], 0, 2);
    const cord = c.linear('cord', 'teal', [0, 0, 1, 0], 0, 2);
    const r = c.ramp('red');
    const flower = (x, y, s) => {
      const p = [0, 72, 144, 216, 288].map((a) => {
        const t = (a * Math.PI) / 180;
        return `<circle cx="${(x + Math.sin(t) * 2.2 * s).toFixed(2)}" cy="${(y - Math.cos(t) * 2.2 * s).toFixed(2)}" r="${1.6 * s}"/>`;
      }).join('');
      return `<g fill="#FFC2D4" opacity=".9">${p}</g><circle cx="${x}" cy="${y}" r="${0.9 * s}" fill="#FFC21A"/>`;
    };
    return `<path d="${body}" fill="${silk}"/>
      ${g.fold('M26 55 L26 30 M70 55 L70 30', r[3], 0.55, 1.4)}
      <path d="M36 14 L60 14 L48 34 Z" fill="${r[3]}" opacity=".75"/>
      <path d="M54 14 L60 14 L51 31.5 L46.5 28 Z" fill="${collar}" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1"/>
      <path d="M36 14 L42 14 L56 42 L50 42 Z" fill="${collar}" stroke="${r[3]}" stroke-opacity=".4" stroke-width="1"/>
      <path d="M26 42 L70 42 L70 55 L26 55 Z" fill="${obi}"/>
      <path d="M26 42 L70 42 M26 55 L70 55" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M26 48.5 L70 48.5" stroke="${cord}" stroke-width="2.2"/>
      ${g.fold('M48 55 L46 82.5', r[3], 0.55, 1.4)}
      ${flower(18, 40, 1)}${flower(77, 33, 0.9)}${flower(36, 70, 1.1)}${flower(60, 74, 0.8)}`;
  },
};
