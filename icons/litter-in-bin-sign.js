const s = require('../src/parts/sign');
const P = s.SERIES.transport;
module.exports = {
  id: 'litter-in-bin-sign',
  name: 'Litter In Bin Sign',
  emoji: '🚮',
  group: 'Symbols',
  subgroup: 'transport-sign',
  tags: ['litter', 'bin', 'trash', 'rubbish', 'tidy'],
  tone: P,
  body: s.TILE,
  shine: [27, 25, -40],
  shineSize: [6, 2.8],
  draw(c) {
    const g = c.ramp(P)[2];
    const art = (k) => `<circle cx="33" cy="28" r="5.2" fill="${k}"/>
      <path d="M33 37 L31.5 54 L26 72 M31.5 54 L37.5 72 M33 39.5 L43 46 M33 39.5 L27 50" stroke="${k}" ${s.ST(5.4)}/>
      <rect x="44.5" y="37" width="5" height="5" rx="1" fill="${k}" transform="rotate(25 47 39.5)"/>
      <rect x="49" y="47" width="21" height="3.6" rx="1.6" fill="${k}"/>
      <path d="M51 52.5 L68 52.5 L66.2 72.5 Q66 74 64.5 74 L54.5 74 Q53 74 52.8 72.5 Z" fill="${k}"/>
      <path d="M56 56 L56.6 70.5 M62.9 56 L62.3 70.5" stroke="${g}" stroke-width="1.8" stroke-linecap="round" opacity=".5"/>`;
    return s.tile(c, P) + s.emboss(c, P, art);
  },
};
