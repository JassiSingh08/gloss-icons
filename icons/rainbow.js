const sky = require('../src/parts/sky');

// Six bands round one centre, the arch ending in a small cloud at each foot.
const [CX, CY, RO, RI] = [48, 70, 37, 17];
const body = `M${CX - RO} ${CY} A${RO} ${RO} 0 0 1 ${CX + RO} ${CY} L${CX + RI} ${CY} A${RI} ${RI} 0 0 0 ${CX - RI} ${CY} Z`;
const BANDS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const LEFT = sky.layout(sky.PUFFS, 22, 72, 0.34);
const RIGHT = sky.layout(sky.PUFFS, 74, 72, 0.34);
module.exports = {
  id: 'rainbow',
  name: 'Rainbow',
  emoji: '🌈',
  group: 'Travel & Places',
  subgroup: 'sky & weather',
  tags: ['rainbow', 'pride', 'hope', 'colourful', 'weather'],
  tone: 'purple',
  body,
  shine: [22, 44, -55],
  shineSize: [6, 2.4],
  draw(c) {
    const w = (RO - RI) / BANDS.length;
    const bands = BANDS.map((p, i) => {
      const ro = RO - i * w, ri = ro - w;
      const fill = p === 'orange' ? '#FF8C00' : c.ramp(p)[1];
      return `<path d="M${CX - ro} ${CY} A${ro} ${ro} 0 0 1 ${CX + ro} ${CY} L${CX + ri} ${CY} A${ri} ${ri} 0 0 0 ${CX - ri} ${CY} Z" fill="${fill}"/>`;
    }).join('');
    c.def(`<radialGradient id="${c.id('lit')}" gradientUnits="userSpaceOnUse" cx="30" cy="34" r="56"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></radialGradient>`);
    return `${bands}<path d="${body}" fill="url(#${c.id('lit')})"/>
      ${sky.paintCloud(c, LEFT, { name: 'l', edge: true })}${sky.paintCloud(c, RIGHT, { name: 'r', edge: true })}`;
  },
};
