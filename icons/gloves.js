const g = require('../src/parts/garment');

const glove = 'M30 84 L30 67 Q22.5 60 18.5 52 L14 43 Q12 38 16 36.5 Q20 35 23 40 L28 48 L28 25 Q28 20 32 20 Q36 20 36 25 L36.6 41 L37 18 Q37 13 41 13 Q45 13 45 18 L45.4 41 L46 19 Q46 15 50 15 Q54 15 54 19 L54.2 42 L55 27 Q55 23 58.5 23 Q62 23 62 27 L62 57 Q62 63 58 67 L58 84 Z';

module.exports = {
  id: 'gloves',
  name: 'Gloves',
  emoji: '🧤',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['gloves', 'winter', 'cold', 'snow', 'hands'],
  tone: 'green',
  body: glove,
  shine: [32, 26, -85],
  shineSize: [4.5, 1.6],
  draw(c) {
    const wool = c.radial('a', 'green', 0.3, 0.2);
    const woolB = c.linear('b', 'green', [0, 0, 1, 1], 1, 3);
    const cuff = c.linear('cuff', 'green', [0, 0, 0, 1], 1, 2);
    const gr = c.ramp('green');
    return `<g transform="translate(96 -6) scale(-1 1)">
        <path d="${glove}" fill="${woolB}" stroke="${gr[3]}" stroke-opacity=".6" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M30 67 L58 67 L58 84 L30 84 Z" fill="${gr[2]}" stroke="${gr[3]}" stroke-opacity=".6" stroke-width="1"/>
      </g>
      <path d="${glove}" fill="${wool}"/>
      <path d="M30 67 Q44 69 58 67 L58 84 L30 84 Z" fill="${cuff}"/>
      ${g.fold('M34 69 L34 83 M38.7 69.5 L38.7 83.5 M43.4 69.8 L43.4 83.5 M48 69.8 L48 83.5 M52.7 69.5 L52.7 83.5', gr[3], 0.5, 1.3)}
      <path d="M30 67 Q44 69 58 67" fill="none" stroke="${gr[3]}" stroke-opacity=".55" stroke-width="1.3"/>
      ${g.fold('M23 40 Q27 50 30 56', gr[3], 0.4, 1.3)}
      <path d="M32 50 Q44 54 56 50 M33 58 Q45 61.5 57 58" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2.6"/>`;
  },
};
