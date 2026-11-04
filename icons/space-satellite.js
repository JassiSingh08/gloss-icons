const v = require('../src/parts/vehicle');
const DEG = -25;
const AT = [48, 48];
const box = 'M-10 -10 L10 -10 L10 10 L-10 10 Z';
module.exports = {
  id: 'space-satellite',
  name: 'Satellite',
  emoji: '🛰️',
  group: 'Travel & Places',
  subgroup: 'transport-air',
  tags: ['space', 'orbit', 'gps', 'signal', 'science'],
  tone: 'gold',
  body: v.place(box, DEG, AT),
  shine: (() => { const [x, y] = v.point(-5, -6, DEG, AT); return [x, y, DEG]; })(),
  shineSize: [4, 1.6],
  draw(c) {
    const foil = c.linear('a', 'gold', [0, 0, 1, 1], 0, 3);
    const cell = c.linear('cell', 'navy', [0, 0, 1, 1], 0, 2);
    const dish = c.radial('dish', 'silver', 0.4, 0.35);
    const arm = c.linear('arm', 'silver', [0, 0, 0, 1], 0, 3);
    const panel = (x0) => {
      const grid = [1, 2, 3].map((i) => `M${x0 + i * 7.5} -9 L${x0 + i * 7.5} 9`).join(' ') + ` M${x0} 0 L${x0 + 30} 0`;
      return `<path d="${v.rr(x0, -9, 30, 18, 1.5)}" fill="${cell}" stroke="#080C3D" stroke-opacity=".7" stroke-width="1.2"/>
        <path d="${grid}" stroke="#9AA8FF" stroke-opacity=".7" stroke-width="1"/>
        <path d="M${x0 + 2} -7 L${x0 + 10} -7" stroke="#fff" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/>`;
    };
    return `<g transform="translate(${AT[0]} ${AT[1]}) rotate(${DEG})">
        <path d="M-44 0 L44 0" stroke="#3A3E52" stroke-width="4.4"/><path d="M-44 0 L44 0" stroke="${arm}" stroke-width="2.6"/>
        ${panel(-46)}${panel(16)}
        <path d="M0 10 L0 17" stroke="#3A3E52" stroke-width="3"/>
        <path d="M-10 22 Q0 13 10 22 Q0 26 -10 22 Z" fill="${dish}" stroke="#3A3E52" stroke-opacity=".6" stroke-width="1.2"/>
        <path d="M0 -10 L0 -18" stroke="#3A3E52" stroke-width="1.8" stroke-linecap="round"/><circle cx="0" cy="-19" r="2" fill="#E3120B"/>
        <path d="${box}" fill="${foil}"/>
        <path d="M-10 -3 L10 -3 M-10 4 L10 4 M-3 -10 L-3 10 M4 -10 L4 10" stroke="#C98500" stroke-opacity=".55" stroke-width="1"/>
      </g>`;
  },
};
