const d = require('../src/parts/device');

// Drawn upright and tipped so the scroll points up-left; the bow crosses behind it the other way.
const ANGLE = -40;
const AT = [54, 55];
const S = 1.04;
const shell = 'M0 -21 C9 -21 13 -15 12.5 -8 C12.3 -4 9 -3 8 0 C7.4 2 8 4 9 5 C14 7 15.5 13 15.5 18 C15.5 28 9 33 0 33 C-9 33 -15.5 28 -15.5 18 C-15.5 13 -14 7 -9 5 C-8 4 -7.4 2 -8 0 C-9 -3 -12.3 -4 -12.5 -8 C-13 -15 -9 -21 0 -21 Z';
const body = d.turn(shell, ANGLE, AT, S);

module.exports = {
  id: 'violin',
  name: 'Violin',
  emoji: '🎻',
  group: 'Objects',
  subgroup: 'musical-instrument',
  tags: ['violin', 'classical', 'strings', 'orchestra', 'music'],
  tone: 'brown',
  body,
  shine: [...d.pt(-8, -14, ANGLE, AT, S), ANGLE - 60],
  shineSize: [4.5, 2],
  draw(c) {
    const wood = c.radial('a', 'brown', 0.35, 0.25);
    const scroll = c.radial('scroll', 'brown', 0.35, 0.3);
    const board = '#1F1208';
    const stick = c.linear('bow', 'brown', [0, 0, 1, 1], 1, 3);
    return `<path d="M17 63 L83 25" stroke="#331805" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M17 63 L83 25" stroke="${stick}" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M20 67.5 L82 31.5" stroke="#FFF9EC" stroke-opacity=".85" stroke-width="1.2"/>
      <path d="M17 63 L21.5 69 L24 61 Z" fill="#331805"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <path d="M-3 -21 L-3 -45 L3 -45 L3 -21 Z" fill="#6E3A14"/>
        <path d="M-3.5 -48 L-7 -48 M-3.5 -44 L-7 -44 M3.5 -46 L7 -46 M3.5 -42 L7 -42" stroke="#331805" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="0" cy="-51" r="4.6" fill="${scroll}" stroke="#331805" stroke-opacity=".6" stroke-width="1"/>
        <path d="M0 -51 m-2.2 0 a2.2 2.2 0 1 1 2.2 2.2" fill="none" stroke="#331805" stroke-width="1"/>
      </g>
      <path d="${body}" fill="${wood}"/>
      <g transform="${d.tf(ANGLE, AT, S)}">
        <path d="M-6 3 C-8 6 -4 9 -6 13 C-8 16 -5 18 -6.5 20 M6 3 C8 6 4 9 6 13 C8 16 5 18 6.5 20" fill="none" stroke="#331805" stroke-width="1.4" stroke-linecap="round"/>
        <path d="M-2.6 6 L-3.2 -42 L3.2 -42 L2.6 6 Z" fill="${board}"/>
        <path d="M-4 22 L4 22 L3 31 L-3 31 Z" fill="${board}"/>
        <path d="M-6 16 L6 16" stroke="#FFE7B8" stroke-width="2" stroke-linecap="round"/>
        <path d="M-1.8 23 L-1.8 -44 M-0.6 23 L-0.6 -44 M0.6 23 L0.6 -44 M1.8 23 L1.8 -44" stroke="#D9DCE8" stroke-opacity=".8" stroke-width=".45"/>
      </g>`;
  },
};
