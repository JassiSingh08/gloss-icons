const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const RAMP = ['#FFD9B0', '#D98A4A', '#8F4A1C', '#3D1A05'];
const m = ball.medal({
  ramp: RAMP,
  emblem(cx, cy, r) {
    const g = glyph.path('3', { x: cx, y: cy, size: 19, weight: 4.4 });
    const s = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
    return `<path d="${g.d}" stroke="${r[3]}" stroke-opacity=".55" stroke-width="${g.weight}" ${s} transform="translate(.8 1.1)"/>
      <path d="${g.d}" stroke="${r[0]}" stroke-width="${g.weight}" ${s}/>
      <path d="${g.d}" stroke="${r[1]}" stroke-width="${g.weight * 0.45}" ${s} transform="translate(.5 .6)"/>`;
  },
});

module.exports = {
  id: '3rd-place-medal',
  name: '3rd Place Medal',
  emoji: '🥉',
  group: 'Activities',
  subgroup: 'award-medal',
  tags: ['third', 'bronze', 'podium', 'medal', 'award'],
  tone: 'brown',
  body: m.body,
  shine: m.shine,
  draw: (c) => m.draw(c),
};
