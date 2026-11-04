const L = require('../src/parts/leaf');
// The fairy-tale toadstool: a red dome with white spots, a white stem and its frilled ring.
// The cap alone is the body so the red inner glow stays off the white stem.
const stemPath = 'M36.5 55 C37 66 35.5 75 33.5 80.5 C33 83 35.5 84.5 40 84.5 L56 84.5 C60.5 84.5 63 83 62.5 80.5 C60.5 75 59 66 59.5 55 Z';
const cap = 'M12 52 C12 30 28 15 48 15 C68 15 84 30 84 52 C84 57 80 59 74 58.5 C65 57.8 56 57.4 48 57.4 C40 57.4 31 57.8 22 58.5 C16 59 12 57 12 52 Z';
module.exports = {
  id: 'mushroom',
  name: 'Mushroom',
  emoji: '🍄',
  group: 'Animals & Nature',
  subgroup: 'plant-other',
  tags: ['mushroom', 'toadstool', 'fungi', 'fairy tale', 'forest'],
  tone: 'red',
  body: cap,
  shine: [25, 32, -45],
  draw(c) {
    const stem = c.linear('stem', 'white', [0, 0, 1, 0], 0, 2);
    const spot = (x, y, rx, ry, r = 0) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${r} ${x} ${y})"/>`;
    return `<path d="${stemPath}" fill="${stem}" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1.3"/>
      <path d="M35.5 66 C40 69 56 69 60.5 66 C61 70 59 72 56.5 72 C53 71 51 73 48 73 C45 73 43 71 39.5 72 C37 72 35 70 35.5 66 Z" fill="#F7F5FF" stroke="#8C83AD" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="${cap}" fill="${c.radial('a', 'red', 0.32, 0.22)}"/>
      <g fill="#FFF8F0">${spot(48, 26, 6, 4.2)}${spot(30, 34, 5, 3.6, -30)}${spot(66, 34, 5.2, 3.8, 30)}${spot(40, 46, 4.2, 3)}${spot(58, 46, 4.4, 3.1)}${spot(20, 49, 2.6, 2, -40)}${spot(77, 48, 2.8, 2, 40)}</g>
      <g fill="#8A0006" opacity=".25">${spot(49, 28.5, 5, 1.5)}${spot(67, 36.5, 4, 1.4, 30)}${spot(59, 48, 3.4, 1.1)}</g>`;
  },
};
