const f = require('../src/parts/face');

module.exports = {
  ...f.spec(),
  id: 'face-with-monocle',
  name: 'Face With Monocle',
  emoji: '🧐',
  group: 'Smileys & Emotion',
  subgroup: 'face-glasses',
  tags: ['monocle', 'classy', 'inspect', 'posh', 'suspicious'],
  draw(c) {
    const gold = c.radial('gold', 'gold', 0.3, 0.2);
    const ink = f.INK;
    return f.head(c)
      + f.stroke('M31 40.5 L43 42.5', 3.4) + f.stroke('M52.5 33 Q59 26.5 66 31', 3.4)
      + f.stroke('M32 47 L42 47', 3.6)
      + `<ellipse cx="59" cy="44.5" rx="4" ry="5.4" fill="${ink}"/>${f.glint(57.7, 42.5, 1.1)}
      <circle cx="59" cy="44.5" r="10" fill="#fff" fill-opacity=".2"/>
      <path d="M68.5 48 Q75 60 72.5 72 Q71 79 66 83" stroke="${c.ramp('gold')[2]}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-dasharray="2.4 1.6"/>
      <circle cx="59" cy="44.5" r="10" fill="none" stroke="#5E3A00" stroke-width="5"/>
      <circle cx="59" cy="44.5" r="10" fill="none" stroke="${gold}" stroke-width="3.4"/>
      <path d="M51.5 39 Q54 35.5 58 34.8" stroke="#fff" stroke-opacity=".8" stroke-width="1.6" fill="none" stroke-linecap="round"/>`
      + f.stroke('M41 68 Q46 66 54 66.5', 3.4);
  },
};
