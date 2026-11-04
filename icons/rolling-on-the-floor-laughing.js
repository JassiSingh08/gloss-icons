const f = require('../src/parts/face');

// The laughing face tipped onto its side, tears flying off and roll lines behind it.
module.exports = {
  ...f.spec(),
  id: 'rolling-on-the-floor-laughing',
  name: 'Rolling On The Floor Laughing',
  emoji: '🤣',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['rofl', 'laugh', 'lol', 'hilarious', 'rolling'],
  draw(c) {
    const tear = c.radial('tear', 'sky', 0.35, 0.3);
    const arc = (r, a1, a2, o) => {
      const p = (a) => `${(f.CX + r * Math.cos((a * Math.PI) / 180)).toFixed(2)} ${(f.CY + r * Math.sin((a * Math.PI) / 180)).toFixed(2)}`;
      return `<path d="M${p(a1)} A${r} ${r} 0 0 1 ${p(a2)}" stroke="#FFC21A" stroke-opacity="${o}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;
    };
    return `${arc(35, 150, 205, 0.9)}${arc(40, 160, 195, 0.55)}${f.head(c)}
      <g transform="rotate(-38 ${f.CX} ${f.CY})">
        ${f.eyes.squint({ y: 43 })}
        ${f.mouth.grin(c, { y: 54, w: 19, depth: 21 })}
        <path d="M37 50 Q29 54 25 61" stroke="${tear}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
        <path d="M59 50 Q67 54 71 61" stroke="${tear}" stroke-width="3.6" fill="none" stroke-linecap="round"/>
      </g>
      ${f.extras.drop(c, 24, 80, { scale: 0.95, rot: -100 })}
      ${f.extras.drop(c, 79, 37, { scale: 1.1, rot: 20 })}`;
  },
};
