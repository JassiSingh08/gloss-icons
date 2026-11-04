const ball = require('../src/parts/ball');
const star = require('../src/parts/star');

const RAMP = ['#FFF3A6', '#FFC21A', '#C98500', '#5E3A00'];
const m = ball.medal({
  ramp: RAMP,
  straps: ['blue', 'sky'],
  emblem: (cx, cy, r) => `<path d="${star.path(cx + 0.8, cy + 1.6, 10.5)}" fill="${r[3]}" opacity=".5"/>
    <path d="${star.path(cx, cy + 0.6, 10.5)}" fill="${r[0]}"/>
    <path d="${star.path(cx + 0.4, cy + 1, 8)}" fill="${r[1]}"/>`,
});

module.exports = {
  id: 'sports-medal',
  name: 'Sports Medal',
  emoji: '🏅',
  group: 'Activities',
  subgroup: 'award-medal',
  tags: ['medal', 'award', 'winner', 'race', 'achievement'],
  tone: 'gold',
  body: m.body,
  shine: m.shine,
  draw: (c) => m.draw(c),
};
