// Four pancakes on a plate with a pat of butter and syrup running down the side.
const d = require('../src/parts/dish');
const RX = 31;
const TOPS = [66, 57, 48, 39];
const body = `M${48 - RX} ${TOPS[3]} ${d.topHalf(48, TOPS[3], RX, 8)} L${48 + RX} ${TOPS[0] + 7} ${d.nearHalf(48, TOPS[0] + 7, RX, 8).replace(/^M[\d.]+ [\d.]+ /, '').replace(/C/g, 'C')} Z`;
module.exports = {
  id: 'pancakes',
  name: 'Pancakes',
  emoji: '🥞',
  group: 'Food & Drink',
  subgroup: 'food-prepared',
  tags: ['pancakes', 'breakfast', 'brunch', 'syrup', 'stack'],
  tone: 'amber',
  body: `M17 ${TOPS[3]} ${d.topHalf(48, TOPS[3], RX, 8)} L79 ${TOPS[0] + 7} C79 ${TOPS[0] + 11.4} 65.1 ${TOPS[0] + 15} 48 ${TOPS[0] + 15} C30.9 ${TOPS[0] + 15} 17 ${TOPS[0] + 11.4} 17 ${TOPS[0] + 7} Z`,
  shine: [22, 50, -80],
  shineSize: [5, 2.4],
  draw(c) {
    const plate = c.radial('plate', 'white', 0.4, 0.2);
    const edge = c.linear('edge', 'amber', [0, 0, 1, 0], 1, 2);
    const top = c.radial('top', 'amber', 0.35, 0.2);
    c.def(`<linearGradient id="${c.id('syrup')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E07A1E"/><stop offset="1" stop-color="#6E2400"/></linearGradient>`);
    const butter = c.linear('butter', 'yellow', [0, 0, 1, 1], 0, 1);
    const cake = (y) => `<path d="M17 ${y} L17 ${y + 7} C17 ${y + 11.4} 30.9 ${y + 15} 48 ${y + 15} C65.1 ${y + 15} 79 ${y + 11.4} 79 ${y + 7} L79 ${y} Z" fill="${edge}"/>
      <path d="M18 ${y + 9} C24 ${y + 13} 40 ${y + 14.6} 50 ${y + 14.4}" stroke="#FFE9A0" stroke-opacity=".5" stroke-width="1.2" fill="none" stroke-linecap="round"/>
      <path d="${d.ellipse(48, y, RX, 8)}" fill="#C26A10"/>`;
    return `<path d="${d.ellipse(48, 79, 38, 7)}" fill="${plate}" ${d.edge('#8C83AD', 1.2, 0.6)}/>
      <path d="${d.ellipse(48, 78.2, 29, 4.6)}" fill="#D8D2EE" opacity=".7"/>
      ${TOPS.map(cake).join('')}
      <path d="${d.ellipse(48, TOPS[3], RX, 8)}" fill="${top}"/>
      <path d="M27 38 C27 34 36 33 48 33 C60 33 69 34 69 38 C69 42 63 43 63 46 C63 52 58 54 57 50 C56 45 50 45 44 45.5 C40 46 41 55 37 55 C33 55 34 46 30 44 C27 43 27 41 27 38 Z" fill="url(#${c.id('syrup')})"/>
      <path d="M57 55 C57 59 59 62 61 60 C62 58 61 55 60 52 Z" fill="url(#${c.id('syrup')})"/>
      <path d="M32 36 C38 34.5 46 34.3 54 34.8" stroke="#FFC98C" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round" fill="none"/>
      <path d="M41 30 L51 28 L57 32 L57 36 L47 38 L41 34 Z" fill="${butter}" ${d.edge('#6B4A00', 1, 0.5)}/>
      <path d="M41 30 L51 28 L57 32 L47 34 Z" fill="#FFF7A8"/>`;
  },
};
