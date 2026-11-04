const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const RAMP = ['#FFF3A6', '#FFC21A', '#C98500', '#5E3A00'];
const m = ball.medal({
  ramp: RAMP,
  emblem(cx, cy, r) {
    const g = glyph.path('1', { x: cx, y: cy, size: 19, weight: 4.4 });
    const s = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
    return `<path d="${g.d}" stroke="${r[3]}" stroke-opacity=".55" stroke-width="${g.weight}" ${s} transform="translate(.8 1.1)"/>
      <path d="${g.d}" stroke="${r[0]}" stroke-width="${g.weight}" ${s}/>
      <path d="${g.d}" stroke="${r[1]}" stroke-width="${g.weight * 0.45}" ${s} transform="translate(.5 .6)"/>`;
  },
});

module.exports = {
  id: '1st-place-medal',
  name: '1st Place Medal',
  emoji: '🥇',
  group: 'Activities',
  subgroup: 'award-medal',
  tags: ['first', 'gold', 'winner', 'champion', 'podium'],
  tone: 'gold',
  body: m.body,
  shine: m.shine,
  draw: (c) => m.draw(c),
};
