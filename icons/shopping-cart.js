const m = require('../src/parts/metal');
const body = 'M27 30 L84 30 L76 61 L35 61 Z';
module.exports = {
  id: 'shopping-cart',
  name: 'Shopping Cart',
  emoji: '🛒',
  group: 'Objects',
  subgroup: 'household',
  tags: ['shopping', 'cart', 'trolley', 'buy', 'groceries'],
  tone: 'silver',
  body,
  shine: [34, 36, -15],
  shineSize: [5, 1.6],
  draw(c) {
    c.def(`<clipPath id="${c.id('b')}"><path d="${body}"/></clipPath>`);
    let grid = '';
    for (let x = 34; x < 84; x += 8) grid += `M${x} 30 L${x - 3} 62 `;
    for (const y of [38.5, 47, 55]) grid += `M0 ${y} L96 ${y} `;
    const wheel = (x) => `<circle cx="${x}" cy="79" r="5" fill="${c.radial(`w${x}`, 'black', 0.3, 0.3)}" stroke="#05050A" stroke-opacity=".5" stroke-width="1.2"/><circle cx="${x}" cy="79" r="1.8" fill="#B8B8C7"/>`;
    return `<path d="${body}" fill="${c.radial('a', 'silver', 0.3, 0.2)}" opacity=".35"/>
      <g clip-path="url(#${c.id('b')})">${m.tube(c, grid, { width: 2.4, palette: 'silver', name: 'g', outline: false })}</g>
      ${m.tube(c, 'M10 18 L20 18 L33 61 L35 69 L78 69', { width: 4.2, palette: 'silver', name: 'f' })}
      ${m.tube(c, 'M27 30 L84 30 L76 61 L35 61', { width: 3.6, palette: 'silver', name: 'r' })}
      ${m.part(m.round([[8, 14.5], [17, 14.5], [17, 21.5], [8, 21.5]], 3.4), c.radial('h', 'red', 0.3, 0.3), 'red')}
      ${wheel(40)}${wheel(72)}`;
  },
};
