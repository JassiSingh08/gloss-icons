const g = require('../src/parts/glass');
const body = g.cylinder(48, 46, 72, 30, 8.5);
module.exports = {
  id: 'birthday-cake',
  name: 'Birthday Cake',
  emoji: '🎂',
  group: 'Food & Drink',
  subgroup: 'food-sweet',
  tags: ['birthday', 'cake', 'candles', 'party', 'celebrate'],
  tone: 'pink',
  body,
  shine: [22, 62, -85],
  shineSize: [5, 2],
  draw(c) {
    const side = c.linear('a', 'pink', [0, 0, 1, 0], 0, 2);
    const icing = c.radial('icing', 'white', 0.35, 0.2);
    const plate = c.radial('plate', 'white', 0.4, 0.2);
    const wax = c.linear('wax', 'sky', [0, 0, 1, 0], 0, 2);
    const fire = c.radial('fire', 'flame', 0.5, 0.75);
    const candle = (x, y) => `<rect x="${x - 2.6}" y="${y - 20}" width="5.2" height="20" rx="1.4" fill="${wax}" ${g.edge('#0A3A6B', 1, 0.5)}/>
      <path d="M${x - 2.6} ${y - 14} L${x + 2.6} ${y - 17.5} M${x - 2.6} ${y - 7} L${x + 2.6} ${y - 10.5}" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>
      <path d="M${x} ${y - 20} L${x} ${y - 22.5}" stroke="#3A2A1A" stroke-width="1.1"/>
      <path d="M${x} ${y - 32} C${x + 3.5} ${y - 27} ${x + 4} ${y - 23} ${x} ${y - 21.5} C${x - 4} ${y - 23} ${x - 3.5} ${y - 27} ${x} ${y - 32} Z" fill="${fire}"/>`;
    return `<path d="${g.ellipse(48, 78, 38, 6.5)}" fill="${plate}" ${g.edge('#8C83AD', 1.2, 0.6)}/>
      <path d="${body}" fill="${side}"/>
      <path d="M18 60 C18 64.7 31.4 68.5 48 68.5 C64.6 68.5 78 64.7 78 60" fill="none" stroke="#FFD0DC" stroke-opacity=".9" stroke-width="2.6"/>
      <path d="${g.drips(48, 46, 30, 8.5, [5, 9, 3, 11, 6, 0, 10, 4, 8], 2.4)}" fill="${icing}"/>
      <path d="${g.nearHalf(48, 72, 30, 8.5)}" fill="none" stroke="#fff" stroke-width="3.6" stroke-dasharray="0.1 5" stroke-linecap="round"/>
      ${candle(36, 47)}${candle(60, 47)}${candle(48, 43)}`;
  },
};
