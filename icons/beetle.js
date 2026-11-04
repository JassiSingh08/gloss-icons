const k = require('../src/parts/critter');
// A jewel beetle from above: iridescent wing cases split down the middle, a horn and six legs.
const body = 'M48 26 C56 26 62 30 62 36 C66 40 70 50 70 62 C70 75 60 84 48 84 C36 84 26 75 26 62 C26 50 30 40 34 36 C34 30 40 26 48 26 Z';
module.exports = {
  id: 'beetle',
  name: 'Beetle',
  emoji: '🪲',
  group: 'Animals & Nature',
  subgroup: 'animal-bug',
  tags: ['beetle', 'insect', 'bug', 'shiny', 'scarab'],
  tone: 'teal',
  body,
  shine: [36, 46, -60],
  draw(c) {
    c.def(`<radialGradient id="${c.id('jewel')}" cx="0.32" cy="0.3" r="0.95"><stop offset="0" stop-color="#9BF5E6"/><stop offset="0.35" stop-color="#14C2A3"/><stop offset="0.72" stop-color="#3D4FD6"/><stop offset="1" stop-color="#1A0040"/></radialGradient>`);
    const ink = '#06122A';
    const legs = 'M34 44 L24 38 L18 28 M30 58 L18 60 L12 68 M32 70 L22 78 L20 86 M62 44 L72 38 L78 28 M66 58 L78 60 L84 68 M64 70 L74 78 L76 86';
    return `${k.legs(legs, '#1A238A', 3)}
      ${k.legs('M44 22 C40 16 36 14 32 14 M52 22 C56 16 60 14 64 14', '#1A238A', 2.2)}
      <path d="M40 28 C40 20 44 17 48 17 C52 17 56 20 56 28 Z" fill="${c.radial('head', 'black', 0.3, 0.3)}"/>
      ${k.legs('M48 18 L48 8', ink, 3.4)}
      <path d="${body}" fill="url(#${c.id('jewel')})"/>
      ${k.line('M34 37 C40 40 56 40 62 37 M48 40 L48 84', ink, 1.8, 0.65)}
      ${k.line('M40 50 L40 70 M56 50 L56 70', '#9BF5E6', 1.2, 0.35)}`;
  },
};
