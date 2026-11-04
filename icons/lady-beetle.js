const k = require('../src/parts/critter');
// A ladybird from above: domed red wing cases with ink spots, a black head with two pale dots.
const body = 'M48 32 C66 32 80 45 80 61 C80 75 66 83 48 83 C30 83 16 75 16 61 C16 45 30 32 48 32 Z';
module.exports = {
  id: 'lady-beetle',
  name: 'Lady Beetle',
  emoji: '🐞',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['ladybug', 'ladybird', 'luck', 'insect', 'spots'],
  tone: 'red',
  body,
  shine: [30, 42, -40],
  draw(c) {
    const ink = '#1A0003';
    const legs = 'M20 50 L10 46 M17 64 L8 66 M22 76 L14 82 M76 50 L86 46 M79 64 L88 66 M74 76 L82 82';
    const spots = [[30, 50, 4.6], [27, 66, 4], [38, 75, 3.6], [66, 50, 4.6], [69, 66, 4], [58, 75, 3.6]];
    return `${k.legs(legs, ink, 3)}
      ${k.legs('M42 22 C38 16 34 14 30 14 M54 22 C58 16 62 14 66 14', ink, 2.2)}
      <path d="M32 36 C32 26 40 20 48 20 C56 20 64 26 64 36 Z" fill="${c.radial('head', 'black', 0.3, 0.3)}"/>
      ${k.glint(40, 25, 3, 1.3, -25, 0.6)}
      <circle cx="41" cy="30" r="2.6" fill="#fff"/><circle cx="55" cy="30" r="2.6" fill="#fff"/>
      <path d="${body}" fill="${c.radial('a', 'red', 0.35, 0.25)}"/>
      ${spots.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${ink}"/>`).join('')}
      ${k.legs('M48 33 L48 83', ink, 2)}`;
  },
};
