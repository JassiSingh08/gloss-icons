const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const { turn } = require('../src/parts/ball');

const FISH = { s: 1.25, ox: 66, oy: 60, x: 64, y: 60 };
const body = turn('M64 40 C72 42 77 50 77 60 C77 67 74 71 70 74 L76 84 Q70 85 66 81 Q62 85 56 84 L62 74 C58 71 55 67 55 60 C55 50 58 42 64 40 Z', FISH);
const rod = 'M16 84 C30 60 52 28 82 11';

module.exports = {
  id: 'fishing-pole',
  name: 'Fishing Pole',
  emoji: '🎣',
  group: 'Activities',
  subgroup: 'sport',
  tags: ['fishing', 'rod', 'catch', 'lake', 'hobby'],
  tone: 'teal',
  body,
  shine: [56, 50, -75],
  shineSize: [6, 2.2],
  draw(c) {
    const fish = c.radial('a', 'teal', 0.3, 0.2);
    const ink = '#003A33';
    return `${glyph.tube(c, rod, { width: 3.6, palette: 'brown', name: 'rod' })}
      ${glyph.tube(c, 'M16 84 L25 69', { width: 6.2, palette: 'black', name: 'grip' })}
      <path d="M82 11 L82 22 Q82 30 72 32 Q66 34 64 35" fill="none" stroke="#F7F5FF" stroke-opacity=".85" stroke-width="1"/>
      <circle cx="30" cy="68" r="6.5" fill="${c.radial('reel', 'silver', 0.3, 0.25)}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1"/>
      <circle cx="30" cy="68" r="2.2" fill="#3A3E52"/>
      <path d="M30 68 L37 72" stroke="#3A3E52" stroke-width="1.8" stroke-linecap="round"/>
      <path d="${body}" fill="${fish}"/>
      <g transform="translate(64 60) scale(1.25) translate(-66 -60)">
      <path d="M58 62 Q66 58 74 62" fill="none" stroke="${ink}" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M58 50 Q66 54 74 50" fill="none" stroke="${ink}" stroke-opacity=".4" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="62" cy="46" r="2.2" fill="${ink}"/>
      <circle cx="61.4" cy="45.4" r=".7" fill="#fff"/>
      <path d="M75 59 L82 55 L82 64 Z" fill="${c.radial('fin', 'teal', 0.3, 0.2)}" opacity=".9"/>
      </g>`;
  },
};
