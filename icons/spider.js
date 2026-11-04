const k = require('../src/parts/critter');
// A black widow front on: glossy round abdomen with a red hourglass, eight arched legs planted wide.
const body = 'M48 24 C54 24 58 28 58 34 C58 37 57 39 55 40 C62 43 66 50 66 58 C66 68 58 76 48 76 C38 76 30 68 30 58 C30 50 34 43 41 40 C39 39 38 37 38 34 C38 28 42 24 48 24 Z';
const legsL = ['M41 34 C30 22 20 18 12 26 L8 34', 'M40 38 C28 32 16 34 10 46 L8 54', 'M40 42 C28 44 18 52 14 64 L12 72', 'M40 46 C30 54 24 66 22 78 L22 84'];
const mirror = (d) => d.replace(/(-?\d+\.?\d*) (-?\d+\.?\d*)/g, (m, x, y) => `${k.n(96 - x)} ${y}`);
module.exports = {
  id: 'spider',
  name: 'Spider',
  emoji: '🕷️',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['spider', 'creepy', 'halloween', 'web', 'eight legs'],
  tone: 'black',
  body,
  shine: [38, 50, -40],
  draw(c) {
    const legs = [...legsL, ...legsL.map(mirror)].join(' ');
    return `${k.legs(legs, '#05050A', 4.6)}${k.legs(legs, '#3A3A4E', 2.4)}
      <path d="${body}" fill="${c.radial('a', 'black', 0.35, 0.25)}"/>
      <path d="M43 56 L53 56 L48 62 L53 68 L43 68 L48 62 Z" fill="${c.radial('glass', 'red', 0.3, 0.2)}"/>
      ${k.glint(44, 28, 2.4, 1.2, -40, 0.6)}
      <circle cx="44.5" cy="34" r="1.8" fill="#FF7A62"/><circle cx="51.5" cy="34" r="1.8" fill="#FF7A62"/>
      ${k.legs('M45 40 L44 43 M51 40 L52 43', '#05050A', 2)}`;
  },
};
