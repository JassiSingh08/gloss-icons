const f = require('../src/parts/face');

// The head slumps into a puddle: a round top, sides running down, a wide pool on the ground.
const body = 'M19 53 A29 29 0 0 1 77 53 C77.5 61 75 66.5 77.5 71 C84.5 72.5 88.5 76.5 86 80.5 C83 84 66 84.2 48 84.2 C30 84.2 13 84 10 80.5 C7.5 76.5 12 72.5 18.5 71.5 C21 67.5 18.5 60 19 53 Z';
module.exports = {
  ...f.spec(),
  id: 'melting-face',
  name: 'Melting Face',
  emoji: '🫠',
  group: 'Smileys & Emotion',
  subgroup: 'face-smiling',
  tags: ['melting', 'hot', 'embarrassed', 'dread', 'sinking'],
  body,
  shine: [32, 34, -45],
  draw(c) {
    const ink = f.INK;
    const [l, m, d, sh] = c.ramp('yellow');
    c.def(`<radialGradient id="${c.id('a')}" gradientUnits="userSpaceOnUse" cx="36" cy="32" r="68"><stop offset="0" stop-color="${l}"/><stop offset="0.35" stop-color="${m}"/><stop offset="0.8" stop-color="${d}"/><stop offset="1" stop-color="${sh}"/></radialGradient>`);
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <ellipse cx="37" cy="46.5" rx="3.6" ry="5" fill="${ink}" transform="rotate(-6 37 46.5)"/>${f.glint(35.6, 44.5)}
      <ellipse cx="59" cy="48" rx="3.6" ry="4.8" fill="${ink}" transform="rotate(8 59 48)"/>${f.glint(58, 46)}
      ${f.stroke('M35 60 Q46 68 62 59.5', 3.6, ink)}
      ${f.stroke('M60.5 58.2 L64 60', 3, ink)}`;
  },
};
