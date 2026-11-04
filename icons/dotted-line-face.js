const f = require('../src/parts/face');

// The head is only a ring of dots around a washed-out fill: fading out of view.
const N = 22;
const dots = Array.from({ length: N }, (_, i) => {
  const t = (i / N) * Math.PI * 2 - Math.PI / 2;
  const x = +(f.CX + 30 * Math.cos(t)).toFixed(2);
  const y = +(f.CY + 30 * Math.sin(t)).toFixed(2);
  return `M${x + 2.8} ${y} A2.8 2.8 0 1 1 ${x - 2.8} ${y} A2.8 2.8 0 1 1 ${x + 2.8} ${y} Z`;
}).join(' ');
module.exports = {
  ...f.spec(),
  id: 'dotted-line-face',
  name: 'Dotted Line Face',
  emoji: '🫥',
  group: 'Smileys & Emotion',
  subgroup: 'face-neutral-skeptical',
  tags: ['invisible', 'fading', 'hidden', 'ignored', 'depressed'],
  body: dots,
  shine: null,
  draw(c) {
    const ink = f.INK;
    c.def(`<radialGradient id="${c.id('fade')}" cx="0.32" cy="0.25" r="0.95"><stop offset="0" stop-color="#FFFDF0"/><stop offset="0.6" stop-color="#FFF4BF"/><stop offset="1" stop-color="#EBD688"/></radialGradient>`);
    return `<circle cx="${f.CX}" cy="${f.CY}" r="28.5" fill="url(#${c.id('fade')})" opacity=".72"/>
      <path d="${dots}" fill="${c.radial('a', 'yellow', 0.32, 0.25)}"/>
      <g opacity=".45">${f.eyes.oval({ ink })}${f.stroke('M40 66 L43 66 M47 66 L50 66 M54 66 L57 66', 3.4, ink)}</g>`;
  },
};
