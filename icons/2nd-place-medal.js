const ball = require('../src/parts/ball');
const glyph = require('../src/parts/glyph');

const RAMP = ['#FFFFFF', '#D9DCE8', '#8E93AD', '#3A3E52'];
const m = ball.medal({
  ramp: RAMP,
  emblem(cx, cy, r) {
    const g = glyph.path('2', { x: cx, y: cy, size: 19, weight: 4.4 });
    const s = 'fill="none" stroke-linecap="round" stroke-linejoin="round"';
    return `<path d="${g.d}" stroke="${r[3]}" stroke-opacity=".55" stroke-width="${g.weight}" ${s} transform="translate(.8 1.1)"/>
      <path d="${g.d}" stroke="${r[0]}" stroke-width="${g.weight}" ${s}/>
      <path d="${g.d}" stroke="${r[1]}" stroke-width="${g.weight * 0.45}" ${s} transform="translate(.5 .6)"/>`;
  },
});

module.exports = {
  id: '2nd-place-medal',
  name: '2nd Place Medal',
  emoji: '🥈',
  group: 'Activities',
  subgroup: 'award-medal',
  tags: ['second', 'silver', 'runner up', 'podium', 'medal'],
  tone: 'silver',
  body: m.body,
  shine: m.shine,
  draw: (c) => m.draw(c),
};
