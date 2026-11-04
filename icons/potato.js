const L = require('../src/parts/leaf');
// Lumpy and earthy, with a few shallow eyes.
const body = 'M21 45 C25 33 38 28 52 29.5 C60 30.5 66 30 72 34 C79 39 83 47 81 56 C79 66 76 73 66 77 C55 81.5 44 82.5 33 79 C23 76 16 69 16 60 C16 54 18 50 21 45 Z';
module.exports = {
  id: 'potato',
  name: 'Potato',
  emoji: '🥔',
  group: 'Food & Drink',
  subgroup: 'food-vegetable',
  tags: ['potato', 'spud', 'vegetable', 'fries', 'mash'],
  tone: 'brown',
  body,
  shine: [27, 41, -35],
  draw(c) {
    c.def(`<radialGradient id="${c.id('a')}" cx="0.3" cy="0.25" r="0.95"><stop offset="0" stop-color="#FDEBC0"/><stop offset="0.35" stop-color="#DDAA62"/><stop offset="0.75" stop-color="#9C6A2E"/><stop offset="1" stop-color="#4A2C0E"/></radialGradient>`);
    const eye = (x, y, r) => `<path d="M${x - 2.4} ${y} Q${x} ${y + 1.8} ${x + 2.4} ${y}" stroke="#5C3A12" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round" fill="none" transform="rotate(${r} ${x} ${y})"/><path d="M${x - 2} ${y + 1.6} Q${x} ${y + 2.8} ${x + 2} ${y + 1.6}" stroke="#FDEBC0" stroke-opacity=".5" stroke-width="1" stroke-linecap="round" fill="none" transform="rotate(${r} ${x} ${y})"/>`;
    const specks = [[38, 44], [58, 40], [70, 52], [30, 62], [50, 70], [62, 66], [44, 56]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9"/>`).join('');
    return `<path d="${body}" fill="url(#${c.id('a')})"/>
      <g fill="#6E4A1E" opacity=".4">${specks}</g>
      ${eye(46, 41, -10)}${eye(66, 47, 20)}${eye(36, 66, -5)}${eye(58, 72, 10)}`;
  },
};
