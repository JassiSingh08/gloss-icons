const g = require('../src/parts/garment');

const front = 'M30 40 L66 40 L76 44 L76 81 Q76 84 73 84 L33 84 Q30 84 30 81 Z';
const back = 'M14 31 L48 31 L48 77 Q48 80 45 80 L17 80 Q14 80 14 77 Z';

module.exports = {
  id: 'shopping-bags',
  name: 'Shopping Bags',
  emoji: '🛍️',
  group: 'Objects',
  subgroup: 'clothing',
  tags: ['shopping', 'bags', 'sale', 'retail therapy', 'gift'],
  tone: 'teal',
  body: front,
  shine: [35, 48, -60],
  shineSize: [5, 2],
  draw(c) {
    const a = c.linear('a', 'teal', [0, 0, 1, 1], 0, 2);
    const side = c.linear('side', 'teal', [0, 0, 1, 0], 2, 3);
    const b = c.linear('b', 'pink', [0, 0, 1, 1], 0, 2);
    const t = c.ramp('teal');
    const p = c.ramp('pink');
    return g.tube(c, 'M21 32 Q21 16 31 16 Q41 16 41 32', { width: 2.4, palette: 'gold', name: 'hb', box: [21, 16, 41, 32] })
      + `<path d="${back}" fill="${b}" stroke="${p[3]}" stroke-opacity=".6" stroke-width="1.2"/>
      <path d="M14 31 L48 31 L48 36 L14 36 Z" fill="${p[2]}" opacity=".5"/>
      <circle cx="21" cy="33.5" r="1.3" fill="${p[3]}"/><circle cx="41" cy="33.5" r="1.3" fill="${p[3]}"/>
      <path d="M17 36 L24 70" stroke="#fff" stroke-opacity=".35" stroke-width="2.4" stroke-linecap="round"/>`
      + g.tube(c, 'M38 42 Q38 24 48 24 Q58 24 58 42', { width: 2.6, palette: 'white', name: 'hf', box: [38, 24, 58, 42] })
      + `<path d="${front}" fill="${a}"/>
      <path d="M66 40 L76 44 L76 81 Q76 84 73 84 L66 84 Z" fill="${side}"/>
      <path d="M66 40 L66 84" stroke="${t[3]}" stroke-opacity=".5" stroke-width="1.2"/>
      <path d="M30 40 L66 40 L66 45 L30 45 Z" fill="${t[2]}" opacity=".45"/>
      <circle cx="38" cy="43" r="1.4" fill="${t[3]}"/><circle cx="58" cy="43" r="1.4" fill="${t[3]}"/>
      <path d="M48 56 L50 61 L55.5 61.5 L51.3 65 L52.7 70.5 L48 67.5 L43.3 70.5 L44.7 65 L40.5 61.5 L46 61 Z" fill="#fff" opacity=".85"/>`;
  },
};
