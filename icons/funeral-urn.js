const m = require('../src/parts/metal');
const body = 'M37 24 L59 24 L57.5 30 C71 35 76 50 71 63 C68 71 62 75 58 77 L62 84 L34 84 L38 77 C34 75 28 71 25 63 C20 50 25 35 38.5 30 Z';
module.exports = {
  id: 'funeral-urn',
  name: 'Funeral Urn',
  emoji: '⚱️',
  group: 'Objects',
  subgroup: 'other-object',
  tags: ['urn', 'memorial', 'ashes', 'remembrance', 'funeral'],
  tone: 'teal',
  body,
  shine: [33, 41, -55],
  draw(c) {
    const glaze = c.radial('a', 'teal', 0.32, 0.3);
    const gold = c.linear('g', 'gold', [0, 0, 1, 0], 0, 2);
    const lid = c.radial('l', 'teal', 0.3, 0.3);
    return `${m.tube(c, 'M37 31 C26 30 24 42 31 45 M59 31 C70 30 72 42 65 45', { width: 3.4, palette: 'gold', name: 'h' })}
      ${m.part('M36 24 C36 17 41 14 48 14 C55 14 60 17 60 24 Z', lid, 'teal')}
      <circle cx="48" cy="12" r="3.4" fill="${c.radial('k', 'gold', 0.3, 0.3)}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1"/>
      <path d="${body}" fill="${glaze}"/>
      <path d="M34 22.8 L62 22.8 L61 26 L35 26 Z" fill="${gold}"/>
      <path d="M24.4 52 L71.6 52 L71.2 57 L24.8 57 Z" fill="${gold}"/>
      <path d="M30 54.5 L33 52.8 L36 54.5 L39 52.8 L42 54.5 L45 52.8 L48 54.5 L51 52.8 L54 54.5 L57 52.8 L60 54.5 L63 52.8 L66 54.5" stroke="#5E3A00" stroke-opacity=".5" stroke-width=".9" fill="none"/>
      <path d="M35 80 L61 80" stroke="#FFC21A" stroke-width="1.6"/>`;
  },
};
