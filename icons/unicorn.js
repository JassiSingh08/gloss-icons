const a = require('../src/parts/animal');
const horse = require('./horse-face');

const body = a.mirror(horse.HALF);
module.exports = {
  id: 'unicorn',
  name: 'Unicorn',
  emoji: '🦄',
  group: 'Animals & Nature',
  subgroup: 'animal-mammal',
  tags: ['unicorn', 'magic', 'fantasy', 'rainbow', 'myth'],
  tone: 'white',
  body,
  shine: [36, 33, -60],
  shineSize: [5.5, 2.6],
  draw(c) {
    const ink = '#1E1238';
    const horn = 'M44 27 L48 4 L52 27 Q48 29 44 27 Z';
    const twist = a.line('M45 22 L51 19.5 M45.8 16.5 L50.5 14 M46.7 11 L49.8 9', '#B87400', 1.4, ' opacity=".8"');
    const mane = a.spline([[50, 25], [58, 22], [66, 27], [70, 38], [76, 46, 1], [69, 45], [70, 55, 1], [64, 47], [62, 36], [56, 32]]);
    const lock = a.spline([[40, 26], [47, 23], [55, 27], [52, 34], [48, 31], [45, 39, 1], [43, 31], [39, 35, 1], [39, 29]]);
    return `${a.part(c, 'earl', a.spline(horse.EAR), 'white')}${a.part(c, 'earr', a.spline(a.flipX(horse.EAR)), 'white')}
      ${a.part(c, 'mane', mane, 'magenta')}
      <path d="${body}" fill="${c.radial('a', 'white', 0.36, 0.22)}"/>
      ${a.clip(c, 'cl', body, `<ellipse cx="48" cy="80" rx="18" ry="12.5" fill="${a.custom(c, 'm')}" opacity=".7"/>`)}
      ${a.part(c, 'lock', lock, 'purple')}
      ${a.part(c, 'horn', horn, 'gold', { cx: 0.3, cy: 0.3 })}${twist}
      ${a.eye(35, 47, { rx: 3.4, ry: 3, lid: 0.4, tilt: 0.8, side: -1, ink })}${a.eye(61, 47, { rx: 3.4, ry: 3, lid: 0.4, tilt: 0.8, side: 1, ink })}
      ${a.line('M30.5 44.5 L28.5 42.5 M32 43.3 L31 40.8 M65.5 44.5 L67.5 42.5 M64 43.3 L65 40.8', ink, 1.3)}
      <ellipse cx="41" cy="75" rx="2.4" ry="3.6" fill="#6E2238" transform="rotate(15 41 75)"/><ellipse cx="55" cy="75" rx="2.4" ry="3.6" fill="#6E2238" transform="rotate(-15 55 75)"/>`;
  },
};
