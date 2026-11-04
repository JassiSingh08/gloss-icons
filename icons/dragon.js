const k = require('../src/parts/critter');
// A western dragon sitting in profile facing left: bat wing raised, spiked neck, gold belly, tail curled in front.
const body = 'M10 32 C10 26 15 22 22 21 C28 16 38 15 43 21 C47 26 48 33 52 39 C58 44 68 48 74 56 C80 64 80 74 76 79 C81 81 86 79 89 75 C91 81 86 85 78 85 L34 85 C30 85 29 82 31 79 C34 73 37 66 37 58 C37 50 33 45 28 42 C22 41 15 40 12 37 C10 36 10 34 10 32 Z';
module.exports = {
  id: 'dragon',
  name: 'Dragon',
  emoji: '🐉',
  group: 'Animals & Nature',
  subgroup: 'animal-reptile',
  tags: ['dragon', 'myth', 'fantasy', 'fire', 'beast'],
  tone: 'teal',
  body,
  shine: [22, 25, -25],
  shineSize: [5.5, 2.4],
  draw(c) {
    const wing = c.radial('wing', 'teal', 0.3, 0.3);
    const horn = c.radial('horn', 'cream', 0.3, 0.2);
    const ink = '#003A33';
    const spikes = [[45, 25], [50, 33], [56, 40], [64, 46], [71, 52]].map(([x, y]) => `M${x - 2.5} ${y + 2.5} L${x + 3} ${y - 4} L${x + 3.5} ${y + 3.5} Z`).join(' ');
    return `${k.part(c, 'M56 46 L66 12 C68 19 73 22 80 20 C79 26 82 30 89 31 C86 36 86 41 91 45 C80 46 70 50 62 55 Z', wing, 'teal')}
      ${k.line('M60 50 L66 12 M62 51 L80 20 M64 52 L89 31', ink, 1.5, 0.55)}
      <path d="${spikes}" fill="#00796B" stroke="${ink}" stroke-opacity=".5" stroke-width="1"/>
      ${k.part(c, 'M35 18 C39 12 45 8 52 7 C48 11 45 15 42 21 Z', horn, 'cream')}
      <path d="${body}" fill="${c.radial('a', 'teal', 0.3, 0.3)}"/>
      <path d="M28 42 C33 45 37 50 37 58 C37 66 34 73 31 79 C29 82 30 85 34 85 L46 85 C44 76 46 64 44 54 C42 47 36 43 28 42 Z" fill="${c.radial('belly', 'gold', 0.3, 0.2)}"/>
      ${k.line('M33 50 L42 48 M36 58 L44 57 M35 66 L45 66 M33 74 L45 75', '#5E3A00', 1.2, 0.5)}
      ${k.legs('M48 66 C46 72 42 76 37 76 M37 76 L34 74 M37 76 L34 78.5', ink, 3)}
      ${k.legs('M11 34 L28 35', ink, 1.8)}
      <circle cx="14.5" cy="28" r="1.2" fill="${ink}"/>
      ${k.irisEye(31, 26, 3.2, '#FFD82E', ink, 0.45)}
      ${k.legs('M26 22.5 L36 24.5', ink, 2.4)}`;
  },
};
