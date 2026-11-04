const m = require('../src/parts/metal');
const body = 'M45.5 25 L50.5 25 L51.5 74 L60 74 Q66 74 67 80 L67.5 84 L28.5 84 L29 80 Q30 74 36 74 L44.5 74 Z';
const pan = (x) => `M${x - 14} 60 L${x + 14} 60 C${x + 13} 67 ${x + 7} 71 ${x} 71 C${x - 7} 71 ${x - 13} 67 ${x - 14} 60 Z`;
module.exports = {
  id: 'balance-scale',
  name: 'Balance Scale',
  emoji: '⚖️',
  group: 'Objects',
  subgroup: 'tool',
  tags: ['scale', 'justice', 'balance', 'law', 'fair'],
  tone: 'gold',
  body,
  shine: [47, 34, -88],
  shineSize: [4.5, 1.2],
  draw(c) {
    const post = c.linear('a', 'gold', [0, 0, 1, 0], 0, 2);
    const beam = m.band(c, 'b', 'brass', [48, 21], [48, 28]);
    const bowl = c.radial('p', 'gold', 0.35, 0.2);
    const knob = c.radial('k', 'gold', 0.3, 0.25);
    const strings = (x) => `M${x} 26 L${x - 13} 60 M${x} 26 L${x + 13} 60`;
    return `<path d="${strings(20)} ${strings(76)}" stroke="#C98500" stroke-width="1.2"/>
      <path d="${body}" fill="${post}"/>
      <path d="M29 80 L67 80" stroke="#5E3A00" stroke-opacity=".3" stroke-width="1.2"/>
      ${m.part(m.round([[16, 22], [80, 22], [80, 28], [16, 28]], 3), beam, 'brass')}
      <circle cx="48" cy="17.5" r="5" fill="${knob}" stroke="#5E3A00" stroke-opacity=".5" stroke-width="1.2"/>
      <circle cx="20" cy="25" r="2" fill="#5E3A00"/><circle cx="76" cy="25" r="2" fill="#5E3A00"/>
      ${m.part(pan(20), bowl, 'gold')}${m.part(pan(76), bowl, 'gold')}
      <path d="M8 61.4 L32 61.4 M64 61.4 L88 61.4" stroke="#FFF3A6" stroke-width="1.2" stroke-linecap="round"/>`;
  },
};
