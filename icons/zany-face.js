const f = require('../src/parts/face');

// One eye wide and staring, the other a pinpoint; the head tips and the tongue lolls out.
module.exports = {
  ...f.spec(),
  id: 'zany-face',
  name: 'Zany Face',
  emoji: '🤪',
  group: 'Smileys & Emotion',
  subgroup: 'face-tongue',
  tags: ['crazy', 'goofy', 'wild', 'zany', 'wacky'],
  draw(c) {
    const ink = f.INK;
    return f.head(c) + `<g transform="rotate(-12 ${f.CX} ${f.CY})">
      ${f.stroke('M31 34 Q37 29.5 43 32.5', 3.2, ink)}
      <ellipse cx="37" cy="44" rx="6.6" ry="7.8" fill="#fff" stroke="${ink}" stroke-opacity=".4" stroke-width="1"/>
      <circle cx="38.5" cy="46" r="3.4" fill="${ink}"/>${f.glint(37.3, 44.6, 1.05)}
      <ellipse cx="60" cy="45" rx="2.6" ry="3.3" fill="${ink}"/>${f.glint(59.2, 43.8, 0.75)}
      ${f.mouth.grin(c, { y: 58, w: 16, depth: 13, teeth: true, tongue: false })}
      ${f.extras.tongue(c, 53, 67.5, { rot: 18, scale: 1.2 })}
    </g>`;
  },
};
