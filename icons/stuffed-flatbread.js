// A pita folded into a cone and stood up in a paper sleeve, the filling heaped out of the top:
// upright, so it never reads as the taco lying on its side.
const body = 'M16 33 C32 43 64 47 82 39 C79 58 66 77 52 83.5 C46 86 41 84.5 37 79 C27 66 18 50 16 33 Z';
module.exports = {
  id: 'stuffed-flatbread',
  name: 'Stuffed Flatbread',
  emoji: '🥙',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['pita', 'gyro', 'kebab', 'wrap', 'shawarma'],
  tone: 'amber',
  body,
  shine: [23, 44, -62],
  shineSize: [6, 2.6],
  draw(c) {
    c.def(`<radialGradient id="${c.id('pita')}" cx="0.3" cy="0.2" r="0.95"><stop offset="0" stop-color="#FFF0C8"/><stop offset="0.35" stop-color="#EBC07A"/><stop offset="0.75" stop-color="#B07A34"/><stop offset="1" stop-color="#4E3008"/></radialGradient>`);
    const back = c.linear('back', 'sand', [0, 0, 0, 1], 1, 2);
    const lettuce = c.radial('lettuce', 'lime', 0.4, 0.3);
    const meat = c.radial('meat', 'brown', 0.35, 0.3);
    const tomato = c.radial('tomato', 'red', 0.35, 0.3);
    const paper = c.linear('paper', 'white', [0, 0, 1, 0], 0, 2);
    const spot = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.6}" fill="#9A5A18" opacity=".55"/>`;
    return `<path d="M20 34 C21 22 32 15 48 14 C66 14 79 24 81 40 Z" fill="${back}" stroke="#5C4420" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M19 35 C15 28 22 22 28 25 C28 17 38 15 41 21 C44 13 55 13 57 20 C61 14 72 17 71 24 C77 22 84 30 80 39 Z" fill="${lettuce}" stroke="#203D00" stroke-opacity=".5" stroke-width="1.1"/>
      <path d="M26 36 C26 30 33 27 37 30 C39 25 48 25 50 30 C53 26 62 27 63 32 C67 30 74 33 73 40 Z" fill="${meat}" stroke="#331805" stroke-opacity=".5" stroke-width="1"/>
      <circle cx="34" cy="27" r="4.4" fill="${tomato}" stroke="#3D0003" stroke-opacity=".45" stroke-width="1"/>
      <circle cx="62" cy="26" r="4" fill="${tomato}" stroke="#3D0003" stroke-opacity=".45" stroke-width="1"/>
      <path d="M29 35 C35 32 40 37 46 34 C52 31 57 37 66 35" stroke="#FFFDF5" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      <path d="${body}" fill="url(#${c.id('pita')})"/>
      <path d="M16 33 C32 43 64 47 82 39" stroke="#FFF4D6" stroke-opacity=".85" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M50 46 C46 56 44 66 45 76" stroke="#8A5A1E" stroke-opacity=".35" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${spot(30, 47, 2.6)}${spot(64, 50, 2.2)}${spot(38, 56, 1.6)}${spot(58, 60, 1.8)}
      <path d="M27.5 63 L74 54 C70 66 62 78 52 83.5 C46 86 41 84.5 37 79 C33 74 30 69 27.5 63 Z" fill="${paper}"/>
      <path d="M27.5 63 L74 54" stroke="#8C83AD" stroke-opacity=".6" stroke-width="1.1"/>
      <path d="M31 69 L71.5 61.5" stroke="#E3120B" stroke-width="2.2" stroke-linecap="round"/>`;
  },
};
